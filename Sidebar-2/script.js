const burgerEl = document.querySelector(".burger");
const sidebarEl = document.querySelector(".sidebar");

const sidebarAvatar = document.createElement("img");
sidebarAvatar.classList = "sidebar-avatar";
sidebarAvatar.src = "./assets/download.jpg";
sidebarEl.appendChild(sidebarAvatar);
const sidebarUsername = document.createElement("div");
sidebarUsername.classList = "sidebar-username";
sidebarUsername.innerText = "kim taehyung";
sidebarEl.appendChild(sidebarUsername);
const sidebarRole = document.createElement("div");
sidebarRole.classList = "sidebar-role";
sidebarRole.innerText = "Singer";
sidebarEl.appendChild(sidebarRole);

const sidebarMenu = document.createElement("nav");
sidebarMenu.classList = "sidebar-menu";
sidebarEl.appendChild(sidebarMenu);
const button_1 = document.createElement("button");
button_1.type = "button";
sidebarMenu.appendChild(button_1);
const img_1 = document.createElement("img");
img_1.src = "./assets/icon-home.svg";
button_1.appendChild(img_1);
const spanTag_1 = document.createElement("span");
spanTag_1.innerText = "Home";
button_1.appendChild(spanTag_1);
const button_2 = document.createElement("button");
button_2.type = "button";
sidebarMenu.appendChild(button_2);
const img_2 = document.createElement("img");
img_2.src = "./assets/icon-settings.svg";
button_2.appendChild(img_2);
const spanTag_2 = document.createElement("span");
spanTag_2.innerText = "Settings";
button_2.appendChild(spanTag_2);
const button_3 = document.createElement("button");
button_3.type = "button";
sidebarMenu.appendChild(button_3);
const img_3 = document.createElement("img");
img_3.src = "./assets/icon-accounts.svg";
button_3.appendChild(img_3);
const spanTag_3 = document.createElement("span");
spanTag_3.innerText = "Profile";
button_3.appendChild(spanTag_3);

const sidebarMenuBottom = document.createElement("nav");
sidebarMenuBottom.classList = "sidebar-menu bottom";
sidebarEl.appendChild(sidebarMenuBottom);
const button_4 = document.createElement("button");
button_4.type = "button";
sidebarMenuBottom.appendChild(button_4);
const img_4 = document.createElement("img");
img_4.src = "./assets/icon-lock.svg";
button_4.appendChild(img_4);
const spanTag_4 = document.createElement("span");
spanTag_4.innerText = "Sign Out";
button_4.appendChild(spanTag_4);

const toggleSidebar = () => {
  document.body.classList.toggle("open");
};

burgerEl.addEventListener("click", toggleSidebar);
