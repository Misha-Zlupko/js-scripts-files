// Є розмітка, треба реалізувати пошук по товарам
// Також треба додати логіку збереження товару в корзину та обрані
const favouriteButton = document.querySelector(".favorite");
const FAV_KEY = "favourite";
const BUY_KEY = "buy-key";
const products = [
  {
    id: "160916",
    name: "Apple iPhone 13 Pro Max 256 Gb Sierra Blue",
    price: 52095,
    img: "https://cdn.tehnoezh.ua/0/0/0/0/7/5/2/4/2/000075242_545_545.jpeg",
  },
  {
    id: "160853",
    name: "Apple iPhone 13 128 Gb Midnight",
    img: "https://cdn.tehnoezh.ua/0/0/0/0/7/5/1/9/5/000075195_545_545.jpeg",
    price: 32195,
  },
  {
    id: "165827",
    name: "Apple iPhone 13 Pro 128 Gb Alpine Green",
    img: "https://cdn.tehnoezh.ua/0/0/0/1/0/8/2/4/8/000108248_545_545.jpeg",
    price: 40995,
  },
  {
    id: "169143",
    name: "Apple iPhone 14 Pro Max 512 Gb Space Black eSim",
    img: "https://cdn.tehnoezh.ua/0/0/0/1/1/6/0/4/4/000116044_545_545.jpeg",
    price: 76295,
  },
  {
    id: "169142",
    name: "Apple iPhone 14 Pro Max 256 Gb Space Black eSim",
    img: "https://cdn.tehnoezh.ua/0/0/0/1/1/6/0/4/1/000116041_545_545.jpeg",
    price: 68895,
  },
  {
    id: "168467",
    name: "Apple iPhone 14 Pro Max 512 Gb Space Black",
    img: "https://cdn.tehnoezh.ua/0/0/0/1/1/4/4/3/9/000114439_545_545.jpeg",
    price: 95095,
  },
];
const listEl = document.querySelector(".list");
const getFromLS = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data) || [];
};
const itemsAdding = (products) => {
  const favourite = getFromLS(FAV_KEY);
  const markup = products
    .map(
      ({ id, name, img, price }) =>
        `
    <div class="list-item" data-id="${id}">
    <img src="${img}" alt="${name}"/>
    <p> Producr name:"${name}" </p>
    <p> Product price:"${price} UAH"</p>
    <button type="button" data-action="buy">Додати товар в корзину</button>
    <button type="button" data-action="favourite" class="${
      favourite.includes(id) ? "fav" : ""
    }">Додати товар в обрані</button>
    </div>
    `
    )
    .join("");
  listEl.innerHTML = "";
  listEl.insertAdjacentHTML("beforeend", markup);
};
itemsAdding(products);
const handling = (evt) => {
  console.log(evt.target.dataset.action);
  const action = evt.target.dataset.action;
  if (action === "buy") {
  }
  if (action === "favourite") {
    const id = evt.target.parentNode.dataset.id;
    const favourite = getFromLS(FAV_KEY);
    if (!favourite.includes(id)) {
      evt.target.classList.add("fav");
      favourite.push(id);
      localStorage.setItem(FAV_KEY, JSON.stringify(favourite));
    } else {
      alert("Цей товар вже додано");
    }
  }
};
const handleFavoriteButton = () => {
  const favourite = getFromLS(FAV_KEY);
  const filteredCards = products.filter((product) =>
    favourite.includes(product.id)
  );
  if (filteredCards.length === 0) {
    alert("Ще немає товарів");
  } else {
    itemsAdding(filteredCards);
  }
};
listEl.addEventListener("click", handling);
favouriteButton.addEventListener("click", handleFavoriteButton);
