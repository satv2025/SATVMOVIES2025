// Datos de las películas y series
const peliculas = {
    matiponcepeli: {
        type: "pelicula",
        year: "2022",
        duration: "1 h",
        description: 'Matías Ponce, creador de contenido en redes, se enfrenta a alienígenas y hackers tras la misteriosa suspensión de su canal de YouTube, o como él lo llama "Yutun", desatando una hilarante y absurda aventura.',
        cast: "<strong>Elenco:</strong> Matias Ponce, Santino Ponce, Indio Ponce, <button id='scrollAbout'>más</button>",
        title: "<span class='about'>Acerca de</span> <strong class='titulo'></span> <strong class='titulo'>Matias Ponce - La Película</strong>",
        genres: "<strong>Géneros:</strong> Humor, humor absurdo, hackers, fama, grandes élites",
        titleType: "<strong>Este título es:</strong> Original, delirante",
        ageRating: "<span class='age'>16+</span> adolescentes, adultos, lenguaje inapropiado, delirante",
        background: `
<video autoplay loop playsinline style="width:100%; height:100%; object-fit:cover;" 
       oncontextmenu="return false;" 
       onmousedown="return false;" 
       onselectstart="return false;" 
       ondragstart="return false;">
    <source src="https://gitlab.com/solargentinotv/satvmoviesvideos/-/raw/main/MATIAS_PONCE_-_LA_PEL%C3%8DCULA__TR%C3%81ILER_OFICIAL_2022.webm?ref_type=heads" type="video/webm">
    Tu navegador no soporta el video.
</video>
`,
        link: "<a id='watch-button' href='https://movies.solargentinotv.com.ar/watch/title/093458373' target='_self'>Reproducir</a>",
        createdBy: "<div class='modal-createdBy'><span class='fcbprefix'>Creado por:</span> <span class='fcbcontent'>Matías Ponce</span></div>",
        fullcast: "<div class='fullcast'><span class='fcprefix'>Elenco:</span> <span class='fccontent'>Matías Ponce, Santino Ponce, Indio Ponce, Antonella Ponce, Valeria Volpi, Julieta</span></div>",
        fullscript: "<div class='fullscript'><span class='fsprefix'>Guión:</span> <span class='fscontent'>Matías Ponce</span></div>",
        fullgenres: "<div class='fullgenres'><span class='fgprefix'>Géneros:</span><span class='fgcontent'> Humor, humor absurdo, hackers, fama, grandes élites, paranoia, haters, YouTube</span></div>",
        fulltitletype: "<div class='fulltitletype'><span class='fttprefix'>Este titulo es:</span> <span class='fttcontent'> Original, delirante</span></div>",
        fullage: "<div class='fullage'><span class='faprefix'>Clasificación por edad: </span> <span class='facontent'><span class='age'>12+</span> adolescentes, adultos, lenguaje inapropiado, delirante</span> <span class='facontent2'>Apta para mayores de 12 años</span></div>"
    },

    cienporcientolucha: {
        type: "pelicula",
        year: "2008",
        duration: "1 h 20 min",
        description: "Koshe Plostenko, un mafioso implacable, secuestra a los luchadores de 100% Lucha para obligarlos a pelear en su club clandestino, desatando caos y rivalidades inesperadas.",
        cast: "<strong>Elenco:</strong> Maria Fernanda Neil, Carlos Kaspar, Daniel Garcilazo, <button id='scrollAbout'>más</button>",
        title: "<span class='about'>Acerca de</span> <strong class='titulo'> 100%Lucha - La Película</strong>",
        genres: "<strong>Géneros:</strong> Humor, Lucha Libre, Acción, Rivalidades", // 4 elementos porque 3 ocupaban solo 1 línea
        titleType: "<strong>Este título es:</strong> Intenso, Delirante, Divertido",
        ageRating: "<span class='age'>12+</span> lenguaje inapropiado, violencia, humor absurdo",
        background: `
<video autoplay loop playsinline style="width:100%; height:100%; object-fit:cover;" 
       oncontextmenu="return false;" 
       onmousedown="return false;" 
       onselectstart="return false;" 
       ondragstart="return false;">
    <source src="https://gitlab.com/solargentinotv/satvmoviesvideos/-/raw/main/100_LUCHA_LA_PEL%C3%8DCULA__Tr%C3%A1iler__HD_.mp4?ref_type=heads" type="video/mp4">
    Tu navegador no soporta el video.
</video>
`,
        link: "<a id='watch-button' href='https://movies.solargentinotv.com.ar/watch/title/084352634' target='_self'>Reproducir</a>",
        createdBy: "<div class='modal-createdBy'><span class='fcbprefix'>Creado por:</span> <span class='fcbcontent'>Eduardo Husni</span></div>",
        fullcast: "<div class='fullcast'><span class='fcprefix'>Elenco:</span> <span class='fccontent'>María Fernanda Neil, Carlos Kaspar, Norberto Adrián Fernandez, Marcelo Benítez, Miguel Ángel Wellington, Rubén Piuselli, Daniel Garcilazo, Paulo Giardina, Gabriel Emanuelli, Leonardo Montero, Eduardo Husni, Osvaldo Principi, Julio Mario Sibara 'Turco Naím', Gonzalo Nenna, Axel Kuschevatzky, Alejandro 'Marley' Wiebe, Mario Pergolini</span></div>",
        fullscript: "<div class='fullscript'><span class='fsprefix'>Guión:</span> <span class='fscontent'><a href='https://cine.ar/' style='color:#fff; text-decoration:none;' onmouseover='this.style.textDecoration=\"underline\";' onmouseout='this.style.textDecoration=\"none\";'>CineAR</a>, <a href='https://www.incaa.gob.ar/' style='color:#fff; text-decoration:none;' onmouseover='this.style.textDecoration=\"underline\";' onmouseout='this.style.textDecoration=\"none\";'>INCAA</a></span></div>",
        fullgenres: "<div class='fullgenres'><span class='fgprefix'>Géneros:</span><span class='fgcontent'> Humor, Lucha Libre, Acción, Rivalidades, Secuestros, Competencias</span></div>",
        fulltitletype: "<div class='fulltitletype'><span class='fttprefix'>Este título es:</span> <span class='fttcontent'> Intenso, Delirante, Divertido, Emocionante, Exagerado</span></div>",
        fullage: "<div class='fullage'><span class='faprefix'>Clasificación por edad: </span> <span class='facontent'><span class='age'>12+</span> lenguaje inapropiado, violencia, humor absurdo</span> <span class='facontent2'>Apta para mayores de 16 años</span></div>"
    },

    cienporcientoluchaeadc: {
        type: "pelicula",
        year: "2009",
        duration: "1 h 20 min",
        description: "Damián Castillo, un doctor obsesionado, crea clones de los luchadores de 100% Lucha para arruinar a su ídolo, desatando caos y rivalidades inesperadas.",
        cast: "<strong>Elenco:</strong> Pablo Rago, Roberto Carnaghi, Juan Pablo Varsky, <button id='scrollAbout'>más</button>",
        title: "<span class='about'>Acerca de</span> <strong class='titulo'> 100%Lucha - El Amo De Los Clones </strong>",
        genres: "<strong>Géneros:</strong> Humor, Lucha Libre, Sci-Fi, Clonación", // 4 elementos para ocupar 2 líneas
        titleType: "<strong>Este título es:</strong> Intenso, Delirante, Divertido",
        ageRating: "<span class='age'>12+</span> lenguaje inapropiado, violencia, humor absurdo",
        background: `
<video autoplay loop playsinline style="width:100%; height:100%; object-fit:cover;" 
       oncontextmenu="return false;" 
       onmousedown="return false;" 
       onselectstart="return false;" 
       ondragstart="return false;">
    <source src="https://gitlab.com/solargentinotv/satvmoviesvideos/-/raw/main/100_LUCHA_EL_AMO_DE_LOS_CLONES__Tr%C3%A1iler__HD_.mp4?ref_type=heads" type="video/mp4">
    Tu navegador no soporta el video.
</video>
`,
        link: "<a id='watch-button' href='https://movies.solargentinotv.com.ar/watch/title/084352635' target='_self'>Reproducir</a>",
        createdBy: "<div class='modal-createdBy'><span class='fcbprefix'>Creado por:</span> <span class='fcbcontent'>Eduardo Husni</span></div>",
        fullcast: "<div class='fullcast'><span class='fcprefix'>Elenco:</span> <span class='fccontent'>Pablo Rago, Roberto Carnaghi, Juan Pablo Varsky, Leo Montero, Norberto Adrián Fernández, Delfina Gerez Bosco, La Masa, Osvaldo Príncipi, Berta Muñiz, Eduardo Husni, Natalia Kim, Daniel Casablanca, Walter Cornás, Rocío Rodríguez Presedo, Esteban Rojas, Dallys Ferreyra Enciso, Julia Lenzberg</span></div>",
        fullscript: "<div class='fullscript'><span class='fsprefix'>Guión:</span> <span class='fscontent'><a href='https://cine.ar/' style='color:#fff; text-decoration:none;' onmouseover='this.style.textDecoration=\"underline\";' onmouseout='this.style.textDecoration=\"none\";'>CineAR</a>, <a href='https://www.incaa.gob.ar/' style='color:#fff; text-decoration:none;' onmouseover='this.style.textDecoration=\"underline\";' onmouseout='this.style.textDecoration=\"none\";'>INCAA</a></span></div>",
        fullgenres: "<div class='fullgenres'><span class='fgprefix'>Géneros:</span><span class='fgcontent'> Humor, Lucha Libre, Sci-Fi, Clonación, Rivalidades, Venganza</span></div>",
        fulltitletype: "<div class='fulltitletype'><span class='fttprefix'>Este título es:</span> <span class='fttcontent'> Intenso, Delirante, Divertido, Ingenioso, Excéntrico</span></div>",
        fullage: "<div class='fullage'><span class='faprefix'>Clasificación por edad: </span> <span class='facontent'><span class='age'>12+</span> lenguaje inapropiado, violencia, humor absurdo</span> <span class='facontent2'>Apta para mayores de 16 años</span></div>"
    },

    homealone: {
        type: "pelicula",
        year: "1990",
        duration: "1 h 45 min",
        description: "En este clásico, Macaulay Culkin es Kevin MacCallister, un niño olvidado en casa en Navidad que debe enfrentarse a dos torpes y despiadados ladrones.",
        cast: "<strong>Elenco:</strong> Macaulay Culkin, Joe Pesci, Daniel Stern, <button id='scrollAbout'>más</button>",
        title: "<span class='about mpa1-title'>Acerca de</span> <strong class='titulo mpa1-title'> Mi Pobre Angelito </strong>",
        genres: "<strong>Géneros:</strong> Infantil, Comedia, Fiestas navideñas",
        titleType: "<strong>Este título es:</strong> Divertido, Familiar, Emotivo",
        ageRating: "<span class='age'>7+</span> humor slapstick, situaciones de riesgo cómicas",
        background: `
        <video 
            autoplay 
            loop 
            playsinline 
            style="width:100%; height:100%; object-fit:cover;" 
            oncontextmenu="return false;" 
            onmousedown="return false;" 
            onselectstart="return false;" 
            ondragstart="return false;"
        >
            <source src="https://gitlab.com/solargentinotv/satvmoviesvideos/-/raw/main/Mi_Pobre_Angelito_1_trailer.mp4" type="video/mp4">
            Tu navegador no soporta el video.
        </video>
    `,
        link: "<a id='watch-button' href='https://movies.solargentinotv.com.ar/watch/title/24122025' target='_self'>Reproducir</a>",
        createdBy: "<div class='modal-createdBy mpa1-createdBy'><span class='fcbprefix'>Dirigido por:</span> <span class='fcbcontent'>Chris Columbus</span></div>",
        fullcast: "<div class='fullcast mpa1-fullcast'><span class='fcprefix'>Elenco:</span> <span class='fccontent'>Macaulay Culkin, Joe Pesci, Daniel Stern, Catherine O'Hara, John Heard, Kieran Culkin, Devin Ratray, John Candy, Roberts Blossom, Angela Goethals, Gerry Bamman, Hillary Wolf, Larry Hankin, Hope Davis, Senta Moses, Diana Rein, Jedidiah Cohen, Ralph Foody, Terrie Snell, Kristin Minter, Anna Slotky, Jeffrey Wiseman, Ann Whitney, Ken Hudson Campbell, Billie Bird, Michael Guido, Peter Siragusa, Jim Ortlieb, Ray Toler, Matt Doherty, Mark Beltzman, Alan Wilder, Ally Sheedy, entre otros.</span></div>",
        fullscript: "<div class='fullscript mpa1-fullscript'><span class='fsprefix'>Guión:</span> <span class='fscontent'>John Hughes</span></div>",
        fullgenres: "<div class='fullgenres mpa1-fullgenres'><span class='fgprefix'>Géneros:</span><span class='fgcontent'> Infantil, Comedia, Aventuras, Fiestas navideñas</span></div>",
        fulltitletype: "<div class='fulltitletype mpa1-fulltitletype'><span class='fttprefix'>Este título es:</span> <span class='fttcontent'> Divertido, Familiar, Emotivo</span></div>",
        fullage: "<div class='fullage mpa1-fullage'><span class='faprefix'>Clasificación por edad: </span> <span class='facontent'><span class='age'>7+</span> humor slapstick, situaciones de riesgo cómicas</span> <span class='facontent2'>Apta para todo público</span></div>"
    },

    homealone2: {
        type: "pelicula",
        year: "1992",
        duration: "2 h",
        description: "En este clásico secuelar, Kevin McCallister toma un avión incorrecto y termina varado en Nueva York donde debe nuevamente sortear a los torpes ladrones.",
        cast: "<strong>Elenco:</strong> Macaulay Culkin, Joe Pesci, Daniel Stern, <button id='scrollAbout'>más</button>",
        title: "<span class='about mpa2-title'>Acerca de</span> <strong class='titulo mpa2-title'> Mi Pobre Angelito 2: Perdido en Nueva York </strong>",
        genres: "<strong>Géneros:</strong> Infantil, Comedia, Fiestas navideñas, Aventuras",
        titleType: "<strong>Este título es:</strong> Divertido, Familiar, Emotivo",
        ageRating: "<span class='age'>7+</span> humor slapstick, situaciones de riesgo cómicas",
        background: `
        <video 
            autoplay 
            loop 
            playsinline 
            style="width:100%; height:100%; object-fit:cover;" 
            oncontextmenu="return false;" 
            onmousedown="return false;" 
            onselectstart="return false;" 
            ondragstart="return false;"
        >
            <source src="https://gitlab.com/solargentinotv/satvmoviesvideos/-/raw/main/Mi_Pobre_Angelito_2_trailer.mp4" type="video/mp4">
            Tu navegador no soporta el video.
        </video>
    `,
        link: "<a id='watch-button' href='https://movies.solargentinotv.com.ar/watch/title/241220251' target='_self'>Reproducir</a>",
        createdBy: "<div class='modal-createdBy mpa2-createdBy'><span class='fcbprefix'>Dirigido por:</span> <span class='fcbcontent'>Chris Columbus</span></div>",
        fullcast: "<div class='fullcast mpa2-fullcast'><span class='fcprefix'>Elenco:</span> <span class='fccontent'>Macaulay Culkin, Joe Pesci, John Heard, Tim Curry, Devin Ratray, Catherine O'Hara, Rob Schneider, Kieran Culkin, Dana Ivey, Eddie Bracken, Ally Sheedy, Brenda Fricker, Leigh Zimmerman, Anna Slotky, Hillary Wolf, Clarke Devereux, Terrie Snell, Fred Krause, James Cole, Jedidiah Cohen, Rod Sell, Clare Hoak, Gerry Bamman, Monica Devereux, Eleanor Columbus, Fran McGee, Mark Morettini, Ralph Foody, Jimmie Walker, Rip Taylor, Karen Giordano, Ron Canada, Senta Moses, Cedric Young, Michael C. Maronna, Venessia Valentino, Mario Todisco, Joe Liss, Abdoulaye N'Gom, Donald Trump, Diana Rein, Bob Eubanks, Frank Oz.</span></div>",
        fullscript: "<div class='fullscript mpa2-fullscript'><span class='fsprefix'>Guión:</span> <span class='fscontent'>John Hughes</span></div>",
        fullgenres: "<div class='fullgenres mpa2-fullgenres'><span class='fgprefix'>Géneros:</span><span class='fgcontent'> Infantil, Comedia, Aventuras, Fiestas navideñas</span></div>",
        fulltitletype: "<div class='fulltitletype mpa2-fulltitletype'><span class='fttprefix'>Este título es:</span> <span class='fttcontent'> Divertido, Familiar, Emotivo</span></div>",
        fullage: "<div class='fullage mpa2-fullage'><span class='faprefix'>Clasificación por edad: </span> <span class='facontent'><span class='age'>7+</span> humor slapstick, situaciones de riesgo cómicas</span> <span class='facontent2'>Apta para todo público</span></div>"
    },

    app: {
        type: "serie",
        year: "2024",
        duration: "<p id='series-duration'>6 episodios</p>",
        description: "<span class='curiosity-synopsis'>Años después del homicidio de una chica en un tranquilo pueblo inglés, una estudiante se propone resolver el caso y encontrar al verdadero asesino.</span>",
        cast: "<strong>Elenco:</strong> Emma Myers, Zain Iqbal, Asha Banks, <button id='scrollAbout'>más</button>",
        title: "<span class='about'>Acerca de</span> <strong class='titulo'> Asesinato Para Principiantes</strong>",
        episodelist: "<strong class='eplist'>Episodios</strong>",
        genres: "<strong>Géneros:</strong> Series dramáticas, De Gran Bretaña, Series basadas en libros",
        titleType: "<strong>Este título es:</strong> Íntimo, Sombrío, De suspenso",
        ageRating: "<span class='age'>16+</span> lenguaje inapropiado, drogas, violencia sexual",
        curiosity: "<strong class='curiosidad'>Es oficial: Se estrenará otra temporada</strong>",
        background: `
        <video 
            autoplay 
            loop 
            playsinline 
            style="width:100%; height:100%; object-fit:cover;" 
            oncontextmenu="return false;" 
            onmousedown="return false;" 
            onselectstart="return false;" 
            ondragstart="return false;"
        >
            <source src="https://gitlab.com/solargentinotv/satvmoviesvideos/-/raw/main/Asesinato_para_principiantes__Tr%C3%A1iler_oficial__Netflix.mp4?ref_type=heads" type="video/mp4">
            Tu navegador no soporta el video.
        </video>
    `,
        link: "<a id='watch-button' href='https://movies.solargentinotv.com.ar/watch/title/073562678' target='_self'>Reproducir</a>",
        createdBy: "<div class='modal-createdBy app-createdBy'><span class='fcbprefix app-fcbprefix'>Creado por:</span> <span class='fcbcontent app-fcbcontent'>Poppy Cogan</span></div>",
        fullcast: "<div class='fullcast app-fullcast'><span class='fcprefix app-fcprefix'>Elenco:</span> <span class='fccontent app-fccontent'>Emma Myers Zain Iqbal, Asha Banks, Raiko Gohara, Jude Morgan-Collie, Yali Topol Margalith, Yasmin Al-Khudhairi, Henry Ashton, Carla Woodcock, Mathew Baynton, Gary Beadle, Anna Maxwell Martin</span></div>",
        fullscript: "<div class='fullscript app-fullscript'><span class='fsprefix app-fsprefix'>Guión:</span> <span class='fscontent app-fscontent'>Poppy Cogan, Ruby Thomas, Zia Ahmed, Ajoke Ibironke</span></div>",
        fullgenres: "<div class='fullgenres app-fullgenres'><span class='fgprefix app-fgprefix'>Géneros:</span><span class='fgcontent app-fgcontent'>Series dramáticas, De Gran Bretaña, Series basadas en libros, Series de adolescentes, Series de misterio</span></div>",
        fulltitletype: "<div class='fulltitletype app-fulltitletype'><span class='fttprefix app-fttprefix'>Este titulo es:</span> <span class='fttcontent app-fttcontent'>Íntimo, Sombrío, De suspenso</span></div>",
        fullage: "<div class='fullage app-fullage'><span class='faprefix app-faprefix'>Clasificación por edad: </span> <span class='facontent app-facontent'><span class='age app-age'>16+</span> lenguaje inapropiado, drogas, violencia sexual</span> <span class='facontent2 app-facontent2'>Apta para mayores de 16 años</span></div>",
        seasons: `
<div class="season-dropdown">
  <button class="dropdown-button" id="seasonToggle">
    Temporada 1
  </button>

  <div class="dropdown-content" id="seasonMenu">
    <div class="season-option">
      <button class="texto t1" onclick="changeSeason(1)">Temporada 1<span class="episode-count ep1">(6 episodios)</span></button>
    </div>
    <div class="season-option">
      <button class="texto t2" onclick="changeSeason(2)">Temporada 2 <span class="episode-count ep2">(1 episodio)</span></button>
    </div>
    <div class="sepaoption">
    </div>
        <div class="season-option">
      <button class="texto vtle" onclick="changeSeason(3)">Ver todos los episodios</button>
    </div>
  </div>
</div>
            <div class="episodios">
                <h2>Lista de Episodios</h2>
                <ul id="episode-list"></ul>
            </div>
        `
    },
    reite666: {
        type: "serie",
        year: "2018",
        duration: "2 temporadas",
        description: "<span class='curiosity-synopsis'>Cilio, en España, recibe un mensaje que lo obliga a volver a Argentina para un juego macabro. Un error inesperado desata sucesos perturbadores que lo regresan de forma inexplicable.</span>",
        cast: "<strong>Elenco:</strong> Franco Crivera, Julián Iurchuk, Facundo Duré, <button id='scrollAbout'>más</button>",
        title: "<span class='about reite-modal-title'>Acerca de</span> <strong class='titulo reite-modal-title'>Reite666</strong>",
        episodelist: "<strong class='eplist'>Episodios</strong>",
        genres: "<strong>Géneros:</strong> De España, Youtubers, Thriller psicológico",
        titleType: "<strong>Este título es:</strong> Misterioso, Perturbador, Inquietante",
        ageRating: "<span class='age'>16+</span> lenguaje inapropiado",
        curiosity: "<strong class='curiosidad'>Es oficial: Se estrenará otra temporada</strong>",
        background: `
<video class='reite-video' autoplay loop playsinline style="width:100%; height:100%; object-fit:cover;" 
       oncontextmenu="return false;" 
       onmousedown="return false;" 
       onselectstart="return false;" 
       ondragstart="return false;">
    <source src="https://gitlab.com/solargentinotv/satvmoviesvideos/-/raw/main/trailer.mp4?ref_type=heads" type="video/mp4">
    Tu navegador no soporta el video.
</video>
`,
        link: "<a id='watch-button' href='https://movies.solargentinotv.com.ar/watch/title/0194753295' target='_self'>Reproducir</a>",
        createdBy: "<div class='modal-createdBy reite-modal-createdBy'><span class='fcbprefix reite-fcbprefix'>Creado por:</span> <span class='fcbcontent reite-fcbcontent'>Franco Crivera</span></div>",
        fullcast: "<div class='fullcast reite-fullcast'><span class='fcprefix reite-fcprefix'>Elenco:</span> <span class='fccontent reite-fccontent'>Franco Crivera, Julián Iurchuk, Facundo Duré, Roger Cascón Segura, Andrés Ilopo Bollero, Laura Guerra, Marta Guerra</span></div>",
        fullscript: "<div class='fullscript reite-fullscript'><span class='fsprefix reite-fsprefix'>Guión:</span> <span class='fscontent reite-fscontent'>Franco Crivera, Andrés Ilopo Bollero</span></div>",
        fullgenres: "<div class='fullgenres reite-fullgenres'><span class='fgprefix reite-fgprefix'>Géneros:</span><span class='fgcontent reite-fgcontent'> De España, Thriller psicológico, Youtubers Aventura, Paranormal, Suspenso, Misterio, Terror urbano</span></div>",
        fulltitletype: "<div class='fulltitletype reite-fulltitletype'><span class='fttprefix reite-fttprefix'>Este título es:</span> <span class='fttcontent reite-fttcontent'>Misterioso, Perturbador, Inquietante</span></div>",
        fullage: "<div class='fullage reite-fullage'><span class='faprefix reite-faprefix'>Clasificación por edad: </span> <span class='facontent reite-facontent'><span class='age reite-age'>16+</span> lenguaje inapropiado</span> <span class='facontent2 reite-facontent2'>Apta para mayores de 16 años</span></div>"
    },
    nivelx: {
        type: "serie",
        year: "2009",
        duration: "2 temporadas",
        description: "<span>Lionel Campoy y Natalia Dim enfrentan situaciones absurdas en Nivel X, una parodia caótica e imposible de ignorar.</span>",
        cast: "<strong>Elenco:</strong> Juan Manuel Paradiso, Juan Arnone, Sebastián Paradiso, <button id='scrollAbout'>más</button>",
        title: "<span class='about nivelX-modal-title'>Acerca de</span> <strong class='titulo nivelX-modal-title'>Nivel X</strong>",
        episodelist: "<strong class='eplist'>Episodios</strong>",
        genres: "<strong>Géneros:</strong> Parodia, Comedia, Infantil, Irreverente",
        titleType: "<strong>Este título es:</strong> Absurdo, Divertido, Caótico",
        ageRating: "<span class='age'>13+</span> humor irreverente",
        background: `
<video class='reite-video' autoplay loop playsinline style="width:100%; height:100%; object-fit:cover;" 
       oncontextmenu="return false;" 
       onmousedown="return false;" 
       onselectstart="return false;" 
       ondragstart="return false;">
    <source src="https://gitlab.com/solargentinotv/satvmoviesvideos/-/raw/main/trailer_persons_T1E1-26_order.mp4" type="video/mp4">
    Tu navegador no soporta el video.
</video>
`,
        link: "<a id='watch-button' href='https://movies.solargentinotv.com.ar/watch/title/0000000000' target='_self'>Reproducir</a>",
        createdBy: "<div class='modal-createdBy nivelX-modal-createdBy'><span class='fcbprefix nivelX-fcbprefix'>Creado por:</span> <span class='fcbcontent nivelX-fcbcontent'>SKB</span></div>",
        fullcast: "<div class='fullcast nivelX-fullcast'><span class='fcprefix nivelX-fcprefix'>Elenco:</span> <span class='fccontent nivelX-fccontent'>Juan Manuel Paradiso, Juan Arnone, Sebastián Paradiso, Gustavo Fernández, Nico Bianchi, Thaiel Calzada Guirao, Julian Crudo, Lucas Nievas, Franco Colombo</span></div>",
        fullscript: "<div class='fullscript nivelX-fullscript'><span class='fsprefix nivelX-fsprefix'>Guión:</span> <span class='fscontent nivelX-fscontent'>SKB</span></div>",
        fullgenres: "<div class='fullgenres nivelX-fullgenres'><span class='fgprefix nivelX-fgprefix'>Géneros:</span><span class='fgcontent nivelX-fgcontent'>Parodia, Comedia, Infantil, Irreverente</span></div>",
        fulltitletype: "<div class='fulltitletype nivelX-fulltitletype'><span class='fttprefix nivelX-fttprefix'>Este título es:</span> <span class='fttcontent nivelX-fttcontent'>Absurdo, Divertido, Caótico</span></div>",
        fullage: "<div class='fullage nivelX-fullage'><span class='faprefix nivelX-faprefix'>Clasificación por edad: </span> <span class='facontent nivelX-facontent'><span class='age nivelX-age'>13+</span> humor irreverente</span> <span class='facontent2 nivelX-facontent2'>Apta para mayores de 13 años</span></div>"
    }
};

