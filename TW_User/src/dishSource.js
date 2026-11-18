import { PROXY_URL, PROXY_KEY } from "./apiConfig.js";

export function searchDishes(searchParams) {
  const url = PROXY_URL + "/recipes/complexSearch";
  return fetch(url + "?" + new URLSearchParams(searchParams), {
    method: "GET",
    headers: {
      "X-DH2642-Key": PROXY_KEY,
      "X-DH2642-Group": "471",
    },
  })
    .then(gotResponseACB)
    .then(someACB);
}

export function getMenuDetails(ids_array) {
  const url = PROXY_URL + "/recipes/informationBulk";
  return fetch(url + "?" + new URLSearchParams({ ids: ids_array }), {
    method: "GET",
    headers: {
      "X-DH2642-Key": PROXY_KEY,
      "X-DH2642-Group": "471",
    },
  }).then(gotResponseACB);
}

export function getDishDetails(id) {
  return getMenuDetails([id]).then(arrayToObjectACB);
}

function arrayToObjectACB(array) {
  return array[0] === undefined ? {} : array[0];
}

function gotResponseACB(response) {
  if (response.status !== 200) {
    throw new Error("status:" + response.status);
  }
  return response.json();
}

function someACB(result) {
  return result.results;
}
