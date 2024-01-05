const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialLists = document.querySelector(".social-lists");
const liEls = document.querySelectorAll(".social-lists li");

const funEl_two = () => {
  socialLists.classList.toggle("hide");
  menuEl.classList.toggle("rotate");
};
const funEL_one = () => {
  menuTextEl.innerHTML = liEls.innerHTML;
  socialLists.classList.add("hide");
  menuEl.classList.toggle("rotate");
};

liEls.forEach((liEls) => {
  liEls.addEventListener("click", funEL_one);
});

menuEl.addEventListener("click", funEl_two);
