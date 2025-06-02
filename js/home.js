document.addEventListener("DOMContentLoaded", () => {

  loadFeaturedCourses();

  loadLatestBlogPosts();
});


function loadFeaturedCourses() {
  const coursesContainer = document.getElementById(
    "featured-courses-container"
  );

  const featuredCourses = [
    {
      id: 1,
      title: "Tam Veb İnkişaf Bootcamp",
      category: "Proqramlaşdırma",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.8,
      students: 15420,
      level: "Başlanğıc",
      instructor: {
        name: "Aqil Kəlbiyev",
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      price: 89.99,
      originalPrice: 199.99,
    },
    {
      id: 2,
      title: "Məlumat Elmləri və Maşın Öyrənmə",
      category: "Məlumat Elmi",
      image:
        "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.9,
      students: 8345,
      level: "Orta",
      instructor: {
        name: "Afər Rəhimov",
        avatar:
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      price: 94.99,
      originalPrice: 189.99,
    },
    {
      id: 3,
      title: "Müasir UX/UI Dizaynı: Gözəl İnterfeyslər yaradın",
      category: "Dizayn",
      image:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.7,
      students: 6210,
      level: "Başlanğıc",
      instructor: {
        name: "Fidan Məmmədova",
        avatar:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      price: 74.99,
      originalPrice: 149.99,
    },
  ];
  let coursesHTML = "";

  featuredCourses.forEach((course) => {
    coursesHTML += `
      <div class="course-card">
        <div class="course-image">
          <img src="${course.image}" alt="${course.title}">
        </div>
        <div class="course-info">
          <span class="course-category">${course.category}</span>
          <h3 class="course-title"><a href="course-details.html?id=${
            course.id
          }">${course.title}</a></h3>
          <div class="course-details">
            <div class="course-rating">
              <i class="fas fa-star"></i>
              <span>${course.rating} (${Math.floor(
      course.students / 100
    )})</span>
            </div>
            <span class="course-level">${course.level}</span>
          </div>
          <div class="course-meta">
            <div class="course-author">
              <img src="${course.instructor.avatar}" alt="${
      course.instructor.name
    }">
              <span>${course.instructor.name}</span>
            </div>
            <div class="course-price">
              <span class="original-price" style="color: #666"><del>$${
                course.originalPrice
              }</del></span>
              $${course.price}
            </div>
          </div>
        </div>
      </div>
    `;
  });

  coursesContainer.innerHTML = coursesHTML;
}

// Blog Posts
function loadLatestBlogPosts() {
  const blogContainer = document.getElementById("latest-blog-container");

  const latestPosts = [
    {
      id: 1,
      title:
        "2025-ci ildə hər bir veb tərtibatçısının mənimsəməli olduğu 10 əsas bacarıq",
      excerpt:
        "Veb inkişaf mənzərəsi daim inkişaf edir. Sizi sənayedə fərqləndirəcək bu əsas bacarıqları mənimsəyərək, öndə olun.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
      category: "Veb İnkişafı",
      image:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "15 iyun 2025-ci il",
      author: {
        name: "Ülkər Rəhimli",
        avatar:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    },
    {
      id: 2,
      title: "Onlayn öyrənmə səyahətiniz zamanı necə motivasiyalı qalmaq olar",
      excerpt:
        "Onlayn öyrənmə çeviklik təklif edir, lakin bəzən süründürməçiliyə səbəb ola bilər. Həvəsli qalmaq və kurslarınızı uğurla başa çatdırmaq üçün sübut edilmiş strategiyaları kəşf edin.",
      category: "Öyrənmə Məsləhətləri",
      image:
        "https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "10 iyun 2025-ci il",
      author: {
        name: "Amil Əliosmanov",
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    },
    {
      id: 3,
      title: "Təhsildə AI-nin gələcəyi: izləniləcək tendensiyalar",
      excerpt:
        "Süni intellekt təhsili müxtəlif yollarla dəyişdirir. Ən son tendensiyaları araşdırın və AI-nin necə daha fərdiləşdirilmiş öyrənmə təcrübələri yaratdığını kəşf edin.",
      category: "Texnologiya",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "5 iyun 2025-ci il",
      author: {
        name: "Naidə Kərimli",
        avatar:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    },
  ];
  let blogHTML = "";

  latestPosts.forEach((post) => {
    blogHTML += `
      <div class="blog-card">
        <div class="blog-image">
          <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="blog-content">
          <span class="blog-category">${post.category}</span>
          <h3 class="blog-title"><a href="blog-post.html?id=${post.id}">${post.title}</a></h3>
          <div class="blog-date">
            <i class="far fa-calendar-alt"></i>
            <span>${post.date}</span>
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

  blogContainer.innerHTML = blogHTML;
}
