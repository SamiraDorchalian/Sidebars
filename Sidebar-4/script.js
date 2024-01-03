const burgerEl = document.querySelector(".burger");
const sidebarEl = document.querySelector(".sidebar");

const navTagEl = document.createElement("nav");
sidebarEl.appendChild(navTagEl);

const buttonBlackchick = document.createElement("button");
buttonBlackchick.type = "button";
navTagEl.appendChild(buttonBlackchick);
const imgBlackchick = document.createElement("img");
imgBlackchick.src = "./assets/icon-blockchain.svg";
buttonBlackchick.appendChild(imgBlackchick);
const spanBlackchick = document.createElement("span");
spanBlackchick.innerText = "Blackchick";
buttonBlackchick.appendChild(spanBlackchick);

const buttonDataRiver = document.createElement("button");
buttonDataRiver.type = "button";
navTagEl.appendChild(buttonDataRiver);
const imgDataRiver = document.createElement("img");
imgDataRiver.src = "./assets/icon-database.svg";
buttonDataRiver.appendChild(imgDataRiver);
const spanDataRiver = document.createElement("span");
spanDataRiver.innerText = "DataRiver";
buttonDataRiver.appendChild(spanDataRiver);

const buttonAudioVibe = document.createElement("button");
buttonAudioVibe.type = "button";
navTagEl.appendChild(buttonAudioVibe);
const imgAudioVibe = document.createElement("img");
imgAudioVibe.src = "./assets/icon-speaker.svg";
buttonAudioVibe.appendChild(imgAudioVibe);
const spanAudioVibe = document.createElement("span");
spanAudioVibe.innerText = "AudioVibe";
buttonAudioVibe.appendChild(spanAudioVibe);

const buttonSoundBlast = document.createElement("button");
buttonSoundBlast.type = "button";
navTagEl.appendChild(buttonSoundBlast);
const imgSoundBlast = document.createElement("img");
imgSoundBlast.src = "./assets/icon-acoustic.svg";
buttonSoundBlast.appendChild(imgSoundBlast);
const spanSoundBlast = document.createElement("span");
spanSoundBlast.innerText = "SoundBlast";
buttonSoundBlast.appendChild(spanSoundBlast);

const buttonLevels = document.createElement("button");
buttonLevels.type = "button";
navTagEl.appendChild(buttonLevels);
const imgLevels = document.createElement("img");
imgLevels.src = "./assets/icon-levels.svg";
buttonLevels.appendChild(imgLevels);
const spanLevels = document.createElement("span");
spanLevels.innerText = "Levels";
buttonLevels.appendChild(spanLevels);

const buttonAccounts = document.createElement("button");
buttonAccounts.type = "button";
navTagEl.appendChild(buttonAccounts);
const imgAccounts = document.createElement("img");
imgAccounts.src = "./assets/icon-accounts.svg";
buttonAccounts.appendChild(imgAccounts);
const spanAccounts = document.createElement("span");
spanAccounts.innerText = "Accounts";
buttonAccounts.appendChild(spanAccounts);

const buttonSecurity = document.createElement("button");
buttonSecurity.type = "button";
navTagEl.appendChild(buttonSecurity);
const imgSecurity = document.createElement("img");
imgSecurity.src = "./assets/icon-levels.svg";
buttonSecurity.appendChild(imgSecurity);
const spanSecurity = document.createElement("span");
spanSecurity.innerText = "Security";
buttonSecurity.appendChild(spanSecurity);

const toggleSidebar = () => {
  document.body.classList.toggle("open");
};
burgerEl.addEventListener("click", toggleSidebar);
