// Datos de las películas y series
const peliculas = {
    matiponcepeli: {
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
        year: "2008",
        duration: "1 h 20 min",
        description: "Koshe Plostenko, un mafioso implacable, dirige un club de lucha clandestino. Para alimentar su negocio, decide secuestrar a los luchadores de 100% Lucha y obligarlos a pelear bajo sus reglas.",
        cast: "<strong>Elenco:</strong> Maria Fernanda Neil, Carlos Kaspar, Daniel Garcilazo, <button id='scrollAbout'>más</button>",
        title: "<span class='about'>Acerca de</span> <strong class='titulo'> 100%Lucha - La Película</strong>",
        genres: "<strong>Géneros:</strong> Humor, lucha libre, luchas clandestinas",
        titleType: "<strong>Este título es:</strong> Intenso, Íntimo, Delirante, Divertido",
        ageRating: "<span class='age'>12+</span> lenguaje inapropiado, daños físicos, humor absurdo",
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
        fullscript: "<div class='fullscript'><span class='fsprefix'>Guión:</span> <span class='fscontent'>CineAR</span></div>",
        fullgenres: "<div class='fullgenres'><span class='fgprefix'>Géneros:</span><span class='fgcontent'> Humor, Lucha Libre, Luchas Clandestinas, Apuestas, Secuestros, Traiciones</span></div>",
        fulltitletype: "<div class='fulltitletype'><span class='fttprefix'>Este titulo es:</span> <span class='fttcontent'> Intenso, Íntimo, Delirante, Divertido</span></div>",
        fullage: "<div class='fullage'><span class='faprefix'>Clasificación por edad: </span> <span class='facontent'><span class='age'>12+</span> lenguaje inapropiado, daños físicos, humor absurdo</span> <span class='facontent2'>Apta para mayores de 16 años</span></div>"
    },

    cienporcientoluchaeadc: {
        year: "2009",
        duration: "1 h 20 min",
        description: "Damián Castillo, un doctor en biotecnología, odia a su vecino Vicente Viloni. Cansado de su fama, decide crear clones de los luchadores de 100% Lucha para destruir la imagen de su ídolo de la infancia.",
        cast: "<strong>Elenco:</strong> Pablo Rago, Roberto Carnaghi, Juan Pablo Varsky, <button id='scrollAbout'>más</button>",
        title: "<span class='about'>Acerca de</span> <strong class='titulo'> 100%Lucha - El Amo De Los Clones </strong>",
        genres: "<strong>Géneros:</strong> Humor, lucha libre, futurista, robots, androides",
        titleType: "<strong>Este título es:</strong> Intenso, Íntimo, Delirante, Divertido",
        ageRating: "<span class='age'>12+</span> lenguaje inapropiado, daños físicos, humor absurdo",
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
        fullcast: "<div class='fullcast'><span class='fcprefix'>Elenco:</span> <span class='fccontent'>Pablo Rago, Roberto Carnaghi, Juan Pablo Varsky, Leo Montero, VNorberto Adrián Fernández, Delfina Gerez Bosco, La Masa, Osvaldo Príncipi, Berta Muñiz, Eduardo Husni, Natalia Kim, Daniel Casablanca, Walter Cornás, Jefe de piso en estudio, Rocío Rodríguez Presedo, Esteban Rojas, Dallys Ferreyra Enciso, Julia Lenzberg</span></div>",
        fullscript: "<div class='fullscript'><span class='fsprefix'>Guión:</span> <span class='fscontent'>CineAR</span></div>",
        fullgenres: "<div class='fullgenres'><span class='fgprefix'>Géneros:</span><span class='fgcontent'> Humor, Lucha Libre, Luchas Clandestinas, Apuestas, Secuestros, Traiciones</span></div>",
        fulltitletype: "<div class='fulltitletype'><span class='fttprefix'>Este titulo es:</span> <span class='fttcontent'> Intenso, Íntimo, Delirante, Divertido</span></div>",
        fullage: "<div class='fullage'><span class='faprefix'>Clasificación por edad: </span> <span class='facontent'><span class='age'>12+</span> lenguaje inapropiado, daños físicos, humor absurdo</span> <span class='facontent2'>Apta para mayores de 16 años</span></div>"
    },

    homealone: {
        year: "1990",
        duration: "1 h 45 min",
        description: "En este clásico, Macaulay Culkin es Kevin MacCallister, un niño olvidado en casa en Navidad que debe enfrentarse a dos torpes y despiadados ladrones.",
        cast: "<strong>Elenco:</strong> Macaulay Culkin, Joe Pesci, Daniel Stern, <button id='scrollAbout'>más</button>",
        title: "<span class='about'>Acerca de</span> <strong class='titulo'> Mi Pobre Angelito </strong>",
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
        createdBy: "<div class='modal-createdBy'><span class='fcbprefix'>Dirigido por:</span> <span class='fcbcontent'>Chris Columbus</span></div>",
        fullcast: "<div class='fullcast'><span class='fcprefix'>Elenco:</span> <span class='fccontent'>Macaulay Culkin, Joe Pesci, Daniel Stern, Catherine O'Hara, John Heard, Kieran Culkin, Devin Ratray, John Candy, Roberts Blossom, Angela Goethals, Gerry Bamman, Hillary Wolf, Larry Hankin, Hope Davis, Senta Moses, Diana Rein, Jedidiah Cohen, Ralph Foody, Terrie Snell, Kristin Minter, Anna Slotky, Jeffrey Wiseman, Ann Whitney, Ken Hudson Campbell, Billie Bird, Michael Guido, Peter Siragusa, Jim Ortlieb, Ray Toler, Matt Doherty, Mark Beltzman, Alan Wilder, Ally Sheedy, entre otros.</span></div>",
        fullscript: "<div class='fullscript'><span class='fsprefix'>Guión:</span> <span class='fscontent'>John Hughes</span></div>",
        fullgenres: "<div class='fullgenres'><span class='fgprefix'>Géneros:</span><span class='fgcontent'> Infantil, Comedia, Aventuras, Fiestas navideñas</span></div>",
        fulltitletype: "<div class='fulltitletype'><span class='fttprefix'>Este título es:</span> <span class='fttcontent'> Divertido, Familiar, Emotivo</span></div>",
        fullage: "<div class='fullage'><span class='faprefix'>Clasificación por edad: </span> <span class='facontent'><span class='age'>7+</span> humor slapstick, situaciones de riesgo cómicas</span> <span class='facontent2'>Apta para todo público</span></div>"
    },

    homealone2: {
        year: "1992",
        duration: "2 h",
        description: "En este clásico secuelar, Kevin McCallister toma un avión incorrecto y termina varado en Nueva York donde debe nuevamente sortear a los torpes ladrones.",
        cast: "<strong>Elenco:</strong> Macaulay Culkin, Joe Pesci, Daniel Stern, <button id='scrollAbout'>más</button>",
        title: "<span class='about'>Acerca de</span> <strong class='titulo'> Mi Pobre Angelito 2: Perdido en Nueva York </strong>",
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
        createdBy: "<div class='modal-createdBy'><span class='fcbprefix'>Dirigido por:</span> <span class='fcbcontent'>Chris Columbus</span></div>",
        fullcast: "<div class='fullcast'><span class='fcprefix'>Elenco:</span> <span class='fccontent'>Macaulay Culkin, Joe Pesci, John Heard, Tim Curry, Devin Ratray, Catherine O'Hara, Rob Schneider, Kieran Culkin, Dana Ivey, Eddie Bracken, Ally Sheedy, Brenda Fricker, Leigh Zimmerman, Anna Slotky, Hillary Wolf, Clarke Devereux, Terrie Snell, Fred Krause, James Cole, Jedidiah Cohen, Rod Sell, Clare Hoak, Gerry Bamman, Monica Devereux, Eleanor Columbus, Fran McGee, Mark Morettini, Ralph Foody, Jimmie Walker, Rip Taylor, Karen Giordano, Ron Canada, Senta Moses, Cedric Young, Michael C. Maronna, Venessia Valentino, Mario Todisco, Joe Liss, Abdoulaye N'Gom, Donald Trump, Diana Rein, Bob Eubanks, Frank Oz.</span></div>",
        fullscript: "<div class='fullscript'><span class='fsprefix'>Guión:</span> <span class='fscontent'>John Hughes</span></div>",
        fullgenres: "<div class='fullgenres'><span class='fgprefix'>Géneros:</span><span class='fgcontent'> Infantil, Comedia, Aventuras, Fiestas navideñas</span></div>",
        fulltitletype: "<div class='fulltitletype'><span class='fttprefix'>Este título es:</span> <span class='fttcontent'> Divertido, Familiar, Emotivo</span></div>",
        fullage: "<div class='fullage'><span class='faprefix'>Clasificación por edad: </span> <span class='facontent'><span class='age'>7+</span> humor slapstick, situaciones de riesgo cómicas</span> <span class='facontent2'>Apta para todo público</span></div>"
    },

    app: {
        year: "2024",
        duration: "<p id='series-duration'>6 episodios</p>",
        description: "<span id='curiosity-synopsis'>Años después del homicidio de una chica en un tranquilo pueblo inglés, una estudiante se propone resolver el caso y encontrar al verdadero asesino.</p>",
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
        year: "2018",
        duration: "2 temporadas",
        description: "CILIO está en España. Un mensaje lo obliga a volver a Argentina a un juego macabro. Un error lo cambia todo… y lo trae de vuelta, de forma inquietante.",
        cast: "<strong>Elenco:</strong> Franco Crivera, Julián Iurchuk, Facundo Duré, <button id='scrollAbout'>más</button>",
        title: "<span class='about'>Acerca de</span> <strong class='titulo'>Reite666</strong>",
        genres: "<strong>Géneros:</strong> Suspenso, Misterio, Terror urbano, Thriller psicológico, De España",
        titleType: "<strong>Este título es:</strong> Misterioso, Perturbador, Inquietante",
        ageRating: "<span class='age'>16+</span> lenguaje inapropiado",
        background: `
<video autoplay loop playsinline style="width:100%; height:100%; object-fit:cover;" 
       oncontextmenu="return false;" 
       onmousedown="return false;" 
       onselectstart="return false;" 
       ondragstart="return false;">
    <source src="https://gitlab.com/solargentinotv/satvmoviesvideos/-/raw/main/trailer.mp4?ref_type=heads" type="video/mp4">
    Tu navegador no soporta el video.
</video>
`,
        link: "<a id='watch-button' href='https://movies.solargentinotv.com.ar/watch/title/0194753295' target='_self'>Reproducir</a>",
        createdBy: "<div class='modal-createdBy'><span class='fcbprefix'>Creado por:</span> <span class='fcbcontent'>Franco Crivera</span></div>",
        fullcast: "<div class='fullcast'><span class='fcprefix'>Elenco:</span> <span class='fccontent'>Franco Crivera, Julián Iurchuk, Facundo Duré, Roger Cascón Segura, Andrés Ilopo Bollero, Laura Guerra, Marta Guerra</span></div>",
        fullscript: "<div class='fullscript'><span class='fsprefix'>Guión:</span> <span class='fscontent'>Franco Crivera, Andrés Ilopo Bollero</span></div>",
        fullgenres: "<div class='fullgenres'><span class='fgprefix'>Géneros:</span><span class='fgcontent'> Suspenso, Misterio, Terror urbano, Thriller psicológico, Youtubers Aventura, Paranormal, De España</span></div>",
        fulltitletype: "<div class='fulltitletype'><span class='fttprefix'>Este título es:</span> <span class='fttcontent'>Misterioso, Perturbador, Inquietante</span></div>",
        fullage: "<div class='fullage'><span class='faprefix'>Clasificación por edad: </span> <span class='facontent'><span class='age'>16+</span> lenguaje inapropiado</span> <span class='facontent2'>Apta para mayores de 16 años</span></div>",
    }
};

