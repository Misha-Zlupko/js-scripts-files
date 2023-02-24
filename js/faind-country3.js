export const contriesMarkup = (data, element) => {
  const markup = data
    .map(
      (el) => `
          <div>
              <p>${el.name.official} - ${el.capital[0]}</p>
              <img src="${el.flags.svg}" height="40px" width="40px"/>
          </div>
      `
    )
    .join("");
  element.innerHTML = "";
  element.insertAdjacentHTML("beforeend", markup);
};
