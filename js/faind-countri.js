const BASE_URL = "https://restcountries.com/v3.1/";
export const findByName = (countryName) => {
  return fetch(
    `${BASE_URL}/name/${countryName}?fields=name,flags,capital`
  ).then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};
