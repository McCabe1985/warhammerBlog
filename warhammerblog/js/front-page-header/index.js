import BackgroundAnim from "./backgroundAnim.js";
import Ember from "./ember.js";
import {
  containerStyles,
  backgroundImages,
  getRandomInt,
  generateRandomBackgroundImage,
} from "./utils.js";

const container = document.querySelector(".front__page-header-container");

Object.assign(container.style, containerStyles);
container.style.backgroundImage = `url(${generateRandomBackgroundImage(
  backgroundImages
)})`;

const canvas = document.querySelector("#FP__canvas");
const ctx = canvas.getContext("2d");
canvas.width = container.clientWidth;
canvas.height = container.clientHeight;

class Effect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.backgroundAnim = new BackgroundAnim(this);
    this.flashTimer = null;
    this.flashInterval = null;
    this.embersArray = [];
  }

  update() {
    if (!this.flashTimer) {
      this.flashTimer = setTimeout(
        () => this.startFlash(),
        getRandomInt(3000, 5000)
      );
    }

    this.backgroundAnim.update();

    const numOfEmbersToAdd = getRandomInt(1, 5);
    const delayBetweenEmbers = 50; // Adjust the delay as needed

    let addedEmberCount = 0;
    const addEmberWithDelay = () => {
      if (addedEmberCount < numOfEmbersToAdd && this.embersArray.length < 100) {
        this.embersArray.push(new Ember(this));
        addedEmberCount++;
        setTimeout(addEmberWithDelay, delayBetweenEmbers);
      }
    };

    addEmberWithDelay();

    this.embersArray.forEach((ember) => ember.update());

    this.embersArray = this.embersArray
      .filter((ember) => ember.size >= 1)
      .slice(0, 100);
  }

  draw(ctx) {
    this.backgroundAnim.draw(ctx);
    this.embersArray.forEach((ember) => ember.draw(ctx));
  }

  startFlash() {
    this.flashInterval = setInterval(() => {
      this.backgroundAnim.flash();
    }, 150);

    setTimeout(() => {
      clearInterval(this.flashInterval);
      this.stopFlash();
    }, 3 * 150);
  }

  stopFlash() {
    clearInterval(this.flashInterval);
    this.flashTimer = null;

    const fadeToBlack = () => {
      this.backgroundAnim.fadeToBlack();
      if (this.backgroundAnim.opacity >= 1) {
        container.style.backgroundImage = `url(${generateRandomBackgroundImage(
          backgroundImages
        )})`;
        this.backgroundAnim.opacity = 0;
      } else {
        setTimeout(fadeToBlack, 100);
      }
    };

    fadeToBlack();
  }

  reset(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
    this.backgroundAnim.reset(newWidth, newHeight);
  }
}

const effect = new Effect(canvas.width, canvas.height);

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  effect.update();
  effect.draw(ctx);
  requestAnimationFrame(animate);
};

window.addEventListener("resize", () => {
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  effect.reset(canvas.width, canvas.height);
});

animate();
