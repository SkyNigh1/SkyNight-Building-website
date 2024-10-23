document.addEventListener("DOMContentLoaded", function() {
    // Carousel
    let currentIndex = 0; // Index de l'image actuelle
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length; // Nombre total d'images
    const dots = document.querySelectorAll('.dot');

    function updateCarousel() {
        const offset = -currentIndex * 25; // 25% pour chaque image
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;

        // Mettre à jour les points
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentIndex) {
                dot.classList.add('active');
            }
        });
    }

    // Gérer le clic sur les points
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Gérer le défilement automatique (optionnel)
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages; // Passe à l'image suivante
        updateCarousel();
    }, 5000); // Change d'image toutes les 5 secondes

    updateCarousel(); // Initialiser le carousel

    // Modal
    const modal = document.getElementById("socialModal");
    const openModalBtn = document.querySelector(".remix-btn"); // Bouton Contact Me
    const closeModalBtn = document.querySelector(".close");

    // Ouvre la fenêtre modale quand on clique sur le bouton "Contact Me!"
    openModalBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        modal.style.display = "flex";
    });

    // Ferme la fenêtre modale quand on clique sur la croix (x)
    closeModalBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Ferme la fenêtre modale si on clique à l'extérieur de la boîte
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
