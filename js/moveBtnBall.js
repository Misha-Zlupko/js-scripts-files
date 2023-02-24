const moveBox = document.querySelector(".moving-box");
const position = { top: 0, left: 0 };
const STEP = 10;
const handleMovBall = (evt) => {
  if (evt.code === "ArrowDown") {
    position.top += STEP;
    moveBox.style.top = position.top + "px";
  }
  if (evt.code === "ArrowUp") {
    position.top -= STEP;
    moveBox.style.top = position.top + "px";
  }
  if (evt.code === "ArrowLeft") {
    position.left -= STEP;
    moveBox.style.left = position.left + "px";
  }
  if (evt.code === "ArrowRight") {
    position.left += STEP;
    moveBox.style.left = position.left + "px";
  }
};
document.addEventListener("keydown", handleMovBall);
