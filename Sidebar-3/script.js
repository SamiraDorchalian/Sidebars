const burgerEl = document.querySelector(".burger");
const sidebarEl = document.querySelector(".sidebar");

const sidebarHeader = document.createElement("header");
sidebarHeader.classList = "sidebar-header";
sidebarEl.appendChild(sidebarHeader);

const navTag_1 = document.createElement("nav");
sidebarEl.appendChild(navTag_1);
const buttonHome = document.createElement("button");
buttonHome.type = "button";
navTag_1.appendChild(buttonHome);
const imgHome = document.createElement("img");
imgHome.src = "./assets/icon-home.svg";
buttonHome.appendChild(imgHome);
const spanHome = document.createElement("span");
spanHome.innerText = "Home";
buttonHome.appendChild(spanHome);
const buttonSettings = document.createElement("button");
buttonSettings.type = "button";
navTag_1.appendChild(buttonSettings);
const imgSettings = document.createElement("img");
imgSettings.src = "./assets/icon-settings.svg";
buttonSettings.appendChild(imgSettings);
const spanSettings = document.createElement("span");
spanSettings.innerText = "Settings";
buttonSettings.appendChild(spanSettings);

const navTag_2 = document.createElement("nav");
sidebarEl.appendChild(navTag_2);
const buttonBlockchick = document.createElement("button");
buttonBlockchick.type = "button";
navTag_2.appendChild(buttonBlockchick);
const imgBlockchick = document.createElement("img");
imgBlockchick.src = "./assets/icon-blockchain.svg";
buttonBlockchick.appendChild(imgBlockchick);
const spanBlockchick = document.createElement("span");
spanBlockchick.innerText = "Blockchick";
buttonBlockchick.appendChild(spanBlockchick);
const buttonDataRiver = document.createElement("button");
buttonDataRiver.type = "button";
navTag_2.appendChild(buttonDataRiver);
const imgDataRiver = document.createElement("img");
imgDataRiver.src = "./assets/icon-database.svg";
buttonDataRiver.appendChild(imgDataRiver);
const spanDataRiver = document.createElement("span");
spanDataRiver.innerText = "DataRiver";
buttonDataRiver.appendChild(spanDataRiver);
const buttonAudioVibe = document.createElement("button");
buttonAudioVibe.type = "button";
navTag_2.appendChild(buttonAudioVibe);
const imgAudioVibe = document.createElement("img");
imgAudioVibe.src = "./assets/icon-speaker.svg";
buttonAudioVibe.appendChild(imgAudioVibe);
const spanAudioVibe = document.createElement("span");
spanAudioVibe.innerText = "AudioVibe";
buttonAudioVibe.appendChild(spanAudioVibe);
const buttonSoundBlast = document.createElement("button");
buttonSoundBlast.type = "button";
navTag_2.appendChild(buttonSoundBlast);
const imgSoundBlast = document.createElement("img");
imgSoundBlast.src = "./assets/icon-acoustic.svg";
buttonSoundBlast.appendChild(imgSoundBlast);
const spanSoundBlast = document.createElement("span");
spanSoundBlast.innerText = "SoundBlast";
buttonSoundBlast.appendChild(spanSoundBlast);

const navTag_3 = document.createElement("nav");
sidebarEl.appendChild(navTag_3);
const buttonFolders = document.createElement("button");
buttonFolders.type = "button";
navTag_3.appendChild(buttonFolders);
const imgFolders = document.createElement("img");
imgFolders.src = "./assets/icon-folders.svg";
buttonFolders.appendChild(imgFolders);
const spanFolders = document.createElement("span");
spanFolders.innerText = "Folders";
buttonFolders.appendChild(spanFolders);
const buttonLevels = document.createElement("button");
buttonLevels.type = "button";
navTag_3.appendChild(buttonLevels);
const imgLevels = document.createElement("img");
imgLevels.src = "./assets/icon-levels.svg";
buttonLevels.appendChild(imgLevels);
const spanLevels = document.createElement("span");
spanLevels.innerText = "Levels";
buttonLevels.appendChild(spanLevels);
const buttonAccounts = document.createElement("button");
buttonAccounts.type = "button";
navTag_3.appendChild(buttonAccounts);
const imgAccounts = document.createElement("img");
imgAccounts.src = "./assets/icon-accounts.svg";
buttonAccounts.appendChild(imgAccounts);
const spanAccounts = document.createElement("span");
spanAccounts.innerText = "Accounts";
buttonAccounts.appendChild(spanAccounts);
const buttonSecurity = document.createElement("button");
buttonSecurity.type = "button";
navTag_3.appendChild(buttonSecurity);
const imgSecurity = document.createElement("img");
imgSecurity.src = "./assets/icon-lock.svg";
buttonSecurity.appendChild(imgSecurity);
const spanSecurity = document.createElement("span");
spanSecurity.innerText = "Security";
buttonSecurity.appendChild(spanSecurity);

const toggleSidebar = () => {
  document.body.classList.toggle("open");
};
burgerEl.addEventListener("click", toggleSidebar);
