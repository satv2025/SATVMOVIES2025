let currentEpisodeIndex = 0;
let currentEpisodes = [];

function changeSeason(season) {
    const episodeList = document.getElementById('episode-list');
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownButton.textContent = `Temporada ${season}`;
    dropdownContent.style.display = 'none';
    dropdownButton.classList.remove('open');

    episodeList.innerHTML = '';

    const episodes = {
        1: [
            {
                title: 'Episodio 1',
                description: 'Pip elige un caso de homicidio para su proyecto escolar. Pero cuando empieza a investigar, descubre que para algunas personas era mejor dejarlo enterrado para siempre.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/app/e1/Asesinato%20Para%20Principiantes%20-%20T1%20E1.m3u8',
                image: 'https://www.mediafire.com/convkey/8ebd/67e8toxnggmojw09g.jpg',
                duration: '43 min'
            },
            {
                title: 'Episodio 2',
                description: 'Luego de entrevistar a las mejores amigas de Andie, Pip tiene una idea más clara de quién era la víctima, pero tras reorganizar fotos viejas empieza a comprender mejor todo.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/app/e2/Asesinato-Para-Principiantes-T1-E2.m3u8',
                image: 'https://www.mediafire.com/convkey/88d0/o7ja6efkgc857oo9g.jpg',
                duration: '44 min'
            },
            {
                title: 'Episodio 3',
                description: 'Pip descubre por primera vez en su vida el lado oscuro cuando va a una fiesta clandestina. Y su siguiente pista la lleva a territorio aún más peligroso.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/app/e3/Asesinato-Para-Principiantes-T1-E3.m3u8',
                image: 'https://www.mediafire.com/convkey/6ed1/6870czca0karqn29g.jpg',
                duration: '43 min'
            },
            {
                title: 'Episodio 4',
                description: 'Pip y Ravi siguen una nueva pista que los lleva lejos de Little Kilton. Allí, descubren una valiosa prueba... y una desagradable sorpresa.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/app/e4/Asesinato-Para-Principiantes-T1-E4.m3u8',
                image: 'https://www.mediafire.com/convkey/0de9/czivzlrwjyr2rlj9g.jpg',
                duration: '44 min'
            },
            {
                title: 'Episodio 5',
                description: 'Una impactante confesión arroja luz en la investigación. Antes de que Pip pueda decidir qué hacer, recibe otro mensaje amenazador.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/app/e5/Asesinato-Para-Principiantes-T1-E5.m3u8',
                image: 'https://occ-0-2442-1380.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeED_UJixLwFl5Ln39ljb3EY3B-_bE2aisB_eLtQVDlnZTf_vQ3hbjJseEWVQtQR3_xSoTLDsQaJqB20WoXVRq4ALdwp2VwxqDgvq9ssa8GfB9Ed925tZ5zk.jpg?r=2f5',
                duration: '50 min'
            },
            {
                title: 'Episodio 6',
                description: 'La policía hace un arresto, pero Pip no está segura de que el caso esté solucionado, así que va a visitar a la única persona que podría tener respuestas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/app/e6/Asesinato-Para-Principiantes-T1-E6.m3u8',
                image: 'https://www.mediafire.com/convkey/0869/05fmkuq6l9kj4159g.jpg',
                duration: '51 min'
            }
        ],
        2: [
            {
                title: 'Próxima temporada',
                description: 'Otra temporada está por llegar...',
                videoPath: '#',
                image: '',
                duration: ''
            }
        ]
    };

    currentEpisodes = episodes[season];
    currentEpisodeIndex = 0;

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
        currentEpisodes.forEach((episode, index) => {
            const episodeItem = document.createElement('li');
            const episodeButton = document.createElement('button');
            episodeButton.classList.add('episodio');
            episodeButton.onclick = () => {
                currentEpisodeIndex = index;
                loadEpisode(episode.videoPath);
                marcarActivo(index);
            };

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
            durationDiv.style.backgroundColor = '#000000cc';
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

    // Carga automáticamente el primer episodio de la temporada (si es temporada 1)
    if (season === 1) {
        loadEpisode(currentEpisodes[0].videoPath);
        marcarActivo(0);
    }
}

function marcarActivo(index) {
    document.querySelectorAll('.episodio-info').forEach((el, i) => {
        el.classList.toggle('activo', i === index);
    });
}

// Aquí usamos la función que usa Playerjs para cargar el video y reproducir
function loadEpisode(videoPath) {
    if (videoPath === '#') return;
    if (typeof player !== "undefined" && player) {
        player.api("file", videoPath);
        player.api("play");
    } else {
        console.warn("Player no está inicializado todavía");
    }
}

// Inicializar temporada 1 al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    changeSeason(1);
});

// Dropdown toggle
document.querySelector('.dropdown-button').addEventListener('click', function () {
    const dropdownContent = document.querySelector('.dropdown-content');
    this.classList.toggle('open');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Cerrar dropdown al hacer clic fuera
document.addEventListener('click', (event) => {
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownButton = document.querySelector('.dropdown-button');
    if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
        dropdownContent.style.display = 'none';
        dropdownButton.classList.remove('open');
    }
});