const slides = document.querySelectorAll('.slides img');
let current = 0;

function showSlide(n) {
    slides[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => showSlide(current + 1));
document.querySelector('.prev').addEventListener('click', () => showSlide(current - 1));

// Auto slide every 5 seconds
setInterval(() => showSlide(current + 1), 5000);