// === Insertar CSS del botón de mute dinámicamente ===
(function insertMuteCSS() {
    const style = document.createElement("style");
    style.textContent = `
        .modal-mute-btn {
            position: absolute;
            bottom: 5%;
            right: 2em;
            background: rgba(0,0,0,0.6);
            border: none;
            border-radius: 50%;
            padding: 8px;
            z-index: 20;
            cursor: pointer;
            transition: opacity 0.2s;
        }
        .modal-mute-btn:hover { opacity: 1; }
        .modal-mute-btn img { width: 28px; height: 28px; display: block; filter: brightness(0) invert(1); }
        .episode-item:hover { background: rgba(255,255,255,0.05); }
        .episodios-count { font-size: 0.9em; color: #aaa; margin-left: 0.3em; font-weight: 400; }
        .season-divider { border-top: 1px solid #444; margin-top: 5px; padding-top: 5px; }
        .view-all-btn { width: 100%; text-align: left; color: #ff4444; font-weight: bold; }
    `;
    document.head.appendChild(style);
})();

// === Variables globales ===
let episodiosPorSerie = {};
let currentMuteListener = null;

// === Cargar JSON de episodios dinámicamente ===
async function cargarEpisodiosJSON() {
    try {
        const response = await fetch('assets/json/data.json');
        if (!response.ok) throw new Error("No se pudo cargar el JSON");
        const data = await response.json();

        // Generalizar sin cambiar el estilo original
        for (const key in data) {
            if (key.startsWith("episodios")) {
                episodiosPorSerie[key.replace("episodios", "").toLowerCase()] = data[key];
            }
        }

    } catch (error) {
        console.error("Error al cargar episodios:", error);
    }
}

