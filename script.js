function formatText(command) {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    if (command === 'bold') {
        span.style.fontWeight = 'bold';
    } else if (command === 'italic') {
        span.style.fontStyle = 'italic';
    } else if (command === 'underline') {
        span.style.textDecoration = 'underline';
    }
    range.surroundContents(span);
    toggleButtonState(command);
}

function changeColor(color) {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.color = color;
    range.surroundContents(span);
}

function changeFont(font) {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.fontFamily = font;
    range.surroundContents(span);
}

function changeFontSize(size) {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.fontSize = size;
    range.surroundContents(span);
}

function justifyText(alignment) {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    const div = document.createElement('div');
    div.style.textAlign = alignment;
    range.surroundContents(div);
}

function toggleButtonState(command) {
    const buttons = document.querySelectorAll('.toolbar button');
    buttons.forEach(button => {
        if (button.getAttribute('onclick').includes(command)) {
            button.classList.toggle('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}