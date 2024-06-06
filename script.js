document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      name: 'Fones de Ouvido QCY AilyBuds Pro+',
      description: 'ANC, Cancelamento de Ruído Ativo Fone Bluetooth 5.3, Certificação Hi-Res Audio, Conexão Multipontos, 28 Horas Reprodução...',
      image: 'https://m.media-amazon.com/images/I/41gX7M3-WyL._AC_SL1000_.jpg',
      logo: '/img/amazon.png',
      link: 'https://amzn.to/4bL65Jq'
    },

    {
      name: 'Levemolo Suporte seguidor facial',
      description: 'suporte para celular suporte de telefone seguinte rack de telefone shot rack de telefone criativo inteligente...',
      image: 'https://m.media-amazon.com/images/I/516wu3cbnqL._AC_SL1500_.jpg',
      logo: '/img/amazon.png',
      link: 'https://amzn.to/45auFAY'
    },

    {
      name: 'Estabilizador gimbal DJI OM 4 SE',
      description: 'para smartphone de 3 eixos com tripé, design magnético, portátil e dobrável, ActiveTrack 3.0, modo história, estabilizador para vlog, vídeo de YouTube e TikTok, para Android e iPhone',
      image: 'https://m.media-amazon.com/images/I/61XzFY3sZRL._AC_SL1497_.jpg',
      logo: '/img/amazon.png',
      link: 'https://amzn.to/4c6TEaI'
    },

    {
      name:
        'Kindle 11ª Geração',
      description: 'Mais leve, com resolução de 300 ppi e o dobro de armazenamento - Cor Preta',
      image: 'https://m.media-amazon.com/images/I/71B1wzw1LkL._AC_SL1500_.jpg',
      logo: '/img/amazon.png',
      link: 'https://amzn.to/3Rerfr5'
    },


    {
      name: 'Smartphone Samsung Galaxy S24 Ultra',
      description: 'Galaxy AI, Selfie de 12MP, Tela de 6.8" 1-120Hz, 512GB, 12GB RAM - Titânio Cinza',
      image: 'https://m.media-amazon.com/images/I/71EYdKsNPxL._AC_SL1500_.jpg',
      logo: '/img/amazon.png', // Adicionando a logo
      link: 'https://amzn.to/3RbWEKN'
    },

    {
      name: 'Xiaomi 13T PRO',
      description: '512gb 12gb Versao Global 5G no Brasil - Meadow Green (Verde)',
      image: 'https://m.media-amazon.com/images/I/51fz+azp5VL._AC_SL1200_.jpg',
      logo: '/img/amazon.png',
      link: 'https://amzn.to/3VakJmv'
    },
  ];

  const productCollection = document.getElementById('product-collection');

  function displayProducts(products) {
    productCollection.innerHTML = '';
    products.forEach(product => {
      const productItem = document.createElement('div');
      productItem.className = 'product-item';
      productItem.innerHTML = `
                <a href="${product.link}" target="_blank">
                    <img src="${product.image}" alt="${product.name}">
                    <div>
                     <h3>${product.name} ${product.logo ? `<img src="${product.logo}" alt="Logo">` : ''}</h3>
                     
                     <p>${product.description}</p>
                    </div>
                </a>
            `;
      productCollection.appendChild(productItem);
    });
  }

  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
  });

  displayProducts(products);

  // Código para o botão de "Voltar ao Topo"
  const backToTopButton = document.getElementById('back-to-top');

  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  backToTopButton.addEventListener('click', function () {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
  });
});// Exibe todos os produtos ao carregar a página
