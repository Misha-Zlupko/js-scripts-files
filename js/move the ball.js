// 3 Створюємо button і div(має розмір і колір), при натисканні на кнопку div повинен рухатись
const moveBtn = document.querySelector(".mov-btn");
const moveBox = document.querySelector(".moving-box");
let position = 0;
let direction = "+";
const STEP = 30;
const handleClickOnMoveBtn = (evt) => {
  if (document.body.clientWidth <= position + STEP + 50) {
    direction = "-";
  }
  if (position - STEP < 0) {
    direction = "+";
  }
  position = direction === "+" ? position + STEP : position - STEP;
  moveBox.style.marginLeft = `${position}px`;
};
moveBtn.addEventListener("click", handleClickOnMoveBtn);
moveBox.addEventListener("mouseover", handleClickOnMoveBtn);
console.dir(document.body);
