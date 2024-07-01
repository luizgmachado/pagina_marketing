document.addEventListener("DOMContentLoaded", function () {
  const products = [

    {
      name: 'Aspirador de Pó Robô, Automático 3 em 1',
      description: 'WAP ROBOT W90 - Aspirador de Pó Robô, Automático 3 em 1 Varre, Aspira, Passa Pano, MOP para Limpeza, 30W, Bateria Recarregável, Bivolt, Preto',
      image: 'https://m.media-amazon.com/images/I/716GA5MQQkL._AC_SL1500_.jpg',
      logo: '/img/amazon.png',
      link: 'https://amzn.to/3XTCVn4'
    },
    {
      name: 'Samsung Galaxy S23 FE 5G',
      description: 'Dual SIM 128 GB Grafite 8 GB RAM',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_737200-MLU76599586059_052024-F.webp',
      logo: '/img/mercadolivre.png',
      link: 'https://mercadolivre.com/sec/2f1GPe3'
    },
    {
      name: 'Samsung Galaxy A55 5G',
      description: 'Câmera Tripla Traseira de até 50MP, Selfie de 32MP, Nightography, Apagador de objetos, Design em metal e vidro, IP67, Super AMOLED 6.6" 120Hz Vision Booster, 128GB - Azul Escuro',
      image: 'https://m.media-amazon.com/images/I/61VTPSln0QL._AC_SL1080_.jpg',
      logo: '/img/amazon.png',
      link: 'https://amzn.to/4bxRDDr'
    },
    {
      name: 'PLG Xboom Go XG8T - 60W+60W RMS, Iluminação Lateral, IP67, 15h de Bateria, Woofer (x1) e Tweeters (x2)',
      description: 'Potência extrema e som equilibrado! Deixe a LG Xboom Go XG8T surpreender você! Além de seu design elegante e inovador, a LG Xboom Go XG8 possui 60W+60W RMS de potência, bateria de até 15 horas de duração, proteção IP67 e certificado de durabilidade. Com 1 track woofer e 2 tweeters....',
      image: 'https://m.media-amazon.com/images/I/71jpE5WzWPL._AC_SL1500_.jpg',
      logo: '/img/amazon.png',
      link: 'https://amzn.to/45R3600'
    },
    {
      name: 'Projetor PRO Smart HD 1080p Android 11 Tv Portátil Via Wifi',
      description: 'Conectividade avançada: com bluetooth e wi-fi integrados, você pode facilmente conectar seus dispositivos e desfrutar de conteúdo online sem complicações. Assista a seus filmes e séries favoritos diretamente das plataformas de streaming....',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_680206-MLU75198872738_032024-F.webp',
      logo: '/img/mercadolivre.png',
      link: 'https://mercadolivre.com/sec/22JT9SY'
    },

    {
      name: 'Fritadeira Elétrica Mondial AFO-12L-BI Forno Oven 12L Cor Preto/Inox 110V',
      description: 'A Air Fryer AFO-12L-BI da Mondial é 2 em 1: Fritadeira a Ar com o espaço e versatilidade do forno. Você pode assar, cozinhar e fritar sem óleo. A capacidade total de 12 litros permite o preparo de grandes porções....',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_846099-MLU75985087709_042024-F.webp',
      logo: '/img/mercadolivre.png',
      link: 'https://mercadolivre.com/sec/1nbqkcP'
    },


    {
      name: 'Controle joystick sem fio Sony PlayStation 5 DualSense midnight black',
      description: 'Ativa o Bluetooth Possui uma conexão Bluetooth de alta tecnologia para uso em qualquer computador ou dispositivo; você não precisará mais de aplicativos de terceiros ou cabo USB...',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_604562-MLU75144291522_032024-F.webp',
      logo: '/img/mercadolivre.png',
      link: 'https://mercadolivre.com/sec/2GYLmCo'
    },

    {
      name: 'Fire Cadeira de escritório Gamer',
      description: 'Unidades por kit: Material do estofamento: Couro/PVC Confortável e durável.Apoios de braços confortáveis.Suporte lombar regulável. Com rodas.Giratória. Material do enchimento: espuma...',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_757487-MLU74178530049_012024-F.webp',
      logo: '/img/mercadolivre.png',
      link: 'https://mercadolivre.com/sec/2ucaSpX'
    },

    {
      name: 'Xiaomi Series 8 Mi Band 8 Active Sport',
      description: 'Smartwatch Mi Band 8 Active Versão Globa Ative seu dia com a Mi Band 8 Active, uma inovação em relógios inteligentes, pensada para o seu bem- estar diário.Seja para monitorar a sua saúde...',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_660244-MLA74808090331_022024-F.webp',
      logo: '/img/mercadolivre.png',
      link: 'https://mercadolivre.com/sec/2jiCFKd'
    },

    {
      name: 'Webcam HD CAM 720p Preto Intelbras',
      description: 'A CAM HD 720p é um equipamento portátil, de fácil conexão e uso desenvolvido para trazer praticidade e maior imersão as suas reuniões. Integra uma câmera de resolução HD, microfone frontal, suporte universal para tripé...',
      image: 'https://m.media-amazon.com/images/I/51OH2WHUXLL._AC_SL1000_.jpg',
      logo: '/img/amazon.png',
      link: 'https://amzn.to/4ckPH22'
    },


    {
      name: 'Fire TV Stick Lite | Streaming em Full HD com Alexa',
      description: 'SFire TV Stick Lite | Streaming em Full HD com Alexa | Com Controle Remoto Lite por Voz com Alexa (sem controles de TV)',
      image: 'https://m.media-amazon.com/images/I/41XUvigLn0L._AC_SL1000_.jpg',
      logo: '/img/amazon.png',
      link: 'https://amzn.to/4c2mj12'
    },

    {
      name: 'Samsung Celular Galaxy A55 5G',
      description: 'Samsung Celular Galaxy A55 5G, Câmera Tripla até 50MP, Tela 6.6", 128GB Azul Escuro',
      image: 'https://m.media-amazon.com/images/I/61WvJYy+HmL._AC_SL1000_.jpg',
      logo: '/img/amazon.png',
      link: 'https://amzn.to/3RkcSle'
    },
    {
      name: 'Samsung Galaxy A34 128GB 5G',
      description: 'Samsung Galaxy A34 128GB 5G Tela 6.6 Dual Chip 6GB RAM Câmera Tripla de até 48MP + Selfie 13MP Bateria de 5000mAh - Preto',
      image: 'https://m.media-amazon.com/images/I/51Vx3vZWxoL._AC_SL1000_.jpg',
      logo: '/img/amazon.png',
      link: 'https://amzn.to/3yVC3UT'
    },

    {
      name: 'Microfone de lapela sem fio para iPhone',
      description: '2 peças microfone de lapela sem fio para iPhone iPad 1 transmissor pode suportar 2 microfones, redução de ruído, para gravação, entrevista, vloggers, YouTube, TikTok, transmissão ao vivo do Facebook.',
      image: 'https://m.media-amazon.com/images/I/41pYwAjZzqL._AC_.jpg',
      logo: '/img/amazon.png',
      link: 'https://amzn.to/4czQGMb'
    },
    {
      name: 'Headset Gamer Sem Fio Logitech G435 LIGHTSPEED',
      description: 'Headset Gamer Sem Fio Logitech G435 LIGHTSPEED, Conexão USB e Bluetooth, Design Leve e Confortável, Microfone Embutido, Bateria de até 18h - Compatível com...',
      image: 'https://m.media-amazon.com/images/I/81bQEkMevBL._AC_SL1500_.jpg',
      logo: '/img/amazon.png',
      link: 'https://amzn.to/3XmqujK'
    },
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