// Datos de episodios por temporada
const episodios = {
    1: [
        {
            title: "Episodio 1",
            number: "<strong class='epnumber1'>1</strong>",
            description: "Pip elige un caso de homicidio para su proyecto escolar. Pero cuando empieza a investigar, descubre que para algunas personas era mejor dejarlo enterrado para siempre.",
            image: "https://www.mediafire.com/convkey/8ebd/67e8toxnggmojw09g.jpg",
            duration: "43 min",
            link: "app"
        },
        {
            title: "Episodio 2",
            number: "<strong class='epnumber2'>2</strong>",
            description: "Luego de entrevistar a las mejores amigas de Andie, Pip tiene una idea más clara de quién era la víctima, pero tras reorganizar fotos viejas empieza a comprender mejor todo.",
            image: "https://www.mediafire.com/convkey/88d0/o7ja6efkgc857oo9g.jpg",
            duration: "44 min",
            link: "app"
        },
        {
            title: "Episodio 3",
            number: "<strong class='epnumber3'>3</strong>",
            description: "Pip descubre por primera vez en su vida el lado oscuro cuando va a una fiesta clandestina. Y su siguiente pista la lleva a territorio aún más peligroso.",
            image: "https://www.mediafire.com/convkey/6ed1/6870czca0karqn29g.jpg",
            duration: "43 min",
            link: "app"
        },
        {
            title: "Episodio 4",
            number: "<strong class='epnumber4'>4</strong>",
            description: "Pip y Ravi siguen una nueva pista que los lleva lejos de Little Kilton. Allí, descubren una valiosa prueba... y una desagradable sorpresa.",
            image: "https://www.mediafire.com/convkey/0de9/czivzlrwjyr2rlj9g.jpg",
            duration: "44 min",
            link: "app"
        },
        {
            title: "Episodio 5",
            number: "<strong class='epnumber5'>5</strong>",
            description: "Una impactante confesión arroja luz en la investigación. Antes de que Pip pueda decidir qué hacer, recibe otro mensaje amenazador.",
            image: "https://occ-0-2442-1380.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeED_UJixLwFl5Ln39ljb3EY3B-_bE2aisB_eLtQVDlnZTf_vQ3hbjJseEWVQtQR3_xSoTLDsQaJqB20WoXVRq4ALdwp2VwxqDgvq9ssa8GfB9Ed925tZ5zk.jpg?r=2f5",
            duration: "50 min",
            link: "app"
        },
        {
            title: "Episodio 6",
            number: "<strong class='epnumber6'>6</strong>",
            description: "La policía hace un arresto, pero Pip no está segura de que el caso esté solucionado, así que va a visitar a la única persona que podría tener respuestas.",
            image: "https://www.mediafire.com/convkey/0869/05fmkuq6l9kj4159g.jpg",
            duration: "51 min",
            link: "app"
        }
    ],
    2: [
        {
            title: "Coming Soon...",
            description: "La temporada 2 aún no tiene episodios confirmados.",
            image: "https://www.mediafire.com/convkey/4a6d/478xmus1d6v68eh9g.jpg?size_id=6",
            duration: "?? min"
        }
    ]
};
// === Detectar clic en botones "Más Información" ===
document.querySelectorAll(".moreinfobutton").forEach(button => {
    button.addEventListener("click", function () {
        const movieKey = this.getAttribute("data-movie");
        openModal(movieKey);
    });
});

