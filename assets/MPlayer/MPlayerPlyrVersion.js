const video = document.getElementById('MPlayer');
const source = 'https://cdn.jsdelivr.net/gh/satv2025/media@refs/heads/main/videos/reite666/t1/E1/REITE666%20T1%20E1.m3u8';

const player = new Plyr(video);

// Crear el span para duración y añadirlo a los controles
const durationDisplay = document.createElement('span');
durationDisplay.className = 'plyr__time plyr__dtime';
durationDisplay.textContent = '/ --:--';

const controls = document.querySelector('.plyr__controls');
if (controls) {
  controls.appendChild(durationDisplay);
} else {
  video.addEventListener('loadeddata', () => {
    const ctrl = document.querySelector('.plyr__controls');
    if (ctrl && !document.querySelector('.plyr__dtime')) {
      ctrl.appendChild(durationDisplay);
    }
  });
}

// Función para formatear segundos en mm:ss
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Actualizar duración en el display personalizado
function updateDuration(timeInSeconds) {
  if (timeInSeconds && isFinite(timeInSeconds)) {
    durationDisplay.textContent = '/  ' + formatTime(timeInSeconds);
  } else {
    durationDisplay.textContent = '/ --:--';
  }
}

// Actualizar tiempo actual mostrado (forzando formato progresivo mm:ss)
player.on('timeupdate', () => {
  const currentTime = player.currentTime;
  const timeDisplay = document.querySelector('.plyr__time--current');
  if (timeDisplay) {
    timeDisplay.textContent = formatTime(currentTime);
  }
});

// Manejar fullscreen (puedes añadir lógica aquí si necesitas)
player.on('enterfullscreen', () => {
  console.log('Entró en fullscreen');
  // Aquí podés actualizar estilos o estados si querés
});

player.on('exitfullscreen', () => {
  console.log('Salió de fullscreen');
  // Aquí podés revertir cambios o actualizar estados
});

// Reproducción y carga del video con HLS.js o fallback nativo
if (Hls.isSupported()) {
  const hls = new Hls();
  hls.loadSource(source);
  hls.attachMedia(video);

  hls.on(Hls.Events.MANIFEST_PARSED, () => {
    video.play();
  });

  hls.on(Hls.Events.LEVEL_LOADED, (event, data) => {
    if (!data.details.live && data.details.totalduration) {
      updateDuration(data.details.totalduration);
    }
  });
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  video.src = source;
  video.addEventListener('loadedmetadata', () => {
    updateDuration(video.duration);
    video.play();
  });
}

// Actualizar duración al cargar metadata o cambiar duración
video.addEventListener('loadedmetadata', () => {
  updateDuration(video.duration);
});
video.addEventListener('durationchange', () => {
  updateDuration(video.duration);
});

// Barra de progreso personalizada: actualizar ancho del "played"
const progressInput = document.querySelector('.plyr__progress input[type="range"]');
if (progressInput) {
  video.addEventListener('timeupdate', () => {
    if(video.duration > 0) {
      const percent = (video.currentTime / video.duration) * 100;
      progressInput.style.setProperty('--played-width', `${percent}%`);
    }
  });
}