import { saveMode } from "./category.js";

const allDiv = document.querySelector("#allBtnDiv");
const favBtnDiv = document.querySelector("#favoBtnDiv");
const filterDiv = document.querySelector("#filterDev");

export function allAndFav() {
  filterDiv.addEventListener("click", (event) => {
    const favTarget = event.target.closest("#favoBtnDiv");
    if (favTarget) {
      saveMode(true);
      favBtnDiv.className =
        "border border-white/50 rounded-md bg-purple-500/80";
      allDiv.classList.remove(
        "bg-purple-500/80",
        "border",
        "border-white/50",
        "rounded-md",
      );
    }

    const allTarget = event.target.closest("#allBtnDiv");
    if (allTarget) {
      saveMode(false);
      allDiv.className = "border border-white/50 rounded-md bg-purple-500/80";
      favBtnDiv.classList.remove(
        "border",
        "border-white/50",
        "rounded-md",
        "bg-purple-500/80",
      );
    }
  });
}
