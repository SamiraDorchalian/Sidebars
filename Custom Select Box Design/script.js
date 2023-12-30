var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
//li
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrowIcon");

// selectField.onclick = function(){
//     list.classList.toggle("hide");
//     arrowIcon.classList.toggle("rotate");
// }
const selectFieldHandler = () => {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};
selectField.addEventListener("click", selectFieldHandler);

// for (option of options) {
//   option.onclick = () => {
//     selectText.innerHTML = this.textContent;
//     list.classList.toggle("hide");
//     arrowIcon.classList.toggle("rotate");
//   };
// }
for (option of options) {
  option.addEventListener("click", options);
}
const optionsHandler = () => {
  selectText.innerHTML = this.textContent;
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};
