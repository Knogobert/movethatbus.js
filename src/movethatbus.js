/**
 * moveThatBus.js
 *
 * Use moveThatBus.settings to replace the default settings
 */
const moveThatBus = {
    settings: {
        busSrc: '../src/img/bus.png' // TODO: make sure path is correct
    },
    bus: new Image(),
    createCanvas() {
        const canvas = document.createElement('canvas');

        // Bus image width
        canvas.width = 1024;
        canvas.height = 768;

        // Base styling
        canvas.id = "movethatbus";
        canvas.style.height = "100vh";
        canvas.style.objectFit = 'cover';
        canvas.style.position = "fixed";
        canvas.style.top = "50%";
        canvas.style.left = "50%";
        canvas.style.transform = 'translate(-50%, -50%)';
        canvas.style.overflow = 'hidden';
        canvas.style.background = "rgba(200,55,77,.2)"; // !refactor

        return canvas;
    },
    draw(canvas) {
        const ctx = canvas.getContext('2d');
        ctx.drawImage(this.bus, 0, 0, canvas.width, canvas.height);

        // window.requestAnimationFrame(this.draw(canvas));
    },
    init() {
        console.info('initThatBus');
        this.bus.src = this.settings.busSrc;
        const canvas = this.createCanvas();
        document.body.appendChild(canvas);

        // Draw bus
        this.bus.onload = () => {
            this.draw(canvas);
            // window.requestAnimationFrame(this.draw(canvas));
        }
    }
}

moveThatBus.init();

// export default moveThatBus;
