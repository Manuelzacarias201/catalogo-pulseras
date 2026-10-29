/**
 * ÁMBAR DE CHIAPAS - CATÁLOGO WEB INTERACTIVO
 * Optimizado para Celulares Android y iPhone
 * Contacto WhatsApp Directo: +52 961 749 6409
 */

(function () {
  'use strict';

  // Configuración de WhatsApp
  const WA_PHONE = '529617496409';

  // Estado de la Aplicación
  const state = {
    allPulseras: typeof PULSERAS_DATA !== 'undefined' ? PULSERAS_DATA : [],
    filteredPulseras: [],
    activeCategory: 'all',
    searchQuery: '',
    favorites: new Set(),
    viewedItems: new Set(),
    isGrid2Col: false, // Default en móvil: 1 columna grande y visible
    activeModalItem: null,
    isZoomed: false
  };

  // Elementos del DOM
  const DOM = {
    catalogGrid: document.getElementById('catalogGrid'),
    emptyState: document.getElementById('emptyState'),
    searchInput: document.getElementById('searchInput'),
    searchClearBtn: document.getElementById('searchClearBtn'),
    categoryPills: document.querySelectorAll('.cat-pill'),
    viewToggleBtn: document.getElementById('viewToggleBtn'),
    viewToggleIcon: document.getElementById('viewToggleIcon'),
    statusCountText: document.getElementById('statusCountText'),
    progressBarFill: document.getElementById('progressBarFill'),
    progressPercentText: document.getElementById('progressPercentText'),
    favCountBadge: document.getElementById('favCountBadge'),
    favDrawerBtn: document.getElementById('favDrawerBtn'),
    favDrawerOverlay: document.getElementById('favDrawerOverlay'),
    favDrawer: document.getElementById('favDrawer'),
    favDrawerCloseBtn: document.getElementById('favDrawerCloseBtn'),
    favItemsList: document.getElementById('favItemsList'),
    btnWaMulti: document.getElementById('btnWaMulti'),
    favCountDrawer: document.getElementById('favCountDrawer'),
    // Modal
    modalOverlay: document.getElementById('modalOverlay'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalImage: document.getElementById('modalImage'),
    modalSku: document.getElementById('modalSku'),
    modalCategory: document.getElementById('modalCategory'),
    modalTitle: document.getElementById('modalTitle'),
    modalDesc: document.getElementById('modalDesc'),
    modalAmberType: document.getElementById('modalAmberType'),
    modalClosure: document.getElementById('modalClosure'),
    modalMeaning: document.getElementById('modalMeaning'),
    modalWaBtn: document.getElementById('modalWaBtn'),
    modalImageStage: document.getElementById('modalImageStage'),
    zoomStatusText: document.getElementById('zoomStatusText'),
    // Toast
    toastNotice: document.getElementById('toastNotice')
  };

  // --------------------------------------------------------------------------
  // UTILIDADES
  // --------------------------------------------------------------------------
  function normalizeText(text) {
    if (!text) return '';
    return text
      .toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  function showToast(message) {
    if (!DOM.toastNotice) return;
    DOM.toastNotice.textContent = message;
    DOM.toastNotice.classList.add('visible');
    clearTimeout(DOM.toastNotice._timer);
    DOM.toastNotice._timer = setTimeout(() => {
      DOM.toastNotice.classList.remove('visible');
    }, 2000);
  }

  function getBasePhotoUrl(filepath) {
    try {
      return new URL(filepath, window.location.href).href;
    } catch (e) {
      const origin = window.location.origin || '';
      const path = window.location.pathname.replace(/\/[^/]*$/, '/');
      return `${origin}${path}${filepath}`;
    }
  }

  // Mensaje Directo y Breve para WhatsApp (Requerimiento de usuario)
  function createWhatsAppUrl(item) {
    const photoUrl = getBasePhotoUrl(item.file);
    const message = `Hola, quiero esta pulsera: ${item.title} (Código: ${item.id}). ¿Está disponible?\nFoto: ${photoUrl}`;
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
  }

  // Mensaje Múltiple para Favoritas
  function createMultiWhatsAppUrl(items) {
    if (!items || items.length === 0) {
      return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent('Hola, me interesa información de las pulseras de ámbar.')}`;
    }
    const list = items.map((it, idx) => `${idx + 1}. ${it.title} (${it.id})`).join('\n');
    const message = `Hola, me interesan estas pulseras del catálogo:\n${list}\n¿Las tienes disponibles?`;
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
  }

  // --------------------------------------------------------------------------
  // PERSISTENCIA LOCAL (Favoritas & Progreso)
  // --------------------------------------------------------------------------
  function loadPersistedState() {
    try {
      const savedFavs = localStorage.getItem('ambar_favoritos');
      if (savedFavs) {
        state.favorites = new Set(JSON.parse(savedFavs));
      }

      const savedViews = localStorage.getItem('ambar_vistas');
      if (savedViews) {
        state.viewedItems = new Set(JSON.parse(savedViews));
      }
    } catch (e) {
      console.warn('Storage unavailable:', e);
    }
  }

  function savePersistedState() {
    try {
      localStorage.setItem('ambar_favoritos', JSON.stringify(Array.from(state.favorites)));
      localStorage.setItem('ambar_vistas', JSON.stringify(Array.from(state.viewedItems)));
    } catch (e) {
      console.warn('Cannot write to storage:', e);
    }
  }

  function markItemAsViewed(id) {
    if (!state.viewedItems.has(id)) {
      state.viewedItems.add(id);
      savePersistedState();
      updateZeigarnikProgress();
    }
  }

  function toggleFavorite(id, e) {
    if (e) e.stopPropagation();
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
      showToast('Eliminada de favoritas');
    } else {
      state.favorites.add(id);
      showToast('❤️ Guardada en favoritas');
    }
    savePersistedState();
    updateFavoriteBadges();
    renderCatalog();
    renderFavoritesDrawer();
  }

  function updateFavoriteBadges() {
    const count = state.favorites.size;
    if (DOM.favCountBadge) {
      DOM.favCountBadge.textContent = count;
      DOM.favCountBadge.style.display = count > 0 ? 'flex' : 'none';
    }
    if (DOM.favCountDrawer) {
      DOM.favCountDrawer.textContent = count;
    }
  }

  function updateZeigarnikProgress() {
    const total = state.allPulseras.length;
    const viewed = state.viewedItems.size;
    const percent = Math.min(100, Math.round((viewed / total) * 100));

    if (DOM.progressBarFill) {
      DOM.progressBarFill.style.width = `${percent}%`;
    }
    if (DOM.progressPercentText) {
      DOM.progressPercentText.textContent = `${percent}%`;
    }
  }

  // --------------------------------------------------------------------------
  // FILTRADO Y BÚSQUEDA
  // --------------------------------------------------------------------------
  function filterCatalog() {
    const query = normalizeText(state.searchQuery);
    const category = state.activeCategory;

    state.filteredPulseras = state.allPulseras.filter((item) => {
      if (category === 'destacadas' && !item.featured) return false;
      if (category !== 'all' && category !== 'destacadas' && item.category !== category) return false;

      if (!query) return true;

      const titleNorm = normalizeText(item.title);
      const idNorm = normalizeText(item.id);
      const catNorm = normalizeText(item.categoryName);
      const amberNorm = normalizeText(item.amberType);
      const descNorm = normalizeText(item.description);
      const materialsNorm = Array.isArray(item.materials)
        ? item.materials.map(normalizeText).join(' ')
        : normalizeText(item.materials);

      return (
        titleNorm.includes(query) ||
        idNorm.includes(query) ||
        catNorm.includes(query) ||
        amberNorm.includes(query) ||
        descNorm.includes(query) ||
        materialsNorm.includes(query)
      );
    });

    renderCatalog();
  }

  // --------------------------------------------------------------------------
  // RENDERIZADO DEL CATÁLOGO (Cards Grandes, Limpias y Visibles)
  // --------------------------------------------------------------------------
  function renderCatalog() {
    if (!DOM.catalogGrid) return;

    const count = state.filteredPulseras.length;
    const total = state.allPulseras.length;

    if (DOM.statusCountText) {
      DOM.statusCountText.innerHTML = `Mostrando <strong>${count}</strong> de ${total} pulseras`;
    }

    if (count === 0) {
      DOM.catalogGrid.innerHTML = '';
      if (DOM.emptyState) DOM.emptyState.classList.add('visible');
      return;
    }

    if (DOM.emptyState) DOM.emptyState.classList.remove('visible');

    DOM.catalogGrid.innerHTML = state.filteredPulseras
      .map((item) => {
        const isFav = state.favorites.has(item.id);
        const waLink = createWhatsAppUrl(item);

        return `
        <article class="bracelet-card" data-id="${item.id}">
          <div class="card-media-wrap" onclick="window.catalogApp.openModal('${item.id}')">
            <img src="${encodeURI(item.file)}" alt="${item.title}" loading="lazy" decoding="async">
            
            <div class="card-badges">
              <span class="badge-tag sku-tag">${item.id}</span>
              ${item.featured ? '<span class="badge-tag highlight">Destacada</span>' : ''}
            </div>

            <button type="button" class="btn-fav ${isFav ? 'active' : ''}" 
                    aria-label="Guardar en favoritas" 
                    onclick="window.catalogApp.toggleFav('${item.id}', event)">
              ${isFav ? '❤️' : '🤍'}
            </button>

            <div class="zoom-hint">
              <span>🔍 Ampliar</span>
            </div>
          </div>

          <div class="card-body">
            <h3 class="card-title" onclick="window.catalogApp.openModal('${item.id}')">${item.title}</h3>

            <p class="card-subtitle">${item.amberType} • ${item.closure}</p>

            <div class="card-actions">
              <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-card" 
                 onclick="window.catalogApp.trackItem('${item.id}');">
                <span>Pedir por WhatsApp</span>
              </a>
            </div>
          </div>
        </article>
      `;
      })
      .join('');
  }

  // --------------------------------------------------------------------------
  // MODAL / BOTTOM SHEET DE DETALLE & ZOOM
  // --------------------------------------------------------------------------
  function openModal(id) {
    const item = state.allPulseras.find((p) => p.id === id);
    if (!item) return;

    state.activeModalItem = item;
    markItemAsViewed(id);

    if (DOM.modalImage) {
      DOM.modalImage.src = encodeURI(item.file);
      DOM.modalImage.alt = item.title;
      DOM.modalImage.classList.remove('zoomed');
      state.isZoomed = false;
      if (DOM.zoomStatusText) DOM.zoomStatusText.textContent = 'Toca la foto para ampliar';
    }

    if (DOM.modalSku) DOM.modalSku.textContent = item.id;
    if (DOM.modalCategory) DOM.modalCategory.textContent = item.categoryName;
    if (DOM.modalTitle) DOM.modalTitle.textContent = item.title;
    if (DOM.modalDesc) DOM.modalDesc.textContent = item.description;
    if (DOM.modalAmberType) DOM.modalAmberType.textContent = item.amberType;
    if (DOM.modalClosure) DOM.modalClosure.textContent = item.closure;
    if (DOM.modalMeaning) DOM.modalMeaning.textContent = item.meaning;

    if (DOM.modalWaBtn) {
      DOM.modalWaBtn.href = createWhatsAppUrl(item);
    }

    if (DOM.modalOverlay) {
      DOM.modalOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (DOM.modalOverlay) {
      DOM.modalOverlay.classList.remove('open');
      document.body.style.overflow = '';
      state.activeModalItem = null;
    }
  }

  function toggleImageZoom() {
    if (!DOM.modalImage) return;
    state.isZoomed = !state.isZoomed;
    if (state.isZoomed) {
      DOM.modalImage.classList.add('zoomed');
      if (DOM.zoomStatusText) DOM.zoomStatusText.textContent = 'Toca para reducir';
    } else {
      DOM.modalImage.classList.remove('zoomed');
      if (DOM.zoomStatusText) DOM.zoomStatusText.textContent = 'Toca la foto para ampliar';
    }
  }

  // --------------------------------------------------------------------------
  // DRAWER DE FAVORITAS
  // --------------------------------------------------------------------------
  function openFavoritesDrawer() {
    renderFavoritesDrawer();
    if (DOM.favDrawerOverlay) DOM.favDrawerOverlay.classList.add('open');
    if (DOM.favDrawer) DOM.favDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeFavoritesDrawer() {
    if (DOM.favDrawerOverlay) DOM.favDrawerOverlay.classList.remove('open');
    if (DOM.favDrawer) DOM.favDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  function renderFavoritesDrawer() {
    if (!DOM.favItemsList) return;
    const favItems = state.allPulseras.filter((item) => state.favorites.has(item.id));

    if (favItems.length === 0) {
      DOM.favItemsList.innerHTML = `
        <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
          <span style="font-size: 2rem; display: block; margin-bottom: 8px;">🤍</span>
          <p style="font-weight: 700; color: var(--text-primary);">Aún no tienes favoritas</p>
          <p style="font-size: 0.82rem; margin-top: 4px;">Toca el corazón en cualquier pulsera para guardarla aquí.</p>
        </div>
      `;
      if (DOM.btnWaMulti) {
        DOM.btnWaMulti.href = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent('Hola, me gustaría información de las pulseras de ámbar.')}`;
        DOM.btnWaMulti.innerHTML = '<span>Consultar al WhatsApp</span>';
      }
      return;
    }

    DOM.favItemsList.innerHTML = favItems
      .map((item) => {
        return `
        <div class="fav-item-row" data-id="${item.id}">
          <div class="fav-item-thumb" onclick="window.catalogApp.openModal('${item.id}')" style="cursor: pointer;">
            <img src="${encodeURI(item.file)}" alt="${item.title}">
          </div>
          <div class="fav-item-meta">
            <span class="fav-item-sku">${item.id}</span>
            <h4 class="fav-item-name">${item.title}</h4>
          </div>
          <button type="button" class="btn-remove-fav" aria-label="Eliminar" 
                  onclick="window.catalogApp.toggleFav('${item.id}')">
            ✕
          </button>
        </div>
      `;
      })
      .join('');

    if (DOM.btnWaMulti) {
      DOM.btnWaMulti.href = createMultiWhatsAppUrl(favItems);
      DOM.btnWaMulti.innerHTML = `<span>Preguntar por mis ${favItems.length} pulseras en WhatsApp</span>`;
    }
  }

  // --------------------------------------------------------------------------
  // EVENT LISTENERS
  // --------------------------------------------------------------------------
  function setupEvents() {
    // Búsqueda en tiempo real
    if (DOM.searchInput) {
      DOM.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (DOM.searchClearBtn) {
          DOM.searchClearBtn.classList.toggle('active', state.searchQuery.length > 0);
        }
        filterCatalog();
      });
    }

    if (DOM.searchClearBtn) {
      DOM.searchClearBtn.addEventListener('click', () => {
        if (DOM.searchInput) DOM.searchInput.value = '';
        state.searchQuery = '';
        DOM.searchClearBtn.classList.remove('active');
        filterCatalog();
      });
    }

    // Filtros de categoría
    DOM.categoryPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        DOM.categoryPills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        state.activeCategory = pill.dataset.category || 'all';
        filterCatalog();
      });
    });

    // Toggle de Vista (1 columna grande vs 2 columnas compactas)
    if (DOM.viewToggleBtn) {
      DOM.viewToggleBtn.addEventListener('click', () => {
        state.isGrid2Col = !state.isGrid2Col;
        if (DOM.catalogGrid) {
          DOM.catalogGrid.classList.toggle('grid-2col', state.isGrid2Col);
        }
        if (DOM.viewToggleIcon) {
          DOM.viewToggleIcon.textContent = state.isGrid2Col ? '☰' : '⊞';
        }
        showToast(state.isGrid2Col ? 'Vista de 2 columnas' : 'Vista de 1 columna');
      });
    }

    // Modal Events
    if (DOM.modalCloseBtn) DOM.modalCloseBtn.addEventListener('click', closeModal);
    if (DOM.modalOverlay) {
      DOM.modalOverlay.addEventListener('click', (e) => {
        if (e.target === DOM.modalOverlay) closeModal();
      });
    }
    if (DOM.modalImageStage) DOM.modalImageStage.addEventListener('click', toggleImageZoom);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
        closeFavoritesDrawer();
      }
    });

    // Drawer de Favoritas Events
    if (DOM.favDrawerBtn) DOM.favDrawerBtn.addEventListener('click', openFavoritesDrawer);
    if (DOM.favDrawerCloseBtn) DOM.favDrawerCloseBtn.addEventListener('click', closeFavoritesDrawer);
    if (DOM.favDrawerOverlay) DOM.favDrawerOverlay.addEventListener('click', closeFavoritesDrawer);
  }

  // Inicialización
  function init() {
    loadPersistedState();
    state.filteredPulseras = [...state.allPulseras];
    renderCatalog();
    updateFavoriteBadges();
    updateZeigarnikProgress();
    setupEvents();
  }

  window.catalogApp = {
    openModal: openModal,
    closeModal: closeModal,
    toggleFav: toggleFavorite,
    trackItem: markItemAsViewed,
    closeFavoritesDrawer: closeFavoritesDrawer,
    resetFilter: function () {
      if (DOM.searchInput) DOM.searchInput.value = '';
      state.searchQuery = '';
      if (DOM.searchClearBtn) DOM.searchClearBtn.classList.remove('active');
      state.activeCategory = 'all';
      DOM.categoryPills.forEach((p) => {
        p.classList.toggle('active', p.dataset.category === 'all');
      });
      filterCatalog();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
