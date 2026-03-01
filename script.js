// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
    spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Scrolled state — add rich backdrop-filter class
    if (currentScroll > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Show / hide scroll-to-top button
    if (currentScroll > 400) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }

    lastScroll = currentScroll;
});

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', scrollToTop);
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !email || !message) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show sending message
    showFormMessage('Sending your message...', 'info');
    
    try {
        // Submit to Web3Forms
        const formData = new FormData(contactForm);
        
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        } else {
            showFormMessage('Oops! There was a problem sending your message. Please try again or contact us directly.', 'error');
        }
    } catch (error) {
        showFormMessage('Oops! There was a problem sending your message. Please try again or contact us directly.', 'error');
    }
});

// Form Message Display
function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
}

// Email Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Product Modal (Simple Alert - Can be enhanced with actual modal)
function openProductModal(productType) {
    const productGalleries = {
        'womens': {
            title: 'Women\'s Collection',
            images: [
                { url: 'https://shopanil.com/images/products/womens-collection/sarees.jpg', title: 'Sarees' },
                { url: 'https://shopanil.com/images/products/womens-collection/lehengas2.jpg', title: 'Lehengas' },
                { url: 'https://shopanil.com/images/products/womens-collection/kurtis.jpg', title: 'Kurtis' },
                { url: 'https://shopanil.com/images/products/womens-collection/suits.jpg', title: 'Suits' },
                { url: 'https://shopanil.com/images/products/womens-collection/pashminas.jpg', title: 'Pashminas' },
                { url: 'https://shopanil.com/images/products/womens-collection/scarves.jpg', title: 'Scarves' },
                { url: 'https://shopanil.com/images/products/womens-collection/skirts.jpg', title: 'Skirts' },
                { url: 'https://shopanil.com/images/products/womens-collection/jackets.jpg', title: 'Jackets' },
                { url: 'https://shopanil.com/images/products/womens-collection/cashmere-sweaters.jpg', title: 'Cashmere Sweaters' },
                { url: 'https://shopanil.com/images/products/womens-collection/handbags.jpg', title: 'Handbags' },
                { url: 'https://shopanil.com/images/products/womens-collection/artificial-jewellery.jpg', title: 'Artificial Jewellery' },
                { url: 'https://shopanil.com/images/products/womens-collection/perfumes.jpg', title: 'Perfumes' }
            ]
        },
        'mens': {
            title: 'Men\'s Collection',
            images: [
                { url: 'https://shopanil.com/images/products/mens-collection/modi-jacket.jpg', title: 'Modi Jacket' },
                { url: 'https://shopanil.com/images/products/mens-collection/shervani.jpg', title: 'Shervani' },
                { url: 'https://shopanil.com/images/products/mens-collection/kurta-pajama1.jpg', title: 'Kurta Pajama' },
                { url: 'https://shopanil.com/images/products/mens-collection/jodhpuri-suit.jpg', title: 'Jodhpuri Suit' },
                { url: 'https://shopanil.com/images/products/mens-collection/shirts3.jpg', title: 'Shirts' },
                { url: 'https://shopanil.com/images/products/mens-collection/indo-western.jpg', title: 'Indo Western' },
                { url: 'https://shopanil.com/images/products/mens-collection/cashmere-sweaters.jpg', title: 'Cashmere Sweaters' },
                { url: 'https://shopanil.com/images/products/mens-collection/ties.jpg', title: 'Ties' },
                { url: 'https://shopanil.com/images/products/mens-collection/tailor-made-suits-shirts-and-trousers.jpg', title: 'Tailor Made' }
            ]
        },
        'kids': {
            title: 'Kids Collection',
            images: [
                { url: 'https://shopanil.com/images/products/kids-clothing/boys-clothing.jpg', title: 'Boys Clothing' },
                { url: 'https://shopanil.com/images/products/kids-clothing/girls-clothing.jpg', title: 'Girls Clothing' },
                { url: 'https://shopanil.com/images/products/kids-clothing/girls-lehengas.jpg', title: 'Girls Lehengas' }
            ]
        },
        'traditional-art': {
            title: 'Traditional Art & Crafts',
            images: [
                { url: 'https://shopanil.com/images/products/handicrafts/paintings5.jpg', title: 'Mughal Paintings' },
                { url: 'https://shopanil.com/images/products/handicrafts/wood-carvings.jpg', title: 'Wood Carvings' },
                { url: 'https://shopanil.com/images/products/handicrafts/brass-art.jpg', title: 'Brass Art' },
                { url: 'https://shopanil.com/images/products/handicrafts/wall-masks.jpg', title: 'Wall Masks' }
            ]
        },
        'decorative-items': {
            title: 'Decorative Handicrafts',
            images: [
                { url: 'https://shopanil.com/images/products/handicrafts/statues6.jpg', title: 'Statues' },
                { url: 'https://shopanil.com/images/products/handicrafts/mughal-daggers.jpg', title: 'Mughal Daggers' },
                { url: 'https://shopanil.com/images/products/handicrafts/bone-boxes.jpg', title: 'Bone Boxes' },
                { url: 'https://shopanil.com/images/products/kids-clothing/bastar-art.jpg', title: 'Baster Art' },
                { url: 'https://shopanil.com/images/products/handicrafts/dolls.jpg', title: 'Dolls' },
                { url: 'https://shopanil.com/images/products/handicrafts/resin-figures.jpg', title: 'Resin Figures' },
                { url: 'https://shopanil.com/images/products/handicrafts/stone-figures.jpg', title: 'Stone Figures' },
                { url: 'https://shopanil.com/images/products/handicrafts/souvenirs.jpg', title: 'Souvenirs' }
            ]
        },
        'handicrafts': {
            title: 'Handicrafts',
            images: [
                { url: 'https://shopanil.com/images/products/handicrafts/paintings5.jpg', title: 'Paintings' },
                { url: 'https://shopanil.com/images/products/handicrafts/wood-carvings.jpg', title: 'Wood Carvings' },
                { url: 'https://shopanil.com/images/products/handicrafts/brass-art.jpg', title: 'Brass Art' },
                { url: 'https://shopanil.com/images/products/handicrafts/mughal-daggers.jpg', title: 'Mughal Daggers' },
                { url: 'https://shopanil.com/images/products/handicrafts/statues6.jpg', title: 'Statues' },
                { url: 'https://shopanil.com/images/products/handicrafts/bone-boxes.jpg', title: 'Bone Boxes' },
                { url: 'https://shopanil.com/images/products/kids-clothing/bastar-art.jpg', title: 'Baster Art' },
                { url: 'https://shopanil.com/images/products/handicrafts/dolls.jpg', title: 'Dolls' },
                { url: 'https://shopanil.com/images/products/handicrafts/resin-figures.jpg', title: 'Resin Figures' },
                { url: 'https://shopanil.com/images/products/handicrafts/stone-figures.jpg', title: 'Stone Figures' },
                { url: 'https://shopanil.com/images/products/handicrafts/wall-masks.jpg', title: 'Wall Masks' },
                { url: 'https://shopanil.com/images/products/handicrafts/souvenirs.jpg', title: 'Souvenirs' }
            ]
        },
        'furnishings': {
            title: 'Furnishings',
            images: [
                { url: 'https://shopanil.com/images/products/furnishings/bedsheet7.jpg', title: 'Bedsheets & Table Covers' },
                { url: 'https://shopanil.com/images/products/furnishings/cushion-covers.jpeg', title: 'Cushion Covers' },
                { url: 'https://shopanil.com/images/products/furnishings/quilts.jpg', title: 'Quilts' },
                { url: 'https://shopanil.com/images/products/furnishings/embroidery.jpg', title: 'Embroidery' },
                { url: 'https://shopanil.com/images/products/furnishings/fabrics.jpg', title: 'Fabrics' },
                { url: 'https://shopanil.com/images/products/furnishings/incense-sticks.jpg', title: 'Incense Sticks' }
            ]
        },
        'musical': {
            title: 'Musical Instruments',
            images: [
                { url: 'https://shopanil.com/images/products/musical-instruments.jpg', title: 'Tanpura' }
            ]
        },
        'tea-spices': {
            title: 'Tea & Spices',
            images: [
                { url: 'https://shopanil.com/images/products/teaandspices.jpg', title: 'Tea and Spices' }
            ]
        },
        'custom': {
            title: 'Tailor Made & Custom Orders',
            images: [
                { url: 'https://shopanil.com/images/products/mens-collection/tailor-made-suits-shirts-and-trousers.jpg', title: 'Custom Tailoring' }
            ]
        }
    };
    
    const gallery = productGalleries[productType];
    if (gallery) {
        openGallery(gallery.title, gallery.images);
    }
}

