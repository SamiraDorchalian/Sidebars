const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialLists = document.querySelector(".social-lists");
const liEls = document.querySelectorAll(".social-lists li");

menuEl.addEventListener("click", () => {
    socialLists.classList.toggle("hide");
    menuEl.classList.toggle("rotate");
});

liEls.forEach(liEls =>{
    liEls.addEventListener("click", ()=>{
        menuTextEl.innerHTML = liEls.innerHTML;
        socialLists.classList.add("hide");
        menuEl.classList.toggle("rotate");
    })
})