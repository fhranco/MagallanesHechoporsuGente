/**
 * Magallanes Hecho por su Gente - JavaScript Modular
 * Centro de Negocios Sercotec Punta Arenas (Operado por INACAP)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mensaje de control para datos demostrativos
  console.info(
    '%c[MAGALLANES - HECHO POR SU GENTE]%c\n' +
    'Entorno local de desarrollo activo.\n' +
    'AVISO: Los datos y fichas de artesanos, productores y talleres mostrados corresponden a ' +
    'referencias de diseño (Stitch) y son de carácter demostrativo. Pendiente de sustitución ' +
    'por los registros oficiales curados por el Centro de Negocios Sercotec Punta Arenas.',
    'background: #0F69B4; color: white; font-weight: bold; padding: 2px 6px; border-radius: 3px;',
    'color: #58595B;'
  );

  // 2. Control de navegación móvil (Drawer)
  const menuButton = document.getElementById('mobile-menu-btn');
  const navDrawer = document.getElementById('mobile-nav-drawer');

  if (menuButton && navDrawer) {
    const toggleMenu = () => {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isExpanded));
      navDrawer.classList.toggle('hidden');

      // Animación suave de aparición
      if (!navDrawer.classList.contains('hidden')) {
        navDrawer.setAttribute('aria-hidden', 'false');
      } else {
        navDrawer.setAttribute('aria-hidden', 'true');
      }
    };

    menuButton.addEventListener('click', toggleMenu);

    // Cerrar menú con tecla ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !navDrawer.classList.contains('hidden')) {
        toggleMenu();
        menuButton.focus();
      }
    });

    // Cerrar menú al hacer clic en enlaces internos
    const drawerLinks = navDrawer.querySelectorAll('a');
    drawerLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (!navDrawer.classList.contains('hidden')) {
          toggleMenu();
        }
      });
    });
  }

  // 3. Manejo accesible de buscador de cabecera y formulario hero
  const headerSearchBtn = document.getElementById('header-search-btn');
  const headerSearchInput = document.getElementById('header-search-input');

  if (headerSearchBtn && headerSearchInput) {
    headerSearchBtn.addEventListener('click', () => {
      headerSearchInput.focus();
    });
  }

  // 4. Formulario de Búsqueda Territorial
  const heroSearchForm = document.getElementById('hero-search-form');
  if (heroSearchForm) {
    heroSearchForm.addEventListener('submit', (e) => {
      const query = heroSearchForm.querySelector('input[name="q"]')?.value.trim();
      const comuna = heroSearchForm.querySelector('select[name="comuna"]')?.value;

      console.log(`[Búsqueda disparada] Término: "${query}", Comuna: "${comuna}"`);
      // En esta fase de Home local, la navegación hacia el directorio se documenta como destino activo
    });
  }
});

