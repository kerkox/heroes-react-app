const getImage = require.context("../assets/heroes", true);
export const heroImages = (image) => getImage(image).default;
