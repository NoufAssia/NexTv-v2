const setting = document.querySelector("#settings");

export function settings (){
const div = document.createElement("div");
div.className =
  " absolute hidden top-full right-0  mt-5 z-50 min-w-48 p-2 rounded-xl border border-white/20 bg-[#15105c] shadow-lg flex flex-col gap-[0.5px]";
div.id = "setting-div";
const blacklist = document.createElement("button");
blacklist.className =
  " w-full text-start rounded-md border-purple-500/80 bg-white/[0.03] hover:bg-purple-500 pl-2 py-2";
blacklist.textContent = "Blacklist";

const addChannel = document.createElement("button");
addChannel.className =
  " w-full text-start rounded-md border-purple-500/80 bg-white/[0.03] hover:bg-purple-500 pl-2 py-2";
addChannel.textContent = "Add a channel";

div.append(blacklist, addChannel);
setting.append(div);

setting.addEventListener("click", (event) => {
    event.stopPropagation();
    div.classList.toggle("hidden");
  });


  document.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", () => {
    div.classList.add("hidden");
  });
}