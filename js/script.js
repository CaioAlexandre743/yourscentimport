const slidesData = [
  {
    image: "https://medias.carolinaherrera.com/cdn-cgi/image/width=2560,quality=90,format=auto,fit=contain/medias/sys_master/images/hfa/h8a/10731745148958/FR-Hero-Jasmine-Desktop/FR-Hero-Jasmine-Desktop.jpg",
    title: "",
    description: "",
    button: "",
    link: ""
  },
  {
    image: "https://lojadior.vtexassets.com/assets/vtex.file-manager-graphql/images/17e5e458-49c0-43da-8d2b-1bc038a30edc___97e5704fc6ccedfbe5f0498b682db522.webp",
    title: "",
    description: "",
    button: "",
    link: ""
  },
  {
    image: "https://medias.rabanne.com/cdn-cgi/image/width=1920/medias/sys_master/images/hdc/hb4/10582129639454/PLP_invictus_D_092025/PLP-invictus-D-092025.jpg",
    title: "",
    description: "",
    button: "",
    link: ""
  }
];

const products = [
  {
    name: "Yara 100ml",
    brand: "Lattafa",
    gender: "feminino",
    category: "perfume",
    priceUSD: 22,
    image: "https://www.lattafa-usa.com/cdn/shop/files/1_7682153c-2dce-4b60-a9e6-20557f8502cf.png?v=1747500015&width=810"
  },
  {
    name: "Yara Elixir 100ml",
    brand: "Lattafa",
    gender: "feminino",
    category: "perfume",
    priceUSD: 26,
    image: "https://www.lattafa-usa.com/cdn/shop/files/YaraElixirBottle.png?v=1760805808&width=810"
  },
  {
    name: "Afeef 100ml",
    brand: "Lattafa",
    gender: "unissex",
    category: "perfume",
    priceUSD: 50,
    image: "https://www.lattafa-usa.com/cdn/shop/files/Afeef-1.png?v=1747414788&width=810"
  },
  {
    name: "Atheeri 100ml",
    brand: "Lattafa",
    gender: "unissex",
    category: "perfume",
    priceUSD: 68,
    image: "https://www.lattafa-usa.com/cdn/shop/files/Atheeri-1_f93156cf-73d9-4455-8540-5665a4312efb.png?v=1747416765&width=810"
  },
  {
    name: "Al Noble Ameer 100ml",
    brand: "Lattafa",
    gender: "masculino",
    category: "perfume",
    priceUSD: 20,
    image: "https://www.lattafa-usa.com/cdn/shop/files/1_89027578-d9b1-4664-a7dc-538f0f110578.png?v=1756361257&width=810"
  },
  {
    name: "Asad 100ml",
    brand: "Lattafa",
    gender: "masculino",
    category: "perfume",
    priceUSD: 26,
    image: "https://www.lattafa-usa.com/cdn/shop/files/Asad-1_ceed76c7-7a80-46b3-b372-68cc309137f4.png?v=1747421311&width=810"
  },
  {
    name: "Asad Elixir 100ml",
    brand: "Lattafa",
    gender: "masculino",
    category: "perfume",
    priceUSD: 30,
    image: "https://www.lattafa-usa.com/cdn/shop/files/ASADELIXIRBOTTLE.png?v=1760805808&width=810"
  },
  {
    name: "Musamam Black Intense 100ml",
    brand: "Lattafa",
    gender: "masculino",
    category: "perfume",
    priceUSD: 40,
    image: "https://www.lattafa-usa.com/cdn/shop/files/LattafaMusamamBlackIntenseEDP100mlSpray.png?v=1763742607&width=810"
  },
  {
    name: "Musamam White Intense 100ml",
    brand: "Lattafa",
    gender: "unissex",
    category: "perfume",
    priceUSD: 35,
    image: "https://www.lattafa-usa.com/cdn/shop/files/Musamam-White-1.png?v=1747416325&width=810"
  },
  {
    name: "Sabah Al Ward 100ml",
    brand: "Al Wataniah",
    gender: "feminino",
    category: "perfume",
    priceUSD: 18,
    image: "https://www.alwataniah.com/cdn/shop/files/sabah-al-ward.png?v=1759755351&width=600"
  },
  {
    name: "Eclaire 100ml",
    brand: "Lattafa",
    gender: "unissex",
    category: "perfume",
    priceUSD: 24,
    image: "https://www.lattafa-usa.com/cdn/shop/files/Eclaire-1_5803282e-ea5b-4de5-99a5-7d06f5cbae33.png?v=1747415649&width=810"
  },
  {
    name: "Pure Seduction Fragrance Mist 250ml",
    brand: "Victoria's Secret",
    gender: "feminino",
    category: "perfume",
    priceUSD: 15,
    image: "https://www.victoriassecret.com/p/1000x1333/png/zz/25/02/06/02/112592031340_OM_F.jpg"
  },
  {
    name: "Love Spell Fragrance Mist 250ml",
    brand: "Victoria's Secret",
    gender: "feminino",
    category: "perfume",
    priceUSD: 15,
    image: "https://www.victoriassecret.com/p/1000x1333/png/zz/25/02/06/02/112592032017_OM_F.jpg"
  },
  {
    name: "Bleu de Chanel Eau de Toilette 100ml",
    brand: "Chanel",
    gender: "masculino",
    category: "perfume",
    priceUSD: 130,
    image: "https://www.chanel.com/images/t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_1020/bleu-de-chanel-eau-de-parfum-spray-3-4fl-oz--packshot-default-107360-9564894232606.jpg"
  },
  {
    name: "Chanel N° 5 Eau de Parfum 100ml",
    brand: "Chanel",
    gender: "feminino",
    category: "perfume",
    priceUSD: 160,
    image: "https://www.chanel.com/images/t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_1020/n-5-eau-de-parfum-spray-3-4fl-oz--packshot-default-125530-9564912943134.jpg"
  },
  {
    name: "Bleu de Chanel Eau de Parfum 50ML",
    brand: "Chanel",
    gender: "masculino",
    category: "perfume",
    priceUSD: 115,
    image: "https://www.chanel.com/images/t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_1020/bleu-de-chanel-eau-de-parfum-spray-3-4fl-oz--packshot-default-107360-9564894232606.jpg"
  },
  {
    name: "Sauvage Eau de Toilette 100ML",
    brand: "Dior",
    gender: "masculino",
    category: "perfume",
    priceUSD: 80,
    image: "https://lojadior.vtexassets.com/arquivos/ids/196331-1200-800/3348901250146_02-highlight-sauvage-edt.jpg?v=638786829192930000"
  },
  {
    name: "Libre Eau de Toilette 90ml",
    brand: "Yves Saint Laurent",
    gender: "feminino",
    category: "perfume",
    priceUSD: 115,
    image: "https://www.yslbeauty.com.br/dw/image/v2/AAFM_PRD/on/demandware.static/-/Sites-ysl-master-catalog/pt_BR/dwe606df01/images/fullsize/FRAG/YSLBWW-50789YSL/3614273321792.01.jpg?sw=720&sh=720&sm=cut&sfrm=png&q=85"
  },
  {
    name: "Libre Eau de Parfum 90ml",
    brand: "Yves Saint Laurent",
    gender: "feminino",
    category: "perfume",
    priceUSD: 120,
    image: "https://www.yslbeauty.com.br/dw/image/v2/AAFM_PRD/on/demandware.static/-/Sites-ysl-master-catalog/pt_BR/dw467de82d/images/fullsize/FRAG/YSLBWW-50424YSL/YSLB3614272648418/ysl_dmi_fraw_libre-edp_packshot_front_50ml_3000x3000px_3614272648418_rgb.jpg?sw=720&sh=720&sm=cut&sfrm=png&q=85"
  },
  {
    name: "MYSLF Eau de Parfum 100ml",
    brand: "Yves Saint Laurent",
    gender: "masculino",
    category: "perfume",
    priceUSD: 120,
    image: "https://www.yslbeauty.com.br/dw/image/v2/AAFM_PRD/on/demandware.static/-/Sites-ysl-master-catalog/pt_BR/dwe15720ee/images/fullsize/FRAG/YSLBWW-28501YSL/YSLB3614273852814/268%20MAIO%20LAN%20PDP%203000X3000%202.jpg?sw=720&sh=720&sm=cut&sfrm=png&q=85"
  },
  {
    name: "MYSLF Le Parfum 100ml",
    brand: "Yves Saint Laurent",
    gender: "masculino",
    category: "perfume",
    priceUSD: 120,
    image: "https://www.yslbeauty.com.br/dw/image/v2/AAFM_PRD/on/demandware.static/-/Sites-ysl-master-catalog/pt_BR/dw9cab7e65/images/fullsize/FRAG/YSLBWW-28519YSL/YSLB3614274114645/3614274114645.01.jpg?sw=720&sh=720&sm=cut&sfrm=png&q=85"
  },
  {
    name: "Invictus Eau de Toilette 100ml",
    brand: "Paco Rabanne",
    gender: "masculino",
    category: "perfume",
    priceUSD: 50,
    image: "https://medias.rabanne.com/cdn-cgi/image/width=480/https://medias.rabanne.com/medias/sys_master/images/h41/h49/10728993128478/10728993062942/10728993062942.jpg"
  },
  {
    name: "1 Million Eau de Toilette 100ml",
    brand: "Paco Rabanne",
    gender: "masculino",
    category: "perfume",
    priceUSD: 52,
    image: "https://medias.rabanne.com/cdn-cgi/image/width=480/https://medias.rabanne.com/medias/sys_master/images/he9/h52/10732105695262/10732105629726/10732105629726.png"
  },
  {
    name: "Black XS Black Excess Eau de Toilette 100ml",
    brand: "Paco Rabanne",
    gender: "masculino",
    category: "perfume",
    priceUSD: 80,
    image: "https://medias.rabanne.com/cdn-cgi/image/width=480/https://medias.rabanne.com/medias/sys_master/images/h5c/h80/10490766393374/10490766327838/10490766327838.jpg"
  },
  {
    name: "Pure XS Eau de Toilette 100ml",
    brand: "Paco Rabanne",
    gender: "masculino",
    category: "perfume",
    priceUSD: 75,
    image: "https://medias.rabanne.com/cdn-cgi/image/width=480/https://medias.rabanne.com/medias/sys_master/images/hc0/h56/10402052866078/10402052800542/10402052800542.png"
  },  
  {
    name: "Eros Eau de Toilette 100ml",
    brand: "Versace",
    gender: "masculino",
    category: "perfume",
    priceUSD: 60,
    image: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwdec0940c/original/90_R740010-R100MLS_RNUL_20_Eros~EDT~100~ml-Accessories-Versace-online-store_1_1.jpg?sw=850&q=85&strip=true"
  },
  {
    name: "Eros Eau de Parfum 100ml",
    brand: "Versace",
    gender: "masculino",
    category: "perfume",
    priceUSD: 80,
    image: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwee6cbd73/original/90_R740110-R100MLS_RNUL_20_ErosEDP100ml-Eros-Versace-online-store_0_5.jpg?sw=850&q=85&strip=true"
  },
  {
    name: "212 Vip Black Eau de Parfum 100ml",
    brand: "Carolina Herrera",
    gender: "masculino",
    category: "perfume",
    priceUSD: 60,
    image: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw7da28fa2/images/hi-res-BR/8411061869406.1_1000px.jpg?sw=1200&sh=1200&sm=fit"
  },
  {
    name: "La Bomba Eau de Parfum 80ml",
    brand: "Carolina Herrera",
    gender: "feminino",
    category: "perfume",
    priceUSD: 100,
    image: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw0eaf5f31/images/hi-res-BR/Frag/Nova%20pasta/Wesley/_8411061113134_0065219238_5_1000px.jpg?sw=556&sh=680&sm=fit"
  }  
];

let exchangeRate = 5;

async function fetchExchangeRate() {
  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    exchangeRate = data.rates.BRL;
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
    const priceBRL = ((p.priceUSD * exchangeRate) * (1.30)).toFixed(2);

    container.innerHTML += `
      <div class="card">
        <img src="${p.image}" onclick="openModal('${p.image}')" />
        <h3>${p.name}</h3>
        <h3>${p.brand}</h3>
        <p>${p.gender}</p>
        <p>R$ ${priceBRL}</p>
      </div>
    `;
  });
}

function openModal(src) {
  const modalImg = document.getElementById('modalImg');
  modalImg.src = src;
  modal.classList.add('active');
}

function filterProducts(filter) {
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

function toggleDropdown() {
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

function nextSlide() {
  currentIndex = (currentIndex + 1) % slidesData.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + slidesData.length) % slidesData.length;
  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

// autoplay opcional
setInterval(nextSlide, 5000);

// iniciar
renderCarousel();