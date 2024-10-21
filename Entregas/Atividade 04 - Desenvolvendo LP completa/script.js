const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
  const slidesContainer = document.querySelector('.swiper-wrapper');
  
  fetch('https://picsum.photos/v2/list?page=1&limit=4')
    .then(response => response.json())
    .then(data => {
      data.forEach((photo, index) => {
        const slide = `
          <div class="swiper-slide">
            <img src="${photo.download_url}" alt="Imagem ${index}" class="img-fluid">
          </div>
        `;
        slidesContainer.innerHTML += slide;
      });
  
      swiper.update();
    })
    .catch(error => console.error('Erro ao carregar as imagens:', error));
  
  AOS.init();
  
  fetch('https://fakestoreapi.com/products?limit=4')
    .then(response => response.json())
    .then(data => {
      const servicesSection = document.querySelector('.services-cards');
      data.forEach(product => {
        const card = `
          <div class="card">
            <img class="card-img-top" src="${product.image}" alt="${product.title}">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text">${product.category}</p>
              <p class="card-text">R$${product.price}</p>
              <a href="#" class="btn btn-primary">Comprar</a>
            </div>
            <div class="card-footer">
              <small class="text-muted">Atualizado recentemente</small>
            </div>
          </div>
        `;
        servicesSection.innerHTML += card;
      });
    })
    .catch(error => {
      const servicesSection = document.querySelector('.services-cards');
      servicesSection.innerHTML = '<p>Erro ao carregar os serviços.</p>';
    });
  
  document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('.nome').value;
    const email = document.querySelector('.email').value;
    const phone = document.querySelector('.telefone').value;
    const message = document.querySelector('.mensagem').value;
  
    if (name && email && phone && message) {
      alert('Formulário enviado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  });