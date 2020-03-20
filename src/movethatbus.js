/**
 * moveThatBus.js
 *
 * Use moveThatBus.settings to replace the default settings
 */
const moveThatBus = {
    settings: {
        busSrc: '../src/img/bus.png' // TODO: make sure path is correct
    },
    speed: 150,
    bus: new Image(),
    _rando(min = 1, max = 10) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
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
        const time = new Date();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.translate((canvas.width / 2), (canvas.height / 2));
        ctx.rotate(this._rando(-2,2) * 0.0001 * time.getMilliseconds());
        ctx.translate(-(canvas.width / 2), -(canvas.height / 2));
        ctx.drawImage(this.bus, this._rando(0,10), this._rando(0,10), canvas.width, canvas.height);
        ctx.restore();

        // window.requestAnimationFrame(() => this.draw(canvas));
    },
    init() {
        console.info('initThatBus');
        this.bus.src = this.settings.busSrc;
        const canvas = this.createCanvas();
        document.body.appendChild(canvas);

        // Draw bus
        this.bus.onload = () => {
            // window.requestAnimationFrame(() => this.draw(canvas));
            setInterval(() => this.draw(canvas), this.speed);
        }
    }
}

moveThatBus.init();

// export default moveThatBus;
