export const getRandomHexColor = idx =>
  `#${Math.floor(Math.random() * (0xffffff + 1))
    .toString(16)
    .padStart(6, 0)}`;