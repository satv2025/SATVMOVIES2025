function changeSeason(season) {
    const episodeList = document.getElementById('episode-list');
    const dropdownButton = document.querySelector('.dropdown-button'); // Obtener el botón del dropdown
    const dropdownContent = document.querySelector('.dropdown-content'); // Obtener el contenido del dropdown

    // Cambiar el texto del botón a la temporada seleccionada
    if (season === 1) {
        dropdownButton.textContent = "Película 1";
    } else if (season === 2) {
        dropdownButton.textContent = "Película 2";
    }

    // Limpiar los episodios actuales
    episodeList.innerHTML = '';

    // Datos de los episodios para cada temporada
    const episodes = {
        1: [
            {
                title: 'Episodio 1 - Cilio debe regresar',
                description: 'Luego de recibir un misterioso mensaje, cilio debe volver a Argentina y descubrir quién lo envió.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '12 min' // Duración actualizada
            },
            {
                title: 'Episodio 2 - Bienvenido A Casa',
                description: 'Luego del viaje, Cilio llega a su casa solo para encontrarse con mas enigmas. Un cartel y unas coordenadas lo esperan.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '11 min' // Duración actualizada
            },
            {
                title: 'Episodio 3 - El Reencuentro',
                description: 'Cilio es citado en un parque cercano junto a dos desconocidos, al llegar se reencuentra con dos viejos amigos',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '14 min' // Duración actualizada
            },
            {
                title: 'Episodio 4 - La Casa De Juli',
                description: 'Al día siguiente en la casa de Julián, alguien toca el timbre y se encuentran con un sobre.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '11 min' // Duración actualizada
            },
            {
                title: 'Episodio 5 - El Código QR',
                description: 'El sobre que les dejaron, contenia un código QR, el mismo, los llevó a una isla.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '13 min' // Duración actualizada
            },
            {
                title: 'Episodio 6 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '13 min' // Duración actualizada
            },
            {
                title: 'Episodio 7 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '11 min' // Duración actualizada
            },
            {
                title: 'Episodio 8 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '15 min' // Duración actualizada
            },
            {
                title: 'Episodio 9 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '11 min' // Duración actualizada
            },
            {
                title: 'Episodio 10 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '10 min' // Duración actualizada
            },
            {
                title: 'Episodio 11 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '9 min' // Duración actualizada
            },
            {
                title: 'Episodio 12 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '11 min' // Duración actualizada
            },
            {
                title: 'Episodio 13 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '11 min' // Duración actualizada
            },
            {
                title: 'Episodio 14 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '10 min' // Duración actualizada
            },
            {
                title: 'Episodio 15 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '11 min' // Duración actualizada
            },
            {
                title: 'Episodio 16 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '11 min' // Duración actualizada
            },
            {
                title: 'Episodio 17 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '12 min' // Duración actualizada
            },
            {
                title: 'Episodio 18 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '13 min' // Duración actualizada
            },
            {
                title: 'Episodio 19 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '10 min' // Duración actualizada
            },
            {
                title: 'Episodio 20 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '14 min' // Duración actualizada
            }
        ],
        2: [
            {
                title: 'Episodio 1 - Cilio debe regresar',
                description: 'Luego de recibir un misterioso mensaje, cilio debe volver a Argentina y descubrir quién lo envió.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '10 min' // Duración actualizada
            },
            {
                title: 'Episodio 2 - Bienvenido A Casa',
                description: 'Luego del viaje, Cilio llega a su casa solo para encontrarse con mas enigmas. Un cartel y unas coordenadas lo esperan.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '12 min' // Duración actualizada
            },
            {
                title: 'Episodio 3 - El Reencuentro',
                description: 'Cilio es citado en un parque cercano junto a dos desconocidos, al llegar se reencuentra con dos viejos amigos',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '11 min' // Duración actualizada
            },
            {
                title: 'Episodio 4 - La Casa De Juli',
                description: 'Al día siguiente en la casa de Julián, alguien toca el timbre y se encuentran con un sobre.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '11 min' // Duración actualizada
            },
            {
                title: 'Episodio 5 - El Código QR',
                description: 'El sobre que les dejaron, contenia un código QR, el mismo, los llevó a una isla.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '11 min' // Duración actualizada
            },
            {
                title: 'Episodio 6 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '11 min' // Duración actualizada
            },
            {
                title: 'Episodio 7 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '11 min' // Duración actualizada
            },
            {
                title: 'Episodio 8 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '12 min' // Duración actualizada
            },
            {
                title: 'Episodio 9 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '10 min' // Duración actualizada
            },
                        {
                title: 'Episodio 10 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '14 min' // Duración actualizada
            },
            {
                title: 'Episodio 11 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '16 min' // Duración actualizada
            },
            {
                title: 'Episodio 12 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '13 min' // Duración actualizada
            },
            {
                title: 'Episodio 13 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '11 min' // Duración actualizada
            },
            {
                title: 'Episodio 14 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '18 min' // Duración actualizada
            },
            {
                title: 'Episodio 15 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '12 min' // Duración actualizada
            },
            {
                title: 'Episodio 16 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '15 min' // Duración actualizada
            },
            {
                title: 'Episodio 17 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '48 min' // Duración actualizada
            },
            {
                title: 'Episodio 18 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '20 min' // Duración actualizada
            },
            {
                title: 'Episodio 19 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '11 min' // Duración actualizada
            },
            {
                title: 'Episodio 20 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '12 min' // Duración actualizada
            },
            {
                title: 'Episodio 21 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '13 min' // Duración actualizada
            },
            {
                title: 'Episodio 22 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '13 min' // Duración actualizada
            },
            {
                title: 'Episodio 23 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '11 min' // Duración actualizada
            },
            {
                title: 'Episodio 24 -',
                description: 'Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.',
                videoPath: 'https://cdn.jsdelivr.net/gh/satv2025/media@main/videos/cpcl/koshep/100-Lucha-La-Pel%C3%ADcula.m3u8',
                image: 'https://movies.solargentinotv.com.ar/assets/media/images/100luchathumb.jpg',
                duration: '11 min' // Duración actualizada
            }
        ]
    };

    // Obtener los episodios de la temporada seleccionada
    const selectedEpisodes = episodes[season];

    // Crear la lista de episodios
    selectedEpisodes.forEach(episode => {
        const episodeItem = document.createElement('li');
        const episodeButton = document.createElement('button');
        episodeButton.classList.add('episodio');
        episodeButton.onclick = () => loadEpisode(episode.videoPath);

        const episodeInfo = document.createElement('div');
        episodeInfo.classList.add('episodio-info');
        episodeInfo.style.position = 'relative'; // Asegurarse de que el contenedor tenga posición relativa

        const episodeImg = document.createElement('div');
        episodeImg.classList.add('episodio-img');
        const img = document.createElement('img');
        img.src = episode.image || 'default_image.jpg'; // Imagen por defecto si no hay imagen
        img.alt = episode.title;
        episodeImg.appendChild(img);

        const episodeText = document.createElement('div');
        episodeText.classList.add('episodio-text');
        const h3 = document.createElement('h3');
        h3.textContent = episode.title;
        const p = document.createElement('p');
        p.textContent = episode.description;

        // Crear el contenedor para la duración
        const durationDiv = document.createElement('div');
        durationDiv.classList.add('episodio-duration');
        durationDiv.style.position = 'absolute'; // Hacer que la duración esté en posición absoluta
        durationDiv.style.top = '10px'; // Ubicación en la parte superior
        durationDiv.style.right = '10px'; // Alineado a la derecha
        durationDiv.style.color = '#fff'; // Establecer color de la duración
        durationDiv.style.backgroundColor = '#ffffff00';
        durationDiv.style.padding = '2px 5px'; // Un pequeño padding para la duración
        durationDiv.textContent = episode.duration || 'N/A'; // Duración del episodio o "N/A" si no hay duración

        episodeText.appendChild(h3);
        episodeText.appendChild(p);

        // Agregar la duración al lado derecho arriba
        episodeText.appendChild(durationDiv);

        episodeInfo.appendChild(episodeImg);
        episodeInfo.appendChild(episodeText);
        episodeButton.appendChild(episodeInfo);

        episodeItem.appendChild(episodeButton);
        episodeList.appendChild(episodeItem);
    });

    // Cerrar el dropdown después de seleccionar la temporada
    dropdownContent.style.display = 'none';
    dropdownButton.classList.remove('open');
}

// Función para cargar un episodio
function loadEpisode(videoPath) {
    const video = document.querySelector('#videoPlayer');
    video.src = videoPath;
    video.play();
}

// Inicializar el texto del botón como "Seleccionar Temporada"
document.querySelector('.dropdown-button').textContent = "Seleccionar Temporada";

// Mostrar por defecto los episodios de la primera temporada
changeSeason(1);

// Manejo del dropdown
document.querySelector('.dropdown-button').addEventListener('click', function() {
    var dropdownContent = document.querySelector('.dropdown-content');
    var button = this;

    // Alterna la clase "open" para el botón
    button.classList.toggle('open');

    // Alterna la visibilidad del dropdown
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});

// Cerrar el dropdown si se hace clic fuera de él
document.addEventListener('click', function(event) {
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownButton = document.querySelector('.dropdown-button');

    // Verifica si el clic fue fuera del menú desplegable
    if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
        dropdownContent.style.display = 'none';
        dropdownButton.classList.remove('open');
    }
});