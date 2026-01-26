document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const btnMenus = document.querySelectorAll(".btn-menu");
    btnMenus.forEach(btn => {
        btn.addEventListener("click", () => {
            menu.classList.toggle("open");
        });
    });
});