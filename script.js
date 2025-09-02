document.addEventListener('DOMContentLoaded', function() {
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    const buyButtons = document.querySelectorAll('.buy-button');
    const ctaButton = document.querySelector('.cta-button');

    // Initialize cart count display
    updateCartCount();

    // Add click handlers to buy buttons (currently disabled)
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.disabled) {
                showNotification('Coming Soon!', 'This product will be available soon. Sign up for notifications!', 'info');
                return;
            }

            // Future functionality for enabled buttons
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            
            addToCart(productName);
            showNotification('Added to Cart!', `${productName} fist replica added to your cart.`, 'success');
        });
    });

    // CTA button scroll to products
    ctaButton.addEventListener('click', function() {
        document.getElementById('products').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Add hover effects to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Cart functionality
    function addToCart(productName) {
        cartCount++;
        updateCartCount();
        
        // Store cart items in localStorage (for future use)
        let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        cartItems.push({
            name: productName,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    function updateCartCount() {
        cartCountElement.textContent = cartCount;
        
        if (cartCount > 0) {
            cartCountElement.style.display = 'flex';
            cartCountElement.classList.add('bounce');
            setTimeout(() => {
                cartCountElement.classList.remove('bounce');
            }, 600);
        } else {
            cartCountElement.style.display = 'flex';
        }
    }

    // Notification system
    function showNotification(title, message, type = 'info') {
        // Remove any existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <h4>${title}</h4>
                <p>${message}</p>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
            color: white;
            padding: 1rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 10000;
            max-width: 350px;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;

        // Add notification to page
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Add close functionality
        const closeButton = notification.querySelector('.notification-close');
        closeButton.addEventListener('click', () => {
            closeNotification(notification);
        });

        // Auto close after 5 seconds
        setTimeout(() => {
            closeNotification(notification);
        }, 5000);
    }

    function closeNotification(notification) {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }

    // Add loading animation for images
    const images = document.querySelectorAll('.product-image img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });

    // Newsletter signup (placeholder)
    function setupNewsletterSignup() {
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input[type="email"]').value;
                showNotification('Success!', 'Thank you for subscribing to our newsletter!', 'success');
                this.reset();
            });
        }
    }

    setupNewsletterSignup();

    // Add some interactive elements
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification('Coming Soon!', 'Social media pages are coming soon!', 'info');
        });
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero && scrolled < hero.offsetHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add cart bounce animation CSS
    const style = document.createElement('style');
    style.textContent = `
        .notification-content {
            position: relative;
        }
        
        .notification-close {
            position: absolute;
            top: 5px;
            right: 10px;
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .bounce {
            animation: bounce 0.6s ease;
        }
        
        @keyframes bounce {
            0%, 20%, 60%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-10px);
            }
            80% {
                transform: translateY(-5px);
            }
        }
        
        @media (max-width: 768px) {
            .notification {
                right: 10px;
                left: 10px;
                max-width: none;
            }
        }
    `;
    document.head.appendChild(style);
});

// Add some fun easter eggs
document.addEventListener('keydown', function(e) {
    // Konami code easter egg
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    if (!window.konamiSequence) window.konamiSequence = [];
    
    window.konamiSequence.push(e.keyCode);
    
    if (window.konamiSequence.length > konamiCode.length) {
        window.konamiSequence.shift();
    }
    
    if (window.konamiSequence.toString() === konamiCode.toString()) {
        showEasterEgg();
    }
});

function showEasterEgg() {
    const hero = document.querySelector('.hero-content h2');
    const originalText = hero.textContent;
    hero.textContent = '🥊 LEGENDARY FIST COLLECTION UNLOCKED! 🥊';
    hero.style.color = '#f39c12';
    
    setTimeout(() => {
        hero.textContent = originalText;
        hero.style.color = '';
    }, 3000);
    
    // Add confetti effect
    createConfetti();
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            top: -10px;
            left: ${Math.random() * 100}%;
            width: 10px;
            height: 10px;
            background: ${['#e74c3c', '#f39c12', '#27ae60', '#3498db', '#9b59b6'][Math.floor(Math.random() * 5)]};
            z-index: 10000;
            animation: confetti-fall 3s linear forwards;
            transform: rotate(${Math.random() * 360}deg);
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.remove();
            }
        }, 3000);
    }
    
    // Add confetti animation
    if (!document.querySelector('#confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.textContent = `
            @keyframes confetti-fall {
                to {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}