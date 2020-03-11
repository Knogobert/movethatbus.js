function createCanvas() {
    const canvas = document.createElement('canvas');
    canvas.id = "movethatbus";
    canvas.style.width = "100vh";
    canvas.style.height = "100vh";
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.background = "rgba(200,55,77,.2)"; // !refactor
    return canvas;
}

function initThatBus() {
    console.info('initThatBus');
    document.body.appendChild(createCanvas());
}

initThatBus();