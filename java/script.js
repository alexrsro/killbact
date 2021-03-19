const menu = document.querySelector("nav__ul");
const menuBtn = document.querySelector("check");
const cancelBtn = document.querySelector("menu-list");
menuBtn.onclick = () => {
    menu.classList.add('active')
}
menuBtn.onclick = () => {
    menu.classList.remove('active')
}