cargarEpisodiosJSON();

// === Detectar clic en botones "Más Información" ===
document.querySelectorAll(".moreinfobutton").forEach(button => {
    button.addEventListener("click", function () {
        const movieKey = this.getAttribute("data-movie");
        openModal(movieKey);
    });
});

// === Abrir modal ===
function openModal(movieKey) {
    const modal = document.getElementById("infoModal");
    const modalBackground = document.getElementById("modal-background");
    const episodeList = document.getElementById("episode-list");
    const movie = peliculas[movieKey];
    if (!movie) return;

    modalBackground.innerHTML = "";
    if (episodeList) episodeList.innerHTML = "";

    modalBackground.innerHTML = `
        ${movie.background}
        <button class="modal-mute-btn" id="muteBtn">
            <img id="muteIcon" src="assets/media/images/modal-vol-on.svg" alt="Mute/Unmute">
        </button>
    `;

    modal.style.display = "block";
    modal.style.overflowY = "auto";
    modal.style.overflowX = "hidden";
    modal.style.height = "100vh";

    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) modalContent.style.position = "relative";

    const video = modal.querySelector("#modal-background video");
    const muteBtn = document.getElementById("muteBtn");
    const muteIcon = document.getElementById("muteIcon");
    const modalHeader = modal.querySelector(".modal-header");
    const seasonDropdown = document.querySelector('.season-dropdown');
    const modalTitle = modal.querySelector("h1.modal-title");

    // Configurar video y mute
    if (video && muteBtn) {
        video.currentTime = 0;
        video.muted = false;
        video.play().catch(() => console.warn("Autoplay bloqueado"));

        if (currentMuteListener) muteBtn.removeEventListener("click", currentMuteListener);

        currentMuteListener = () => {
            video.muted = !video.muted;
            muteIcon.src = video.muted
                ? "assets/media/images/modal-vol-mute.svg"
                : "assets/media/images/modal-vol-on.svg";
        };
        muteBtn.addEventListener("click", currentMuteListener);
    }

    // === Agregar clases específicas si es "reite666" ===
    if (movieKey === "reite666") {
        if (video) video.classList.add("reite-bg");
        if (modalHeader) modalHeader.classList.add("reite-header");
        if (muteBtn) muteBtn.classList.add("reite-mute");
        if (seasonDropdown) seasonDropdown.classList.add("reite-season-dropdown");
    } else {
        if (video) video.classList.remove("reite-bg");
        if (modalHeader) modalHeader.classList.remove("reite-header");
        if (muteBtn) muteBtn.classList.remove("reite-mute");
        if (seasonDropdown) seasonDropdown.classList.remove("reite-season-dropdown");
    }

    // === Agregar clases específicas si es "nivelx" ===
    if (movieKey === "nivelx") {
        if (video) video.classList.add("nivelx-bg");
        if (modalHeader) modalHeader.classList.add("nivelx-header");
        if (muteBtn) muteBtn.classList.add("nivelx-mute");
        if (seasonDropdown) seasonDropdown.classList.add("nivelx-season-dropdown");
    } else {
        if (video) video.classList.remove("nivelx-bg");
        if (modalHeader) modalHeader.classList.remove("nivelx-header");
        if (muteBtn) muteBtn.classList.remove("nivelx-mute");
        if (seasonDropdown) seasonDropdown.classList.remove("nivelx-season-dropdown");
    }

    // === Agregar clases específicas para MPA1 / MPA2 en el h1.modal-title ===
    // Agregar o remover clases según movieKey
    if (movieKey === "mpa1") {
        if (modalTitle) modalTitle.classList.add("mpa1-mtitle");
        if (modalTitle) modalTitle.classList.remove("mpa2-mtitle");
    } else if (movieKey === "mpa2") {
        if (modalTitle) modalTitle.classList.add("mpa2-mtitle");
        if (modalTitle) modalTitle.classList.remove("mpa1-mtitle");
    } else {
        if (modalTitle) modalTitle.classList.remove("mpa1-mtitle");
        if (modalTitle) modalTitle.classList.remove("mpa2-mtitle");
    }

    // Datos del modal
    document.getElementById("modal-title").innerHTML = movie.title;
    document.getElementById("modal-year").innerHTML = movie.year;
    document.getElementById("modal-description").innerHTML = movie.description;
    document.getElementById("modal-cast").innerHTML = movie.cast;
    document.getElementById("modal-genres").innerHTML = movie.genres;
    document.getElementById("modal-titleType").innerHTML = movie.titleType;
    document.getElementById("modal-ageRating").innerHTML = movie.ageRating;
    document.getElementById("modal-curiosity").innerHTML = movie.curiosity || "";
    document.getElementById("modal-duration").innerHTML = movie.duration;
    document.getElementById("modal-episodelist").innerHTML = movie.episodelist || "";
    document.getElementById("modal-seasons").innerHTML = movie.seasons || "";
    document.getElementById("modal-createdBy").innerHTML = movie.createdBy;
    document.getElementById("modal-fullcast").innerHTML = movie.fullcast;
    document.getElementById("modal-fullscript").innerHTML = movie.fullscript;
    document.getElementById("modal-fullgenres").innerHTML = movie.fullgenres;
    document.getElementById("modal-fulltitletype").innerHTML = movie.fulltitletype;
    document.getElementById("modal-fullage").innerHTML = movie.fullage;
    document.getElementById("watch-button").innerHTML = movie.link;

    // === Activar botón "más" para scroll al final ===
    const scrollAboutBtn = document.getElementById('scrollAbout');
    if (scrollAboutBtn) {
        scrollAboutBtn.addEventListener('click', () => {
            const modal = document.getElementById('infoModal');
            if (modal) {
                modal.scrollTo({ top: modal.scrollHeight, behavior: 'smooth' });
            }
        });
    }

    // Cargar episodios y dropdown si es serie
    if (movie.type === "serie" && episodiosPorSerie[movieKey]) {
        generarDropdownTemporadas(movieKey);
    }

    ajustarModalTop();
}