// Open Image Gallery Modal
function openGallery(title, images) {
    const modal = document.getElementById('imageGalleryModal');
    const galleryTitle = document.getElementById('galleryTitle');
    const galleryGrid = document.getElementById('galleryGrid');
    
    galleryTitle.textContent = title;
    galleryGrid.innerHTML = '';
    
    images.forEach(img => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const imgElement = document.createElement('img');
        imgElement.alt = img.title;
        imgElement.loading = 'lazy';
        
        // Try to load the image, if it fails, use a fallback
        imgElement.onerror = function() {
            // Create a styled placeholder
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.innerHTML = `
                <div class="placeholder-icon">🖼️</div>
                <div class="placeholder-text">${img.title}</div>
            `;
            this.parentElement.appendChild(placeholder);
        };
        
        imgElement.src = img.url;
        
        const titleDiv = document.createElement('div');
        titleDiv.className = 'gallery-item-title';
        titleDiv.textContent = img.title;
        
        item.appendChild(imgElement);
        item.appendChild(titleDiv);
        galleryGrid.appendChild(item);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Image Gallery Modal
function closeGallery() {
    const modal = document.getElementById('imageGalleryModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('imageGalleryModal');
    if (event.target === modal) {
        closeGallery();
    }
}

// Image Carousel
let currentSlide = 0;
const totalSlides = 8;

function initCarousel() {
    const dotsContainer = document.getElementById('carouselDots');
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot';
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    // Auto-advance carousel every 4 seconds
    setInterval(() => {
        moveCarousel(1);
    }, 4000);
}

function moveCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all product cards, review cards, and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.product-card, .review-card, .about-content, .contact-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Active Navigation Link Highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--primary-color)';
        }
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Anil Handicrafts website loaded successfully!');
    
    // Add fade-in effect to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease';
    }
    
    // Initialize carousel
    initCarousel();
    
    // Initialize reviews carousel
    initReviewsCarousel();
});

