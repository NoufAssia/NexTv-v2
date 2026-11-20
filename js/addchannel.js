export function addchannel() {
  const addChannel = document.querySelector("#addchannel");

  const modal = document.createElement("div");
  modal.id = "modal-form";
  modal.className =
    "  hidden fixed inset-0 z-50 bg-black/50 p-4 flex items-center justify-center";

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
}
