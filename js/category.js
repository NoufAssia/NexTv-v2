import { showCahnnels } from "./channels.js";
// import {filter} from "./filter.js";

const categoryBtn = document.querySelector("#category");
const categoryPopUp = document.querySelector("#popup-category");
const selectedCategoryTitle = document.querySelector("#selected-category");
const searchInput = document.querySelector("#search");

let searchOutput;
let channels = [];
let filtredCategory = "ALL CATEGORIES";
let onlyFav = false;

export function showCategories(data) {
  channels = data;
  searchOutput = data;
  search();
  const categories = [
    "ALL CATEGORIES",
    ...new Set(channels.map((channel) => channel.category)),
  ];
  categoryModal(categories, channels);
}

function categoryModal(categories, channels) {
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category.toLowerCase();
    button.className =
      "block w-full text-start rounded-md border-purple-500/80 bg-white/[0.03] hover:bg-purple-500 pl-2";
    button.dataset.category = category;
    categoryPopUp.append(button);
  });
  categoryBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    categoryPopUp.classList.toggle("hidden");
  });

  categoryPopUp.addEventListener("click", (event) => {
    const clickedCategory = event.target.closest("button[data-category]");

    if (!clickedCategory) {
      return;
    }
    const selectedCategory = clickedCategory.dataset.category;
    filtredCategory = selectedCategory;
    // console.log("category" + filtredCategory);
    selectedCategoryTitle.textContent = selectedCategory;
    categoryPopUp.classList.add("hidden");
    categoryFilter(channels);
  });

  document.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", () => {
    categoryPopUp.classList.add("hidden");
  });
}

export function saveMode(value) {
  onlyFav = value;
  displayChannelOnMode(searchOutput);
}

function displayChannelOnMode(data) {
  if (onlyFav) {
    const favorites = data.filter((channel) => {
      return channel.isFavorite === true;
    });
    showCahnnels(favorites);
  } else {
    showCahnnels(data);
  }
}

export function categoryFilter(channels) {
  let array = [];
  let all = channels;
  // console.log("channels" + channels);
  // console.log("f" + filtredCategory);
  if (filtredCategory === "ALL CATEGORIES") {
    searchOutput = all;
    displayChannelOnMode(searchOutput);
    // search();
    return;
  }
  channels.forEach((channel) => {
    if (channel.category === filtredCategory) {
      array.push(channel);
    }
  });
  searchOutput = array;
  displayChannelOnMode(searchOutput);
  // search();
  // console.log("nn" , searchOutput)
  // console.log("all" + all);
  // console.log("array" + array);
}

let searchResult = [];

function search() {
  // console.log("result", searchOutput);
  searchInput.addEventListener("input", () => {
    searchResult = [];
    if (searchInput.value.trim() === "") {
      displayChannelOnMode(searchOutput);
      return;
    }
    searchOutput.forEach((channel) => {
      if (
        channel.name
          .toLowerCase()
          .includes(searchInput.value.toLowerCase().trim()) ||
        String(channel.channelNumber).includes(searchInput.value.trim())
      ) {
        searchResult.push(channel);
      }
    });
    displayChannelOnMode(searchResult);
  });
}
