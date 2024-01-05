const contentInner = document.querySelector(".content-inner");

const divTagHome = document.createElement("div");
contentInner.appendChild(divTagHome);
const h2TagHome = document.createElement("h2");
h2TagHome.innerText = "Home";
divTagHome.appendChild(h2TagHome);
const pTagHome = document.createElement("p");
pTagHome.innerText =
  "This is the tab content, you can put anything you like in here.";
divTagHome.appendChild(pTagHome);

const divTagAccount = document.createElement("div");
contentInner.appendChild(divTagAccount);
const h2TagAccount = document.createElement("h2");
h2TagAccount.innerText = "Account";
divTagAccount.appendChild(h2TagAccount);
const pTagAccount = document.createElement("p");
pTagAccount.innerText =
  "This is the tab content, you can put anything you like in here.";
divTagAccount.appendChild(pTagAccount);

const divTagSettings = document.createElement("div");
contentInner.appendChild(divTagSettings);
const h2TagSettings = document.createElement("h2");
h2TagSettings.innerText = "Settings";
divTagSettings.appendChild(h2TagSettings);
const pTagSettings = document.createElement("p");
pTagSettings.innerText =
  "This is the tab content, you can put anything you like in here.";
divTagSettings.appendChild(pTagSettings);
