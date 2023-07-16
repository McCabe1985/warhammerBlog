// utils.js
export const containerStyles = {
  zIndex: "-3",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  filter: "blur(100)",
};

export const backgroundImages = [
  "/wp-content/themes/warhammerblog/images/header-background-images/image0.webp",
  "/wp-content/themes/warhammerblog/images/header-background-images/image1.webp",
  "/wp-content/themes/warhammerblog/images/header-background-images/image2.webp",
  "/wp-content/themes/warhammerblog/images/header-background-images/image3.webp",
  "/wp-content/themes/warhammerblog/images/header-background-images/image4.webp",
];

export function generateRandomBackgroundImage(backgroundImages) {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[randomIndex];
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
