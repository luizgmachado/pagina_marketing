document.addEventListener("DOMContentLoaded", function () {
  const products = [
    
   {     
      name: 'Chave De Precisão Elétrica Manutenção Celular Notebook E Pc',
      description: 'Marca: EXBOM Modelo: 04304 • Material: Liga de aço • Tensão de entrada: 3.7V• Velocidade: 200r / min • Torque máximo: 0.25 - 0. 35N.m • Duração aproximada: 120 minutos• Tempo de carregamento: 1h • Dimensões: 18 x 19 x 180 mm',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_879876-MLB76540490413_052024-F.webp',
     logo: '/img/mercadolivre.png',
      link: 'https://mercadolivre.com/sec/2bFEbDS'
   }     ,

    {
      name: 'Fone Bluetooth 3ª Geração Para iPhone Cor Branco Luz Verde A Gold',
      description: 'Cor da luz: Verde-escur É monaural. Seu alcance sem fio é de 10 m. Tem cancelamento de ruído. Inclui microfone.Resistente à água. Confortável e prático.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_787865-MLU77331980509_062024-F.webp',
      logo: '/img/mercadolivre.png',
      link: 'https://mercadolivre.com/sec/2f8DbSh'
    },

    {
      name: 'Nintendo Switch Console Joy-Con, Mario Kart 8 Digital + 3 Meses Assinatura Nintendo Switch Online',
      description: 'Nintendo, Videogame, Nintendo Switch Console Joy-Con, Mario Kart 8 Digital + 3 Meses Assinatura Nintendo Switch Online',
      image: 'https://m.media-amazon.com/images/I/61KfG0-kIiL._AC_SL1000_.jpg',
      logo: '/img/amazon.png',
      link: 'https://amzn.to/3LArgCs'
    },

    {
      name: 'Samsung Smart TV 43" UHD 4K 43du7700 2024 Cor negro',
      description: 'Samsung Smart TV 43" UHD 4K 43DU7700 2024, Processador Crystal 4K, Gaming Hub, Visual livre de cabos, Som em Movimento Virtual, AI Energy Mode, Controle SolarCell, Alexa built in...',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_625779-MLU76062574334_052024-F.webp',
      logo: '/img/mercadolivre.png',
      link: 'https://mercadolivre.com/sec/2srhoZK'
    },

    {
      name: 'Echo Pop | Smart speaker compacto com som envolvente e Alexa | Cor Preta',
      description: 'Este smart speaker compacto com Alexa conta com som de qualidade e é perfeito para quartos e espaços pequenos. Pequeno o suficiente para combinar com o ambiente, mas poderoso o bastante para se destacar....',
      image: 'https://m.media-amazon.com/images/I/61V5FRUgX8L._AC_SL1000_.jpg',
      logo: '/img/amazon.png',
      link: 'https://amzn.to/3WgA59t'
    },

    {
      name: 'Notebook Positivo Vision I15 Lumin',
      description: 'A tela Vision i15 de 15 polegadas, com resolução 1920x1080 antirreflexiva, oferece imersão em detalhes vívidos A tecnologia Antirreflexiva reduz brilho e reflexos, aprimorando a visibilidade em ambientes iluminados...',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_650989-MLB76781842396_062024-F.webp',
      logo: '/img/mercadolivre.png',
      link: 'https://mercadolivre.com/sec/1ANK1XD'
    },
    {
      name: 'QCY H3 ANC Fone de Ouvido Bluetooth, Cancelamento de Ruído Ativo',
      description: 'QCY H3 ANC Fone de Ouvido Bluetooth, Cancelamento de Ruído Ativo Headphone Bluetooth 5.4 Headset com Microfone, Certificação Hi-Res Audio, Conexão Multipontos, 60 horas reprodução (Preto)...',
      image: 'https://m.media-amazon.com/images/I/51MvjUv989L._AC_SL1000_.jpg',
      logo: '/img/amazon.png',
      link: 'https://amzn.to/3S29mfH'
    },
    {
      name: 'Apple iPhone 14 Plus (128 GB) - Meia-noite - Distribuidor autorizado',
      description: '+ 450 reais OFF com cupom GANHOU450 | Memória RAM: 4 GBMemória interna: 128 GBTela Super Retina XDR de 6.7 polegadas.(1)Sistema avançado de câmeras para tirar melhores fotos em qualquer condição de iluminação...',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_902062-MLM51559388098_092022-F.webp',
      logo: '/img/mercadolivre.png',
      link: 'https://mercadolivre.com/sec/2YjxstY'
    },
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
      description: 'Potência extrema e som equilibrado! Deixe a LG Xboom Go XG8T surpreender você! Além de seu design elegante e inovador, a LG Xboom Go XG8 possui 60W+60W RMS de potência, Com 1 track woofer e 2 tweeters....',
      image: 'https://m.media-amazon.com/images/I/71jpE5WzWPL._AC_SL1500_.jpg',
      logo: '/img/amazon.png',
      link: 'https://amzn.to/45R3600'
    },

    {
      name: 'HD Externo Toshiba 1TB Canvio Basics Preto HDTB510XK3AA',
      description: 'Especificações Técnicas Capacidade: 1TB Interfaces: USB 3.0 (compatível com USB 2.0) Taxa de transferência da interface: Até 5 Gb/s (USB 3.0) Até 480 Mb/s 1TB  Cabo USB 3.0 (compatível com USB 2.0....',
      image: 'https://m.media-amazon.com/images/I/812TSgVwfWL._AC_SL1500_.jpg',
      logo: '/img/amazon.png',
      link: 'https://amzn.to/4cFtiwy'
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