// === Generar dropdown dinámico de temporadas ===
function generarDropdownTemporadas(movieKey) {
    const seasonContainer = document.getElementById("modal-seasons");
    if (!seasonContainer) return;
    seasonContainer.innerHTML = "";

    const temporadas = episodiosPorSerie[movieKey];
    if (!temporadas) return;

    const totalTemporadas = Object.keys(temporadas).length;
    if (totalTemporadas < 2) {
        changeSeason(Object.keys(temporadas)[0], movieKey);
        return;
    }

    const dropdownWrapper = document.createElement("div");
    dropdownWrapper.classList.add("season-dropdown");

    const button = document.createElement("button");
    button.classList.add("dropdown-button");
    button.innerText = `Temporada 1`;

    const dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdown-content");
    dropdownContent.id = "seasonMenu";

    Object.keys(temporadas).forEach((seasonKey) => {
        const option = document.createElement("div");
        option.classList.add("season-option");

        const btn = document.createElement("button");
        btn.classList.add("texto");

        const seasonLabel = document.createElement("span");
        seasonLabel.innerText = `Temporada ${seasonKey}`;

        const epCount = document.createElement("span");
        epCount.classList.add("episodios-count");
        epCount.innerText = ` (${temporadas[seasonKey].length} episodios)`;

        btn.appendChild(seasonLabel);
        btn.appendChild(epCount);

        btn.addEventListener("click", () => {
            button.innerText = `Temporada ${seasonKey}`;
            dropdownContent.classList.remove("show");
            dropdownWrapper.classList.remove("show");
            changeSeason(seasonKey, movieKey);
        });

        option.appendChild(btn);
        dropdownContent.appendChild(option);
    });

    // === Item especial: Ver todos los episodios ===
    const divider = document.createElement("div");
    divider.classList.add("season-divider");

    const viewAll = document.createElement("button");
    viewAll.classList.add("texto", "view-all-btn");
    viewAll.innerText = "Ver todos los episodios";

    viewAll.addEventListener("click", () => {
        button.innerText = "Todos los episodios";
        dropdownContent.classList.remove("show");
        dropdownWrapper.classList.remove("show");
        mostrarTodosLosEpisodios(movieKey);
    });

    divider.appendChild(viewAll);
    dropdownContent.appendChild(divider);

    button.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdownContent.classList.toggle("show");
        dropdownWrapper.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
        if (!dropdownWrapper.contains(e.target)) {
            dropdownContent.classList.remove("show");
            dropdownWrapper.classList.remove("show");
        }
    });

    dropdownWrapper.appendChild(button);
    dropdownWrapper.appendChild(dropdownContent);
    seasonContainer.appendChild(dropdownWrapper);

    // Cargar la primera temporada por defecto
    changeSeason(Object.keys(temporadas)[0], movieKey);
    button.style.display = "flex";
}

