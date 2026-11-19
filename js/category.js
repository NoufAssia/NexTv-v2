import { showCahnnels } from "./channels.js";
// import {filter} from "./filter.js";

const categoryBtn = document.querySelector("#category");
const categoryPopUp = document.querySelector("#popup-category");
const selectedCategoryTitle = document.querySelector("#selected-category");
const searchInput = document.querySelector("#search");

// let searchOutput;
let channels = [];
let filtredCategory = "ALL CATEGORIES";
let onlyFav = false;
let searchText = "";

export function showCategories(data) {
  channels = data;
  // searchOutput = data;
  // search();
  const categories = [
    "ALL CATEGORIES",
    ...new Set(channels.map((channel) => channel.category)),
  ];
  categoryModal(categories);
  search();
  refreshChannelDisplay();
}

export function refreshChannelDisplay() {
  let result = channels.filter((channel) => {
    const matchesCategory =
      filtredCategory === "ALL CATEGORIES" ||
      channel.category === filtredCategory;

    const matchesSearch =
      channel.name.toLowerCase().includes(searchText) ||
      String(channel.channelNumber).includes(searchText);
    return matchesCategory && matchesSearch;
  });

  if (onlyFav) {
    result = result.filter((channel) => channel.isFavorite === true);
  }
  result.sort((a, b) => Number(a.channelNumber) - Number(b.channelNumber));
  showCahnnels(result);
}

function categoryModal(categories) {
  categoryPopUp.innerHTML = "";

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
    filtredCategory = clickedCategory.dataset.category;
    // filtredCategory = selectedCategory;
    // console.log("category" + filtredCategory);
    selectedCategoryTitle.textContent = filtredCategory;
    categoryPopUp.classList.add("hidden");
    // categoryFilter(channels);
    refreshChannelDisplay();
  });

  // document.addEventListener("click", (event) => {
  //   event.stopPropagation();
  // });

  document.addEventListener("click", () => {
    categoryPopUp.classList.add("hidden");
  });
}

export function saveMode(value) {
  onlyFav = value;
  refreshChannelDisplay();
}

// function displayChannelOnMode(data) {
//   if (onlyFav) {
//     const favorites = data.filter((channel) => {
//       return channel.isFavorite === true;
//     });
//     showCahnnels(favorites);
//   } else {
//     showCahnnels(data);
//   }
// }

// export function categoryFilter(channels) {
//   let array = [];
//   let all = channels;
//   // console.log("channels" + channels);
//   // console.log("f" + filtredCategory);
//   if (filtredCategory === "ALL CATEGORIES") {
//     searchOutput = all;
//     displayChannelOnMode(searchOutput);
//     // search();
//     return;
//   }
//   channels.forEach((channel) => {
//     if (channel.category === filtredCategory) {
//       array.push(channel);
//     }
//   });
//   searchOutput = array;
//   displayChannelOnMode(searchOutput);
//   // search();
//   // console.log("nn" , searchOutput)
//   // console.log("all" + all);
//   // console.log("array" + array);
// }

// let searchResult = [];

function search() {
  // console.log("result", searchOutput);
  searchInput.addEventListener("input", () => {
    // searchResult = [];
    // if (searchInput.value.trim() === "") {
    //   displayChannelOnMode(searchOutput);
    //   return;
    // }
    // searchOutput.forEach((channel) => {
    //   if (
    //     channel.name
    //       .toLowerCase()
    //       .includes(searchInput.value.toLowerCase().trim()) ||
    //     String(channel.channelNumber).includes(searchInput.value.trim())
    //   ) {
    //     searchResult.push(channel);
    //   }
    // });
    // displayChannelOnMode(searchResult);
    searchText = searchInput.value.trim().toLowerCase();
    refreshChannelDisplay();
  });
}
