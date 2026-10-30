
document.addEventListener("DOMContentLoaded", () => {

    // Loading screen
    const loader = document.getElementById("pageLoader");

    window.addEventListener("load", () => {
        loader.classList.add("loaded");
    });

    // Fallback if the load event has already fired
    if (document.readyState === "complete") {
        loader.classList.add("loaded");
    }

    // Mobile navigation
    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close menu after clicking a navigation link
    navigation.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navigation.classList.remove("open");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    // Dynamic copyright year
    document.getElementById("year").textContent =
        new Date().getFullYear();

    // Scroll reveal
    const revealElements = document.querySelectorAll(
        ".section-heading, .about-content, .work-intro, .project, .approach-content, .toolbox-content, .beyond-content, .contact-content"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        });

        revealElements.forEach(element => observer.observe(element));
    } else {
        revealElements.forEach(element => {
            element.classList.add("visible");
        });
    }

});
