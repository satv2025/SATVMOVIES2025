// Función para cargar los episodios según la temporada seleccionada
function changeSeason(season) {
    const episodeList = document.getElementById('episode-list');
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Cambiar el texto del botón a la temporada seleccionada
    dropdownButton.textContent = season === 1 ? "Película 1" : "Película 2";

    // Limpiar los episodios actuales
    episodeList.innerHTML = '';

    const episodes = {
        1: [
            {
                title: 'Matias Ponce, La Película',
                description: 'Matías Ponce, creador de contenido en redes, se enfrenta a alienígenas y hackers tras la misteriosa suspensión de su canal de youtube, o como él lo llama "Yutun", desatando una hilarante y absurda aventura.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/mpp/mp/MATIAS%20PONCE%20%20LA%20PEL%C3%8DCULA.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/maxresdefault.jpg',
                duration: '60 min'
            },
        ],
        2: [
            {
                title: 'Paul Icia, el alguacil del pueblo',
                description: 'Paul Icia es una próxima película de acción y diversión de uno de los personajes. La trama cuenta como un alguacil va casando delitos.',
                videoPath: '#',
                image: '',
                duration: ''
            }
        ]
    };

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

    dropdownContent.style.display = 'none';
    dropdownButton.classList.remove('open');
}

// Función para cargar un episodio compatible con HLS.js
function loadEpisode(videoPath) {
    const video = document.querySelector('#videoPlayer');

    if (!videoPath || videoPath === '#') {
        alert("Este episodio aún no está disponible.");
        return;
    }

    const oldPlayer = Plyr.setup('#videoPlayer')[0];
    if (oldPlayer) oldPlayer.destroy();

    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoPath);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoPath;
        video.addEventListener('loadedmetadata', function () {
            video.play();
        });
    } else {
        alert("Tu navegador no soporta la reproducción de este video.");
    }
}

// Inicializar
document.querySelector('.dropdown-button').textContent = "Seleccionar Temporada";
changeSeason(1);

document.querySelector('.dropdown-button').addEventListener('click', function () {
    const dropdownContent = document.querySelector('.dropdown-content');
    this.classList.toggle('open');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function (event) {
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownButton = document.querySelector('.dropdown-button');
    if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
        dropdownContent.style.display = 'none';
        dropdownButton.classList.remove('open');
    }
});