export default class BackgroundAnim {
  constructor(effect) {
    this.effect = effect;
    this.width = this.effect.width;
    this.height = this.effect.height;
    this.opacity = 0.5;
  }

  update() {
    if (!this.effect.flashTimer) {
      this.fadeToBlack();
    }
  }

  draw(context) {
    context.fillStyle = `rgba(0, 0, 0, ${this.opacity})`; // Set the fill style with opacity
    context.fillRect(0, 0, this.width, this.height);
  }

  flash() {
    let counter = 0;

    const flashInterval = setInterval(() => {
      this.opacity = this.opacity === 0 ? 1 : 0;
      counter++;

      if (counter === 3) {
        clearInterval(flashInterval);
      }
    }, 150);
  }

  fadeToBlack() {
    if (this.opacity < 1) {
      this.opacity += 0.1;
    }
  }

  reset(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}
