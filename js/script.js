import {slidesData} from './slider.js'

import {products} from './products.js';

let exchangeRate = 5;

async function fetchExchangeRate() {
  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    exchangeRate = 5.35; //data.rates.BRL;
    renderProducts(products);
  } catch (e) {
    console.error('Erro ao buscar câmbio', e);
    renderProducts(products);
  }
}

function renderProducts(list) {
  const container = document.getElementById('products');
  container.innerHTML = '';

  list.forEach(p => {
    const rawPrice = p.priceUSD * exchangeRate * 1.40;
  const priceBRL = rawPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  //  const priceBRL = ((p.priceUSD * exchangeRate) * (1.40)).toFixed(2);

    container.innerHTML += `
      <div class="card">
        <img src="${p.image}" onclick="openModal('${p.image}')" />
        <h3>${p.name}</h3>
        <h3>${p.brand}</h3>
        <p>${p.gender}</p>
        <p>${priceBRL}</p>
      </div>
    `;
  });
}

window.openModal = function(src) {
  const modalImg = document.getElementById('modalImg');
  modalImg.src = src;
  modal.classList.add('active');
}

window.filterProducts = function(filter) {
  if (filter === 'all') return renderProducts(products);
  const filtered = products.filter(p => p.category === filter);
  renderProducts(filtered);
}

fetchExchangeRate();

const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = '<span class="close">&times;</span><img id="modalImg" />';
document.body.appendChild(modal);

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal') || e.target.classList.contains('close')) {
    modal.classList.remove('active');
  }
});

window.toggleDropdown = function() {
  document.getElementById("dropdown-marcas").classList.toggle("active");  
}

function filterProductsBrands() {
  const selectedBrands = getSelectedBrands(); 
  let filterBrands;

  if (selectedBrands.includes('todas') || selectedBrands.length === 0) {
    filterBrands = products;
  } else {
    filterBrands = products.filter(p => selectedBrands.includes(p.brand));
  }

  renderProducts(filterBrands);
}

function getSelectedBrands() {
  const checkboxes = document.querySelectorAll('#dropdown-marcas input[type="checkbox"]:checked');
  
  const selected = Array.from(checkboxes).map(cb => cb.value.replace(/-/g, " "));
  
  return selected;
}

/* fechar ao clicar fora */
document.addEventListener("click", function (e) {
  const dropdown = document.getElementById("dropdown-marcas");
  const button = document.querySelector(".filter-btn");

  if (!button.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

document.querySelectorAll('#dropdown-marcas input[type="checkbox"]')
  .forEach(cb => {
    cb.addEventListener('change', filterProductsBrands);
});

document.querySelectorAll('#dropdown-marcas input').forEach(cb => {
  cb.addEventListener('change', function() {
    if (this.value === 'todas' && this.checked) {
      document.querySelectorAll('#dropdown-marcas input')
        .forEach(c => {
          if (c !== this) c.checked = false;
        });
    } else {
      document.querySelector('#dropdown-marcas input[value="todas"]').checked = false;
    }

    filterProductsBrands();
  });
});

let currentIndex = 0;

function renderCarousel() {
  const container = document.getElementById("carousel-container");
  const dotsContainer = document.getElementById("carousel-dots");

  container.innerHTML = "";
  dotsContainer.innerHTML = "";

  slidesData.forEach((slide, index) => {
    // Slide <button>${slide.button}</button>
    const div = document.createElement("div");
    div.classList.add("slide");

    div.innerHTML = `
      <img src="${slide.image}" />
      <div class="slide-content">
        <h2>${slide.title}</h2>
        <p>${slide.description}</p>                
      </div>
    `;

    // Clique no slide inteiro
    /*
    div.addEventListener("click", () => {
      window.open(slide.link, "_blank");
    });*/

    container.appendChild(div);

    // Dots
    /*
    const dot = document.createElement("span");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);*/
  });

  updateCarousel();
}

function updateCarousel() {
  const container = document.getElementById("carousel-container");
  container.style.transform = `translateX(-${currentIndex * 100}%)`;

  const dots = document.querySelectorAll(".carousel-dots span");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

window.nextSlide = function() {
  currentIndex = (currentIndex + 1) % slidesData.length;
  updateCarousel();
}

window.prevSlide = function() {
  currentIndex =
    (currentIndex - 1 + slidesData.length) % slidesData.length;
  updateCarousel();
}

window.goToSlide = function (index) {
  currentIndex = index;
  updateCarousel();
}

// autoplay opcional
setInterval(nextSlide, 5000);

// iniciar
renderCarousel();
