// ============================================
// DESI MITTI - JAVASCRIPT
// Interactive functionality and WhatsApp integration
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeWhatsAppButton();
    initializeSmoothScroll();
    initializeNavigation();
    initializeAnimations();
});

// ============================================
// WhatsApp Button Integration
// ============================================

function initializeWhatsAppButton() {
    const whatsappButton = document.getElementById('whatsappBtn');
    const whatsappNumber = '+977 9827308423';
    const whatsappNumberClean = '9779827308423'; // WhatsApp format without + and spaces
    
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function(e) {
            e.preventDefault();
            openWhatsApp(whatsappNumberClean);
        });
    }
}

function openWhatsApp(phoneNumber) {
    // Determine if user is on mobile or desktop
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Create WhatsApp message with pre-filled text
    const message = encodeURIComponent("Hi, I'm interested in ordering kulhads from Desi Mitti!");
    
    let whatsappUrl;
    
    if (isMobile) {
        // Mobile WhatsApp app
        whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    } else {
        // Desktop/Web WhatsApp
        whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    }
    
    // Open WhatsApp
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
                // Remove active state from all links
                navLinks.forEach(l => l.style.color = '');
                
                // Add active state to clicked link
                this.style.color = 'var(--primary-brown)';
                
                // Scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Reset link color after scroll
                setTimeout(() => {
                    this.style.color = '';
                }, 500);
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
            const sectionHeight = section.clientHeight;
            
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
    // Observe elements for animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Animate product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
        item.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(item);
    });
}

// ============================================
// Add to Cart Button Functionality
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show feedback
            const originalText = this.textContent;
            this.textContent = 'Added to Cart! 🛒';
            this.style.backgroundColor = 'var(--primary-brown)';
            
            // Play a subtle animation
            this.style.transform = 'scale(1.05)';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.transform = 'scale(1)';
                this.style.backgroundColor = '';
            }, 2000);
        });
    });
});

// ============================================
// Shop Now Button
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const shopNowButton = document.querySelector('.hero-button');
    
    if (shopNowButton) {
        shopNowButton.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll to products section
            const productsSection = document.querySelector('#products');
            if (productsSection) {
                productsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});

// ============================================
// Sticky Navigation Styling
// ============================================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});

// ============================================
// Utility Functions
// ============================================

/**
 * Format phone number to WhatsApp standard
 */
function formatPhoneForWhatsApp(phone) {
    // Remove all non-numeric characters
    const cleaned = phone.replace(/\D/g, '');
    
    // Add country code if not present
    if (!cleaned.startsWith('977')) {
        return '977' + cleaned;
    }
    
    return cleaned;
}

/**
 * Create WhatsApp share link
 */
function createWhatsAppLink(phoneNumber, message = '') {
    const cleanPhone = formatPhoneForWhatsApp(phoneNumber);
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Copy to clipboard functionality
 */
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Copied to clipboard: ' + text);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
}

/**
 * Log page analytics
 */
function logPageEvent(eventName, eventData = {}) {
    console.log(`Event: ${eventName}`, eventData);
    // This can be extended to send data to analytics services
}

// ============================================
// Accessibility Enhancements
// ============================================

// Keyboard navigation support
document.addEventListener('keydown', function(event) {
    // Press '?' for help (optional)
    if (event.key === '?') {
        console.log('Keyboard shortcuts available');
    }
    
    // Press 'w' to open WhatsApp (optional shortcut)
    if (event.key === 'w' && event.ctrlKey) {
        event.preventDefault();
        openWhatsApp('9779827308423');
    }
});

// ============================================
// Performance Monitoring
// ============================================

// Log when page is fully loaded
window.addEventListener('load', function() {
    console.log('Desi Mitti website fully loaded');
    logPageEvent('page_load', {
        timestamp: new Date(),
        title: document.title
    });
});

// ============================================
// Service Worker Registration (Optional for PWA)
// ============================================

if ('serviceWorker' in navigator) {
    // Uncomment the following line to enable service worker
    // navigator.serviceWorker.register('sw.js').then(registration => {
    //     console.log('Service Worker registered');
    // }).catch(error => {
    //     console.log('Service Worker registration failed:', error);
    // });
}

// ============================================
// External Link Tracking
// ============================================

document.addEventListener('click', function(e) {
    // Track clicks on external links
    if (e.target.tagName === 'A' && e.target.hostname !== window.location.hostname) {
        logPageEvent('external_link_click', {
            url: e.target.href,
            target: e.target.textContent
        });
    }
});