// Reviews Carousel
let currentReviewsSlide = 0;
const totalReviewsSlides = 4;

function initReviewsCarousel() {
    const dotsContainer = document.getElementById('reviewsCarouselDots');
    for (let i = 0; i < totalReviewsSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'reviews-carousel-dot';
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToReviewsSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    // Auto-advance reviews carousel every 5 seconds
    setInterval(() => {
        moveReviewsCarousel(1);
    }, 5000);
}

function moveReviewsCarousel(direction) {
    const track = document.querySelector('.reviews-carousel-track');
    currentReviewsSlide += direction;
    
    if (currentReviewsSlide < 0) {
        currentReviewsSlide = totalReviewsSlides - 1;
    } else if (currentReviewsSlide >= totalReviewsSlides) {
        currentReviewsSlide = 0;
    }
    
    updateReviewsCarousel();
}

function goToReviewsSlide(index) {
    currentReviewsSlide = index;
    updateReviewsCarousel();
}

function updateReviewsCarousel() {
    const track = document.querySelector('.reviews-carousel-track');
    track.style.transform = `translateX(-${currentReviewsSlide * 100}%)`;
    
    // Update dots
    const dots = document.querySelectorAll('.reviews-carousel-dot');
    dots.forEach((dot, index) => {
        if (index === currentReviewsSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Handle image loading errors
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        // Set a placeholder or default image if the image fails to load
        this.style.background = 'linear-gradient(135deg, #8B4513, #DAA520)';
        this.style.minHeight = '200px';
        this.alt = 'Image coming soon';
    });
});