function openModal(movieKey) {
    const modal = document.getElementById("infoModal");
    const movie = peliculas[movieKey];
    if (!movie) return;

    // Insertar video + botón de mute (ya con CSS externo)
    document.getElementById("modal-background").innerHTML = `
        ${movie.background}
        <button class="modal-mute-btn" id="muteBtn">
            <img id="muteIcon" src="assets/media/images/modal-vol-on.svg" alt="Mute/Unmute">
        </button>
    `;

    // Cargar resto de datos
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

    // Mostrar modal y permitir scroll interno
    modal.style.display = "block";
    modal.style.overflowY = "auto"; // importante para scroll
    document.body.classList.add("modal-open");

    // Video y mute
    const video = modal.querySelector("#modal-background video");
    const muteBtn = document.getElementById("muteBtn");
    const muteIcon = document.getElementById("muteIcon");

    if (video) {
        video.currentTime = 0;
        video.muted = false;
        video.play().catch(() => console.warn("Autoplay bloqueado"));

        if (muteBtn) {
            muteBtn.addEventListener("click", () => {
                video.muted = !video.muted;
                muteIcon.src = video.muted
                    ? "assets/media/images/modal-vol-mute.svg"
                    : "assets/media/images/modal-vol-on.svg";
            });
        }
    }

    // Ajustar top dinámico según líneas
    ajustarModalTop();
}

