const products = [
  {
    name: "Perfume A",
    type: "masculino",
    priceUSD: 50,
    image: "https://via.placeholder.com/200"
  },
  {
    name: "Perfume B",
    type: "feminino",
    priceUSD: 70,
    image: "https://via.placeholder.com/200"
  },
  {
    name: "Perfume C",
    type: "unissex",
    priceUSD: 60,
    image: "https://via.placeholder.com/200"
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
    const priceBRL = (p.priceUSD * exchangeRate).toFixed(2);

    container.innerHTML += `
      <div class="card">
        <img src="${p.image}" />
        <h3>${p.name}</h3>
        <p>Tipo: ${p.type}</p>
        <p>R$ ${priceBRL}</p>
      </div>
    `;
  });
}

function filterProducts(type) {
  if (type === 'all') return renderProducts(products);
  const filtered = products.filter(p => p.type === type);
  renderProducts(filtered);
}

fetchExchangeRate();
