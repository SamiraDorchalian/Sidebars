const sidebarBurger = document.querySelector(".sidebar-burger");
const sidebarNav = document.querySelector(".sidebar-nav");
const sidebarFooter = document.querySelector(".sidebar-footer");

const buttonHome = document.createElement("button");
buttonHome.type = "button";
sidebarNav.appendChild(buttonHome);
const imgHome = document.createElement("img");
imgHome.src = "./assets/icon-home.svg";
buttonHome.appendChild(imgHome);
const spanHome = document.createElement("span");
spanHome.innerText = "Home";
buttonHome.appendChild(spanHome);

const buttonSettings = document.createElement("button");
buttonSettings.type = "button";
sidebarNav.appendChild(buttonSettings);
const imgSettings = document.createElement("img");
imgSettings.src = "./assets/icon-settings.svg";
buttonSettings.appendChild(imgSettings);
const spanSettings = document.createElement("span");
spanSettings.innerText = "Settings";
buttonSettings.appendChild(spanSettings);

const buttonLevels = document.createElement("button");
buttonLevels.type = "button";
sidebarNav.appendChild(buttonLevels);
const imgLevels = document.createElement("img");
imgLevels.src = "./assets/icon-levels.svg";
buttonLevels.appendChild(imgLevels);
const spanLevels = document.createElement("span");
spanLevels.innerText = "Levels";
buttonLevels.appendChild(spanLevels);

const buttonAccounts = document.createElement("button");
buttonAccounts.type = "button";
sidebarNav.appendChild(buttonAccounts);
const imgAccounts = document.createElement("img");
imgAccounts.src = "./assets/icon-accounts.svg";
buttonAccounts.appendChild(imgAccounts);
const spanAccounts = document.createElement("span");
spanAccounts.innerText = "Accounts";
buttonAccounts.appendChild(spanAccounts);

const buttonLogout = document.createElement("button");
buttonLogout.type = "button";
sidebarFooter.appendChild(buttonLogout);
const imgLogout = document.createElement("img");
imgLogout.src = "./assets/icon-lock.svg";
buttonLogout.appendChild(imgLogout);
const spanLogout = document.createElement("span");
spanLogout.innerText = "Logout";
buttonLogout.appendChild(spanLogout);

const toggleSidebar = () => {
  document.body.classList.toggle("open");
};
sidebarBurger.addEventListener("click", toggleSidebar);
