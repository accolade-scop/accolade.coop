document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll("#categories .btn-categorie");
    const projects = document.querySelectorAll("#projects .project");

    categories.forEach(categorie => {
        categorie.style.cursor = "pointer";

        categorie.addEventListener("click", () => {
            const selectedCategorie = categorie.dataset.categorie;

            projects.forEach(project => {
                const projectCategories = project.dataset.categories.split(/\s*,\s*/);

                project.style.display = projectCategories.includes(selectedCategorie)
                    ? "block"
                    : "none";
            });
        });
    });
});