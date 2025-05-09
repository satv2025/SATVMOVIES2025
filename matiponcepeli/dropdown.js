// Inicializar Plyr
const player = new Plyr('#videoPlayer');

// Función para cargar un episodio con soporte para .m3u8 y Plyr
function loadEpisode(videoPath) {
    const video = document.querySelector('#videoPlayer');

    // Detener cualquier reproducción y limpiar fuente anterior
    if (window.hls) {
        window.hls.destroy();
        window.hls = null;
    }

    // Verificar si el archivo es .m3u8
    if (videoPath.endsWith('.m3u8')) {
        if (Hls.isSupported()) {
            // Usar HLS.js si el navegador no soporta HLS de manera nativa
            const hls = new Hls();
            hls.loadSource(videoPath);
            hls.attachMedia(video);
            window.hls = hls;
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                player.play();  // Reproducir el video con Plyr
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            // Si el navegador es Safari, usar soporte nativo
            video.src = videoPath;
            video.addEventListener('loadedmetadata', () => video.play());
        } else {
            alert('Este navegador no soporta video HLS.');
        }
    } else {
        // Si no es un archivo .m3u8, cargar normalmente
        video.src = videoPath;
        video.load();
        player.play();  // Reproducir el video con Plyr
    }
}

// Función para cargar los episodios según la temporada seleccionada
function changeSeason(season) {
    const episodeList = document.getElementById('episode-list');
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Cambiar el texto del botón a la temporada seleccionada
    dropdownButton.textContent = `Temporada ${season}`;

    // Limpiar los episodios actuales
    episodeList.innerHTML = '';

    // Datos de los episodios para cada temporada
    const episodes = {
        1: [
            {
                title: 'Matias Ponce, La Película',
                description: 'Matías Ponce, creador de contenido en redes, se enfrenta a alienígenas y hackers tras la misteriosa suspensión de su canal de youtube, o como el lo llama "Yutun", desatando una hilarante y absurda aventura.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/mpp/mp/MATIAS%20PONCE%20%20LA%20PEL%C3%8DCULA.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/maxresdefault.jpg',
                duration: '60 min' // Duración actualizada
            },
        ],
        2: [
            {
                title: 'Paul Icia, el alguacil del pueblo',
                description: 'Paul Icia es una próxima película de acción y diversión de uno de los personajes. La trama cuenta como un alguacil va casando delitos. ',
                videoPath: '#', // No hay video para la temporada 2
                image: '', // Imagen vacía
                duration: '' // No hay duración para la próxima temporada
            }
        ]
    };

    if (season === 2) {
        const messageItem = document.createElement('li');
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('episodio-info');

        const messageText = document.createElement('div');
        messageText.classList.add('episodio-text');
        const h3 = document.createElement('h3');
        h3.textContent = 'Otra temporada está por llegar...';
        const p = document.createElement('p');
        p.textContent = '¡Próximamente más episodios!';

        messageText.appendChild(h3);
        messageText.appendChild(p);
        messageDiv.appendChild(messageText);
        messageItem.appendChild(messageDiv);
        episodeList.appendChild(messageItem);
    } else {
        const selectedEpisodes = episodes[season];

        selectedEpisodes.forEach(episode => {
            const episodeItem = document.createElement('li');
            const episodeButton = document.createElement('button');
            episodeButton.classList.add('episodio');
            episodeButton.onclick = () => loadEpisode(episode.videoPath);

            const episodeInfo = document.createElement('div');
            episodeInfo.classList.add('episodio-info');
            episodeInfo.style.position = 'relative';

            const episodeImg = document.createElement('div');
            episodeImg.classList.add('episodio-img');
            const img = document.createElement('img');
            img.src = episode.image || 'default_image.jpg';
            img.alt = episode.title;
            episodeImg.appendChild(img);

            const episodeText = document.createElement('div');
            episodeText.classList.add('episodio-text');
            const h3 = document.createElement('h3');
            h3.textContent = episode.title;
            const p = document.createElement('p');
            p.textContent = episode.description;

            const durationDiv = document.createElement('div');
            durationDiv.classList.add('episodio-duration');
            durationDiv.style.position = 'absolute';
            durationDiv.style.top = '10px';
            durationDiv.style.right = '10px';
            durationDiv.style.color = '#fff';
            durationDiv.style.backgroundColor = '#ffffff00';
            durationDiv.style.padding = '2px 5px';
            durationDiv.textContent = episode.duration || 'N/A';

            episodeText.appendChild(h3);
            episodeText.appendChild(p);
            episodeText.appendChild(durationDiv);

            episodeInfo.appendChild(episodeImg);
            episodeInfo.appendChild(episodeText);
            episodeButton.appendChild(episodeInfo);
            episodeItem.appendChild(episodeButton);
            episodeList.appendChild(episodeItem);
        });
    }

    dropdownContent.style.display = 'none';
    dropdownButton.classList.remove('open');
}

// Inicializar el texto del botón como "Seleccionar Temporada"
document.querySelector('.dropdown-button').textContent = "Seleccionar Temporada";

// Mostrar por defecto los episodios de la primera temporada
changeSeason(1);

// Manejo del dropdown
document.querySelector('.dropdown-button').addEventListener('click', function () {
    const dropdownContent = document.querySelector('.dropdown-content');
    this.classList.toggle('open');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Cerrar el dropdown si se hace clic fuera de él
document.addEventListener('click', function (event) {
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownButton = document.querySelector('.dropdown-button');
    if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
        dropdownContent.style.display = 'none';
        dropdownButton.classList.remove('open');
    }
});