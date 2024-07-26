const logoutBtn = document.querySelector(".logout");
const sideNavbar = document.querySelector(".side-navbar")

logoutBtn.addEventListener("click", (e) => {
    sideNavbar.classList. toggle("collapse");

})