// app.js - Todo el JavaScript consolidado

// ===== NAVEGACIÓN Y MENÚ =====
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const topNav = document.querySelector('.top-nav');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const mainNav = document.querySelector('.main-nav');

    // Toggle menú móvil
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
        topNav.classList.toggle('mobile-hidden');
        
        if (navLinks.classList.contains('active')) {
            mainNav.style.top = '0';
        } else {
            mainNav.style.top = window.scrollY > 50 ? '0' : '40px';
        }
    });

    // Dropdowns en móvil
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const megaMenu = toggle.nextElementSibling;
                megaMenu.classList.toggle('active');
                toggle.querySelector('i').classList.toggle('fa-chevron-down');
                toggle.querySelector('i').classList.toggle('fa-chevron-up');
            }
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY || window.pageYOffset;
        
        if (scrollPosition > 50) {
            topNav.classList.add('hidden');
            mainNav.classList.add('scrolled');
            mainNav.style.zIndex = '1101';
        } else {
            topNav.classList.remove('hidden');
            mainNav.classList.remove('scrolled');
            mainNav.style.zIndex = '1000';
        }
    });

    // ===== SWIPER SOLUCIONES =====
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 50
            }
        }
    });

    // ===== SLIDERS DE ALIANZAS =====
    function initLogoSliders() {
        const sliders = document.querySelectorAll('.logos-slider');
        
        sliders.forEach(slider => {
            const track = slider.querySelector('.slider-track');
            const logos = track.querySelectorAll('img');
            
            // Duplicar logos para efecto infinito
            logos.forEach(logo => {
                const clone = logo.cloneNode(true);
                track.appendChild(clone);
            });
            
            // Animación
            let animation;
            let speed = 0.8;
            let currentPosition = 0;
            const trackWidth = track.scrollWidth / 2;
            
            function animate() {
                currentPosition -= speed;
                
                if (Math.abs(currentPosition) >= trackWidth) {
                    currentPosition = 0;
                }
                
                track.style.transform = `translateX(${currentPosition}px)`;
                animation = requestAnimationFrame(animate);
            }
            
            // Iniciar animación
            animate();
            
            // Pausar al hacer hover
            slider.addEventListener('mouseenter', () => {
                cancelAnimationFrame(animation);
            });
            
            slider.addEventListener('mouseleave', () => {
                animate();
            });
        });
    }

    initLogoSliders();

    // ===== FORMULARIO DE CONTACTO =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this);
        });
    }

    function handleFormSubmit(form) {
        const formData = new FormData(form);
        const formMessage = document.getElementById('formMessage');
        
        // Validación básica
        const requiredFields = ['nombres', 'email', 'mensaje'];
        let missingFields = [];
        
        requiredFields.forEach(field => {
            if (!formData.get(field)?.trim()) {
                missingFields.push(field);
            }
        });
        
        if (missingFields.length > 0) {
            showFormMessage('❌ Por favor completa todos los campos requeridos', 'error');
            return;
        }
        
        // Simular envío (reemplazar con tu endpoint real)
        showFormMessage('📨 Enviando mensaje...', 'loading');
        
        setTimeout(() => {
            showFormMessage('✅ Mensaje enviado correctamente. Te contactaremos pronto.', 'success');
            form.reset();
        }, 2000);
    }

    function showFormMessage(text, type) {
        const formMessage = document.getElementById('formMessage');
        if (!formMessage) return;
        
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }

    // ===== LAZY LOADING PARA IMÁGENES =====
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ===== OPTIMIZACIÓN DE RENDIMIENTO =====
    // Preload imágenes críticas
    function preloadCriticalImages() {
        const criticalImages = [
            'imgs/nav/logo_claro.png',
            'imgs/soluciones/prod1.png'
        ];
        
        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    preloadCriticalImages();
});

// ===== POLYFILLS PARA COMPATIBILIDAD =====
// Smooth scroll para navegadores antiguos
if (!('scrollBehavior' in document.documentElement.style)) {
    import('https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js');
}