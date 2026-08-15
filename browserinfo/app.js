async function updateInfo() {
    const ua = navigator.userAgent;
    const platform = navigator.platform;
    const vendor = navigator.vendor || "N/A";

    const w = window.innerWidth;
    const h = window.innerHeight;

    const obs = await detectOBS();
    const isOBS = await insideOBS();

    document.getElementById("ua").innerText = ua;
    document.getElementById("platform").innerText = platform;
    document.getElementById("vendor").innerText = vendor;
    document.getElementById("res").innerText = `${w} × ${h}`;
    document.getElementById("obs").innerText = isOBS ? "Likely YES" : "Likely NO";
    document.getElementById("obsDetails").innerText = `${obs.score} / 8`;

    const panel = document.getElementById("heuristicsPanel");
    panel.innerHTML = "";

    obs.labels.forEach((label, i) => {
        const row = document.createElement("div");
        row.className = "heuristicRow";

        const lbl = document.createElement("div");
        lbl.className = "heuristicLabel";
        lbl.innerText = label;

        const status = document.createElement("div");
        status.className = "heuristicStatus " + (obs.signals[i] ? "pass" : "fail");
        status.innerText = obs.signals[i] ? "✔" : "✘";

        row.appendChild(lbl);
        row.appendChild(status);
        panel.appendChild(row);
    });

    const scriptPath = new URL("detectOBS.js", window.location.href).toString();
    document.getElementById("scriptIncludePath").innerText = `<script src="${scriptPath}"></script>`;
}

document.addEventListener("DOMContentLoaded", async () => {
    const scoreEl = document.getElementById("obsDetails");
    const panel = document.getElementById("heuristicsPanel");

    scoreEl.addEventListener("click", () => {
        panel.style.display = panel.style.display === "none" ? "block" : "none";
    });

    await updateInfo();
});

window.addEventListener("resize", () => {
    updateInfo();
});
