const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateColors = () => {
  let red = randomNumber(0, 255);
  let green = randomNumber(0, 255);
  let blue = randomNumber(0, 255);
  return `rgb(${red} ${green} ${blue})`;
};

export const changeColor = () => {
  const body = document.body;
  const colorText = document.querySelector('.color-text');
  const switchButton = document.querySelector('.switch-button');

  switchButton.addEventListener('click', () => {
    colorText.textContent = generateColors();
    body.style.backgroundColor = generateColors();
  });
};
