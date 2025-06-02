
const header = document.getElementById('header');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const authButtons = document.querySelector('.auth-buttons');
const backToTopBtn = document.getElementById('back-to-top');

// Mobile Menu Toggle
if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    if (window.innerWidth <= 768) {
      authButtons.classList.toggle('active');
    }
  });
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Back to Top Button visibility
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

// Back to Top Button
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Newsletter Form
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    if (!isValidEmail(email)) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
  
    emailInput.value = '';
    showToast('Thank you for subscribing to our newsletter!', 'success');
  });
}

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length > 0) {
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      item.classList.toggle('active');
    });
  });
}


function showToast(message, type = 'info') {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
    const style = document.createElement('style');
    style.textContent = `
      .toast-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
      }
      .toast {
        padding: 12px 20px;
        margin-bottom: 10px;
        border-radius: 4px;
        color: white;
        font-weight: 500;
        max-width: 300px;
        animation: slideIn 0.3s ease, fadeOut 0.5s ease 2.5s forwards;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      }
      .toast.success {
        background-color: #28CD41;
      }
      .toast.error {
        background-color: #FF3B30;
      }
      .toast.info {
        background-color: #0066CC;
      }
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; visibility: hidden; }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Create 
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}


window.appUtils = {
  showToast
};