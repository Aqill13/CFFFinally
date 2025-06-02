
document.addEventListener("DOMContentLoaded", () => {
  loadFeaturedPost();
  loadBlogPosts();
  initCategoryFilters();
  initSearch();

  initPagination();
});

let allPosts = [];
let filteredPosts = [];
let currentPage = 1;
const postsPerPage = 6;
let activeCategory = "all";

// Load Featured Post
function loadFeaturedPost() {
  const featuredPostContainer = document.getElementById("featured-post");
  const featuredPost = {
    id: 1,
    title: "Onlayn təhsilin gələcəyi: 2025-ci ildə izləniləcək tendensiyalar",
    excerpt:
      "Onlayn təhsil inkişaf edən texnologiyalar və dəyişən öyrənmə üstünlükləri ilə sürətlə inkişaf edir. Elektron təhsilin gələcəyini formalaşdıracaq əsas tendensiyaları və onların həm müəllimlərə, həm də tələbələrə necə təsir edəcəyini kəşf edin.",
    category: "Təhsil",
    image:
      "https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "15 iyun 2025-ci il",
    author: {
      name: "Sevinc Əliyeva",
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  };

  const featuredPostHTML = `
    <div class="featured-post-image">
      <img src="${featuredPost.image}" alt="${featuredPost.title}">
    </div>
    <div class="featured-post-content">
      <span class="featured-label">Seçilmiş</span>
      <h2 class="featured-title">${featuredPost.title}</h2>
      <div class="featured-meta">
        <div class="post-author">
          <img src="${featuredPost.author.avatar}" alt="${featuredPost.author.name}">
          <span>${featuredPost.author.name}</span>
        </div>
        <div class="post-date">
          <i class="far fa-calendar-alt"></i>
          <span>${featuredPost.date}</span>
        </div>
      </div>
      <p class="featured-excerpt">${featuredPost.excerpt}</p>
      <a href="blog-post.html?id=${featuredPost.id}" class="read-more">
        Tam Məqaləni Oxuyun <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  `;

  featuredPostContainer.innerHTML = featuredPostHTML;
}

// Load Blog Posts
function loadBlogPosts() {
  allPosts = [
    {
      id: 2,
      title: "2025-ci ildə hər bir veb tərtibatçısının mənimsəməli olduğu 10 əsas bacarıq",
      excerpt:
        "Veb inkişaf mənzərəsi daim inkişaf edir. Sizi sənayedə fərqləndirəcək bu əsas bacarıqları mənimsəyərək, öndə olun.",
      category: "texnologiya",
      image:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "10 iyun 2025-ci il",
      comments: 24,
      author: {
        name: "Jessica Williams",
        avatar:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    },
    {
      id: 3,
      title: "Onlayn Öyrənmə Səyahətiniz zamanı necə motivasiyalı qalmaq olar?",
      excerpt:
        "Onlayn öyrənmə çeviklik təklif edir, lakin bəzən süründürməçiliyə səbəb ola bilər. Həvəsli qalmaq və kurslarınızı uğurla başa çatdırmaq üçün sübut edilmiş strategiyaları kəşf edin.",
      category: "öyrənmək",
      image:
        "https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "5 iyun 2025-ci il",
      comments: 16,
      author: {
        name: "Ayxan Kərimov",
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    },
    {
      id: 4,
      title: "Müasir Təhsil Sistemlərində AI-nin Təsiri",
      excerpt:
        "Süni intellekt təhsili müxtəlif yollarla dəyişdirir. Süni intellekt alətlərinin fərdiləşdirilmiş öyrənmə təcrübələrini necə təkmilləşdirdiyini və inzibati tapşırıqları necə asanlaşdırdığını araşdırın.",
      category: "texnologiya",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "28 may 2025-ci il",
      comments: 32,
      author: {
        name: "Təbriz Nəcəfov",
        avatar:
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    },
    {
      id: 5,
      title: "Tələbədən Peşəkara: Məzunlarımızın Uğur Hekayələri",
      excerpt:
        "Onlayn təhsil vasitəsilə karyeralarını dəyişdirən keçmiş tələbələrlə tanış olun. Onların ruhlandırıcı səyahətləri fədakarlığın və davamlı öyrənmə gücünü nümayiş etdirir.",
      category: "tələbə",
      image:
        "https://images.pexels.com/photos/5553050/pexels-photo-5553050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "20 may 2025-ci il",
      comments: 12,
      author: {
        name: "Nazrin İsmayılova",
        avatar:
          "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    },
    {
      id: 6,
      title:
        "Effektiv Öyrənmənin Psixologiyası: Elmə əsaslanan öyrənmə üsulları",
      excerpt:
        "Beynimizin məlumatları necə emal etdiyini və saxladığını anlamaq öyrənmə nəticələrini əhəmiyyətli dərəcədə yaxşılaşdıra bilər. Tədris sessiyalarınızı təkmilləşdirmək üçün tədqiqata əsaslanan üsulları kəşf edin.",
      category: "təhsil",
      image:
        "https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "15 may 2025-ci il",
      comments: 28,
      author: {
        name: "Şükür Əsgərov",
        avatar:
          "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    },
    {
      id: 7,
      title: "Məlumat Elmində Karyera qurmaq: Hərtərəfli Bələdçi",
      excerpt:
        "Məlumat elmi sahəsi sürətlə böyüməyə davam edir. Bu maraqlı sahədə əsas bacarıqlar, təhsil yolları və karyera imkanları haqqında məlumat əldə edin.",
      category: "karyera",
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "8 may 2025-ci il",
      comments: 19,
      author: {
        name: "Ləman Həsənova",
        avatar:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    },
    {
      id: 8,
      title:
        "21-ci əsrdə rəqəmsal savadlılıq: Hər kəs üçün əsas bacarıqlar",
      excerpt:
        "Bugünkü rəqəmsal dünyada müəyyən texniki bacarıqlar oxumaq və yazmaq qədər əsas hala gəlir. Hər kəsin inkişaf etdirməli olduğu əsas rəqəmsal bacarıqları kəşf edin.",
      category: "təhsil",
      image:
        "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "1 may 2025-ci il",
      comments: 14,
      author: {
        name: "Ayxan Hüseynov",
        avatar:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    },
    {
      id: 9,
      title:
        "Onlayn kurslar vasitəsilə xəyal etdiyim işi necə əldə etdim: Şəxsi hekayə",
      excerpt:
        "Onlayn təhsil platformalarından strateji istifadə edərək, narazı karyeradan arzuladığı rola keçən tələbənin səyahətini izləyin.",
      category: "tələbə",
      image:
        "https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "25 aprel 2025-ci il",
      comments: 31,
      author: {
        name: "Afər Rəhimov",
        avatar:
          "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    },
    {
      id: 10,
      title:
        "Öyrənərkən məlumatın saxlanmasını yaxşılaşdırmaq üçün 7 Effektiv Texnika",
      excerpt:
        "Öyrəndiklərinizi xatırlamaqda çətinlik çəkirsiniz? Elmi cəhətdən sübut edilmiş bu üsullar sizə məlumatı daha yaxşı saxlamağa və öyrənmə seanslarınızı maksimum dərəcədə artırmağa kömək edə bilər.",
      category: "öyrənmək",
      image:
        "https://images.pexels.com/photos/3794358/pexels-photo-3794358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "18 aprel 2025-ci il",
      comments: 22,
      author: {
        name: "Günel Hüseynli",
        avatar:
          "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    },
    {
      id: 11,
      title: "Mikro etimadnamələrin yüksəlişi: onları izləməyə dəyərmi?",
      excerpt:
        "Mikro etimadnamələr ənənəvi dərəcələrə çevik alternativ kimi populyarlıq qazanır. Onların üstünlüklərini, məhdudiyyətlərini və onları təhsil strategiyanıza necə daxil edəcəyinizi araşdırın.",
      category: "təhsil",
      image:
        "https://images.pexels.com/photos/5212360/pexels-photo-5212360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "10 aprel 2025-ci il",
      comments: 18,
      author: {
        name: "Rahil Abbasov",
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    },
    {
      id: 12,
      title:
        "Karyera Dəyişikliklərində Naviqasiya: Davamlı Öyrənmə keçidləri necə",
      excerpt:
        "Karyera dəyişiklikləri getdikcə adi hala çevrilir. Strateji təhsil seçimlərinin sizə yeni peşəkar domenlərə uğurla keçməyə necə kömək edə biləcəyini öyrənin.",
      category: "karyera",
      image:
        "https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "5 aprel 2025-ci il",
      comments: 9,
      author: {
        name: "Aysel Quliyeva",
        avatar:
          "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    },
  ];

  filteredPosts = [...allPosts];
  displayPosts();
}

// Display posts
function displayPosts() {
  const postsContainer = document.getElementById("blog-posts-container");

  // Calculate pagination
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToDisplay = filteredPosts.slice(startIndex, endIndex);

  let postsHTML = "";

  if (postsToDisplay.length === 0) {
    postsHTML =
      '<div class="no-posts">Heç bir blog yazısı meyarlarınıza uyğun gəlmir. Fərqli filtrləri sınayın.</div>';
  } else {
    postsToDisplay.forEach((post) => {
      postsHTML += `
        <div class="blog-card">
          <div class="blog-image">
            <img src="${post.image}" alt="${post.title}">
          </div>
          <div class="blog-content">
            <span class="blog-category">${capitalizeFirstLetter(
              post.category
            )}</span>
            <h3 class="blog-title"><a href="blog-post.html?id=${post.id}">${
        post.title
      }</a></h3>
            <div class="blog-meta">
              <div class="blog-date">
                <i class="far fa-calendar-alt"></i>
                <span>${post.date}</span>
              </div>
              <div class="blog-comments">
                <i class="far fa-comment"></i>
                <span>${post.comments} rəy</span>
              </div>
            </div>
            <p class="blog-excerpt">${post.excerpt}</p>
            <div class="blog-author">
              <img src="${post.author.avatar}" alt="${post.author.name}">
              <span>${post.author.name}</span>
            </div>
          </div>
        </div>
      `;
    });
  }

  postsContainer.innerHTML = postsHTML;
  updatePagination();
}

// Initialize category filters
function initCategoryFilters() {
  const categoryPills = document.querySelectorAll(".category-pill");

  categoryPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      categoryPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");

      activeCategory = pill.getAttribute("data-category");
      filterPosts();
    });
  });

  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get("category");

  if (categoryParam) {
    const categoryPill = document.querySelector(
      `.category-pill[data-category="${categoryParam}"]`
    );
    if (categoryPill) {
      categoryPill.click();
    }
  }
}

// Filter posts 
function filterPosts() {
  currentPage = 1;

  if (activeCategory === "all") {
    filteredPosts = [...allPosts];
  } else {
    filteredPosts = allPosts.filter((post) => post.category === activeCategory);
  }

  displayPosts();
}

function initSearch() {
  const searchInput = document.getElementById("blog-search");
  const searchBtn = document.getElementById("search-btn");

  if (!searchInput || !searchBtn) return;

  searchBtn.addEventListener("click", performSearch);

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  });
}

// Perform search
function performSearch() {
  const searchInput = document.getElementById("blog-search");
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (!searchTerm) {
    filterPosts();
    return;
  }

  let categoryFilteredPosts;
  if (activeCategory === "all") {
    categoryFilteredPosts = [...allPosts];
  } else {
    categoryFilteredPosts = allPosts.filter(
      (post) => post.category === activeCategory
    );
  }

  filteredPosts = categoryFilteredPosts.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.author.name.toLowerCase().includes(searchTerm)
    );
  });

  currentPage = 1;
  displayPosts();
}

function initPagination() {
  const paginationElement = document.getElementById("pagination");

  if (!paginationElement) return;
}

// Update pagination
function updatePagination() {
  const paginationElement = document.getElementById("pagination");
  if (!paginationElement) return;

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  let paginationHTML = "";

  paginationHTML += `
    <button class="pagination-item ${currentPage === 1 ? "disabled" : ""}" 
      ${
        currentPage === 1
          ? "disabled"
          : 'onclick="goToPage(' + (currentPage - 1) + ')"'
      }>
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
      <button class="pagination-item ${i === currentPage ? "active" : ""}" 
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
    <button class="pagination-item ${
      currentPage === totalPages ? "disabled" : ""
    }" 
      ${
        currentPage === totalPages
          ? "disabled"
          : 'onclick="goToPage(' + (currentPage + 1) + ')"'
      }>
      <i class="fas fa-chevron-right"></i>
    </button>
  `;

  paginationElement.innerHTML = paginationHTML;
}

function goToPage(page) {
  currentPage = page;
  displayPosts();
  document.querySelector(".blog-posts").scrollIntoView({ behavior: "smooth" });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

window.goToPage = goToPage;
