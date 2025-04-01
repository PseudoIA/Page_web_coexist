// Configuración de Spotify
const SPOTIFY_PLAYLIST_URI = 'spotify:playlist:37i9dQZF1EIZD2gRyMRX3w';
let spotifyController = null;

// Función para inicializar el reproductor de Spotify
function initSpotifyPlayer() {
    return new Promise((resolve, reject) => {
        const element = document.getElementById('spotify-embed-container');
        
        if (!element) {
            reject(new Error('No se encontró el contenedor del reproductor'));
            return;
        }


        // Limpiar el contenedor
        element.innerHTML = '';

        // Crear el iframe manualmente
        const iframe = document.createElement('iframe');
        iframe.src = `https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_URI.split(':')[2]}?utm_source=generator&theme=0`;
        iframe.width = '100%';
        iframe.height = '80';
        iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
        iframe.frameBorder = '';
        iframe.allow = 'encrypted-media; autoplay; clipboard-write; fullscreen; picture-in-picture';
        iframe.style.borderRadius = '13px';

        element.appendChild(iframe);
        resolve(iframe);
        
    });
}

// Función para cargar una nueva URI
function loadSpotifyUri(uri) {
    const iframe = document.querySelector('#spotify-embed-container iframe');
    if (iframe) {
        const playlistId = uri.split(':')[2];
       
    }
}

// Exportar las funciones y variables necesarias
export {
    initSpotifyPlayer,
    loadSpotifyUri,

}; 