function openVideoModal(videoName) {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("videoFrame");

    // Define a URL do vídeo com base no nome recebido
    let videoURL = "";
    switch (videoName) {
        case "zelda":
            videoURL = "https://www.youtube.com/embed/94RTrH2erPE";
            break;
        case "mario":
            videoURL = "https://www.youtube.com/embed/5kcdRBHM7kM";
            break;
        case "pokemon":
            videoURL = "https://www.youtube.com/embed/I4RynqpahT8";
            break;
        default:
            console.error("Video name not found:", videoName);
            return; // Não abre o modal se o nome não for encontrado
    }

    // Atualiza o iframe com a URL correta
    iframe.src = videoURL;

    // Mostra o modal
    modal.style.display = "block";
}

function closeVideoModal() {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("videoFrame");

    // Esconde o modal e limpa o iframe
    modal.style.display = "none";
    iframe.src = "";
}

// Abrir modal de card
function openCardModal(title, description, price, image) {
    const modal = document.getElementById("cardModal");
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalDescription").textContent = description;
    document.getElementById("modalPrice").textContent = price;

    // Atualiza a imagem no modal usando innerHTML ou manipulando o DOM
    const modalImage = document.getElementById("modalImage");
    modalImage.innerHTML = `<img src="${image}" alt="${title}" style="width: 150px; height: auto; object-fit: contain; margin: 10px 0;"/>`;
      
    // Configurar o botão de compra
    const buyButton = document.getElementById("buyButton");
    buyButton.onclick = function () {
        alert(`Você comprou: ${title} por ${price}`);
    };

    modal.style.display = "block";
}

// Fechar modal de card
function closeCardModal() {
    document.getElementById("cardModal").style.display = "none";
}


// Swiper configuração
const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Abrir modal de login
function openLoginModal() {
    const loginModal = document.getElementById("loginModal");
    loginModal.style.display = "block";
}

// Fechar modal de login
function closeLoginModal() {
    const loginModal = document.getElementById("loginModal");
    loginModal.style.display = "none";
}

// Abrir modal de cadastro
function openRegisterModal() {
    closeLoginModal(); // Fecha o modal de login
    const registerModal = document.getElementById("registerModal");
    registerModal.style.display = "block";
}

// Fechar modal de cadastro
function closeRegisterModal() {
    const registerModal = document.getElementById("registerModal");
    registerModal.style.display = "none";
}
