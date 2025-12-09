document.addEventListener("DOMContentLoaded", () => {
    const tags = document.querySelectorAll("#tags .btn-tag");
    const projects = document.querySelectorAll("#projects .project");

    tags.forEach(tag => {
        tag.style.cursor = "pointer";

        tag.addEventListener("click", () => {
            const selectedTag = tag.dataset.tag;

            projects.forEach(project => {
                const projectTags = project.dataset.tags.split(/\s*,\s*/);

                project.style.display = projectTags.includes(selectedTag)
                    ? "block"
                    : "none";
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const btnMenus = document.querySelectorAll(".btn-menu");
    console.log(menu);
    btnMenus.forEach(btn => {
        btn.addEventListener("click", () => {
            menu.classList.toggle("open");
        });
    });
});