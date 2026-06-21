// ===== BACK TO TOP BUTTON =====
const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== NEWSLETTER FORM =====
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with ${email}! Check your inbox for updates.`);
        newsletterForm.reset();
    });
}

// ===== TESTIMONIALS SLIDER =====
const sliderContainer = document.querySelector('.testimonials-slider-container');
const slider = document.querySelector('.testimonials-slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (slider && sliderContainer) {
    // Slider functionality
    let scrollAmount = 0;
    const cardWidth = 330; // card width + gap
    const visibleCards = 4;
    
    function updateSliderButtons() {
        const maxScroll = slider.scrollWidth - sliderContainer.clientWidth;
        prevBtn.disabled = scrollAmount <= 0;
        nextBtn.disabled = scrollAmount >= maxScroll - 10;
    }
    
    prevBtn.addEventListener('click', () => {
        scrollAmount = Math.max(0, scrollAmount - cardWidth);
        slider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
        setTimeout(updateSliderButtons, 350);
    });
    
    nextBtn.addEventListener('click', () => {
        const maxScroll = slider.scrollWidth - sliderContainer.clientWidth;
        scrollAmount = Math.min(maxScroll, scrollAmount + cardWidth);
        slider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
        setTimeout(updateSliderButtons, 350);
    });
    
    // Listen to scroll events to update button states
    slider.addEventListener('scroll', updateSliderButtons);
    
    // Initialize button states
    updateSliderButtons();
    
    // Handle responsive adjustments
    window.addEventListener('resize', () => {
        updateSliderButtons();
    });
}

// ===== IMAGE ERROR HANDLING & OPTIMIZATION =====
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Handle loading errors
        img.addEventListener('error', function(e) {
            console.warn('Image failed to load:', this.src);
            
            // Add fallback styling
            this.style.backgroundColor = 'var(--bg-light-gray)';
            this.style.display = 'block';
            
            // Try alternative image
            const fallbacks = {
                '.hero-img': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
                '.victory-photo': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
                '.course-image': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
                '.author-photo': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop'
            };
            
            // Try fallback image
            for (const [selector, fallbackSrc] of Object.entries(fallbacks)) {
                if (this.classList.contains(selector.substring(1))) {
                    this.src = fallbackSrc;
                    break;
                }
            }
        });
        
        // Lazy loading
        if ('loading' in HTMLImageElement.prototype) {
            img.loading = 'lazy';
        }
    });
}

// Run on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleImageErrors);
} else {
    handleImageErrors();
}

// ===== IMAGE PRELOADING =====
function preloadImages() {
    const imagesToPreload = [
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    ];
    
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Preload critical images after page load
window.addEventListener('load', preloadImages);

// ===== DYNAMIC HERO IMAGE SYSTEM =====
class HeroImageManager {
    constructor() {
        this.heroImages = {
            'home': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
            'courses': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
            'networking': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
            'security': 'https://images.unsplash.com/photo-1560264357-8d9766400c28?w=600&h=400&fit=crop',
            'success': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
        };
        this.init();
    }
    
    init() {
        this.updateHeroImage();
        // Update hero image on page change
        window.addEventListener('popstate', () => this.updateHeroImage());
    }
    
    updateHeroImage() {
        const heroImg = document.querySelector('.hero-img');
        if (!heroImg) return;
        
        // Determine current page/section
        let imageType = 'home';
        if (window.location.pathname.includes('courses')) imageType = 'courses';
        if (window.location.pathname.includes('victory')) imageType = 'success';
        
        const newImageUrl = this.heroImages[imageType];
        if (heroImg.src !== newImageUrl) {
            heroImg.src = newImageUrl;
            heroImg.alt = `${imageType} section hero image`;
        }
    }
}

// Initialize hero image manager
const heroImageManager = new HeroImageManager();

console.log('✅ Image management system initialized');
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Apply saved theme immediately (before page renders)
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

// Apply theme on page load
if (document.readyState === 'loading') {
    applySavedTheme();
} else {
    applySavedTheme();
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ===== REGISTRATION POPUP =====
const registrationModal = document.getElementById('registrationModal');
const modalClose = document.getElementById('modalClose');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const registrationForm = document.getElementById('registrationForm');

// Show modal after 2 seconds
setTimeout(() => {
    registrationModal.style.display = 'block';
}, 2000);

// Close modal
modalClose.addEventListener('click', () => {
    registrationModal.style.display = 'none';
});

modalCloseBtn.addEventListener('click', () => {
    registrationModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === registrationModal) {
        registrationModal.style.display = 'none';
    }
});

// Handle registration form submission
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for registering! We will contact you soon.');
    registrationModal.style.display = 'none';
    registrationForm.reset();
});

// ===== NAVBAR FUNCTIONALITY =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const topBar = document.getElementById('topBar');

// Sticky navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.boxShadow = 'var(--shadow-lg)';
    } else {
        navbar.style.boxShadow = 'var(--shadow)';
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    updateHamburger();
});

function updateHamburger() {
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(8px, -8px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Close menu when clicking on links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.parentElement.classList.contains('nav-item-dropdown')) {
            e.preventDefault();
            link.parentElement.classList.toggle('active');
        } else {
            navMenu.classList.remove('active');
            updateHamburger();
        }
    });
});

// Close menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        updateHamburger();
    }
});

// ===== DEMO FORM =====
const demoForm = document.getElementById('demoForm');
if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for booking a free demo! We will contact you shortly.');
        demoForm.reset();
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#demo') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== ANIMATION ON SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.course-card, .testimonial-card, .placement-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ===== ACTIVE LINK HIGHLIGHTING =====
function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ===== FORM VALIDATION =====
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        if (!form.checkValidity()) {
            e.preventDefault();
            alert('Please fill in all required fields.');
        }
    });
});

// ===== LIGHTBOX CUSTOMIZATION =====
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'fitImagesInViewport': true,
    'imageFadeDuration': 300
});

// ===== UTILITY FUNCTIONS =====
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            func(...args);
            lastCall = now;
        }
    };
}

// Optimize scroll event
window.addEventListener('scroll', throttle(() => {
    updateActiveLink();
}, 250));

// ===== ACCESSIBILITY =====
// Add skip to main link
const skipLink = document.createElement('a');
skipLink.href = '#main-content';
skipLink.textContent = 'Skip to main content';
skipLink.style.position = 'absolute';
skipLink.style.top = '-40px';
skipLink.style.left = '0';
skipLink.style.background = 'var(--primary-color)';
skipLink.style.color = 'white';
skipLink.style.padding = '8px';
skipLink.style.zIndex = '100';

skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});

skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});

document.body.prepend(skipLink);

// Keyboard navigation for mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        updateHamburger();
    }
});

console.log('CNC Institute Website Loaded Successfully!');
