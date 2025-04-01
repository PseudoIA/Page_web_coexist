import { initSpotifyPlayer, loadSpotifyUri } from './spotifyPlayer.js';

// Configuración de Spotify
const SPOTIFY_PLAYLIST_URI = 'https://open.spotify.com/playlist/37i9dQZF1EIZD2gRyMRX3w?si=fc86635b376b4161';
let spotifyController = null;

// Lista de imágenes disponibles
const availableImages = [
   
    'Anthellar-Yop-3 (1).webp',
    'Anthellar-Luz-2 (1).webp',
    'Anthellar-Josh-2 (1).webp',
    'Anthellar-Emma-4 (1).webp',
    'Anthellar-Brayan (1).webp',
    'Alejo-Pro.webp'
];

let currentImageIndex = 0;

// Router
const routes = {
    '/': homeView,
    '/about': aboutView,
    '/lanzamientos': lanzamientosView,
    '/merch': merchView
};

// Vistas
function homeView() {
    const imageElements = availableImages.map((img, index) => `
        <div class="image-item ${index === 0 ? 'active' : ''}" data-aos="fade">
            <img src="./images/${img}" alt="${img.split('.')[0]}" />
        </div>
    `).join('');

    return `
        <div class="home-view full-height">
            <div class="image-container full-height">
                ${imageElements}
                <div class="hero-text">
                    
                </div>
            </div>
        </div>
    `;
}

function aboutView() {
    return `
        <div class="about-view full-height">
            <h2>Quienes Somos</h2>
            <div class="about-content">
                <p>Próximamente...</p>
            </div>
        </div>
    `;
}

function lanzamientosView() {
    return `
        <div class="lanzamientos-view full-height">
            <h2>Lanzamientos</h2>
            <div class="releases-grid">
            
                <div class="release-card" data-spotify-uri="spotify:album:0JGOiO34nwfUdDrD612dOp">
                     <p>Próximamente...</p>
                </div>
                <!-- Agregar más álbumes aquí -->
            </div>
        </div>
    `;
}

function merchView() {
    return `
        <div class="merch-view full-height">
            <h2>Merchandising</h2>
            <div class="merch-grid">
                <p>Próximamente...</p>
            </div>
        </div>
    `;
}

// Navegación
function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

// Router
async function router() {
    const path = window.location.pathname;
    const route = routes[path] || routes['/'];
    document.getElementById('app-content').innerHTML = route();

    // Agregar event listeners para los botones de reproducción
    if (path === '/lanzamientos') {
        setupMusicControls();
    }
}

// Configuración de controles de música
function setupMusicControls() {
    document.querySelectorAll('.play-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.release-card');
            if (card) {
                const uri = card.dataset.spotifyUri;
                loadSpotifyUri(uri);
            }
        });
    });
}

// Función para cambiar la imagen activa
function showNextImage() {
    const items = document.querySelectorAll('.image-item');
    if (items.length === 0) return;

    // Remover clase active de la imagen actual
    items[currentImageIndex].classList.remove('active');
    
    // Actualizar índice
    currentImageIndex = (currentImageIndex + 1) % items.length;
    
    // Agregar clase active a la nueva imagen
    items[currentImageIndex].classList.add('active');
}

// Event Listeners
window.addEventListener('popstate', router);


document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializar el reproductor de Spotify
    initSpotifyPlayer()
        .catch(error => {
            console.error('Error al inicializar el reproductor de Spotify:', error);
        });

    // Event delegation para los enlaces de navegación CORREGIDO
    document.addEventListener('click', e => {
        // Busca el enlace <a> ancestro más cercano que tenga [data-link]
        const link = e.target.closest('a[data-link]');

        // Si se encontró un enlace (si link no es null)
        if (link) {
            e.preventDefault(); // Prevenir navegación normal
            const href = link.getAttribute('href'); // Obtener href del enlace encontrado
            console.log("Navegando a:", href); // Opcional: para depurar
            navigateTo(href); // Llamar a tu función de navegación SPA
        }
    });

    // Iniciar router
    router();

    // Iniciar el ciclo de cambio de imágenes
    setInterval(showNextImage, 5000);
}); 