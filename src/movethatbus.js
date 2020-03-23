/**
 * moveThatBus.js
 *
 * Use moveThatBus.settings to replace the default settings
 */
const moveThatBus = {
  settings: {
    busSrc: "../src/img/bus.png", // TODO: make sure path is correct
    sounds: ["../src/sound/likeabus.mp3", "../src/sound/sound.mp3"]
  },
  speed: 100,
  state: "unmoved",
  sizeFactor: 1,
  moveFactor: 1,
  bus: new Image(),
  _rando(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  createCanvas() {
    const canvas = document.createElement("canvas");

    // Bus image width
    canvas.width = 1024;
    canvas.height = 768;

    // Base styling
    canvas.id = "movethatbus";
    canvas.style.height = "100vh";
    canvas.style.objectFit = "cover";
    canvas.style.position = "fixed";
    canvas.style.top = "50%";
    canvas.style.left = "50%";
    canvas.style.transform = "translate(-50%, -50%)";
    canvas.style.overflow = "hidden";

    return canvas;
  },
  draw(canvas) {
    const ctx = canvas.getContext("2d");
    const time = new Date();
    this.sizeFactor = this.state === "moving" ? this.sizeFactor * 1.1 : this.sizeFactor;
    this.moveFactor = this.state === "moving" ? this.moveFactor * 1.12 : this.moveFactor;

    ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(this._rando(-2, 2) * 0.00001 * time.getMilliseconds());
    ctx.translate(-(canvas.width / 2), -(canvas.height / 2));
    ctx.drawImage(
      this.bus,
      this._rando(0, 2) - this.moveFactor,
      this._rando(0, 2),
      canvas.width + this.sizeFactor,
      canvas.height + this.sizeFactor
    );
    ctx.restore();

    // window.requestAnimationFrame(() => this.draw(canvas));
  },
  init() {
    console.info("initThatBus");
    let clickCount = 0;
    this.bus.src = this.settings.busSrc;
    const canvas = this.createCanvas();
    document.body.appendChild(canvas);
    canvas.addEventListener(
      "click",
      () => {
        if (clickCount === 0) this.settings.sounds.forEach(sound => new Audio(sound).play());
        clickCount++;
        this.state = "moving";
        setTimeout(() => {
          canvas.remove();
          clearInterval(this.drawInterval);
        }, 7000);
      },
      false
    );

    // Draw bus
    this.bus.onload = () => {
      // window.requestAnimationFrame(() => this.draw(canvas));
      this.drawInterval = setInterval(() => this.draw(canvas), this.speed);
    };
  },
  destroyCanvas() {}
};

moveThatBus.init();

// export default moveThatBus;
