const products = [
  {
    name: "Yara Lattafa 100ml",
    type: "feminino",
    priceUSD: 22,
    image: "https://www.lattafa-usa.com/cdn/shop/files/1_7682153c-2dce-4b60-a9e6-20557f8502cf.png?v=1747500015&width=810"
  },
  {
    name: "Yara Elixir Lattafa 100ml",
    type: "feminino",
    priceUSD: 26,
    image: "https://www.lattafa-usa.com/cdn/shop/files/YaraElixirBottle.png?v=1760805808&width=810"
  },
  {
    name: "Afeef Lattafa 100ml",
    type: "unissex",
    priceUSD: 50,
    image: "https://www.lattafa-usa.com/cdn/shop/files/Afeef-1.png?v=1747414788&width=810"
  },
  {
    name: "Atheeri Lattafa 100ml",
    type: "unissex",
    priceUSD: 68,
    image: "https://www.lattafa-usa.com/cdn/shop/files/Atheeri-1_f93156cf-73d9-4455-8540-5665a4312efb.png?v=1747416765&width=810"
  },
  {
    name: "Al Noble Ameer 100ml",
    type: "masculino",
    priceUSD: 20,
    image: "https://www.lattafa-usa.com/cdn/shop/files/1_89027578-d9b1-4664-a7dc-538f0f110578.png?v=1756361257&width=810"
  },
  {
    name: "Asad Lattafa 100ml",
    type: "masculino",
    priceUSD: 26,
    image: "https://www.lattafa-usa.com/cdn/shop/files/Asad-1_ceed76c7-7a80-46b3-b372-68cc309137f4.png?v=1747421311&width=810"
  },
  {
    name: "Asad Elixir Lattafa 100ml",
    type: "masculino",
    priceUSD: 30,
    image: "https://www.lattafa-usa.com/cdn/shop/files/ASADELIXIRBOTTLE.png?v=1760805808&width=810"
  },
  {
    name: "Musamam Black Intense 100ml",
    type: "masculino",
    priceUSD: 40,
    image: "https://www.lattafa-usa.com/cdn/shop/files/LattafaMusamamBlackIntenseEDP100mlSpray.png?v=1763742607&width=810"
  },
  {
    name: "Musamam White Intense 100ml",
    type: "unissex",
    priceUSD: 35,
    image: "https://www.lattafa-usa.com/cdn/shop/files/Musamam-White-1.png?v=1747416325&width=810"
  },
  {
    name: "Victoria's Secret Pure Seduction Fragrance Mist 250ml",
    type: "feminino",
    priceUSD: 15,
    image: "https://www.victoriassecret.com/p/1000x1333/png/zz/25/02/06/02/112592031340_OM_F.jpg"
  },
  {
    name: "Victoria's Secret Love Spell Fragrance Mist 250ml",
    type: "feminino",
    priceUSD: 15,
    image: "https://www.victoriassecret.com/p/1000x1333/png/zz/25/02/06/02/112592032017_OM_F.jpg"
  },
  {
    name: "Chanel Bleu de Chanel Eau de Toilette 100ml",
    type: "masculino",
    priceUSD: 130,
    image: "https://www.chanel.com/images/t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_1020/bleu-de-chanel-eau-de-parfum-spray-3-4fl-oz--packshot-default-107360-9564894232606.jpg"
  },
  {
    name: "Chanel N° 5 Eau de Parfum 100ml",
    type: "feminino",
    priceUSD: 160,
    image: "https://www.chanel.com/images/t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_1020/n-5-eau-de-parfum-spray-3-4fl-oz--packshot-default-125530-9564912943134.jpg"
  },
  {
    name: "Yves Saint Laurent MYSLF Eau de Parfum 100ml",
    type: "masculino",
    priceUSD: 120,
    image: "https://www.yslbeauty.com.br/dw/image/v2/AAFM_PRD/on/demandware.static/-/Sites-ysl-master-catalog/pt_BR/dwe15720ee/images/fullsize/FRAG/YSLBWW-28501YSL/YSLB3614273852814/268%20MAIO%20LAN%20PDP%203000X3000%202.jpg?sw=720&sh=720&sm=cut&sfrm=png&q=85"
  },
  {
    name: "Yves Saint Laurent MYSLF Le Parfum 100ml",
    type: "masculino",
    priceUSD: 120,
    image: "https://www.yslbeauty.com.br/dw/image/v2/AAFM_PRD/on/demandware.static/-/Sites-ysl-master-catalog/pt_BR/dw9cab7e65/images/fullsize/FRAG/YSLBWW-28519YSL/YSLB3614274114645/3614274114645.01.jpg?sw=720&sh=720&sm=cut&sfrm=png&q=85"
  },
  {
    name: "Chanel Bleu de Chanel Eau de Parfum 50ML",
    type: "masculino",
    priceUSD: 115,
    image: "https://www.chanel.com/images/t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_1020/bleu-de-chanel-eau-de-parfum-spray-3-4fl-oz--packshot-default-107360-9564894232606.jpg"
  },
  {
    name: "Paco Rabanne Invictus Eau de Toilette 100ml",
    type: "masculino",
    priceUSD: 50,
    image: "https://medias.rabanne.com/cdn-cgi/image/width=480/https://medias.rabanne.com/medias/sys_master/images/h41/h49/10728993128478/10728993062942/10728993062942.jpg"
  },
  {
    name: "Paco Rabanne 1 Million Eau de Toilette 100ml",
    type: "masculino",
    priceUSD: 52,
    image: "https://medias.rabanne.com/cdn-cgi/image/width=480/https://medias.rabanne.com/medias/sys_master/images/he9/h52/10732105695262/10732105629726/10732105629726.png"
  },
  {
    name: "Paco Rabanne Black XS Black Excess Eau de Toilette 100ml",
    type: "masculino",
    priceUSD: 80,
    image: "https://medias.rabanne.com/cdn-cgi/image/width=480/https://medias.rabanne.com/medias/sys_master/images/h5c/h80/10490766393374/10490766327838/10490766327838.jpg"
  },
  {
    name: "Paco Rabanne Pure XS Eau de Toilette 100ml",
    type: "masculino",
    priceUSD: 75,
    image: "https://medias.rabanne.com/cdn-cgi/image/width=480/https://medias.rabanne.com/medias/sys_master/images/hc0/h56/10402052866078/10402052800542/10402052800542.png"
  },  
  {
    name: "Versace Eros Eau de Toilette 100ml",
    type: "masculino",
    priceUSD: 60,
    image: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwdec0940c/original/90_R740010-R100MLS_RNUL_20_Eros~EDT~100~ml-Accessories-Versace-online-store_1_1.jpg?sw=850&q=85&strip=true"
  },
  {
    name: "Versace Eros Eau de Parfum 100ml",
    type: "masculino",
    priceUSD: 80,
    image: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwee6cbd73/original/90_R740110-R100MLS_RNUL_20_ErosEDP100ml-Eros-Versace-online-store_0_5.jpg?sw=850&q=85&strip=true"
  },
  {
    name: "Carolina Herrera 212 Vip Black Eau de Parfum 100ml",
    type: "masculino",
    priceUSD: 60,
    image: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw7da28fa2/images/hi-res-BR/8411061869406.1_1000px.jpg?sw=1200&sh=1200&sm=fit"
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
        <p>Tipo: ${p.type}</p>
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

function filterProducts(type) {
  if (type === 'all') return renderProducts(products);
  const filtered = products.filter(p => p.type === type);
  renderProducts(filtered);
}

fetchExchangeRate();

const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = '<img id="modalImg" />';
document.body.appendChild(modal);

modal.addEventListener('click', () => {
  modal.classList.remove('active');
});
