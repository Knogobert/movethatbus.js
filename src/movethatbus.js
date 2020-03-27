/**
 * moveThatBus.js
 *
 * Use moveThatBus.settings to replace the default settings
 */
const moveThatBus = {
  settings: {
    cdnUrl: 'https://raw.githubusercontent.com/knogobert/movethatbus.js/master/',
    busSrc: "lib/img/bus.png",
    soundSrcs: ["lib/sound/likeabus.mp3", "lib/sound/movethatbus.mp3", "lib/sound/engine.m4a"],
    amountOfTimesToLetBusLoad: 1, // compares to clickedCookie
    clickedCookie: 'howManyTimesDidYouMoveThatBus',
    visitorsCookie: false, // set to false to prank every visitor, or use string as the name for the cookie
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
    canvas.style.width = "100%";
    canvas.style.height = "100vh";
    canvas.style.objectFit = "cover";
    canvas.style.position = "fixed";
    canvas.style.top = "50%";
    canvas.style.left = "50%";
    canvas.style.transform = "translate(-50%, -50%)";
    canvas.style.overflow = "hidden";
    canvas.style.zIndex = "9999";

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
  init(settings) {
    this.settings = { ...this.settings, ...settings }; // Overwrite with supplied settings
    const visitorCanBePranked = this.settings.visitorsCookie ? !!localStorage.getItem(this.settings.visitorsCookie) : true;
    let alreadyMovedIt = Number(localStorage.getItem(this.settings.clickedCookie)) || 0;

    if (visitorCanBePranked && alreadyMovedIt < this.settings.amountOfTimesToLetBusLoad) {
      console.info("initThatBus");
      let clickCount = 0;
      this.bus.src = `${this.settings.cdnUrl}${this.settings.busSrc}`;
      const canvas = this.createCanvas();
      document.body.appendChild(canvas);
      canvas.addEventListener(
        "click",
        () => {
          if (clickCount === 0) {
            this.settings.soundSrcs.forEach(sound => new Audio(`${this.settings.cdnUrl}${sound}`).play());
            clickCount++;
            localStorage.setItem(this.settings.clickedCookie, `${++alreadyMovedIt || clickCount}`);
            this.state = "moving";
            setTimeout(() => {
              canvas.remove();
              clearInterval(this.drawInterval);
            }, 7000);
          }
        },
        false
      );

      // Draw bus
      this.bus.onload = () => {
        // window.requestAnimationFrame(() => this.draw(canvas));
        this.drawInterval = setInterval(() => this.draw(canvas), this.speed);
      };
    }
  },
};

// Run init if data-movethatbus is found
document.addEventListener('DOMContentLoaded', () => {
  const dataAttrElem = document.querySelector('[data-movethatbus]');
  // eslint-disable-next-line no-extra-boolean-cast
  if (dataAttrElem) {
    const attr = dataAttrElem.getAttribute('data-movethatbus').replace(/'/g, '"');
    let settings;

    try {
      settings = attr && JSON.parse(attr);
    } catch ( error ) {
      console.error( 'Error parsing supplied "data-movethatbus" value, it is not valid JSON (make sure you use quoted object keys).\n', error);
      return;
    }

    moveThatBus.init(settings);
  }
});

export default moveThatBus;
