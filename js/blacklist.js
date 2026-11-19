import { updateChannel } from "./api.js";
import { showCahnnels } from "./channels.js";

export function blacklist(blackArray, channelArray, refreshMainChannels) {
  const blacklistModal = document.querySelector("#blacklist");
  const modal = document.createElement("div");
  modal.id = "center-modal";
  modal.className =
    "hidden fixed inset-0 z-50 bg-black/50 p-4 flex items-center justify-center";

  const insideDiv = document.createElement("div");
  insideDiv.className =
    "w-full max-w-3xl rounded-xl bg-[#15105c] p-6 shadow-xl ";

  const topDiv = document.createElement("div");
  topDiv.className = "flex justify-between gap-4 items-center mt-2 mb-4";

  const title = document.createElement("h1");
  title.textContent = "Blacklist Channels";
  title.className = "font-bold text-lg text-white";

  const xBtn = document.createElement("button");
  xBtn.textContent = "X";
  xBtn.className =
    "rounded-2xl p-1.5 px-2 text-md text-white/30 border shadow-md border-[0.3px] border-white/30 bg-white/[0.03] hover:bg-white hover:text-[#632496]";

  const blackChannels = document.createElement("div");
  blackChannels.id = "blackChannels";
  blackChannels.className =
    " mt-2  max-h-[300px] flex flex-col gap-1.5  overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500/80 scrollbar-track-indigo-950 text-center";

  topDiv.append(title, xBtn);
  insideDiv.append(topDiv, blackChannels);
  modal.append(insideDiv);
  document.body.append(modal);
  blacklistModal.addEventListener("click", () => {
    modal.classList.remove("hidden");
    //   modal.classList.toggle("flex");
  });

  insideDiv.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  xBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  //   showCahnnels(blackArray);
  showBlackCahnnels(blackArray, blackChannels);

  function refreshBlacklist() {
    showBlackCahnnels(blackArray, blackChannels);
  }
  blackChannels.addEventListener("click", async (event) => {
    const restoreBtn = event.target.closest(".restore");
    if (!restoreBtn) return;
    const channelDiv = restoreBtn.closest(".channel");
    const channelId = channelDiv.dataset.id;

    const channelData = blackArray.find((channel) => channel.id === channelId);
    if (!channelData) return;

    try {
      await updateChannel(channelId, {
        isBlacklisted: false,
      });

      channelData.isBlacklisted = false;

      const index = blackArray.findIndex((channel) => channel.id === channelId);
      blackArray.splice(index, 1);
      channelArray.push(channelData);
      refreshBlacklist();
      refreshMainChannels();
    } catch (error) {
      console.error("restore failed:", error);
    }
  });

  return refreshBlacklist;
}

function showBlackCahnnels(blackArray, blackChannels) {
  console.log("render black:", blackArray.length);

  blackChannels.innerHTML = "";

  const sorted = [...blackArray].sort(
    (a, b) => Number(a.channelNumber) - Number(b.channelNumber),
  );
  if (sorted.length === 0) {
    blackChannels.textContent = "No channels found.";
    blackChannels.classList.add("text-white/70");
    return;
  }

  sorted.forEach((channel) => {
    const channelDiv = document.createElement("div");
    channelDiv.className =
      " channel flex items-center gap-3  border mr-3 pl-2 rounded-lg text-white/50 hover:bg-purple-500 hover:text-white cursor-pointer ";
    channelDiv.dataset.preview = channel.logo;
    channelDiv.dataset.name = channel.name;
    channelDiv.dataset.id = channel.id;
    channelDiv.dataset.number = channel.channelNumber;
    const number = document.createElement("span");
    number.textContent = channel.channelNumber;

    const logo = document.createElement("img");
    logo.src = channel.logo;
    logo.alt = `${channel.name} logo`;
    logo.className = "w-6 h-6 object-contain";

    const name = document.createElement("span");
    name.textContent = channel.name;
    name.className = "flex-1 text-left min-w-0 truncate ";

    // create restore and delete buttons

    const restore = document.createElement("button");
    restore.className =
      "restore  h-6  flex-shrink-0 ml-auto  cursor-pointer rounded-2xl  px-3 my-1 text-center text-md border border-[0.3px] border-white/30 bg-white/[0.03] hover:bg-white hover:text-[#632496]";
    restore.textContent = "Restore";

    const deleteBtn = document.createElement("button");
    deleteBtn.className =
      " delete h-6 mr-2 flex-shrink-0 ml-auto  cursor-pointer rounded-2xl  px-3 my-1 text-center text-md border border-[0.3px] border-white/30 bg-white/[0.03] hover:bg-white hover:text-[#632496]";

    deleteBtn.textContent = "Delete";
    channelDiv.append(logo, number, name, restore, deleteBtn);
    blackChannels.append(channelDiv);
  });
  console.log("black DOM children:", blackChannels.children.length);
}
