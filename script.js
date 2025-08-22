// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Demo tabs functionality
const demoTabs = document.querySelectorAll('.demo-tab');
const demoPanels = document.querySelectorAll('.demo-panel');

demoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and panels
        demoTabs.forEach(t => t.classList.remove('active'));
        demoPanels.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding panel
        const targetPanel = document.getElementById(`${tab.dataset.tab}-demo`);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.querySelectorAll('.feature-item, .benefit-card, .process-step, .arch-step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Code animation effect
const codeLines = document.querySelectorAll('.code-line');
let animationStarted = false;

const codeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animationStarted) {
            animationStarted = true;
            animateCodeLines();
        }
    });
}, { threshold: 0.5 });

if (codeLines.length > 0) {
    codeObserver.observe(codeLines[0].parentElement);
}

function animateCodeLines() {
    codeLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
            
            // Add typing effect
            const codeText = line.querySelector('.code-text');
            const originalText = codeText.textContent;
            codeText.textContent = '';
            
            let i = 0;
            const typeWriter = setInterval(() => {
                if (i < originalText.length) {
                    codeText.textContent += originalText.charAt(i);
                    i++;
                } else {
                    clearInterval(typeWriter);
                    // Show status indicator after typing is complete
                    setTimeout(() => {
                        const indicator = line.querySelector('.status-indicator');
                        if (indicator) {
                            indicator.style.opacity = '1';
                            indicator.style.transform = 'scale(1)';
                        }
                    }, 200);
                }
            }, 30);
        }, index * 800);
    });
}

// Initialize status indicators
document.querySelectorAll('.status-indicator').forEach(indicator => {
    indicator.style.opacity = '0';
    indicator.style.transform = 'scale(0)';
    indicator.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 1px 0 rgba(0, 0, 0, 0.1)';
    }
});

// Counter animation for statistics (if we add them later)
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        heroVisual.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Error handling for demo examples
document.querySelectorAll('.code-example').forEach(example => {
    example.addEventListener('click', () => {
        example.style.transform = 'scale(1.02)';
        setTimeout(() => {
            example.style.transform = 'scale(1)';
        }, 200);
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Performance optimization: throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    updateActiveNav();
}, 100);

window.addEventListener('scroll', throttledScrollHandler);

// Add copy-to-clipboard functionality for code examples
document.querySelectorAll('.code-example pre').forEach(pre => {
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
    copyButton.title = 'Kodu kopyala';
    
    copyButton.addEventListener('click', () => {
        const code = pre.textContent;
        navigator.clipboard.writeText(code).then(() => {
            copyButton.innerHTML = '<i class="fas fa-check"></i>';
            copyButton.style.color = '#22c55e';
            setTimeout(() => {
                copyButton.innerHTML = '<i class="fas fa-copy"></i>';
                copyButton.style.color = '';
            }, 2000);
        });
    });
    
    pre.style.position = 'relative';
    pre.appendChild(copyButton);
});

// Add CSS for copy button
const style = document.createElement('style');
style.textContent = `
    .copy-button {
        position: absolute;
        top: 10px;
        right: 10px;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        color: #e0e0e0;
        padding: 8px;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 12px;
    }
    
    .copy-button:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;
document.head.appendChild(style);