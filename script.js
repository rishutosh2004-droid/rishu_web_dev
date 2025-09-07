// script.js

// Smooth Scrolling for nav links
console.log("✅ JavaScript is running!");

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith("#")) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Menu Toggle (for smaller screens)
const menuItems = document.querySelectorAll('.menu > li');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        let dropdown = item.querySelector('.dropdown');
        if (dropdown) {
            dropdown.classList.toggle('show');
        }
    });
});

// Gallery Lightbox
const galleryImages = document.querySelectorAll('.gallery img');

// Create Lightbox container
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        const fullImg = document.createElement('img');
        fullImg.src = img.src;
        // Clear old images
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(fullImg);
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});