// === Función global para video ===
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

// === Cerrar modal ===
document.querySelector(".close-button").addEventListener("click", () => {
    const modal = document.getElementById("infoModal");
    handleVideo(modal, "pause");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
});

// Cerrar modal al hacer clic fuera
document.addEventListener("click", (event) => {
    const modal = document.getElementById("infoModal");
    const modalContent = modal.querySelector(".modal-content");

    if (modal.style.display === "block" &&
        !modalContent.contains(event.target) &&
        !event.target.closest(".moreinfobutton")) {
        handleVideo(modal, "pause");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
});

// Cerrar modal con Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        const modal = document.getElementById("infoModal");
        handleVideo(modal, "pause");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
});

// Ajuste dinámico de top según líneas
function ajustarModalTop() {
    const cast = document.querySelector('.modal-cast');
    const genres = document.querySelector('.modal-genres');
    const titleType = document.querySelector('.modal-titleType');

    const getLineCount = (el) => {
        const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
        const height = el.getBoundingClientRect().height;
        return Math.round(height / lineHeight);
    };

    const castLines = getLineCount(cast);
    const genresLines = getLineCount(genres);

    let genresTop = 35.5;
    let titleTypeTop = 38.4;
    const lineOffset = 1.2; // em

    if (castLines < 2) {
        genresTop -= lineOffset;
        titleTypeTop -= lineOffset;
    }
    if (genresLines < 2) {
        titleTypeTop -= lineOffset;
    }

    genres.style.top = `${genresTop}em`;
    titleType.style.top = `${titleTypeTop}em`;
}

// Ajuste al cargar y redimensionar
window.addEventListener('load', ajustarModalTop);
window.addEventListener('resize', ajustarModalTop);