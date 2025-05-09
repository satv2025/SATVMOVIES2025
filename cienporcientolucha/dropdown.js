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
                title: 'Koshe Plostenko',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://www.mediafire.com/convkey/4a6d/478xmus1d6v68eh9g.jpg?size_id=6',
                duration: '1 h 20 min' // Duración actualizada
            },
        ],
        2: [
            {
                title: 'El Amo De Los Clones',
                description: 'Damián Castillo, un doctor en biotecnología, odia a su vecino Vicente Viloni. Cansado de su fama, decide crear clones de los luchadores de 100% Lucha para destruir la imagen de su ídolo de la infancia.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/damianc/100Lucha%20El%20Amo%20de%20los%20Clones.m3u8', // Ruta del video para la temporada 2
                image: 'https://media.minutouno.com/p/8f27c301f5e629ec8dab0477e7a75ae0/adjuntos/150/imagenes/026/947/0026947782/1200x675/smart/lucha.png', // Imagen para la temporada 2
                duration: '1 h 25 min' // Duración para el episodio de la temporada 2
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