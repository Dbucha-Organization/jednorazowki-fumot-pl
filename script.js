// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("navMenu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close menu when clicking on a nav link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Simple Image Slider (placeholder functionality)
const sliderPrev = document.querySelector(".slider-prev")
const sliderNext = document.querySelector(".slider-next")

if (sliderPrev && sliderNext) {
  sliderPrev.addEventListener("click", () => {
    console.log("Previous slide")
    // Add your slider logic here
  })

  sliderNext.addEventListener("click", () => {
    console.log("Next slide")
    // Add your slider logic here
  })
}

// Newsletter Form Submission
const newsletterForm = document.querySelector(".newsletter-form")

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = newsletterForm.querySelector('input[type="email"]').value
    alert(`Thank you for joining! Email: ${email}`)
    newsletterForm.reset()
  })
}

// Add scroll effect to header
let lastScroll = 0
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll <= 0) {
    header.style.boxShadow = "none"
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.5)"
  }

  lastScroll = currentScroll
})


document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    const duration = 2000; // Длительность анимации в миллисекундах (2 секунды)
    
    // Функция для интерполяции числа
    const updateCount = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const initialCount = 0;
        const increment = target / (duration / 10); // Шаг приращения
        let currentCount = initialCount;

        const counter = setInterval(() => {
            currentCount += increment;
            
            if (currentCount < target) {
                // Если число большое, добавляем 'k+' или другой суффикс
                if (target >= 1000) {
                     element.textContent = Math.round(currentCount / 1000) + 'K+';
                } else {
                     element.textContent = Math.round(currentCount);
                }
            } else {
                clearInterval(counter);
                // Устанавливаем точное финальное значение
                if (target === 135000) {
                     element.textContent = '135K+';
                } else if (target === 130000) {
                     element.textContent = '134K+';
                } else {
                     element.textContent = 'Fumot E-papierosy';
                }
            }
        }, 10);
    };

    // Простая функция для запуска анимации
    const startAnimation = () => {
        statNumbers.forEach(updateCount);
    };

    // --- Запуск анимации (можно улучшить с помощью Intersection Observer) ---
    // Для простоты запустим сразу при загрузке.
    startAnimation(); 
});

const city = document.getElementById("city");
const cont = document.querySelectorAll(".foot-cont-three a");

city.addEventListener("click", toggleCont);
function toggleCont() {
  city.classList.toggle("active");
  Array.from(cont).forEach((el) => {
    el.style.display = el.style.display === "block" ? "none" : "block";
  });
}



function toggleText() {
    const text = document.getElementById("hiddenText");
    const btn = document.querySelector(".toggle-btn");

    text.classList.toggle("open");

    if (text.classList.contains("open")) {
        btn.textContent = "zamknąć tekst";
    } else {
        btn.textContent = "Przeczytać Tekst";
    }
}


const ageModal = document.getElementById("ageModal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

window.addEventListener("load", () => {
  if (localStorage.getItem("ageConfirmed") != "true") {
    ageModal.style.display = "flex";
  } else {
    ageModal.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  localStorage.setItem("ageConfirmed", "true");
  ageModal.style.display = "none";
});

noBtn.addEventListener("click", () => {
  alert("Dostęp zabroniony. Strona tylko dla osób 18+");
  window.close();
  window.location.href = "https://www.google.pl";
});

// Age verification modal


// Hide the top warning when the page is scrolled
const warn = document.querySelector(".warn");
if (warn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      warn.style.display = "none";
    } else {
      warn.style.display = "";
    }
  });
}