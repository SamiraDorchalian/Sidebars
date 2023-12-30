const sidebarBurger = document.querySelector(".sidebar-burger");
const sidebarMenu = document.querySelector(".sidebar-menu");
// sidebarMenu.innerHTML = `
//     <button type="button">
//         <img src="./assets/icon-home.svg">
//         <span>Home</span>
//     </button>
//     <button type="button" class="has-border">
//         <img src="./assets/icon-settings.svg">
//         <span>Settings</span>
//     </button>
//     <button type="button">
//         <img src="./assets/icon-blockchain.svg">
//         <span>Blockchick</span>
//     </button>
//     <button type="button">
//         <img src="./assets/icon-database.svg">
//         <span>DataRiver</span>
//     </button>
//     <button type="button">
//         <img src="./assets/icon-speaker.svg">
//         <span>AudioVibe</span>
//     </button>
//     <button type="button">
//         <img src="./assets/icon-acoustic.svg">
//         <span>SoundBlast</span>
//     </button>
//     <button type="button">
//         <img src="./assets/icon-folders.svg">
//         <span>Folders</span>
//     </button>
//     <button type="button">
//         <img src="./assets/icon-levels.svg">
//         <span>Levels</span>
//     </button>
//     <button type="button">
//         <img src="./assets//icon-accounts.svg">
//         <span>Accounts</span>
//     </button>
//     <button type="button">
//         <img src="./assets/icon-lock.svg">
//         <span>Security</span>
//     </button>
// `;
const buttonTag_1 = document.createElement("button");
buttonTag_1.type = "button";
sidebarMenu.appendChild(buttonTag_1);
const imgTag_1 = document.createElement("img");
imgTag_1.src = "./assets/icon-home.svg";
buttonTag_1.appendChild(imgTag_1);
const spanTag_1 = document.createElement("span");
spanTag_1.innerText = "Home";
buttonTag_1.appendChild(spanTag_1);

const buttonTag_2 = document.createElement("button");
buttonTag_2.type = "button";
sidebarMenu.appendChild(buttonTag_2);
const imgTag_2 = document.createElement("img");
imgTag_2.src = "./assets/icon-settings.svg";
buttonTag_2.appendChild(imgTag_2);
const spanTag_2 = document.createElement("span");
spanTag_2.innerText = "Settings";
buttonTag_2.appendChild(spanTag_2);

const buttonTag_3 = document.createElement("button");
buttonTag_3.type = "button";
sidebarMenu.appendChild(buttonTag_3);
const imgTag_3 = document.createElement("img");
imgTag_3.src = "./assets/icon-blockchain.svg";
buttonTag_3.appendChild(imgTag_3);
const spanTag_3 = document.createElement("span");
spanTag_3.innerText = "Blockchick";
buttonTag_3.appendChild(spanTag_3);

const buttonTag_4 = document.createElement("button");
buttonTag_4.type = "button";
sidebarMenu.appendChild(buttonTag_4);
const imgTag_4 = document.createElement("img");
imgTag_4.src = "./assets/icon-database.svg";
buttonTag_4.appendChild(imgTag_4);
const spanTag_4 = document.createElement("span");
spanTag_4.innerText = "DataRiver";
buttonTag_4.appendChild(spanTag_4);

const buttonTag_5 = document.createElement("button");
buttonTag_5.type = "button";
sidebarMenu.appendChild(buttonTag_5);
const imgTag_5 = document.createElement("img");
imgTag_5.src = "./assets/icon-speaker.svg";
buttonTag_5.appendChild(imgTag_5);
const spanTag_5 = document.createElement("span");
spanTag_5.innerText = "AudioVibe";
buttonTag_5.appendChild(spanTag_5);

const buttonTag_6 = document.createElement("button");
buttonTag_6.type = "button";
sidebarMenu.appendChild(buttonTag_6);
const imgTag_6 = document.createElement("img");
imgTag_6.src = "./assets/icon-acoustic.svg";
buttonTag_6.appendChild(imgTag_6);
const spanTag_6 = document.createElement("span");
spanTag_6.innerText = "SoundBlast";
buttonTag_6.appendChild(spanTag_6);

const buttonTag_7 = document.createElement("button");
buttonTag_7.type = "button";
sidebarMenu.appendChild(buttonTag_7);
const imgTag_7 = document.createElement("img");
imgTag_7.src = "./assets/icon-folders.svg";
buttonTag_7.appendChild(imgTag_7);
const spanTag_7 = document.createElement("span");
spanTag_7.innerText = "Folders";
buttonTag_7.appendChild(spanTag_7);

const buttonTag_8 = document.createElement("button");
buttonTag_8.type = "button";
sidebarMenu.appendChild(buttonTag_8);
const imgTag_8 = document.createElement("img");
imgTag_8.src = "./assets/icon-levels.svg";
buttonTag_8.appendChild(imgTag_8);
const spanTag_8 = document.createElement("span");
spanTag_8.innerText = "Levels";
buttonTag_8.appendChild(spanTag_8);

const buttonTag_9 = document.createElement("button");
buttonTag_9.type = "button";
sidebarMenu.appendChild(buttonTag_9);
const imgTag_9 = document.createElement("img");
imgTag_9.src = "./assets//icon-accounts.svg";
buttonTag_9.appendChild(imgTag_9);
const spanTag_9 = document.createElement("span");
spanTag_9.innerText = "Accounts";
buttonTag_9.appendChild(spanTag_9);

const buttonTag_10 = document.createElement("button");
buttonTag_10.type = "button";
sidebarMenu.appendChild(buttonTag_10);
const imgTag_10 = document.createElement("img");
imgTag_10.src = "./assets/icon-lock.svg";
buttonTag_10.appendChild(imgTag_10);
const spanTag_10 = document.createElement("span");
spanTag_10.innerText = "Security";
buttonTag_10.appendChild(spanTag_10);

const toggleSidebar = () => {
  document.body.classList.toggle("open");
};
sidebarBurger.addEventListener("click", toggleSidebar);
