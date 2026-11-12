
import { slidesData } from './slider.js';
import { products } from './products.js';

let exchangeRate = 5.40;

const PRODUCTS_PER_PAGE = 10;

let currentPage = 1;
let currentCategory = 'all';
let filteredProducts = [...products];
let currentIndex = 0;

// ======================================
// MODAL DE IMAGENS
// ======================================

const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
  <span class="close">&times;</span>
  <img id="modalImg" alt="Imagem do produto" />
`;
document.body.appendChild(modal);

window.openModal = function(src) {
  const modalImg = document.getElementById('modalImg');
  modalImg.src = src;
  modal.classList.add('active');
};

modal.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('modal') ||
    e.target.classList.contains('close')
  ) {
    modal.classList.remove('active');
  }
});

// ======================================
// FILTROS
// ======================================

window.filterProducts = function(filter) {
  currentCategory = filter;

  document.querySelectorAll('.category-filters button')
    .forEach(button => button.classList.remove('active'));

  const activeButton = Array.from(
    document.querySelectorAll('.category-filters button')
  ).find(button =>
    button.getAttribute('onclick') === `filterProducts('${filter}')`
  );

  if (activeButton) {
    activeButton.classList.add('active');
  }

  applyFilters();
};

function getSelectedBrands() {
  const checkboxes = document.querySelectorAll(
    '#dropdown-marcas input[type="checkbox"]:checked'
  );

  return Array.from(checkboxes)
    .filter(cb => cb.value !== 'todas')
    .map(cb => cb.value.replace(/-/g, ' '));
}

function applyFilters() {
  const selectedBrands = getSelectedBrands();

  filteredProducts = products.filter(p => {

    // Filtro de categoria
    const matchesCategory =
      currentCategory === 'all' ||
      p.gender === currentCategory ||
      p.category === currentCategory;

    // Filtro de marca
    const matchesBrand =
      selectedBrands.length === 0 ||
      selectedBrands.includes(p.brand);

    return matchesCategory && matchesBrand;
  });

  // Sempre retorna à primeira página ao filtrar
  currentPage = 1;

  renderProducts();
}

// Dropdown de marcas
window.toggleDropdown = function() {
  document.getElementById('dropdown-marcas')
    .classList.toggle('active');
};

// Controle dos checkboxes
document.querySelectorAll(
  '#dropdown-marcas input[type="checkbox"]'
).forEach(cb => {

  cb.addEventListener('change', function() {

    const allCheckbox = document.querySelector(
      '#dropdown-marcas input[value="todas"]'
    );

    const otherCheckboxes = document.querySelectorAll(
      '#dropdown-marcas input:not([value="todas"])'
    );

    if (this.value === 'todas' && this.checked) {
      otherCheckboxes.forEach(c => c.checked = false);
    } else if (this.value !== 'todas' && this.checked) {
      allCheckbox.checked = false;
    }

    applyFilters();
  });

});

// Fechar dropdown ao clicar fora
document.addEventListener('click', function(e) {
  const dropdown = document.getElementById('dropdown-marcas');
  const button = document.querySelector('.filter-btn');

  if (
    dropdown &&
    button &&
    !button.contains(e.target) &&
    !dropdown.contains(e.target)
  ) {
    dropdown.classList.remove('active');
  }
});

// ======================================
// RENDERIZAÇÃO DOS PRODUTOS
// ======================================

function renderProducts() {

  const container = document.getElementById('products');
  const pagination = document.getElementById('pagination');

  container.innerHTML = '';

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  // Ajusta página caso a quantidade de produtos diminua
  if (totalPages > 0 && currentPage > totalPages) {
    currentPage = totalPages;
  }

  if (totalProducts === 0) {
    container.innerHTML = `
      <p class="empty-products">
        Nenhum produto encontrado.
      </p>
    `;

    pagination.innerHTML = '';
    return;
  }

  // Índices dos produtos da página atual
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;

  const pageProducts = filteredProducts.slice(
    startIndex,
    endIndex
  );

  // Criar cards
  pageProducts.forEach(p => {

    const rawPrice = p.priceUSD * exchangeRate * 1.40;

    const priceBRL = rawPrice.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = p.image;
    img.alt = p.name;
    img.loading = 'lazy';
    img.decoding = 'async';

    img.addEventListener('click', () => {
      window.openModal(p.image);
    });

    const name = document.createElement('h3');
    name.textContent = p.name;

    const brand = document.createElement('h3');
    brand.textContent = p.brand;

    const gender = document.createElement('p');
    gender.textContent = p.gender;

    const price = document.createElement('p');
    price.textContent = priceBRL;

    card.append(img, name, brand, gender, price);
    container.appendChild(card);
  });

  renderPagination(totalPages, totalProducts);
}

// ======================================
// PAGINAÇÃO
// ======================================

function renderPagination(totalPages, totalProducts) {

  const pagination = document.getElementById('pagination');

  if (!pagination) return;

  pagination.innerHTML = '';

  // Não mostrar paginação se houver apenas uma página
  if (totalPages <= 1) {
    pagination.innerHTML = `
      <div class="page-info">
        Exibindo ${totalProducts} produto(s)
      </div>
    `;
    return;
  }

  // Botão anterior
  const prevButton = document.createElement('button');
  prevButton.textContent = 'Anterior';
  prevButton.disabled = currentPage === 1;

  prevButton.addEventListener('click', () => {
    changePage(currentPage - 1);
  });

  pagination.appendChild(prevButton);

  // Números das páginas
  let pages = [];

  if (totalPages <= 7) {
    pages = Array.from(
      { length: totalPages },
      (_, i) => i + 1
    );
  } else {
    pages = [
      1,
      ...(currentPage > 3 ? ['...'] : []),
      ...Array.from(
        { length: 3 },
        (_, i) => currentPage - 1 + i
      ).filter(p => p > 1 && p < totalPages),
      ...(currentPage < totalPages - 2 ? ['...'] : []),
      totalPages
    ];
  }

  pages.forEach(page => {

    if (page === '...') {
      const dots = document.createElement('span');
      dots.textContent = '...';
      dots.classList.add('pagination-dots');
      pagination.appendChild(dots);
      return;
    }

    const button = document.createElement('button');

    button.textContent = page;

    if (page === currentPage) {
      button.classList.add('active');
      button.setAttribute('aria-current', 'page');
    }

    button.addEventListener('click', () => {
      changePage(page);
    });

    pagination.appendChild(button);
  });

  // Botão próximo
  const nextButton = document.createElement('button');
  nextButton.textContent = 'Próxima';
  nextButton.disabled = currentPage === totalPages;

  nextButton.addEventListener('click', () => {
    changePage(currentPage + 1);
  });

  pagination.appendChild(nextButton);

  // Contador de produtos
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE + 1;
  const end = Math.min(
    currentPage * PRODUCTS_PER_PAGE,
    totalProducts
  );

  const info = document.createElement('div');
  info.classList.add('page-info');
  info.textContent =
    `Exibindo ${start}–${end} de ${totalProducts} produtos`;

  pagination.appendChild(info);
}

// Trocar página
function changePage(page) {

  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE
  );

  if (page < 1 || page > totalPages) return;

  currentPage = page;
  renderProducts();
}

// ======================================
// CÂMBIO
// ======================================

async function fetchExchangeRate() {

  try {

    // Mantido o câmbio fixo atual
    exchangeRate = 5.40;

    // Para utilizar a API futuramente:
    // const response = await fetch(
    //   'https://api.exchangerate-api.com/v4/latest/USD'
    // );
    // const data = await response.json();
    // exchangeRate = data.rates.BRL;

  } catch (e) {
    console.error('Erro ao buscar câmbio', e);
  }

  applyFilters();
}

// ======================================
// CARROSSEL
// ======================================

function renderCarousel() {

  const container = document.getElementById('carousel-container');
  const dotsContainer = document.getElementById('carousel-dots');

  container.innerHTML = '';
  dotsContainer.innerHTML = '';

  slidesData.forEach((slide) => {

    const div = document.createElement('div');
    div.classList.add('slide');

    const img = document.createElement('img');
    img.src = slide.image;
    img.alt = slide.title;
    img.loading = 'lazy';

    const content = document.createElement('div');
    content.classList.add('slide-content');

    const title = document.createElement('h2');
    title.textContent = slide.title;

    const description = document.createElement('p');
    description.textContent = slide.description;

    content.append(title, description);
    div.append(img, content);

    container.appendChild(div);
  });

  updateCarousel();
}

function updateCarousel() {

  const container = document.getElementById('carousel-container');

  if (!slidesData.length) return;

  container.style.transform =
    `translateX(-${currentIndex * 100}%)`;
}

window.nextSlide = function() {

  if (!slidesData.length) return;

  currentIndex = (currentIndex + 1) % slidesData.length;
  updateCarousel();
};

window.prevSlide = function() {

  if (!slidesData.length) return;

  currentIndex =
    (currentIndex - 1 + slidesData.length) % slidesData.length;

  updateCarousel();
};

window.goToSlide = function(index) {

  if (index < 0 || index >= slidesData.length) return;

  currentIndex = index;
  updateCarousel();
};

// ======================================
// INICIALIZAÇÃO
// ======================================

fetchExchangeRate();
renderCarousel();

// Autoplay do carrossel
if (slidesData.length > 1) {
  setInterval(() => {
    window.nextSlide();
  }, 5000);
}
