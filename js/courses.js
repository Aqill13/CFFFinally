
document.addEventListener('DOMContentLoaded', () => {
  loadCourses();
  initFilters();
  initSearch();
  initPagination();
});

let allCourses = [];
let filteredCourses = [];
let currentPage = 1;
const coursesPerPage = 9;

// Load Courses
function loadCourses() {
  allCourses = [
    {
      id: 1,
      title: 'Tam Veb İnkişaf Bootcamp',
      category: 'proqramlaşdırma',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.8,
      reviews: 1254,
      students: 15420,
      level: 'başlanğıc',
      duration: '48 saat',
      lectures: 185,
      instructor: {
        name: 'Elvin Quliyev',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      price: 89.99,
      originalPrice: 199.99,
      badge: 'Ən çox satılan',
      isFree: false
    },
    {
      id: 2,
      title: 'Məlumat Elmləri və Maşın Öyrənmə Masterclass',
      category: 'məlumat Elmi',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.9,
      reviews: 857,
      students: 8345,
      level: 'orta',
      duration: '36 saat',
      lectures: 148,
      instructor: {
        name: 'Nigar Məmmədova',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      price: 94.99,
      originalPrice: 189.99,
      badge: null,
      isFree: false
    },
    {
      id: 3,
      title: 'Müasir UX/UI Dizaynı: Gözəl İnterfeyslər yaradın',
      category: 'dizayn',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.7,
      reviews: 621,
      students: 6210,
      level: 'başlanğıc',
      duration: '24 saat',
      lectures: 92,
      instructor: {
        name: 'Emin Hacıyev',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      price: 74.99,
      originalPrice: 149.99,
      badge: null,
      isFree: false
    },
    {
      id: 4,
      title: 'Biznes İdarəetmə və Liderlik Bacarıqları',
      category: 'biznes',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.6,
      reviews: 542,
      students: 5120,
      level: 'orta',
      duration: '20 saat',
      lectures: 78,
      instructor: {
        name: 'Zeynəb Abbasova',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      price: 69.99,
      originalPrice: 139.99,
      badge: null,
      isFree: false
    },
    {
      id: 5,
      title: 'Yeni başlayanlar üçün İngilis dilinə giriş',
      category: 'dillər',
      image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.8,
      reviews: 324,
      students: 3845,
      level: 'orta',
      duration: '15 saat',
      lectures: 64,
      instructor: {
        name: 'Orxan Əliyev',
        avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      price: 0,
      originalPrice: 0,
      badge: null,
      isFree: true
    },
    {
      id: 6,
      title: 'Qabaqcıl JavaScript: Müasir Konseptlər',
      category: 'proqramlaşdırma',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.9,
      reviews: 487,
      students: 6254,
      level: 'qabaqcıl',
      duration: '28 saat',
      lectures: 110,
      instructor: {
        name: 'Vüsal Cəfərov',
        avatar: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      price: 84.99,
      originalPrice: 169.99,
      badge: 'Yeni',
      isFree: false
    },
    {
      id: 7,
      title: 'Rəqəmsal marketinq strategiyası üzrə master-klass',
      category: 'marketinq',
      image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.7,
      reviews: 368,
      students: 4285,
      level: 'orta',
      duration: '22 saat',
      lectures: 86,
      instructor: {
        name: 'Aylin Kərimova',
        avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      price: 79.99,
      originalPrice: 159.99,
      badge: null,
      isFree: false
    },
    {
      id: 8,
      title: 'Qrafik Dizaynın Əsasları: Konsepsiyadan Yaradılışa',
      category: 'dizayn',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.8,
      reviews: 425,
      students: 5124,
      level: 'başlanğıc',
      duration: '26 saat',
      lectures: 98,
      instructor: {
        name: 'Cavid Əlizadə',
        avatar: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      price: 69.99,
      originalPrice: 139.99,
      badge: 'Ən çox satılan',
      isFree: false
    },
    {
      id: 9,
      title: 'Biznes İdarəetmə və Liderlik Bacarıqları',
      category: 'biznes',
      image: 'https://images.pexels.com/photos/6238038/pexels-photo-6238038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.7,
      reviews: 286,
      students: 3245,
      level: 'orta',
      duration: '32 saat',
      lectures: 124,
      instructor: {
        name: 'Murad Kərimov',
        avatar: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      price: 89.99,
      originalPrice: 179.99,
      badge: null,
      isFree: false
    },
    {
      id: 10,
      title: 'Süni İntellekt və Məlumat Elmi üçün Python Proqramlaşdırma',
      category: 'məlumat Elmi',
      image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230318230239/Python-Data-Science-Tutorial.jpg',
      rating: 4.6,
      reviews: 214,
      students: 2845,
      level: 'başlanğıc',
      duration: '18 saat',
      lectures: 72,
      instructor: {
        name: 'Rəna Vəliyeva',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      price: 0,
      originalPrice: 0,
      badge: null,
      isFree: true
    },
    {
      id: 11,
      title: 'Orta səviyyədə öyrənənlər üçün Alman dili',
      category: 'dillər',
      image: 'https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.8,
      reviews: 187,
      students: 2154,
      level: 'orta',
      duration: '24 saat',
      lectures: 96,
      instructor: {
        name: 'Günel Rəhimli',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      price: 64.99,
      originalPrice: 129.99,
      badge: null,
      isFree: false
    },
    {
      id: 12,
      title: 'React Native ilə Mobil Tətbiq İnkişafı',
      category: 'proqramlaşdırma',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.9,
      reviews: 324,
      students: 4215,
      level: 'orta',
      duration: '30 saat',
      lectures: 115,
      instructor: {
        name: 'Rəşad Hüseynov',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      price: 89.99,
      originalPrice: 179.99,
      badge: 'Yeni',
      isFree: false
    }
  ];
  
  filteredCourses = [...allCourses];
  
  displayCourses();
}

// Display courses with pagination
function displayCourses() {
  const coursesContainer = document.getElementById('courses-container');
  const courseCountElement = document.getElementById('course-count');
  
  if (!coursesContainer || !courseCountElement) return;
  
  // Update course count
  courseCountElement.textContent = filteredCourses.length;
  
  // Calculate pagination
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const coursesToDisplay = filteredCourses.slice(startIndex, endIndex);
  
  // Create course cards HTML
  let coursesHTML = '';
  
  if (coursesToDisplay.length === 0) {
    coursesHTML = '<div class="no-courses">Heç bir kurs meyarlarınıza uyğun gəlmir. Fərqli filtrləri sınayın.</div>';
  } else {
    coursesToDisplay.forEach(course => {
      coursesHTML += `
        <div class="course-card">
          <div class="course-image">
            <img src="${course.image}" alt="${course.title}">
            ${course.badge ? `<span class="course-badge ${course.badge}">${course.badge}</span>` : ''}
          </div>
          <div class="course-info">
            <span class="course-category">${capitalizeFirstLetter(course.category)}</span>
            <h3 class="course-title"><a href="#">${course.title}</a></h3>
            <div class="course-details">
              <div class="course-rating">
                <i class="fas fa-star"></i>
                <span>${course.rating} (${course.reviews})</span>
              </div>
              <span class="course-level">${capitalizeFirstLetter(course.level)}</span>
            </div>
            <div class="course-stats">
              <div class="course-stat">
                <i class="far fa-user"></i>
                <span>${formatNumber(course.students)} tələbə</span>
              </div>
              <div class="course-stat">
                <i class="far fa-clock"></i>
                <span>${course.duration}</span>
              </div>
              <div class="course-stat">
                <i class="far fa-play-circle"></i>
                <span>${course.lectures} mühazirə</span>
              </div>
            </div>
            <div class="course-meta">
              <div class="course-author">
                <img src="${course.instructor.avatar}" alt="${course.instructor.name}">
                <span>${course.instructor.name}</span>
              </div>
              <div class="course-price ${course.isFree ? 'free' : ''}">
                ${course.isFree ? 'Pulsuz' : `
                  ${course.originalPrice > course.price ? `<span class="original-price">$${course.originalPrice}</span>` : ''}
                  $${course.price}
                `}
              </div>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  coursesContainer.innerHTML = coursesHTML;
  
  // Update pagination
  updatePagination();
}

// Initialize filters
function initFilters() {
  const categoryFilter = document.getElementById('category-filter');
  const levelFilter = document.getElementById('level-filter');
  const priceFilter = document.getElementById('price-filter');
  const sortFilter = document.getElementById('sort-filter');
  
  if (!categoryFilter || !levelFilter || !priceFilter || !sortFilter) return;
  
  categoryFilter.addEventListener('change', applyFilters);
  levelFilter.addEventListener('change', applyFilters);
  priceFilter.addEventListener('change', applyFilters);
  sortFilter.addEventListener('change', applyFilters);
  
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  
  if (categoryParam) {
    categoryFilter.value = categoryParam;
    applyFilters();
  }
}

// Apply filters
function applyFilters() {
  const categoryFilter = document.getElementById('category-filter');
  const levelFilter = document.getElementById('level-filter');
  const priceFilter = document.getElementById('price-filter');
  const sortFilter = document.getElementById('sort-filter');
  
  currentPage = 1;
  
  // Filter courses
  filteredCourses = allCourses.filter(course => {
    // Category filter
    if (categoryFilter.value !== 'all' && course.category !== categoryFilter.value) {
      return false;
    }
    
    // Level filter
    if (levelFilter.value !== 'all' && course.level !== levelFilter.value) {
      return false;
    }
    
    // Price filter
    if (priceFilter.value === 'free' && !course.isFree) {
      return false;
    } else if (priceFilter.value === 'paid' && course.isFree) {
      return false;
    }
    
    return true;
  });
  
  // Sort courses
  const sortValue = sortFilter.value;
  
  switch (sortValue) {
    case 'popularity':
      filteredCourses.sort((a, b) => b.students - a.students);
      break;
    case 'newest':
      filteredCourses.sort((a, b) => b.id - a.id);
      break;
    case 'price-low':
      filteredCourses.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredCourses.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredCourses.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }
  
  displayCourses();
}

function initSearch() {
  const searchInput = document.getElementById('course-search');
  const searchBtn = document.getElementById('search-btn');
  
  if (!searchInput || !searchBtn) return;
  
  searchBtn.addEventListener('click', performSearch);
  
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
}

function performSearch() {
  const searchInput = document.getElementById('course-search');
  const searchTerm = searchInput.value.trim().toLowerCase();
  
  if (!searchTerm) {
    applyFilters();
    return;
  }
  
  filteredCourses = allCourses.filter(course => {
    return course.title.toLowerCase().includes(searchTerm) ||
           course.category.toLowerCase().includes(searchTerm) ||
           course.instructor.name.toLowerCase().includes(searchTerm);
  });
  
  currentPage = 1;
  displayCourses();
}

function initPagination() {
  const paginationElement = document.getElementById('pagination');
  
  if (!paginationElement) return;
  
}

function updatePagination() {
  const paginationElement = document.getElementById('pagination');
  if (!paginationElement) return;
  
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  
  let paginationHTML = '';
  
  paginationHTML += `
    <button class="pagination-item ${currentPage === 1 ? 'disabled' : ''}" 
      ${currentPage === 1 ? 'disabled' : 'onclick="goToPage(' + (currentPage - 1) + ')"'}>
      <i class="fas fa-chevron-left"></i>
    </button>
  `;
  
  const maxPagesToShow = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  
  if (endPage - startPage + 1 < maxPagesToShow && startPage > 1) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }
  
  if (startPage > 1) {
    paginationHTML += `<button class="pagination-item" onclick="goToPage(1)">1</button>`;
    if (startPage > 2) {
      paginationHTML += `<span class="pagination-item disabled">...</span>`;
    }
  }
  
  for (let i = startPage; i <= endPage; i++) {
    paginationHTML += `
      <button class="pagination-item ${i === currentPage ? 'active' : ''}" 
        onclick="goToPage(${i})">${i}</button>
    `;
  }
  
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      paginationHTML += `<span class="pagination-item disabled">...</span>`;
    }
    paginationHTML += `<button class="pagination-item" onclick="goToPage(${totalPages})">${totalPages}</button>`;
  }
  
  paginationHTML += `
    <button class="pagination-item ${currentPage === totalPages ? 'disabled' : ''}" 
      ${currentPage === totalPages ? 'disabled' : 'onclick="goToPage(' + (currentPage + 1) + ')"'}>
      <i class="fas fa-chevron-right"></i>
    </button>
  `;
  
  paginationElement.innerHTML = paginationHTML;
}

function goToPage(page) {
  currentPage = page;
  displayCourses();
  
  document.querySelector('.course-listing').scrollIntoView({ behavior: 'smooth' });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}

window.goToPage = goToPage;