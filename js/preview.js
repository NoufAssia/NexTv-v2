import { updateChannel } from "./api.js";
import { showCategories } from "./category.js";
import { showCahnnels } from "./channels.js";

const hostDiv = document.querySelector("#host-div");
const defImg = document.querySelector("#default-img");
const channelsDiv = document.querySelector("#listCahnnel");

const currentProgram = document.querySelector("#currentProgram");
const startTime = document.querySelector("#startTime");
const endTime = document.querySelector("#endTime");
const progressPercentage = document.querySelector("#progressPercentage");
const epgCp = document.querySelector("#epgCp");
const epgSt = document.querySelector("#epgSt");
const epgEt = document.querySelector("#epgEt");
const epgPp = document.querySelector("#epgPp");

const channelInfos = document.querySelector("#channel-infos");

console.log("HOST:", hostDiv);
console.log("DEFAULT:", defImg);
console.log("CHANNELS:", channelsDiv);

// let blackArray = [];

export async function showImg(
  data,
  blackArray,
  refreshBlacklist,
  refreshMainChannels,
) {
  console.count("showImg called");
  channelsDiv.addEventListener("click", async (event) => {
    // click on star button to change the isfavorite

    const favButton = event.target.closest(".favButton");
    if (favButton) {
      const targetChannel = favButton.closest(".channel");
      const channelData = data.find((channel) => {
        return channel.id === targetChannel.dataset.id;
      });

      if (!channelData) {
        return;
      }

      const channelFav = !channelData.isFavorite;

      try {
        const updtChannel = await updateChannel(channelData.id, {
          isFavorite: channelFav,
        });
        channelData.isFavorite = updtChannel.isFavorite;

        const starImg = favButton.querySelector("img");
        if (channelData.isFavorite === true) {
          starImg.src = "./assets/star.png";
        } else {
          starImg.src = "./assets/star-vide.png";
        }
      } catch (error) {
        console.log("issues in favorate update:", error);
      }
      return;
    }

    // click on blacklist

    const blacklistBtn = event.target.closest(".blackListBtn");

    if (blacklistBtn) {
      const targetChannel = blacklistBtn.closest(".channel");
      const channelData = data.find((channel) => {
        return channel.id === targetChannel.dataset.id;
      });

      if (!channelData) {
        return;
      }

      const channelFav = !channelData.isBlacklisted;

      try {
        const updtChannel = await updateChannel(channelData.id, {
          isBlacklisted: channelFav,
        });
        channelData.isBlacklisted = updtChannel.isBlacklisted;
        console.log("1. api ok", blackArray.length, data.length);
        if (!blackArray.some((channel) => channel.id === channelData.id)) {
          blackArray.push(channelData);
        }
        // targetChannel.classList.add("hidden");
        const index = data.findIndex(
          (channel) => channel.id === channelData.id,
        );
        if (index !== -1) {
          data.splice(index, 1);
        }
        console.log("2. arrays changed", blackArray.length, data.length);
        refreshBlacklist();
        console.log("3. blacklist refreshed");

        refreshMainChannels();
        console.log("4. main refreshed");
      } catch (error) {
        console.log("issues in blacklist update:", error);
      }

      return;
    }

    //click on channel name to preview it's pic

    const click = event.target.closest(".channel");
    if (click) {
      const clickedChannel = data.find((channel) => {
        return channel.id === click.dataset.id;
      });

      defImg.classList.add("hidden");

      let img = hostDiv.querySelector("#channel-preview");
      if (!img) {
        img = document.createElement("img");
        img.id = "channel-preview";
        img.className =
          "rounded-3xl w-full h-full object-cover shadow-[-1px_-1px_16px_16px_rgba(0,0,0,0.35)]";
        hostDiv.append(img);
      }
      img.src = click.dataset.preview;
      img.alt = `${click.dataset.name} preview`;
      channelInfos.textContent = `${click.dataset.number} ${click.dataset.name}`;
      console.log("test", channelInfos);
      let epg = clickedChannel.epg;
      currentProgram.classList.remove("hidden");
      epgCp.textContent = epg.currentProgram;
      startTime.classList.remove("hidden");
      epgSt.textContent = epg.startTime;
      endTime.classList.remove("hidden");
      epgEt.textContent = epg.endTime;
      progressPercentage.classList.remove("hidden");
      epgPp.textContent = epg.progressPercentage;
    }
  });
}
