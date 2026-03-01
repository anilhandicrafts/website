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
        'fine-art': {
            title: 'Miniature Paintings & Fine Art',
            images: [
                { url: 'https://shopanil.com/images/products/handicrafts/paintings5.jpg', title: 'Mughal Miniature Paintings' },
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/09/TP-2-sq.jpg', title: 'Swarn Krishna — Thangka Painting' },
                { url: 'https://shopanil.com/images/products/handicrafts/wood-carvings.jpg', title: 'Wood Carvings' },
                { url: 'https://shopanil.com/images/products/handicrafts/brass-art.jpg', title: 'Brass Art' },
                { url: 'https://shopanil.com/images/products/handicrafts/wall-masks.jpg', title: 'Wall Masks' },
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/08/MB-1-sq.jpg', title: 'Royal Indian Lady — Rajasthani Craft' }
            ]
        },
        'divine-collection': {
            title: 'Sacred & Divine Collection',
            images: [
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/09/MG-3-sq.jpg', title: 'Ganesha — Makrana Marble' },
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/11/MG-51-sq.jpg', title: 'Sadashiv Shiva — Marble' },
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/09/MG-9-sq.jpg', title: 'Veer Hanuman Ji — Marble' },
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/09/MG-22-sq.jpg', title: 'Saraswati Maa on Lotus' },
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/09/MG-23-sq.jpg', title: 'Durga Maa — Marble' },
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/11/MG-32-sq.jpg', title: 'Sai Baba — Marble' },
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/11/MD-5-sq.jpg', title: 'Nostalgic Saraswati — Marble Dust' },
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/09/MG-16-sq.jpg', title: 'Radha Krishna Ras — Marble' },
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/09/WS-1-sq.jpg', title: 'Rakshak Ganesh — Wood' },
                { url: 'https://shopanil.com/images/products/handicrafts/statues6.jpg', title: 'Statues' },
                { url: 'https://shopanil.com/images/products/handicrafts/stone-figures.jpg', title: 'Stone Figures' }
            ]
        },
        'curators-treasure': {
            title: "Curator's Treasure",
            images: [
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/09/CB-6-sq.jpg', title: 'Elephant with Miniature Painting' },
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/09/CB-1-sq.jpg', title: 'Mughal Chest' },
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/08/MB-1-sq.jpg', title: 'Royal Indian Lady — Rajasthani Craft' },
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/09/TP-2-sq.jpg', title: 'Swarn Krishna — Thangka Painting' },
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/12/BR-27-sq.jpg', title: 'Kalpavriksha Radha Krishna — Brass' },
                { url: 'https://shopanil.com/images/products/handicrafts/mughal-daggers.jpg', title: 'Mughal Daggers' },
                { url: 'https://shopanil.com/images/products/handicrafts/bone-boxes.jpg', title: 'Bone Inlay Boxes' },
                { url: 'https://shopanil.com/images/products/handicrafts/dolls.jpg', title: 'Traditional Dolls' }
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
            title: 'Home Decor & Furnishings',
            images: [
                { url: 'https://shopanil.com/images/products/furnishings/bedsheet7.jpg', title: 'Bedsheets & Table Covers' },
                { url: 'https://shopanil.com/images/products/furnishings/cushion-covers.jpeg', title: 'Cushion Covers' },
                { url: 'https://shopanil.com/images/products/furnishings/quilts.jpg', title: 'Quilts' },
                { url: 'https://shopanil.com/images/products/furnishings/embroidery.jpg', title: 'Embroidery' },
                { url: 'https://shopanil.com/images/products/furnishings/fabrics.jpg', title: 'Fabrics' },
                { url: 'https://shopanil.com/images/products/furnishings/incense-sticks.jpg', title: 'Incense Sticks' }
            ]
        },
        'home-decor': {
            title: 'Home Decor & Furnishings',
            images: [
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/09/MF-14-sq-1.jpg', title: 'Lady with Parrot — Brass' },
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/11/BR-7-sq.jpg', title: 'Rustic Buddha — Brass' },
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/11/BR-4-sq.jpg', title: 'Medicine Buddha — Brass & Stone' },
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/12/BR-27-sq.jpg', title: 'Kalpavriksha Radha Krishna — Brass' },
                { url: 'https://kuberhandicraft.com/wp-content/uploads/2019/11/BR-13-sq.jpg', title: 'Parrot Lamp (Vilakku) — Brass' },
                { url: 'https://shopanil.com/images/products/furnishings/bedsheet7.jpg', title: 'Bedsheets & Table Covers' },
                { url: 'https://shopanil.com/images/products/furnishings/cushion-covers.jpeg', title: 'Cushion Covers' },
                { url: 'https://shopanil.com/images/products/furnishings/quilts.jpg', title: 'Quilts' },
                { url: 'https://shopanil.com/images/products/furnishings/embroidery.jpg', title: 'Embroidery' },
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
                { url: 'https://shopanil.com/images/products/teaandspices.jpg', title: 'Anil Handicrafts — Tea & Spices' },
                { url: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80', title: 'Premium Darjeeling Tea' },
                { url: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80', title: 'Assam Herbal Blend' },
                { url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80', title: 'Masala Chai — Spiced Indian Tea' },
                { url: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=600&q=80', title: 'Fresh Tea Leaves' },
                { url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80', title: 'Colourful Indian Spices' },
                { url: 'https://images.unsplash.com/photo-1505253304499-671c55fb57fe?w=600&q=80', title: 'Authentic Spice Market' }
            ]
        },
        'custom': {
            title: 'Tailor Made & Custom Orders',
            images: [
                { url: 'https://shopanil.com/images/products/mens-collection/tailor-made-suits-shirts-and-trousers.jpg', title: 'Tailor Made Suits, Shirts & Trousers' },
                { url: 'https://shopanil.com/images/products/mens-collection/shervani.jpg', title: 'Custom Sherwani' },
                { url: 'https://shopanil.com/images/products/mens-collection/jodhpuri-suit.jpg', title: 'Custom Jodhpuri Suit' },
                { url: 'https://shopanil.com/images/products/mens-collection/kurta-pajama1.jpg', title: 'Custom Kurta Pajama' },
                { url: 'https://shopanil.com/images/products/mens-collection/indo-western.jpg', title: 'Indo Western — Made to Measure' },
                { url: 'https://shopanil.com/images/products/womens-collection/suits.jpg', title: 'Custom Ladies Suits' },
                { url: 'https://shopanil.com/images/products/womens-collection/lehengas2.jpg', title: 'Custom Lehenga' },
                { url: 'https://shopanil.com/images/products/womens-collection/kurtis.jpg', title: 'Custom Kurtis' },
                { url: 'https://shopanil.com/images/products/womens-collection/jackets.jpg', title: 'Custom Embroidered Jackets' },
                { url: 'https://shopanil.com/images/products/mens-collection/modi-jacket.jpg', title: 'Custom Modi Jacket' }
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

        // Click anywhere on the gallery item to open lightbox
        item.addEventListener('click', () => {
            openLightbox(img.url, img.title);
        });
        item.style.cursor = 'zoom-in';
        
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

// Open Image Lightbox
function openLightbox(src, title) {
    const lb = document.getElementById('imageLightbox');
    const lbImg = document.getElementById('lightboxImg');
    const lbCaption = document.getElementById('lightboxCaption');

    lbImg.src = src;
    lbImg.alt = title;
    lbCaption.textContent = title;

    lb.classList.add('active');
    // Gallery modal stays behind; lightbox is higher z-index
}

// Close Lightbox
function closeLightbox() {
    const lb = document.getElementById('imageLightbox');
    lb.classList.remove('active');
}

// Close lightbox when clicking outside the content box
function handleLightboxOutsideClick(event) {
    if (event.target === document.getElementById('imageLightbox')) {
        closeLightbox();
    }
}

// Escape key closes lightbox first, then gallery
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const lb = document.getElementById('imageLightbox');
        if (lb && lb.classList.contains('active')) {
            closeLightbox();
        } else {
            closeGallery();
        }
    }
});

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
