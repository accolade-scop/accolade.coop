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