// === Mostrar todos los episodios ===
function mostrarTodosLosEpisodios(movieKey) {
    const episodeList = document.getElementById("episode-list");
    if (!episodeList) return;
    episodeList.innerHTML = "";

    const temporadas = episodiosPorSerie[movieKey];
    if (!temporadas) return;

    Object.keys(temporadas).forEach((seasonKey) => {
        const seasonHeader = document.createElement("h3");
        seasonHeader.classList.add("season-header");
        seasonHeader.innerText = `Temporada ${seasonKey}`;
        episodeList.appendChild(seasonHeader);

        temporadas[seasonKey].forEach((ep, index) => {
            const li = document.createElement("li");
            li.classList.add("episode-item");
            li.style.cursor = "pointer";
            li.style.borderBottom = "1px solid #333";
            li.style.borderTop = index === 0 ? "1px solid #333" : "none";

            li.innerHTML = `
                <img src="${ep.image}" alt="${ep.title}" class="episode-img">
                <div class="episode-info">
                    <h3>${ep.title}</h3>
                    <p>${ep.description}</p>
                    <span>${ep.duration}</span>
                    <div class="episode-number">${ep.number || ""}</div>
                </div>`;

            li.addEventListener("click", () => {
                if (ep.link) window.location.href = ep.link;
            });

            episodeList.appendChild(li);
        });
    });
}

