
document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordions();
});

function initFaqAccordions() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      item.classList.toggle('activeFaq');
      
      const icon = item.querySelector('.faq-toggle i');
      if (item.classList.contains('activeFaq')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
      } else {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
      }
    });
  });
}