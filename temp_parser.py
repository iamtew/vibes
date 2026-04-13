import re
from pathlib import Path
text = Path('README.md').read_text(encoding='utf-8')
lines = text.split('\n')
html = []
listType = None
paragraph = []

def flushParagraph():
    global paragraph
    if not paragraph:
        return
    html.append('<p>' + ' '.join(paragraph) + '</p>')
    paragraph = []

def flushList():
    global listType
    if not listType:
        return
    html.append('</ol>' if listType == 'ol' else '</ul>')
    listType = None

def escapeHtml(text):
    return text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')

def formatInline(text):
    text = escapeHtml(text)
    text = re.sub(r'`([^`]+)`', r'<code>\1</code>', text)
    text = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'\*([^*]+)\*', r'<em>\1</em>', text)
    text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2" target="_blank" rel="noopener noreferrer">\1</a>', text)
    return text

for line in lines:
    trimmed = line.strip()
    if not trimmed:
        flushParagraph()
        flushList()
        continue
    headingMatch = re.match(r'^(#{1,6})\s+(.*)$', trimmed)
    unorderedMatch = re.match(r'^[-*+]\s+(.*)$', trimmed)
    orderedMatch = re.match(r'^\d+[.)]\s+(.*)$', trimmed)
    if headingMatch:
        flushParagraph()
        flushList()
        level = len(headingMatch.group(1))
        html.append(f'<h{level}>' + formatInline(headingMatch.group(2)) + f'</h{level}>')
        continue
    if unorderedMatch or orderedMatch:
        flushParagraph()
        targetType = 'ol' if orderedMatch else 'ul'
        if listType != targetType:
            flushList()
            html.append('<ol>' if targetType == 'ol' else '<ul>')
            listType = targetType
        html.append('<li>' + formatInline((orderedMatch or unorderedMatch).group(1)) + '</li>')
        continue
    paragraph.append(formatInline(trimmed))

flushParagraph()
flushList()
print('\n'.join(html[:80]))
