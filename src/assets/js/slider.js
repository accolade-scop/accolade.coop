document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-slider]").forEach(container => {
        const parent = container.closest(".slider");
        const btnNext = parent.querySelector(".btn-next");
        const btnPrev = parent.querySelector(".btn-prev");
        const timeout = 2000;

        const items = [...container.children];
        if (items.length === 0) return;

        const getGap = () => {
            const gap = parseInt(getComputedStyle(container).gap);
            return isNaN(gap) ? 0 : gap;
        };

        let itemWidth = items[0].getBoundingClientRect().width + getGap();
        let currentIndex = 0;
        let maxWidth = items.length * itemWidth;

        // ******************************************************
        // Cache les flèches si la taille des projets ne dépasse pas la largeur du slider
        // ******************************************************
        function updateSliderState() {
            // recalcul des mesures
            const newItemWidth = items[0].getBoundingClientRect().width + getGap();
            const newMaxWidth = items.length * newItemWidth;

            itemWidth = newItemWidth;
            maxWidth = newMaxWidth;

            const nav = parent.querySelector(".slider__nav");
            if (nav) {
                maxWidth <= container.clientWidth ? nav.style.display = "none" : nav.style.display = "";
            }
        }

        updateSliderState();

        let resizeRunning = false;

        window.addEventListener("resize", () => {
            if (resizeRunning) return;
            resizeRunning = true;

            requestAnimationFrame(() => {
                updateSliderState();
                resizeRunning = false;
            });
        });



        // Navigation
        function goNext() {
            if (currentIndex * itemWidth + container.clientWidth < maxWidth) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            container.scrollLeft = currentIndex * itemWidth;
        }

        function goPrev() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = Math.max(0, items.length - Math.floor(container.clientWidth / itemWidth));
            }
            container.scrollLeft = currentIndex * itemWidth;
        }

        btnNext.addEventListener("click", goNext);
        btnPrev.addEventListener("click", goPrev);

        // Autoplay
        let auto = setInterval(goNext, timeout);
        parent.addEventListener("mouseenter", () => clearInterval(auto));
        parent.addEventListener("mouseleave", () => auto = setInterval(goNext, timeout));
    });
});