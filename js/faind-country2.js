import { findByName } from "./faind-countri";
import { contriesMarkup } from "./faind-country3";
const container = document.querySelector(".contries");
const enteredName = document.querySelector(".find");
enteredName.addEventListener("blur", searchInputHandler);
function searchInputHandler(evt) {
  const searchRequest = evt.target.value;
  if (!searchRequest) {
    return;
  }
  findByName(searchRequest)
    .then((data) => contriesMarkup(data, container))
    .catch((error) => (container.textContent = error.message));
}
