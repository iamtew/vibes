/**
 * Reusable OBS detection helpers.
 *
 * Include this file on any page that needs to know whether it is running inside
 * OBS (for example, a browser source, overlay, or dashboard project).
 *
 * Example include:
 *   <script src="https://iamtew.github.io/vibes/browserinfo/detectOBS.js"></script>
 *
 * Example usage:
 *   const isOBS = await insideOBS();
 *   console.log("Running in OBS:", isOBS);
 *
 *   const result = await detectOBS();
 *   console.log(result.score, result.signals, result.labels);
 *
 * Notes:
 * - insideOBS() returns a boolean: true = likely running inside OBS, false = likely not.
 * - detectOBS() returns a richer object with score, signal booleans, and labels.
 * - These helpers are attached to window so they can be called directly from scripts.
 */
(function (global) {
    // The detector intentionally keeps the logic in one place so it can be reused
    // across multiple projects without depending on the browserinfo page UI.
    async function detectOBS() {
        const ua = navigator.userAgent.toLowerCase();

        // 1. UA check: OBS tends to include an OBS marker in the user agent string.
        const uaOBS = ua.includes("obs");

        // 2. Plugin check: a stripped-down OBS browser usually exposes no plugins.
        const noPlugins = navigator.plugins.length === 0;

        // 3. Touch support: OBS browser sources generally do not advertise touch input.
        const noTouch = !("ontouchstart" in window);

        // 4. WebGL renderer check: software/ANGLE/SwiftShader is often a red flag.
        let webglRenderer = "";
        let rendererLooksOBS = false;
        try {
            const canvas = document.createElement("canvas");
            const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
            if (gl) {
                const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
                if (debugInfo) {
                    webglRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase();
                    rendererLooksOBS =
                        webglRenderer.includes("swiftshader") ||
                        webglRenderer.includes("angle") ||
                        webglRenderer.includes("software");
                }
            }
        } catch (e) {}

        // 5. AudioContext latency check: OBS can show extremely low base latency.
        let audioLatency = null;
        let audioLooksOBS = false;
        try {
            const ctx = new AudioContext();
            audioLatency = ctx.baseLatency || null;
            audioLooksOBS = audioLatency !== null && audioLatency < 0.01;
        } catch (e) {}

        // 6. Storage availability: if storage is blocked, it can be a sign of an OBS sandbox.
        let storageWorks = true;
        try {
            localStorage.setItem("obs_test", "1");
            localStorage.removeItem("obs_test");
        } catch (e) {
            storageWorks = false;
        }

        // 7. Clipboard permissions: restricted permissions also match a locked-down OBS runtime.
        let clipboardAllowed = true;
        try {
            const perm = await navigator.permissions.query({ name: "clipboard-read" });
            clipboardAllowed = perm.state !== "denied";
        } catch (e) {
            clipboardAllowed = false;
        }

        // 8. Device enumeration: OBS browser sources commonly expose no usable media devices.
        let deviceCount = 0;
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            deviceCount = devices.length;
        } catch (e) {
            deviceCount = 0;
        }

        const signals = [
            uaOBS,
            noPlugins,
            noTouch,
            rendererLooksOBS,
            audioLooksOBS,
            !storageWorks,
            !clipboardAllowed,
            deviceCount === 0
        ];

        const labels = [
            "User-Agent contains 'OBS'",
            "No browser plugins detected",
            "No touch support",
            "WebGL renderer looks like OBS",
            "Audio latency extremely low",
            "LocalStorage unavailable",
            "Clipboard permissions denied",
            "No media devices detected"
        ];

        // Keep the count of positive matches; this is the same threshold used by the UI.
        const score = signals.filter(Boolean).length;

        return { score, signals, labels };
    }

    // Boolean helper for external callers that only need a simple yes/no answer.
    async function insideOBS() {
        const result = await detectOBS();
        return result.score >= 3;
    }

    // Expose the functions globally so other pages can include this file and call them directly.
    global.detectOBS = detectOBS;
    global.insideOBS = insideOBS;
})(window);
