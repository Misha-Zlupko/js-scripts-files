const days = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П'ятниця",
  "Субота",
];

const months = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

const refs = {
  day: document.querySelector(".date-day"),
  date: document.querySelector(".date-date"),
  month: document.querySelector(".date-month"),
  year: document.querySelector(".date-year"),
  time: document.querySelector(".digital-clock"),
};

const clockRef = {
  hour: document.querySelector(".arrow-hour"),
  minute: document.querySelector(".arrow-minute"),
  second: document.querySelector(".arrow-second"),
};

const setDate = (date) => {
  refs.day.textContent = days[date.getDay()];
  refs.date.textContent = date.getDate();
  refs.month.textContent = months[date.getMonth()];
  refs.year.textContent = date.getFullYear();
};

const setTime = (date) => {
  // const hours = date.getHours();
  // const transformedHours = hours < 10 ? "0" + hours : hours;

  // const minutes = date.getMinutes();
  // const transformedMinutes = hours < 10 ? "0" + minutes : minutes;

  // const seconds = date.getSeconds();
  // const transformedSeconds = seconds < 10 ? "0" + seconds : seconds;

  // через String.prototype.padStart()
  const transformedHours = date.getHours().toString().padStart(2, "0");
  const transformedMinutes = date.getMinutes().toString().padStart(2, "0");
  const transformedSeconds = date.getSeconds().toString().padStart(2, "0");

  refs.time.textContent = `Поточний час: ${transformedHours}:${transformedMinutes}:${transformedSeconds}`;
};

const handleArrows = (date) => {
  const secondDegree = date.getSeconds() * (360 / 60);
  const minuteDegree = date.getMinutes() * (360 / 60);
  const hourDegree = date.getHours() * (360 / 12);

  clockRef.second.style.transform = `rotate(${secondDegree}deg)`;
  clockRef.minute.style.transform = `rotate(${minuteDegree}deg)`;
  clockRef.hour.style.transform = `rotate(${
    hourDegree + (30 / 60) * date.getMinutes()
  }deg)`;
};

const timerId = setInterval(() => {
  const date = new Date();
  setDate(date);
  setTime(date);
  handleArrows(date);
}, 1000);
