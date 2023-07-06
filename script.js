document.querySelector(".burger").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".nav-menu__list").classList.toggle("open");
    console.log("test");
});
