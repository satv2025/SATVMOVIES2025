document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.dplayer');

    containers.forEach(container => {
        // Crear spinner dinámicamente
        const spinner = document.createElement('div');
        spinner.className = 'mi-spinner';
        container.appendChild(spinner);
    });

    if (window.DPlayer) {
        const players = [];

        // Guardar referencia al constructor original
        const OriginalDPlayer = DPlayer;

        // Interceptar constructor para enganchar eventos
        window.DPlayer = function(config) {
            const dp = new OriginalDPlayer(config);
            players.push(dp);

            const spinner = dp.container.querySelector('.mi-spinner');

            dp.on('waiting', () => {
                if (spinner) spinner.style.display = 'block';
            });

            dp.on('playing', () => {
                if (spinner) spinner.style.display = 'none';
            });

            return dp;
        }

        // Preservar métodos estáticos si los usás
        Object.assign(window.DPlayer, OriginalDPlayer);
    }
});