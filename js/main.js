import { dateAndTime } from "./date.js";
import { showCahnnels } from "./channels.js";
import { dataFetch } from "./api.js";
import { showImg } from "./preview.js";
import { updateData } from "./updt-data.js";
import { allAndFav } from "./filterBtns.js";
import { settings } from "./setting.js";
import { blacklist } from "./blacklist.js";
import { showCategories, refreshChannelDisplay } from "./category.js";

dateAndTime();

const loading = document.querySelector("#loading");
const errorDiv = document.querySelector("#error-div");
const errorMsg = document.querySelector("#error-message");
const retryBtn = document.querySelector("#retry-btn");

async function manageError() {
  try {
    const data = await dataFetch();
    const notBlacklist = data.filter(
      (channel) => channel.isBlacklisted === false,
    );
    const blackArray = data.filter((channel) => channel.isBlacklisted === true);
    function refreshMainChannels() {
      refreshChannelDisplay();
    }

    showCategories(notBlacklist);
    showCahnnels(notBlacklist);
    allAndFav();
    settings();
    const refreshBlck = blacklist(
      blackArray,
      notBlacklist,
      refreshMainChannels,
    );
    showImg(notBlacklist, blackArray, refreshBlck, refreshMainChannels);
    console.log("success", data);
  } catch (error) {
    console.error("failed", error.message);
    errorMsg.textContent = error.message;
    errorDiv.classList.remove("hidden");
    retryBtn.addEventListener("click", () => {
      window.location.reload();
    });
  } finally {
    loading.hidden = true;
  }
}
manageError();