// === Cambiar temporada con efecto border-top dinámico ===
function changeSeason(season, movieKey) {
    const episodeList = document.getElementById("episode-list");
    if (!episodeList) return;
    episodeList.innerHTML = "";

    if (episodiosPorSerie[movieKey] && episodiosPorSerie[movieKey][season]) {
        episodiosPorSerie[movieKey][season].forEach((ep, index) => {
            const li = document.createElement("li");
            li.classList.add("episode-item");
            li.style.cursor = "pointer";
            li.style.borderBottom = "1px solid #333";
            li.style.borderTop = index === 0 ? "1px solid #333" : "none";

            li.innerHTML = `
                <img src="${ep.image}" alt="${ep.title}" class="episode-img">
                <div class="episode-info">
                    <h3>${ep.title}</h3>
                    <p>${ep.description}</p>
                    <span>${ep.duration}</span>
                    <div class="episode-number">${ep.number || ""}</div>
                </div>`;

            li.addEventListener("click", () => {
                if (ep.link) window.location.href = ep.link;
            });

            li.addEventListener("mouseenter", () => {
                const prev = li.previousElementSibling;
                if (prev) prev.style.borderBottom = "none";
                li.style.borderTop = "1px solid #333";
            });

            li.addEventListener("mouseleave", () => {
                const prev = li.previousElementSibling;
                if (prev) prev.style.borderBottom = "1px solid #333";
                li.style.borderTop = index === 0 ? "1px solid #333" : "none";
            });

            episodeList.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.innerText = "No hay episodios disponibles para esta temporada.";
        episodeList.appendChild(li);
    }
}

// === Cierre de modal y video ===
function handleVideo(modal, action) {
    const video = modal.querySelector("#modal-background video");
    if (!video) return;
    if (action === "play") {
        video.currentTime = 0;
        video.muted = false;
        video.play().catch(() => console.warn("Autoplay bloqueado"));
    } else if (action === "pause") {
        video.pause();
        video.currentTime = 0;
    }
}

function closeModal() {
    const modal = document.getElementById("infoModal");
    handleVideo(modal, "pause");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
    const episodeList = document.getElementById("episode-list");
    if (episodeList) episodeList.innerHTML = "";
}

document.querySelector(".close-button").addEventListener("click", closeModal);

document.addEventListener("click", (event) => {
    const modal = document.getElementById("infoModal");
    const modalContent = document.querySelector(".modal-content");
    if (modal.style.display === "block" &&
        !modalContent.contains(event.target) &&
        !event.target.closest(".moreinfobutton")) {
        closeModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});

// Ajuste dinámico de top
function ajustarModalTop() {
    const cast = document.querySelector('.modal-cast');
    const genres = document.querySelector('.modal-genres');
    if (cast && genres) {
        const topOffset = cast.offsetHeight + genres.offsetHeight + 40;
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) modalContent.style.paddingTop = topOffset + 'px';
    }
}