document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-slider]").forEach(container => {
        const parent = container.closest(".slider-component");
        const btnNext = parent.querySelector(".btn-next");
        const btnPrev = parent.querySelector(".btn-prev");
        const timeout = 2000;

        const items = [...container.children];
        console.log(items);
        const itemWidth = items[0].getBoundingClientRect().width + parseInt(getComputedStyle(container).gap || 0);
        let currentIndex = 0;
        const maxIndex = items.length - 5;
        const maxWidth = items.length * itemWidth;

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
                currentIndex = Math.round(container.clientWidth / itemWidth);
                console.log(currentIndex);
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