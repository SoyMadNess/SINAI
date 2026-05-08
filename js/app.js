// Efecto de scroll en navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 0 30px rgba(0, 102, 255, 0.5)';
    } else {
        navbar.style.boxShadow = '0 0 20px rgba(0, 102, 255, 0.3)';
    }

    if (scrollTopBtn) {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    }

    updateActiveLink();
});

// Animación de números en contadores (opcional)
const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 200;
        
        const updateCount = () => {
            const count = +counter.innerText;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCount();
    });
};

// Activar animación cuando se vuelve visible
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos animables
document.querySelectorAll('.service-card, .galeria-item, .precio-card').forEach(el => {
    observer.observe(el);
});

// Efecto parallax en scroll
window.addEventListener('scroll', () => {
    const particles = document.querySelectorAll('.particles');
    const scrollPosition = window.scrollY;
    
    particles.forEach((particle, index) => {
        particle.style.transform = `translateY(${scrollPosition * (0.1 + index * 0.05)}px)`;
    });
});

// Suavizar scroll
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

const updateActiveLink = () => {
    const fromTop = window.scrollY + 150;
    sections.forEach((section, index) => {
        if (!section) return;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const link = navItems[index];

        if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

const btnContacto = document.querySelector('.btnContacto');

if (btnContacto) {
  btnContacto.addEventListener('click', () => {
    const target = document.querySelector('#contacto');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

updateActiveLink();

console.log(' ¡Bienvenido a Papeleria y Libreria SINAI! ');
