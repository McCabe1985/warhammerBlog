export default class Ember {
  constructor(effect) {
    this.effect = effect;
    this.x =
      Math.floor((Math.random() * this.effect.width) / 4) +
      this.effect.width / 4;
    this.y = this.effect.height;
    this.size = this.radius = Math.random() * 100 + 50;
    this.speedY = Math.random() * 1.5 + 1.5;
    this.speedX = Math.random() * 2;
  }
  update() {
    this.y -= this.speedY;
    this.x += this.speedX;
    if (this.size >= 0.3) this.size -= 0.2;
  }
  draw(ctx) {
    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.size
    );

    gradient.addColorStop(0, "rgba(255, 165, 0, 1)");
    gradient.addColorStop(0.3, "rgba(255, 165, 0, 0.8)");
    gradient.addColorStop(0.7, "rgba(255, 69, 0, 0.4)");
    gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
  }
}
