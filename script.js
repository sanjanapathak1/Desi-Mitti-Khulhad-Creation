// ============================================
// DESI MITTI - JAVASCRIPT
// Interactive functionality and WhatsApp integration
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeWhatsAppButton();
    initializeBuyNowButtons();
    initializeSmoothScroll();
    initializeNavigation();
    initializeAnimations();
    initializeShopNowButton();
});

// ============================================
// FLOATING WHATSAPP BUTTON
// ============================================

function initializeFloatingWhatsapp() {
    const floatingBtn = document.getElementById('floatingWhatsapp');
    const phoneNumber = '9779827308423';
    
    if (floatingBtn) {
        floatingBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const message = encodeURIComponent("Hi! I'd like to know more about your kulhads.");
            openWhatsApp(phoneNumber, message);
        });
    }
}

// ============================================
// CONTACT US BUTTON IN HERO
// ============================================

function initializeContactButton() {
    const contactBtn = document.querySelector('.hero-button.secondary');
    const phoneNumber = '9779827308423';
    
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const message = encodeURIComponent("Hi Desi Mitti! I have a question about your products.");
            openWhatsApp(phoneNumber, message);
        });
    }
}

// Add these to your DOMContentLoaded:
document.addEventListener('DOMContentLoaded', function() {
    // Existing initializations...
    initializeFloatingWhatsapp();
    initializeContactButton();
});

// ============================================
// WhatsApp Button Integration
// ============================================

function initializeWhatsAppButton() {
    const whatsappButton = document.getElementById('whatsappBtn');
    const whatsappNumberClean = '9779827308423';
    
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function(e) {
            e.preventDefault();
            const message = encodeURIComponent("Hi, I'm interested in ordering kulhads from Desi Mitti!");
            openWhatsApp(whatsappNumberClean, message);
        });
    }
}

// ============================================
// Buy Now Button Integration
// ============================================

function initializeBuyNowButtons() {
    const buyNowButtons = document.querySelectorAll('.buy-now-btn');
    
    buyNowButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const phoneNumber = this.getAttribute('data-phone');
            
            // Get product name from the same card
            const productCard = this.closest('.product-card');
            const productName = productCard ? productCard.querySelector('.product-name').textContent : 'Kulhad';
            
            const message = encodeURIComponent(`Hi, I'm interested in buying "${productName}" from Desi Mitti. Please share details.`);
            openWhatsApp(phoneNumber, message);
        });
    });
}

function openWhatsApp(phoneNumber, message) {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let whatsappUrl;
    
    if (isMobile) {
        whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    } else {
        whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    }
    
    window.open(whatsappUrl, '_blank');
}

// ============================================
// Smooth Scrolling Navigation
// ============================================

function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// Navigation Active State on Scroll
// ============================================

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href').slice(1) === current) {
                link.style.color = 'var(--primary-brown)';
            }
        });
    });
}

// ============================================
// Scroll Animations
// ============================================

function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        observer.observe(card);
    });
    
    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        observer.observe(card);
    });
    
    // Observe gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        observer.observe(item);
    });
}

// ============================================
// Shop Now Button
// ============================================

function initializeShopNowButton() {
    const shopNowButton = document.querySelector('.hero-button');
    
    if (shopNowButton) {
        shopNowButton.addEventListener('click', function(e) {
            e.preventDefault();
            const productsSection = document.querySelector('#products');
            if (productsSection) {
                productsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// ============================================
// Sticky Navigation Shadow
// ============================================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
        }
    }
});


// ============================================
// SCROLL ANIMATIONS
// ============================================

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Keep observing to re-trigger if needed
                // observer.unobserve(entry.target); // Remove this line to keep re-triggering
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatableElements = document.querySelectorAll([
        '.product-card',
        '.feature-card',
        '.gallery-item',
        '.tradition-image',
        '.tradition-text',
        '.ready-title',
        '.ready-subtitle',
        '.whatsapp-button',
        '.section-title'
    ].join(','));

    animatableElements.forEach(el => {
        observer.observe(el);
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeScrollAnimations();
});