// Datos para el slider de soluciones
        const solucionesData = [
            {
                icon: 'fas fa-cogs',
                category: 'Modelos de gestión inteligente',
                title: 'Inteligencia Artificial',
                description: 'Revoluciona la gestión de operaciones y atención al cliente con automatización avanzada y análisis de datos en tiempo real.',
                image: 'imgs/soluciones/prod1.png',
                link: '../pages/prod_pages/prod_1_IA.html'
            },
            {
                icon: 'fas fa-chart-line',
                category: 'Ubicabilidad Inteligente',
                title: 'Smart Enrichment',
                description: 'Mejora la calidad y precisión de tus datos para una mejor segmentación de clientes y análisis de riesgos.',
                image: 'imgs/soluciones/prod2.png',
                link: '../pages/prod_pages/prod_2_SE.html'
            },
            {
                icon: 'fas fa-folder-open',
                category: 'Expedientes Digitales',
                title: 'Digitalización de Expedientes',
                description: 'Convierte archivos físicos en imágenes seguras y accesibles, reduciendo costos y liberando espacio.',
                image: 'imgs/soluciones/prod3.png',
                link: '../pages/prod_pages/prod_3_DE.html'
            },
            {
                icon: 'fas fa-chart-pie',
                category: 'Portfolio Controller',
                title: 'Portfolio Controller',
                description: 'Optimiza la gestión de cobranza con estrategias basadas en datos para maximizar la recuperación.',
                image: 'imgs/soluciones/prod4.png',
                link: '../pages/prod_pages/prod_4_PC.html'
            },
            {
                icon: 'fas fa-map-marker-alt',
                category: 'Datos Geográficos',
                title: 'Geo Analytics',
                description: 'Visualiza y analiza datos geográficos para optimizar la planificación comercial y minimizar riesgos.',
                image: 'imgs/soluciones/prod6.png',
                link: '../pages/prod_pages/prod_5_GA.html'
            },
            {
                icon: 'fas fa-hand-holding-usd',
                category: 'Recuperación Avanzada',
                title: 'Cobranza Inteligente',
                description: 'Combina IA, omnicanalidad y análisis de datos para identificar deudores y predecir comportamientos.',
                image: 'imgs/soluciones/prod5.png',
                link: '../pages/prod_pages/prod_6_CI.html'
            },
            {
                icon: 'fas fa-robot',
                category: 'Atención Automatizada',
                title: 'Chat Bot & Voice Bot',
                description: 'Mejora la atención al cliente con bots que ofrecen respuestas instantáneas y automatizan procesos.',
                image: 'imgs/soluciones/prod7.png',
                link: '../pages/prod_pages/prod_7_CB.html'
            },
            {
                icon: 'fas fa-credit-card',
                category: 'Colocación Eficiente',
                title: 'Creditsmart',
                description: 'Agiliza la evaluación y otorgamiento de créditos con nuestro proceso eficiente y call center especializado.',
                image: 'imgs/soluciones/prod8.png',
                link: '../pages/prod_pages/prod_8_C.html'
            },
            {
                icon: 'fas fa-comment-alt',
                category: 'Comunicación Omnicanal',
                title: 'SMS & WhatsApp',
                description: 'Optimiza la comunicación con tus clientes a través de mensajes automatizados y notificaciones.',
                image: 'imgs/soluciones/prod9.png',
                link: '../pages/prod_pages/prod_9_SW.html'
            },
            {
                icon: 'fas fa-chart-line',
                category: 'Consultorías',
                title: 'Consultorías de Riesgos',
                description: 'Optimizamos la gestión crediticia, mejoramos la toma de decisiones y fortalecemos la seguridad financiera de su empresa.',
                image: 'imgs/soluciones/SERVICIOS/serv1.png',
                link: '../pages/serv_pages/serv_1.html'
            },
            {
                icon: 'fas fa-user-shield',
                category: 'Consultorías',
                title: 'Sistema de Prevención de Fraude y Lavado de Activos (LAFT)',
                description: 'Asesoramos en LAFT y fraudes corporativos, garantizando cumplimiento normativo y reducción de riesgos.',
                image: 'imgs/soluciones/SERVICIOS/serv2.png',
                link: '../pages/serv_pages/serv_2.html'
            },
            {
                icon: 'fas fa-search',
                category: 'Consultorías',
                title: 'Prevención y Detección de Fraudes',
                description: 'Evaluamos riesgos, implementamos estrategias antifraude y fortalecemos controles internos para mitigar fraudes corporativos.',
                image: 'imgs/soluciones/SERVICIOS/serv4.png',
                link: '../pages/serv_pages/serv_4.html'
            },
            {
                icon: 'fas fa-tasks',
                category: 'Metodología',
                title: 'Metodología de trabajo',
                description: 'Nuestra metodología combina diagnóstico, implementación y mejora continua para optimizar controles y garantizar el cumplimiento eficaz.',
                image: 'imgs/soluciones/SERVICIOS/serv5.png',
                link: '../pages/serv_pages/serv_4.html'
            },
            {
                icon: 'fas fa-award',
                category: 'Beneficios',
                title: 'Beneficios para su Organización',
                description: 'Nuestro enfoque reduce riesgos, protege la reputación y mejora controles con eficiencia y capacitación clave.',
                image: 'imgs/soluciones/SERVICIOS/serv6.png',
                link: '../pages/serv_pages/serv_4.html'
            }
        ];

        // Datos para los clientes y socios
        const clientesData = [
            'imgs/alianzas/cliente1.png',
            'imgs/alianzas/cliente2.png',
            'imgs/alianzas/cliente3.png',
            'imgs/alianzas/cliente4.png',
            'imgs/alianzas/cliente5.png',
            'imgs/alianzas/cliente6.jpg',
            'imgs/alianzas/cliente7.png'
        ];

        const sociosData = [
            'imgs/alianzas/socio1.png',
            'imgs/alianzas/socio2.png'
        ];

        // Inicialización cuando el DOM esté listo
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navMenu = document.querySelector('.nav-menu');
            
            mobileMenuBtn.addEventListener('click', function() {
                navMenu.classList.toggle('active');
            });

            // Carrusel de fondo del hero
            const heroSlides = document.querySelectorAll('.hero-slide');
            let currentSlide = 0;
            
            function nextSlide() {
                heroSlides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % heroSlides.length;
                heroSlides[currentSlide].classList.add('active');
            }
            
            // Cambiar slide cada 5 segundos
            setInterval(nextSlide, 5000);

            // Inicializar Swiper para soluciones
            const swiper = new Swiper('.swiper', {
                direction: 'horizontal',
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplay: {
                    delay: 5000,
                },
                effect: 'slide',
                speed: 800
            });

            // Cargar slides de soluciones
            const swiperWrapper = document.querySelector('.swiper-wrapper');
            
            solucionesData.forEach(solucion => {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide solucion-item';
                
                slide.innerHTML = `
                    <div class="solucion-content">
                        <div class="content-left">
                            <div class="icon-title">
                                <i class="${solucion.icon}"></i>
                                <span>${solucion.category}</span>
                            </div>
                            <h3>${solucion.title}</h3>
                            <p>${solucion.description}</p>
                            <a href="${solucion.link}" class="saber-mas">Saber más<i class="fas fa-arrow-right"></i></a>
                        </div>
                        <div class="content-right">
                            <img class="img_cont" src="${solucion.image}" alt="${solucion.title} Informa Perú">
                        </div>
                    </div>
                `;
                
                swiperWrapper.appendChild(slide);
            });

            // Cargar imágenes de clientes
            const clientesTrack = document.querySelector('.slider-track');
            
            // Duplicar imágenes para efecto continuo
            for (let i = 0; i < 3; i++) {
                clientesData.forEach(cliente => {
                    const img = document.createElement('img');
                    img.src = cliente;
                    img.alt = `Cliente Informa Perú`;
                    clientesTrack.appendChild(img);
                });
            }

            // Cargar imágenes de socios
            const sociosTrack = document.querySelector('.slider-track1');
            
            // Duplicar imágenes para efecto continuo
            for (let i = 0; i < 3; i++) {
                sociosData.forEach(socio => {
                    const img = document.createElement('img');
                    img.src = socio;
                    img.alt = `Socio Informa Perú`;
                    sociosTrack.appendChild(img);
                });
            }

            // Tabs de alianzas
            const tabBtns = document.querySelectorAll('.tab-btn');
            const tabPanes = document.querySelectorAll('.tab-pane');
            
            tabBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const tabId = this.getAttribute('data-tab');
                    
                    // Remover clase activa de todos los botones y paneles
                    tabBtns.forEach(b => b.classList.remove('active'));
                    tabPanes.forEach(p => p.classList.remove('active'));
                    
                    // Agregar clase activa al botón y panel actual
                    this.classList.add('active');
                    document.getElementById(tabId).classList.add('active');
                });
            });

            // Manejo del formulario de contacto
            const form = document.querySelector('.form-contacto');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Aquí iría la lógica para enviar el formulario
                alert('¡Gracias por contactarnos! Te responderemos a la brevedad.');
                form.reset();
            });

            // Lógica para los modales de deuda
            const newsModal = document.getElementById('newsModal');
            const debtModal = document.getElementById('debtModal');
            const closeNewsModal = document.getElementById('closeNewsModal');
            const closeDebtModal = document.getElementById('closeDebtModal');
            const openDebtModalBtn = document.getElementById('openDebtModal');
            const openDebtFromNews = document.getElementById('openDebtFromNews');
            const debtForm = document.getElementById('debtForm');
            const debtResult = document.getElementById('debtResult');
            const noDebtNotification = document.getElementById('noDebtNotification');

            // Abrir modal de deuda desde el botón en el hero
            openDebtModalBtn.addEventListener('click', function() {
                debtModal.classList.add('active');
            });

            // Abrir modal de deuda desde el modal de noticia
            openDebtFromNews.addEventListener('click', function() {
                newsModal.classList.remove('active');
                debtModal.classList.add('active');
            });

            // Cerrar modal de noticia
            closeNewsModal.addEventListener('click', function() {
                newsModal.classList.remove('active');
            });

            // Cerrar modal de deuda
            closeDebtModal.addEventListener('click', function() {
                debtModal.classList.remove('active');
                debtResult.style.display = 'none';
                debtForm.reset();
            });

            // Cerrar modales al hacer clic fuera
            document.addEventListener('click', function(e) {
                if (e.target === newsModal) {
                    newsModal.classList.remove('active');
                }
                if (e.target === debtModal) {
                    debtModal.classList.remove('active');
                    debtResult.style.display = 'none';
                    debtForm.reset();
                }
            });

            // Manejar el envío del formulario de deuda
            debtForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const documentValue = document.getElementById('document').value.trim();
                
                // Simulación de verificación de deuda
                // En una implementación real, esto sería una llamada a una API
                if (documentValue === '12345678' || documentValue === '987654321') {
                    // Tiene deuda
                    debtResult.innerHTML = `
                        <div style="background-color: #f8d7da; color: #721c24; padding: 15px; border-radius: 5px; border: 1px solid #f5c6cb;">
                            <i class="fas fa-exclamation-triangle"></i> Usted tiene una deuda, por favor comuníquese al 956469717
                        </div>
                    `;
                    debtResult.style.display = 'block';
                } else {
                    // No tiene deuda
                    debtModal.classList.remove('active');
                    debtResult.style.display = 'none';
                    debtForm.reset();
                    
                    // Mostrar notificación de no deuda
                    noDebtNotification.classList.add('show');
                    
                    // Ocultar notificación después de 3 segundos
                    setTimeout(function() {
                        noDebtNotification.classList.remove('show');
                    }, 3000);
                }
            });
        });