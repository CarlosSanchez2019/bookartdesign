const express = require('express');

const router = express.Router();

const Swal = require('sweetalert2')

const nodemailer = require('nodemailer');

var bodyParser = require('body-parser');


var urlencodedParser = bodyParser.urlencoded({ extended: false });

//Rutas
router.get('/', (req, res) => {
    res.render('index', {
      exito: ''
    });
});

router.get('/sobrenosotros', (req, res) => {
    res.render('sobreNosotros',{
      title: "Staff"
    });
});

router.get('/museos', (req, res) => {
  res.render('museos',{
    title: "Museos del Uruguay"
  });
});

router.get('/editorial', (req, res) => {
  res.render('editorial',{
    title: "Nosotros"
  });
});

router.get('/inscripciones', (req, res)  => {
    res.render('inscripciones', {
      title: "Inscipciones Edición 2020 - Guía Nacional de las Artes Visuales del Uruguay"
    })
})

router.get('/nuestrosartistas', (req, res) =>{
  res.render('artistas', {
    title: 'Artistas de la Guía Nacional de las Artes Visuales'
  })
})

router.get('/contacto', (req, res) =>{
  res.render('contacto', {
    titleArt: 'Contacto - Book Art & Design',
    title: 'Contactanos'
  })
})
router.get('/lugaresdeinteres', (req, res) =>{
  res.render('interes', {
    title: 'Lugares de Interes - Book Art & Design'
  })
})
router.get('/metropolitana', (req, res) =>{
  res.render('interesDpto', {
    title: 'Región Metropolitana',
    titleUrl: "Metropolitana Lugar de Interes - Book Art & Design",
    url: "url(/img/montevideo.jpg)",
    tamanoUrl:"-100px",
    interes:[
      {
        ciudad: "/img/canelones.jpg",
        depto: "Canelones",
        enlace: "/canelones" 
      },
      {
        ciudad: "/img/montevideo.jpg",
        depto: "Montevideo",
        enlace: "/montevideo"
      },
      {
        ciudad: "/img/santa.jpeg",
        depto: "Santa Lucia",
        enlace: "/santalucia"
      },
      {
        ciudad: "/img/piedras.jpeg",
        depto: "Las Piedras",
        enlace: "/laspiedras"
      }
    ]
  })
})
router.get('/centrosur', (req, res) =>{
  res.render('interesDpto', {
    title: 'Región Centro Sur',
    titleUrl: "Centro Sur -  Lugar de Interes - Book Art & Design",
    url: "url(/img/durazno.jpg)",
    tamanoUrl:"-200px",
    interes:[
      {
        ciudad: "/img/colonia.jpg",
        depto: "Colonia del Sacramento",
        enlace: "/colonia" 
      },
      {
        ciudad: "/img/durazno.jpg",
        depto: "Durazno",
        enlace: "/durazno"
      },
      {
        ciudad: "/img/grutas.jpg",
        depto: "Grutas del Palacio",
        enlace: "/grutasdelpalacio"
      },
      {
        ciudad: "/img/lapaz.jpg",
        depto: "La Paz",
        enlace: "/lapaz"
      },
      {
        ciudad: "/img/sanjose.jpg",
        depto: "San José de Mayo",
        enlace: "/sanjose"
      },
      {
        ciudad: "/img/trinidad.jpg",
        depto: "Trinidad",
        enlace: "/trinidad"
      },
      {
        ciudad: "/img/florida.jpg",
        depto: "Florida",
        enlace: "/florida"
      }
    ]
  })
})

router.get('/este', (req, res) =>{
  res.render('interesDpto', {
    title: 'Región Este',
    titleUrl: "Región Este -  Lugar de Interes - Book Art & Design",
    url: "url(/img/punta.jpg)",
    tamanoUrl:"-500px",
    interes:[
      {
        ciudad: "/img/cabo-polonio.jpg",
        depto: "Cabo Polonio",
        enlace: "/cabopolonio" 
      },
      {
        ciudad: "/img/joseignacio.jpg",
        depto: "José Ignacio",
        enlace: "/joseignacio"
      },
      {
        ciudad: "/img/puente-laguna-garzon.jpg",
        depto: "Laguna Garzón",
        enlace: "/lagunagarzon"
      },
      {
        ciudad: "/img/La-Paloma.jpg",
        depto: "La Paloma",
        enlace: "/lapaloma"
      },
      {
        ciudad: "/img/la-pedrera.jpg",
        depto: "La Pedrera",
        enlace: "/lapedrera"
      },
      {
        ciudad: "/img/minas.jpg",
        depto: "Minas",
        enlace: "/minas"
      },
      {
        ciudad: "/img/melo.png",
        depto: "Melo",
        enlace: "/melo"
      },
      {
        ciudad: "/img/maldonado.jpg",
        depto: "Maldonado",
        enlace: "/maldonado"
      },
      {
        ciudad: "/img/punta.jpg",
        depto: "Punta del Este",
        enlace: "/puntadeleste"
      },
      {
        ciudad: "/img/La-Paloma.jpg",
        depto: "Rocha",
        enlace: "/rocha"
      },
      {
        ciudad: "/img/fortaleza-de-santa-teresa.jpg",
        depto: "Santa Teresa",
        enlace: "/santateresa"
      },
      {
        ciudad: "/img/treinta-y-tres.jpg",
        depto: "Treinta y Tres",
        enlace: "/treintaytres"
      }
    ]
  })
})
router.get('/norte', (req, res) =>{
  res.render('interesDpto', {
    title: 'Región Norte',
    titleUrl: "Región Norte -  Lugar de Interes - Book Art & Design",
    url: "url(/img/norte.jpg)",
    tamanoUrl:"-400px",
    interes:[
      {
        ciudad: "/img/norte.jpg",
        depto: "Artigas",
        enlace: "/artigas" 
      },
      {
        ciudad: "/img/rivera.jpeg",
        depto: "Rivera",
        enlace: "/rivera" 
      },
      {
        ciudad: "/img/tacuarembo.jpg",
        depto: "Tacuarembó",
        enlace: "/tacuarembo" 
      },
      {
        ciudad: "/img/Valle_del_Lunarejo_35.jpeg",
        depto: "Valle del Lunarenjo",
        enlace: "/valledellunarenjo" 
      },
      {
        ciudad: "/img/minas-de-corrales.jpg",
        depto: "Minas de Corrales",
        enlace: "/minasdecorrales" 
      },
      {
        ciudad: "/img/pasodelostoros.jpeg",
        depto: "Paso de los Toros",
        enlace: "/pasodelostoros" 
      },
      {
        ciudad: "/img/Puente-Colgante-de-Valle-Eden.jpg",
        depto: "Valle Edén",
        enlace: "/valleeden" 
      }
    ]
  })
})

router.get('/rio-uruguay', (req, res) =>{
  res.render('interesDpto', {
    title: 'Región Río Uruguay',
    titleUrl: "Región Río Uruguay -  Lugar de Interes - Book Art & Design",
    url: "url(/img/rio.jpg)",
    tamanoUrl:"-400px",
    interes:[
      {
        ciudad: "/img/paysandu.jpg",
        depto: "Paysandú",
        enlace: "/paysandu" 
      },
      {
        ciudad: "/img/Plaza_Independencia._Mercedes.jpeg",
        depto: "Mercedes",
        enlace: "/mercedes" 
      },
      {
        ciudad: "/img/800px-Quiosco_Glorieta.jpeg",
        depto: "Fray Bentos",
        enlace: "/fraybentos" 
      },
      {
        ciudad: "/img/meseta.jpg",
        depto: "Meseta de Artigas",
        enlace: "/mesetaartigas" 
      },
      {
        ciudad: "/img/montesqueguay.jpg",
        depto: "Montes del Queguay",
        enlace: "/montesqueguay" 
      },
      {
        ciudad: "/img/calle-uruguay-nocturna.jpg",
        depto: "Salto",
        enlace: "/salto" 
      },
      {
        ciudad: "/img/headerdolores.jpg",
        depto: "Dolores",
        enlace: "/dolores" 
      }
    ]
  })
})

router.get('/dolores', (req, res) =>{
  res.render('departamento', {
    title: 'Dolores',
    titleUrl: "Dolores - Lugar de Interes - Book Art & Design",
    url: "/img/headerdolores.jpg",
    tamanoUrl:"-10px",
    parrafoUno:'Dolores es una ciudad uruguaya del departamento de Soriano, y sede del municipio homónimo. Ubicada a orillas del río San Salvador es un importante centro de acopio de granos, debido a la fertilidad de los campos circundantes',
    parrafoDos:'Según el censo de 2011 la ciudad contaba con una población de 17 174 habitantes.',
    parrafoTres:'Conocida como “El granero del país”, Dolores es una ciudad agroindustrial muy importante, ubicado en una zona pujante con atractivos muy notorios como el Museo de la Agricultura, la Torre del Reloj, la Iglesia de Nuestra Sra. de los Dolores, el Cementerio Alemán y la rambla “El Camoatí”. ',
    parrafoCuatro:'Uno de los mejores momentos para visitarla es durante la Fiesta Nacional de la Primavera, que tiene lugar en octubre con desfiles diurnos y nocturnos, así como una amplia gama de espectáculos.',
    parrafoCinco:'Fuente: Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/Iglesia_Nuestra_Señora_de_los_Dolores.jpg",
        citatitulo:"Iglesia Nuestra Señora de los Dolores ",
        cita:"Es un símbolo de la ciudad. Su construcción llevó 91 años y nunca se llevó a concretar por completo el proyecto original."
      },
      {
        foto: "/img/PeninsulaTimoteo.jpg",
        citatitulo:"Península Timoteo Ramospé.",
        cita:"Es un parque arbolado ideal para hacer paseos en bicicleta o caminatas. Cuenta además con pequeñas playas habilitadas para baños."
      }
    ]
  })
})

router.get('/salto', (req, res) =>{
  res.render('departamento', {
    title: 'Salto',
    titleUrl: "Salto - Lugar de Interes - Book Art & Design",
    url: "/img/calle-uruguay-nocturna.jpg",
    tamanoUrl:"-400px",
    parrafoUno:'La ciudad de Salto se ubica en el litoral del Río Uruguay al norte, en la frontera con la República Argentina. Su origen se remonta a 1756, pero su crecimiento se produjo a medidos del siglo XIX, cuando ya era reconocida como una de las ciudades más importante del país.',
    parrafoDos:'En Salto pueden consumirse las naranjas más jugosas de Latinoamérica y los arándanos más frescos de la región. Gran productor de lana, principal centro generador de energía hidroelectrica del país y cuna de valores artísticos notables como los escritores Horacio Quiroga y Marosa di Giorgio o artístas plásticos como Petrona Viera, a Salto le sobran atractivos turísticos',
    parrafoTres:"Es la ciudad del Interior con mayor número de Monumentos Históricos Nacionales como el Área Portuaria; el Teatro Larrañaga, el Museo de Artes Plásticas, o el tradicional Mercado 18 de julio.",
    parrafoCuatro:'Las aguas termales, son sin duda, su principal atractivo a nivel internacional. Tres grandes complejos termales de primer nivel y dos parques acuáticos de vanguardia, despiertan el interés de visitantes de todo el mundo.',
    parrafoCinco:'Fuente: Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/RepresaSaltogrande.jpeg",
        citatitulo:"Represa de Salto Grande.",
        cita:"Es la más grande del país y la primera binacional de Latinoamérica. Todos los domingos se realizan visitas guiadas gratuitas entre las 7 a 16 horas. Posee catorce turbinas y genera una energía anual de 11.135.779 mw/h que distribuida en partes iguales representa el 6% del consumo energético de Argentina y el 60% de Uruguay."
      },
      {
        foto: "/img/zoosalto.jpg",
        citatitulo:"Zoológico de Salto.",
        cita:"Alberga 150 especies y 450 ejemplares, que habitan en predios de extensa vegetación. Un paseo que grandes y chicos no pueden dejar de hacer."
      },
      {
        foto: "/img/Salto_chico2.jpeg",
        citatitulo:"Salto Chico.",
        cita:"Al norte de la ciudad, a 3 kilómetros, se encuentra Salto Chico, una zona de pequeñas cascadas, playas, pesca, observación de la naturaleza y esparcimiento. Al frente se observan los rápidos del Río Uruguay y el sitio por donde el prócer nacional Artigas cruzó en 1811, iniciando el Éxodo del pueblo oriental"
      },
      {
        foto: "/img/yemanja.jpg",
        citatitulo:"Playa Las Cavas.",
        cita:"Ubicada en la Costanera Norte, en su acceso se ubica la estatua de Yemanja, virgen de la religión afrobrasileña que rinde culto al agua."
      },
      {
        foto: "/img/lagosalto.jpg",
        citatitulo:"Lago de Salto Grande.",
        cita:"Ubicado a 14 kilómetros de la ciudad de Salto, el lago está formado por el embalse de la Represa Salto Grande. Cuenta con circuitos naturales de observación, playas de arena blanca y parques forestados. Con una superficie total de 75 mil hectáreas resulta ideal para la práctica de deportes náuticos."
      }
    ]
  })
})

router.get('/montesqueguay', (req, res) =>{
  res.render('departamento', {
    title: 'Montes del Queguay',
    titleUrl: "Montes del Queguay - Lugar de Interes - Book Art & Design",
    url: "img/montesqueguay.jpg",
    tamanoUrl:"-340px",
    parrafoUno:'El Queguay o “río donde confluyen los ensueños” se encuentra rodeado de uno de los montes nativos más exuberantes del Uruguay. El área protegida Montes del Queguay se puede disfrutar en kayaks y canoas o a pie, recorriendo varios de sus senderos guiados. Las calmas lagunas y los emocionantes rápidos ofrecen un entorno ideal para el deporte aventura y el disfrute de la naturaleza.',
    parrafoDos:'Ubicada en la confluencia de los ríos Queguay Grande y Queguay Chico, el área ingresó al Sistema Nacional de Áreas Protegidas en diciembre de 2014 por su diversidad de ambientes. Posee una extensión de aproximadamente 20.000 hectáreas en donde están representados tierras bajas (bañados, pajonales, lagunas, cursos fluviales), una de las mayores masas de montes ribereños naturales del país, tierras altas (sierras basálticas y bosques de cerritos asociados), así como,  arbustales o chircales.',
    parrafoTres:'La zona también fue escenario de múltiples hechos que marcaron la historia de nuestro país, por lo que a su valor natural se le suma un alto valor cultural, histórico y arqueológico. En los bosques de Paysandú vivieron los últimos charrúas y aún se puede encontrar el rancho, a orillas del Queguay, donde permaneció sus últimos años Melchora Cuenca, la esposa paraguaya de José Artigas.',
    parrafoCuatro:'El área está comprendida dentro de la cuenca del río Queguay, en el departamento de Paysandú, a 40 Km de la ciudad de Guichón y a 70 Km de la ciudad de Paysandú, localidades en las que encontrarás variedad de servicios de alojamiento y alimentación. El acceso al área se realiza por las Rutas Nacionales Nº 90, Nº 4 y Nº 26, para luego tomar caminos vecinales.',
    parrafoCinco:'Fuente: Ministerio de Turismo',
    ciudadArreglo:[]
  })
})

router.get('/mesetaartigas', (req, res) =>{
  res.render('departamento', {
    title: 'Meseta de Artigas',
    titleUrl: "Meseta de Artigas - Lugar de Interes - Book Art & Design",
    url: "/img/meseta.jpg",
    tamanoUrl:"-450px",
    parrafoUno:'A tan solo 37 Kilómetros del Complejo termal Guaviyú, a la altura del km 453 de ruta nacional número 3, se encuentra la histórica y emblemática Meseta de Artigas, uno de los principales destinos turísticos de Paysandú. ',
    parrafoDos:'El monumento -obra del escultor Juan Azzarini- está asentado en una zona de barrancas en un entorno natural de singular belleza, a orillas del río Uruguay.',
    parrafoTres:'En 2015, se inauguró aquí el Centro de Interpretación, dentro de una construcción conocida como "La casona del Patriarca" donde, mediante el uso de realidad aumentada, video 360 y ultrasonido, los visitantes pueden conocer acerca del artiguismo y la historia del territorio.',
    parrafoCuatro:'Todos los años, a mediados de setiembre, llegan miles de jinetes de todas partes del país para rendir tributo al prócer, en el marco de una fiesta tradicional conocida como "Encuentro con el Patriarca"',
    parrafoCinco:'Fuente: Ministerio de Turismo',
    ciudadArreglo:[]
  })
})

router.get('/fraybentos', (req, res) =>{
  res.render('departamento', {
    title: 'Fray Bentos',
    titleUrl: "Fray Bentos - Lugar de Interes - Book Art & Design",
    url: "/img/800px-Quiosco_Glorieta.jpeg",
    tamanoUrl:"-200px",
    parrafoUno:'Situada en las márgenes del río Uruguay, en el límite con Argentina, la capital del departamento de Río Negro, facilita el tránsito entre ambos países, a través del puente internacional Libertador General San Martín. Es una ciudad de 25.000 habitantes surgida a mediados del siglo XIX bajo el influjo de la industria de la carne. Allí se instaló el primer establecimiento industrial del país, el frigorífico Liebig´s de fama internacional, que actualmente conforma el Paisaje Cultural Industrial Fray Bentos, recientemente declarado Patrimonio Histórico Cultural de la Humanidad por la Unesco.',
    parrafoDos:'Como lugares de interés se destacan: la rambla, el Museo de la Revolución Industrial, el Barrio Anglo, el Museo Luis Solari, la Plaza Hargain, el Teatro Young, el Parque Roosevelt y el Teatro de Verano. Otros atractivos son la ruta panorámica desde Barrio Anglo hasta el balneario Las Cañas, el mirador del Puente San Martín; y la planta industrial de UPM, que puede visitarse mediante previa coordinación.',
    parrafoTres:"El departamento al que pertenece está enclavado entre los dos ríos más importantes del país, el majestuoso Río Uruguay y el caudaloso Río Negro. Ambos tienen un caudal combinado de más de cinco millones de litros por segundo. El territorio está regado por numerosos cursos de agua y tiene costas sobre dos importantes embalses hidroeléctricos: Rincón de Palmar y Rincón de Baygorria. Su clima es templado y agradable lo que favorece el disfrute de la naturaleza durante todas las épocas del año. Río Negro cuenta con hermosas playas fluviales como Las Cañas, Puerto Viejo y Potrero de Burro sobre el Río Uruguay y Los Arrayanes sobre el Río Negro.",
    parrafoCuatro:'El departamento también se caracteriza por la presencia de múltiples áreas de valor y pródiga biodiversidad. La preservación y valorización de dichas áreas ha sido beneficiosa para las comunidades locales que habitan en la zona. Así, por ejemplo, Esteros de Farrapos e Islas de Río Uruguay, localizada en la costa fluvial occidental del departamento, fue indentificada y promovida como Área Protegida por el Sistema Nacional de Áreas Protegidas, y es motivo de orgullo para los  rio negrenses',
    parrafoCinco:'Fuente: Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/costarionegro.jpg",
        citatitulo:"Rambla costanera.",
        cita:"Fue realizada en  1940 por los arquitectos Carlevaro y Avella Trías, utilizando espacios ganados al río Uruguay que fueron rellenados con material de las barrancas. En esta zona se puede pescar y practicar deportes náuticos y por las tardes es el punto de encuentro de los habitantes de la ciudad."
      },
      {
        foto: "/img/Teatro_Miguel_Young.jpg",
        citatitulo:"Teatro Miguel Young.",
        cita:"Ubicado en 25 de Mayo y Zorrilla de San Martin, a una cuadra de la Plaza Constitución, este antiguo teatro con más de 100 años de antigüedad, cuenta con 400 butacas. El edificio fue declarado Monumento Histórico Nacional en 2001 y constituye  una joya de estilo ecléctico. Su acústica, sus palcos, foyer, cazuela, tertulia y paraíso reciben durante todo el año grupos de diversas ramas artísticas."
      },
      {
        foto: "/img/Catedral_de_Melo_(1981)1.jpeg",
        citatitulo:"Iglesia Nuestra Señora del Pilar.",
        cita:" Ubicada frente a la plaza constitución, por calle 25 de mayo entre 18 de Julio y Rincón, constituye  la primera iglesia de Fray Bentos. Fue construida por la compañía del saladero Liebig en 1862. Entre sus piezas, además de  la imagen de María Santísima original, que se conserva hasta el presente, se destaca un reloj traído de Francia durante la época dorada de Fray Bentos."
      },
      {
        foto: "/img/Plaza_Hargain.jpg",
        citatitulo:"Plaza Hargain.",
        cita:"Ubicada en la zona portuaria de Fray Bentos, lleva el nombre del primer poblador de la ciudad, que se instaló en la zona en 1857. La primera plaza de la ciudad mantiene la característica de un paseo del siglo XIX. Sus casas recicladas de hospedaje ofrecen un sitio privilegiado que invita al descanso"
      }
    ]
  })
})

router.get('/mercedes', (req, res) =>{
  res.render('departamento', {
    title: 'Mercedes',
    titleUrl: "Mercedes - Lugar de Interes - Book Art & Design",
    url: "/img/Plaza_Independencia._Mercedes.jpeg",
    tamanoUrl:"-300px",
    parrafoUno:'La ciudad de Mercedes es la capital del departamento de Soriano, Uruguay. Cuenta con una población de 41 975 habitantes.',
    parrafoDos:'La ciudad se encuentra localizada al norte del departamento de Soriano, sobre la margen izquierda del río Negro, y en el cruce de las rutas nacionales 2, 21 y 14.',
    parrafoTres:"Dada su privilegiada ubicación a orillas del Río Negro, Mercedes brinda un espacio ideal para la pesca, los deportes náuticos y para el descanso en medio de entornos naturales.",
    parrafoCuatro:'Soriano posee un amplio calendario de eventos que se desarrollan durante todo el año. El Festival Internacional de Jazz en la Calle, el Gran Premio de F1 Power Boat, el Carnaval y el festival “Grito de Asencio”, son solo algunos ejemplos de gran convocatoria.',
    parrafoCinco:'Fuente: Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/Atardecer_invernal_en_el_parque_guernica.jpg",
        citatitulo:"Rambla costanera.",
        cita:"Creada en 1912, es el escenario principal de la vida social de la capital, donde mercedarios de todas las edades se reúnen para practicar deporte o tomar mate mirando el río. A lo largo de sus 2 kilómetros de extensión, el paseo está decorado con esculturas, y una gran diversidad de árboles autóctonos."
      },
      {
        foto: "/img/Frente_castillo_Mauá.jpeg",
        citatitulo:"Castillo Mauá.",
        cita:"Este histórico palacio fue construido por el Barón de Mauá entre 1857 y 1862, por el célebre  bancario brasileño que tuvo varios emprendimientos en Uruguay. En su planta baja se encuentra el Museo Paleontológico Alejandro Berro, mientras que en la planta alta, alberga una galería de arte muy atractiva."
      }
    ]
  })
})

router.get('/paysandu', (req, res) =>{
  res.render('departamento', {
    title: 'Paysandú',
    titleUrl: "Paysandú - Lugar de Interes - Book Art & Design",
    url: "/img/paysandu.jpg",
    tamanoUrl:"-100px",
    parrafoUno:'Paysandú es una de las ciudades más importantes del Uruguay. Es la capital del departamento homónimo que tiene una población de 76.429 habitantes.',
    parrafoDos:'Ubicada sobre el Río Uruguay, dista 368 km de la capital del país, y es fronteriza con las ciudades argentinas de Colón y Concepción del Uruguay, con las cuales se conecta a través del puente internacional General Artigas. La capital sanducera ofrece al visitante sus historias y leyendas, así como una serie de eventos destacados en distintas épocas del año como la célebre Fiesta de la Cerveza.  Museos, edificios patrimoniales, y una bella rambla con vista al Río Uruguay, forman parte de sus atractivos.',
    parrafoTres:"La principal actividad turística está centrada en las termas, aunque en los últimos años también ha surgido una gran oferta de ecoturismo y turismo aventura. La ciudad cuenta con un puerto muy interesante, un anfiteatro sobre una rambla muy bonita, playas limpias y parques cuidados. Uno de los símbolos de la ciudad es el popular postre chajá, creado en 1927 por Orlando Castellano en la confitería Las Familias.",
    parrafoCuatro:'Algunas de las actividades imperdibles de la ciudad son conocer la heroica gesta del General Leandro Gómez a través de un tour caminando y el Monumento a La Perpetuidad, una verdadera joya de arte funerario.',
    parrafoCinco:'Fuente: Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/TeatroFlorencioSanchez.jpg",
        citatitulo:"Teatro Florencio Sánchez.",
        cita:"Se comenzó a construir en 1860 pero, tras el ataque a la ciudad durante el sitio, recién abrió sus puertas en 1876. Aquí han actuado artistas de renombre como Luis Sandrini, Alberto Candeau y Carlos Gardel. En 1975, fue Declarado Monumento Histórico Nacional."
      },
      {
        foto: "/img/riopuesta.jpg",
        citatitulo:"Costa del Río Uruguay.",
        cita:"El río Uruguay, constituye uno de los atractivos naturales más preciados de la ciudad. Ideal para disfrutar hermosas playas e inolvidables puestas de sol, además de actividades deportivas, culturales, turismo náutico y pesca."
      },
      {
        foto: "/img/Anfiteatro_del_Río_Uruguay.jpg",
        citatitulo:"Anfiteatro del Río Uruguay.",
        cita:"Por su escenario han transitado estrellas de nivel internacional  como: León Gieco, Los Auténticos Decadentes, Mercedes Sosa, Soledad, Chayane, Sopra Contrariar, Ismael Serrano y Serrat, entre muchas otras que generalmente colman la agenda de verano. Puede albergar a más de 20 mil personas."
      },
      {
        foto: "/img/Perpetuidad_MINTUR.jpg",
        citatitulo:"Monumento a la perpetuidad.",
        cita:"Denominado popularmente por los sanduceros como “cementerio viejo” es el único museo funerario del Uruguay. En cada una de sus esculturas la sociedad de otras épocas, sus valores y sus credos religiosos."
      },
      {
        foto: "/img/mercadopaseo.jpg",
        citatitulo:"Paseo del Mercado",
        cita:"Ubicado en Montevideo y Sarandí, el paseo del Mercado es otro de los atractivos de interés para turistas y visitantes, quienes podrán encontrar aquí, artesanías en cuero y madera y otros productos de muy buena calidad, todos elaborados por emprendedores locales."
      },
      {
        foto: "/img/Regata_Meseta.jpg",
        citatitulo:"Yatch Club Paysandú y la Regata Meseta Artigas.",
        cita:"Su sede con forma de barco está ubicada en la margen del Río Uruguay en la zona norte de la ciudad. Cuenta con  embarcadero de 10.000 m2 de espejo de agua con calado de 2 metros por debajo del nivel “0”  del río Uruguay. La competencia más importante y tradicional que organiza el Yatch Club, es la Regata Meseta de Artigas Paysandú, trascendente prueba que se disputa anualmente durante la Semana de Turismo con la participación de embarcaciones de Uruguay, Argentina y Brasil."
      }
    ]
  })
})

router.get('/valleeden', (req, res) =>{
  res.render('departamento', {
    title: 'Valle Edén',
    titleUrl: "Valle Edén - Lugar de Interes - Book Art & Design",
    url: "/img/Puente-Colgante-de-Valle-Eden.jpg",
    tamanoUrl:"-100px",
    parrafoUno:'Ubicado a  25 kilómetros de la ciudad de Tacuarembó, es uno de los paisajes más atractivos del país por su vegetación espesa, sus sierras  y  su antigua presencia ferroviaria.',
    parrafoDos:'Desde la ciudad de Tacuarembó se llega por la Ruta 26 a la altura del kilómetro 208.   La zona de Valle Edén  tiene singulares puntos de atracción turística como el Cerro Cementerio (ubicado dos kilómetros antes del pueblo), la antigua pulpería donde frecuentaba el "Mago" Carlos Gardel que hoy funciona como museo temático  y el puente colgante peatonal sobre el arroyo Jabonería.',
    parrafoTres:"Otro atractivo de este valle, es la Estación de trenes. El sitio, bien conservado, todavía luce el depósito de agua que antiguamente se utilizaba para suministrar a las locomotoras.",
    parrafoCuatro:'Set de filmación de varias películas, entre ellas El último tren (Corazón de fuego) atrajo a Tacuarembó actores de la talla de Héctor Alterio, Federico Luppi, Pepe Soriano, Gastón Pauls, Jorge Bolani, entre otros.',
    parrafoCinco:'Fuente: Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/posada.jpg",
        citatitulo:"Posada Valle Edén - Antigua pulpería de López.",
        cita:"Construida en piedra asentada en barro en el siglo XVII, es un pintoresco vestigio de las antiguas pulperías donde se vendía todo tipo de artículos. Hoy funciona como hospedaje para visitantes."

      },
      {
        foto: "/img/Puente-Colgante-de-Valle-Eden.jpg",
        citatitulo:"Cueva del Chivo.",
        cita:"A menos de un kilómetro de la Posada y el Museo, comienza el ascenso hacia la Cueva del Chivo, en cuya cima además de una maravillosa vista, hay una cascada y detrás de ella una pequeña cueva. Es bastante fácil subir, ya que no es muy alta y no ofrece mayores dificultades."

      },
      {
        foto: "/img/museogardel.jpg",
        citatitulo:"Museo Carlos Gardel.",
        cita:"En Tacuarembó no hay dudas: Gardel es uruguayo. Dicen que al museo del artista llegan los más escépticos sobre la nacionalidad uruguaya del mago, pero salen convencidos de lo contrario. El museo alberga documentación probatoria de la nacionalidad del artista, una gran colección de fotos, donde se destacan la de sus películas y sus familares, y diversos objetos personales."

      },
      {
        foto: "/img/pozo-hondo.jpg",
        citatitulo:"Pozo Hondo.",
        cita:"Ubicado entre Valle Edén y Tambores, es uno de los lugares más escondidos y sorprendentes de Uruguay. Se trata de un salto de agua de 15 metros, provocado por la lluvia y por las vertientes con las que se forma la laguna.  Dentro de la grieta, las aguas son profundas y gélidas, pero la corriente es mansa y muy disfrutable."

      },
      {
        foto: "/img/posada-valle-eden.jpg",
        citatitulo:"Las marmitas.",
        cita:"La formación rocosa nacida por erosión del agua se encuentra a unos 6 kilómetros al este de la estación de Trenes de Valle Edén. Las piedras parecen talladas, cambian el curso del agua y generan curiosas formas cóncavas"

      }
    ]
  })
})


router.get('/pasodelostoros', (req, res) =>{
  res.render('departamento', {
    title: 'Paso de Los Toros',
    titleUrl: "Paso de Los Toros - Lugar de Interes - Book Art & Design",
    url: "/img/pasodelostoros.jpeg",
    tamanoUrl:"-100px",
    parrafoUno:'Paso de los Toros es una ciudad uruguaya perteneciente al departamento de Tacuarembó. Actualmente es la segunda ciudad con mayor población en el departamento, luego de la ciudad de Tacuarembó, y es sede del municipio homónimo.',
    parrafoDos:'En la ribera del Río Negro, Paso de los Toros conserva el encanto natural del viejo Río Hum de los Charrúas. La represa de Rincón del Bonete, con su enorme lago, ofrece un destino ideal para el descanso.',
    parrafoTres:"La represa de Rincón del Bonete, con su enorme lago, ofrece un destino ideal para el descanso.Playas de agua dulce, cabañas y el camping municipal forman parte de los atractivos del lugar. La ciudad que vio nacer al célebre escritor, Mario Benedetti, es una visita ineludible para los amantes de la cultura, la náutica y la pesca.",
    parrafoCuatro:'Playas de agua dulce, cabañas y el camping municipal forman parte de los atractivos del lugar. La ciudad que vio nacer al célebre escritor, Mario Benedetti, es una visita ineludible para los amantes de la cultura, la náutica y la pesca.',
    parrafoCinco:'Fuente: Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/rincondelbonete.jpeg",
        citatitulo:"Represa del Rincón del Bonete.",
        cita:"Es uno de los principales atractivos de la ciudad y la primera represa hidroeléctrica construida en el país. Su lago artificial tiene una extensión de 120.000 hectáreas, con extraordinarios pesqueros y playas."

      },
      {
        foto: "/img/IglesiaSantaIsabel.jpg",
        citatitulo:"Parroquia Santa Isabel.",
        cita:"El edificio de estilo neogótico data de 1898 y cuenta con vitrales y una gran torre central que llama la atención de los visitantes."

      }
    ]
  })
})

router.get('/minasdecorrales', (req, res) =>{
  res.render('departamento', {
    title: 'Minas de Corrales',
    titleUrl: "Minas de Corrales - Lugar de Interes - Book Art & Design",
    url: "/img/minas-de-corrales.jpg",
    tamanoUrl:"-20px",
    parrafoUno:'A 96 km de la ciudad de Rivera y 60 km de la ciudad de Tacuarembó, Minas de Corrales seduce a turistas con historia, naturaleza y rasgos de identidad propios.',
    parrafoDos:'Las tradiciones de un pueblo del interior rural, y las particularidades de la explotación minera le otorgan una ideantidad única. Criollos a caballo y vehículos especiales de la Compañía minera, ofrecen un pintoresco contraste  de tradición y modernidad.',
    parrafoTres:"Sobre la principal Avenida Dr. Davison, a lo largo de toda la extensión del cantero central, es posible apreciar diversos vestigios de la actividad minera durante el siglo XIX en la zona.",
    parrafoCuatro:'La belleza de los cerros Miriñaque y Vigilante, también llaman la atención del visitante. En su cima es posible apreciar variedades de palmeras enanas, únicas en la región.',
    parrafoCinco:'Las galerías de antiguas extracciones mineras, se encuentran en las márgenes del arroyo Corrales. La fresca humedad, la oscuridad del ambiente, le permitirán imaginar la durísima vida del minero del pasado. Minas del Corrales, también cuenta con el Museo del Oro, un espacio dedicado a la exhibición del proceso de extracción, y a la historia de su fundador Don Tito Pereira. Fuente: Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/represa-de-cuñapiru.jpg",
        citatitulo:"Ruinas Represa Cuñapirú.",
        cita:"Emprendimiento inusual para este país, que se comenzó a edificar en 1866 por el ingeniero asturiano Clemente Barrial que vislumbró una gran industria minera y creyó fervientemente en la quimera del oro."

      },
      {
        foto: "/img/MuseodelOro.png",
        citatitulo:"Museo del Oro.",
        cita:"Espacio dedicado a la muestra del proceso de extracción, a su valor y a la historia de su fundador Don Tito Pereira."

      },
      {
        foto: "/img/cerromirinaque.jpg",
        citatitulo:"Cerros Miriñaque y Vigilante .",
        cita:"En su cima es posible apreciar variedades de palmeras enanas únicas. Simultáneamente los cerros Cuñapirú, Del Medio y Gerónimo son icónicos del paisaje del norte uruguayo."

      }
    ]
  })
})

router.get('/valledellunarenjo', (req, res) =>{
  res.render('departamento', {
    title: 'Valle del Lunarejo',
    titleUrl: "Valle del Lunarejo - Lugar de Interes - Book Art & Design",
    url: "/img/Valle_del_Lunarejo_35.jpeg",
    tamanoUrl:"-200px",
    parrafoUno:'El Paisaje Protegido Valle del Lunarejo se encuentra en el extremo noroeste del departamento de Rivera, muy próximo a Artigas y Salto y de la frontera con Brasil. Se ubica en la parte norte del sistema de la Cuchilla de Haedo, que cumple una función de corredor biológico para el ingreso de especies subtropicales de flora y fauna del sur de Brasil hacia el territorio uruguayo.',
    parrafoDos:'Es un área representativa de las Quebradas del Norte o de la Cuesta Basáltica, una región que se destaca por un paisaje de gran belleza, con elementos escénicos únicos en el país, caracterizado por cerros con cimas aplanadas que delimitan estrechos valles modelados por los cursos de agua conocidos como "quebradas". Las quebradas son profundas incisiones entalladas en la roca basáltica, de importantes pendientes y relieve enérgico, donde confluyen cuevas, paredones verticales y saltos de agua y se desarrolla una exuberante vegetación de tipo selvática subtropical.',
    parrafoTres:"El área posee una gran heterogeneidad de ambientes naturales, incluyendo diferentes tipos de pastizales, bosques (serranos, ribereños, de quebrada), matorrales, arroyos y cañadas que brindan refugio y alimento a diversas especies de fauna autóctona de gran interés por su rareza, distribución y abundancia.",
    parrafoCuatro:'En materia de aves se han registrado al menos 150 especies, muchas de las cuáles solo pueden avistarse en el lugar. Dentro de ellas, se destacan el tachurí coludo, la bandurria amarilla, la viudita colorada, la seriema, el maracaná y el gavilán pardo. Entre los anfibios se destacan dos especies raras: la ranita uruguaya y el sapito de Devincenzi; en reptiles la víbora de cascabel —extinguida en el sur del país—: y entre los mamíferos el oso hormiguero chico. el tatú de rabo molle, el gato margay,  el coatí, el coendú y el guazubirá.',
    parrafoCinco:'Fuente: Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/CuevadelIndio.jpg",
        citatitulo:"Sendero Cueva del Indio.",
        cita:"A través de este sendero podrá acceder a una quebrada profunda, ingresando previa autorización, en un campo privado frente a Subida de Pena. Luego podrá efectuar el descenso hasta el cauce del Arroyo Rubio Chico. La distancia total a recorrer serán 1900 metros, aproximadamente 2 horas y media de caminata, con un grado de dificultad medio."

      },
      {
        foto: "/img/Boqueron.jpg",
        citatitulo:"Sendero Cerro Boquerón.",
        cita:"Recorrer este cerro ubicado en el centro del Valle del Lunarejo permite el reconocimiento de la zona y una visita inigualable de toda la región. En predio privado se propone caminata de ascenso y descenso, zona de camping y baños en el Arroyo Lunarejo. El recorrido es de 1300 metros e insume 1 hora y media de caminata. El grado de dificultad es bajo."

      },
      {
        foto: "/img/Balcones.jpg",
        citatitulo:"Sendero Paredones.",
        cita:"Contemplar una caída de auga en pozo profundo de caudal permanente, avistamiento de fauna, zona de baños y vistas panorámicas son algunas de los placeres que regala este sendero, recomendable para realizar junto a un guía de naturaleza. El recorrido a realizar es de 1500 metros e insume dos horas. El grado de dificultad es medio."

      },
      {
        foto: "/img/Paredones.jpg",
        citatitulo:"Sendero Balcones de Lunarejo.",
        cita:"Un paseo altamente recomendable es recorrer a caballo la zona alta de Lunarejo. El sendero también ofrece la posibilidad de descender caminando a zona de quebrada con caída de agua. El recorrido es de 1400 metros e insume 2 horas y media. El grado de dificultad es medio."

      },
      {
        foto: "/img/Helechos.jpg",
        citatitulo:"Sendero De Los Helechos.",
        cita:"Desde histórico establecimiento de Masoller, se ofrece caminata de descenso a la quebrada  con final en piscina natural en nacientes del Arroyo Lunarejo. La distancia total a recorrer es de 1400 metros e insume aproximadamente 2 horas y media de caminata. El grado de dificultad es medio y la recompensa muy grande: pueden avistarse especies de helechos de gran porte y una gran diversidad de aves."

      }
    ]
  })
})

router.get('/tacuarembo', (req, res) =>{
  res.render('departamento', {
    title: 'Tacuarembó',
    titleUrl: "Tacuarembó - Lugar de Interes - Book Art & Design",
    url: "/img/tacuarembo.jpg",
    tamanoUrl:"-200px",
    parrafoUno:'Tacuarembó, “el pago más grande de la patria”, “el corazón del país”, “la patria grande”, la “cuna de Carlos Gardel” tiene forma de corazón siempre se las ingenió para trascender y mostrar sus mejores galas a todo Uruguay. Sin importar los 400 kilómetros que lo separan de la capital, sobresalió desde principios de siglo cuando el Teatro Escayola estrenó obras antes que el mismísimo Solís o el Teatro Colón, de Buenos Aires.',
    parrafoDos:"Cuna de oro de escritores, músicos, artistas y deportistas, los tacuaremboenses supieron dejar su huella en la cultura nacional. En este rincón al norte de Uruguay, la identidad cultural se funde con los quehaceres cotidianos.",
    parrafoTres:"En cualquier esquina el visitante puede sorprenderse con una escultura, el rasgo aindiado de un habitante o la presencia de un gaucho. Su paisaje de cerros chatos y praderas y sus maravillas naturales , son protagonistas de películas de la talla de Corazón de Fuego, Artigas - La redota o Miss Tacuarembó. Los tacuaremboenses han encantado a actores como Federico Luppi, Héctor Alterio o Natalia Oreiro.",
    parrafoCuatro:'Con orgullo,Tacuarembó exhibe esculturas y murales a cielo abierto. Unas 150 obras pueden disfrutarse en espacios públicos y privados en distintos puntos del departamento. En Tacuarembó no hay dudas: Gardel es uruguayo. Dicen que al museo del artista llegan los más escépticos sobre la nacionalidad uruguaya del mago, pero salen convencidos de lo contrario. En definitiva, el departamento más grande tiene infinidad de encantos para sorprender al viajero. Fuente: Libro Tacuarembó, un pago grande. 2012. - Intendencia de Tacuarembó.',
    parrafoCinco:'Fuente: Libro Tacuarembó, un pago grande. 2012. - Intendencia de Tacuarembó - Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/Iporá.jpeg",
        citatitulo:"Iporá.",
        cita:"A solo 7 kilómetros de la capital, este balneario fue creado alrededor de un pintoresco lago artificial. Dispone de zona de camping con todas las instalaciones. También posee una piscina con medidas olímpicas y canchas de diversos deportes (fútbol, básquetbol, tenis, vóleibol). En el lago es muy recomendable practicar canotaje y pesca deportiva."

      },
      {
        foto: "/img/ValleEdén.jpg",
        citatitulo:"Valle Edén.",
        cita:"A 25 kilómetros de la capital del departamento resulta ideal para quienes disfrutan de la vida al aire libre. Para ellos el Pozo Hondo, La Cueva del Chivo y el Perado Caído son algunas de las atracciones naturales imperdibles. En esta pintoresca localidad se puede visitar el Museo de Carlos Gardel, ubicado en la pulpería que el propio mago frecuentaba."

      },
      {
        foto: "/img/mural.jpg",
        citatitulo:"San Gregorio de Polanco.",
        cita:"Además de regalar uno de los mejores atardeceres del país, esta ciudad balnearia tiene el mérito de albergar al primer Museo Abierto De Artes Visuales de Latinoamérica, con obras de grandes artistas nacionales y extranjeros de la talla de Cleber Lara, Carlos Páez Vilaró, Gustavo Alzó, Octavio Podestá y Ana María Poggi, entre varios otros. "

      }
    ]
  })
})


router.get('/rivera', (req, res) =>{
  res.render('departamento', {
    title: 'Rivera',
    titleUrl: "Rivera - Lugar de Interes - Book Art & Design",
    url: "/img/rivera.jpeg",
    tamanoUrl:"-10px",
    parrafoUno:'Rivera es un departamento de extraordinaria riqueza natural, patrimonial, cultural y una ubicación geográfica privilegiada.Situada en las nacientes del arroyo Cuñapirú, la ciudad creció alrededor del Cerro del Marco, quedando separada de Santa Ana do Livramento apenas por una calle.',
    parrafoDos:"La capital se llama así en homenaje al Coronel Bernarbé Rivera, mientras que el departamento, le debe su nombre a Fructuoso Rivera, el primer presidente de Uruguay.",
    parrafoTres:"Visitar el departamento de Rivera es una verdadera aventura entre el pasado cultural y patrimonial y un presente comercial destacado.",
    parrafoCuatro:'En la ciudad el turista puede encontrar las más variadas ofertas gastronómicas, hoteleras y los mejores casinos de la región. Rivera ofrece a los turistas modernos Free Shop y centros comerciales, cuyo objetivo principal es brindar una oferta completa, con promociones permanentes de las diferentes empresas de calidad internacional que están instaladas. Si lo que buscas es ocio y diversión, la emoción del juego en las salas de maquinas (Slots) y juegos de mesa, constituye otro de los grandes atractivos que regala la ciudad. En Rivera, también se puede disfrutar de una variada gastronomía, que va desde la típica cocina campestre hasta la mejor cocina francesa.',
    parrafoCinco:'Fuente Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/PlazaRivera.jpeg",
        citatitulo:"Plaza Internacional.",
        cita:"Creada en 1943, en plena Segunda Guerra Mundial, es un monumento internacional a la paz mundial y a la convivencia de los pueblos. La plaza, diseñada sobre un extenso espacio fronterizo une a las dos ciudades y es visitada a diario por cientos de turistas."

      },
      {
        foto: "/img/Atilio.jpg",
        citatitulo:"Estadio Atilio Paiva Olivera.",
        cita:"Los amantes del fútbol tienen en la ciudad una parada ineludible: el Estadio Atilio Paiva Olivera, una de las sedes de la Copa América de 1995 y de importantes partidos de la Copa Libertadores de América. Los aficionados al automovilismo, deberán estar atentos a la agenda del Autódromo Municipal cercano al Parque Gran Bretaña, en donde tienen lugar importantes actividades automóvilisticas y pruebas de motociclismo."

      }
    ]
  })
})

router.get('/artigas', (req, res) =>{
  res.render('departamento', {
    title: 'Artigas',
    titleUrl: "Artigas - Lugar de Interes - Book Art & Design",
    url: "/img/norte.jpg",
    tamanoUrl:"-420px",
    parrafoUno:'Artigas, la capital del departamento, es una ciudad fronteriza recostada sobre Cuareim, limita con la brasileña de Quaraí con la que se une a través del Puente Internacional de la Concordia de  750 metros  de extensión.',
    parrafoDos:"La avenida Carlos Lecueder es la principal vía de tránsito de este a oeste, y cuenta con una importante zona comercial, que limita en cada extremo por las plazas Artigas y Batlle y Ordoñez. El departamento homónimo al que pertenece es el único que limita con Brasil y Argentina. Con casi 12 mil metros cuadrados tiene una población de 79 mil habitantes según el último censo y una geografía variada, con cuchillas, lomadas y valles. A su vez, es dueño de siete islas con vegetación selvática , sobre el límite con Argentina,que forman parte de la denominada selva misionera.",
    parrafoTres:"Artigas es también una tierra de gran mixtura cultural, rica en diversos ritmos musicales como samba, polca, vals, maxixa, habanera, chotis y milonga. El departamento también es rico en yacimientos de amatistas y ágatas, piedras semipreciosas que se tallan en talleres de la ciudad de Artigas, y se exportan fuera del país.",
    parrafoCuatro:'las artesanías en piedra artiguenses. Amatistas y agátas seducen a los visitantes quienes regatean buscando oportunidades en el lugar de origen de estas variedades de cuarzo. Al departamento de Artigas también se lo puede considerar como el más guaraní del Uruguay. Sus ríos como el Cuaró (Cueva ocupada), el Ñaquiñá (Chicharra) o el Itacumbú (Piedra que estalla) son algunos de los ejemplos. En su flora y fauna también se refleja la influencia del idioma guaraní.',
    parrafoCinco:'Fuente Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/PiedraPintada.jpg",
        citatitulo:"Piedra Pintada.",
        cita:"Es una roca de arenisca impactante y única en la región, con 19 metros de altura, ubicada a 17 kilómetros de la ciudad. Está rodeada de montes nativos ideales para pasar un día al aire libre. En las proximidades hay camping, piscina, parrilleros y un parador."

      },
      {
        foto: "/img/FREESHOP.jpeg",
        citatitulo:"Free Shops.",
        cita:"Las tiendas libres de impuestos de la zona de frontera son un gran atractivo comercial para los visitantes extranjeros, donde es posible acceder a productos de alta calidad a precios muy convenientes."

      },
      {
        foto: "/img/paseo7.jpg",
        citatitulo:"Paseo 7 de Setiembre.",
        cita:"El parque urbano recorre el Río Cuareim y ofrece múltiples alternativas para quienes disfrutan de las actividades al aire libre. Hay zona de camping, quinchos con parrillero, servicios higiénicos y mesas con bancos. Para los más deportistas, el paseo tiene pistas de mountain bike, atletismo y patinaje, canchas de básquet, vóley y fútbol de arena, frontones y estadio de baby fútbol."

      }
    ]
  })
})

router.get('/treintaytres', (req, res) =>{
  res.render('departamento', {
    title: 'Treinta y Tres',
    titleUrl: "Treinta y Tres - Lugar de Interes - Book Art & Design",
    url: "/img/treinta-y-tres.jpg",
    tamanoUrl:"-190px",
    parrafoUno:'En la confluencia del río Olimar y el arroyo Yerbal, se localiza la apacible Treinta y Tres. Como una típica localidad del interior del Uruguay con sus construcciones bajas y veredas con frondosos árboles, la ciudad transcurre  en torno a su plaza principal  y su monumento de los 33 Orientales.',
    parrafoDos:"Muy cerca de la urbe, se esconden  tesoros naturales irresistibles para los aficionados al ecoturismo, como la primera área nacional protegida del país, la Quebrada de los Cuervos, un lugar emblemático por su geomorfología, flora y fauna exhuberante y también por las historias y las leyendas que se tejen en torno al lugar. Quienes visiten el departamento de Treinta y Tres también podrán descubrir, la Laguna Merín, una de las mayores reservas de agua dulce y uno de los principales tesoros ecológicos de Uruguay. Este espejo de agua fronterizo con Brasil tiene una superficie de 4.500 kilómetros cuadrados y más de 120 kilómetros de costa en la parte uruguaya.",
    parrafoTres:"Desde hace varios años es una reserva ecológica nacional y fue declarada por parte de la FAO como reserva mundial de agua dulce. Treinta y Tres también es un destino ideal para descubrir las tradiciones autóctonas de los habitantes del interior uruguayo y la calidez de la vida sencilla. El departamento limita al norte con el departamento de Cerro Largo, al sur con los de Lavalleja y Rocha, al este con Brasil, mediante la Laguna Merín y al oeste con los de Florida y Durazno. ",
    parrafoCuatro:'Hidrográficamente cuenta con una gran cantidad de ríos, arroyos y lagunas. Los ríos más importantes son el río Cebollatí en la frontera meridional del departamento y el Olimar como principal afluente. Este último es tan importante para el abastecimiento de agua del departamento, que a sus habitantes se los llama "olimareños". Si bien, tradicionalmente Treinta y Tres ha sido un departamento ganadero, en la actualidad la actividad arrocera ha dado un gran impulso a la economía de la región, fomentando la industria de productos precocinados y a la instalación de molinos arroceros. Mucho antes de la existencia del departamento, las tierras de la región fueron habitadas por indígenas como lo testimonian numerosos cerritos de indios que han suscitado el interés de antropólogos y arquéologos de todo el mundo.',
    parrafoCinco:'Fuente Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/cerrochato.jpg",
        citatitulo:"Salto de agua de Cerro Chato.",
        cita:"Ubicado sobre el eje de la Ruta 7, a solo 2,5 kilómetros del núcleo urbano, el arroyo La Valija conforma una serie de hermosas piscinas naturales que resultan aptas para refrescantes chapuzones."

      },
      {
        foto: "/img/rioolimar.png",
        citatitulo:"Río Olimar.",
        cita:"El Olimar es un río cuyo curso se ubica dentro del departamento de Treinta y Tres, Uruguay. Tiene sus nacientes en las inmediaciones de la ciudad de Santa Clara, en la Cuchilla Grande al oeste del departamento y recorre el territorio hacia este, recibiendo las aguas del río Olimar Chico y de los arroyos Yerbal y Corrales para, finalmente, desembocar en el río Cebollatí, de quien es el principal afluente. La extensión de su cuenca es de 5.320 km²"

      }
    ]
  })
})

router.get('/santateresa', (req, res) =>{
  res.render('departamento', {
    title: 'Santa Teresa',
    titleUrl: "Santa Teresa - Lugar de Interes - Book Art & Design",
    url: "/img/fortaleza-de-santa-teresa.jpg",
    tamanoUrl:"-390px",
    parrafoUno:'Una antigua fortaleza, playas de arenas blancas y agua verde, palmares y flora exótica forman parte de los múltiples atractivos del balneario Santa Teresa. En este último se encuentra el Parque Nacional de Santa Teresa, compuesto por tres mil hectáreas y dos millones de árboles con especies de los cinco continentes y amplios jardines.',
    parrafoDos:"Este último es reconocido internacionalmente como uno de los parques creados por el hombre más grande del mundo.",
    parrafoTres:"Dentro del predio es posible visitar la Fortaleza de Santa Teresa, que se remonta a 1762, cuando los portugueses previendo un nuevo conflicto con España, decidieron fortificar una estrecha franja de tierra entre el océano y la Laguna Negra. Dentro de este singular monumento se destacan espacios museísticos que atestiguan siglos de historia.",
    parrafoCuatro:'Las playas Cerro Chato o El Barco, son las preferidas por las familias por ser más tranquilas, mientras que la Moza es la elegida por los más jovenes ya que cuenta con parador y varios servicios próximos como parrillada, heladería y supermercado.',
    parrafoCinco:'Fuente Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/LagunaNegra.jpeg",
        citatitulo:"Laguna Negra.",
        cita:"Constituye uno de de los límites del parque y alberga una reserva biológica donde se destaca una rosaleda con más de 300 variedades."

      },
      {
        foto: "/img/FortalezadeSantaTeresa.jpg",
        citatitulo:"La Fortaleza.",
        cita:"La singular edificación colonial se encuentra en el kilómetro 302 de la Ruta 9. Fue construida entre 1762 y 1775 por los portugueses y finalizada por españoles con la finalidad de proteger el Parque y el desfiladero de Angostura."

      }
    ]
  })
})

router.get('/rocha', (req, res) =>{
  res.render('departamento', {
    title: 'Rocha',
    titleUrl: "Rocha - Lugar de Interes - Book Art & Design",
    url: "/img/La-Paloma.jpg",
    tamanoUrl:"-490px",
    parrafoUno:'Es una de las ciudades más antiguas y emblemáticas de Uruguay. Además de dar nombre al departamento, recibe en forma continua a quienes veranean en los múltiples balnearios del departamento',
    parrafoDos:"Ciento ochenta kilómetros de costa, mar océanico, finas arenas, pueblos de pescadores, extensos palmares de butiá, antiguas edificaciones coloniales y más de 200 mil hectáreas de humedales que fueron declarados Reserva de Biosfera por la Unesco; la lista de razones para visitar Rocha es inagotable. A lo largo y ancho de su superficie se suceden los más variados paisajes con transiciones bruscas y contrastes que no dejan nunca lugar a la monotonía. Paisajes serranos, costas llanas, abruptas barrancas y puntas rocosas, todo converge en este destino que resulta ideal para quienes disfrutan de los entornos naturales y del turismo de avistamiento. Una enorme variedad de especies pueden verse en cualquier época del año en lagunas, bañados y ríos.",
    parrafoTres:"A su vez, la costa atlántica, es visitada por la ballena franca y más ocasionalmente por orcas y delfines. Un paseo ampliamente recomendable, principalmente, entre noviembre y febrero es la ruta turística del arroz que supone la visita de varias localidades del interior del departamento como Velázquez, Lascano, Plata Averías y Cebollatí. En ella, producción y naturaleza se conjugan para brindar al visitante ofertas turísticas diferentes que le permiten participar de las costumbres y actividades de la gente del lugar.",
    parrafoCuatro:'En materia de balnearios, las alternativas también son diversas y van desde Punta del Diablo un tradicional pueblo de pescadores en crecimiento, La Paloma, el más sofisticado de los balnearios rochenses hasta Cabo Polonio, un pequeño rincón del atlántico rodeado de centenares de lobos marinos, al que solo es posible acceder a través de vehículos especiales que atraviesan sus grandes dunas. Así, el mítico Polonio conserva una inigualable aureola de paz y de intensa naturaleza que es admirada por turistas de todo el mundo.',
    parrafoCinco:'Fuente Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/Teatro25deMayoRocha.jpg",
        citatitulo:"Teatro 25 de mayo.",
        cita:"Con más de cien años de vida, este teatro uno de los mayores tesoros de la ciudad. Fue fundado en 1910 y se destaca por su excelente acústica, entre las mejores de Sudamérica. El diseño arquitectónico, de estilo italiano, se conserva perfectamente desde sus orígenes. Tras una historia de sucesivas restauraciones y reaperturas, el Teatro reabrió sus puertas en 2007 gracias a la colaboración de toda la comunidad de Rocha."

      },
      {
        foto: "/img/PlazaIndependenciaRocha.jpeg",
        citatitulo:"Plaza de la Independencia.",
        cita:"Arbolada y serena, es la principal plaza de la ciudad, y una gran protagonista de su historia. Los primeros pobladores se reunían en esta plaza, principal punto de encuentros de los rochenses. Está rodeada de importates edificios como la Iglesia Nuestra Señora de los Remedios, el estadio deportivo, museos y el emblemático Teatro 25 de Mayo."

      }
    ]
  })
})

router.get('/puntadeleste', (req, res) =>{
  res.render('departamento', {
    title: 'Punta del Este',
    titleUrl: "Punta del Este - Lugar de Interes - Book Art & Design",
    url: "/img/punta.jpg",
    tamanoUrl:"-490px",
    parrafoUno:'Donde el lujo y la naturaleza convergen Punta del Este es reconocido internacionalmente como uno de los principales balnearios de América y el más exclusivo de la región. Se ubica en el departamento de Maldonado, a sólo una hora y media de la capital del país. Lujosas residencias de veraneo, altos edificios de apartamento frente al mar, enormes yates en el puerto, hoteles y restaurantes de lujo lo transforman en el balneario de mayor glamour de América. ',
    parrafoDos:"No en vano, fue elegida como destino de veraneo por grandes celebridades como el diseñador Ralph Lauren, el jugador del fútbol Zinedine Zidane, el cantante de Metallica James Hetfield o la colombiana Shakira. Recorriendo la ciudad el visitante encuentra una amplia oferta recreativa, que incluye sala de exposiciones, restaurantes, pubs, discotecas, tiendas de antigüedades, galerías de arte, cines, teatros y una agitada vida nocturna. La ciudad balnearia es elegida para la realización de grandes fiestas de lujo, desfiles de moda de marcas de prestigio y una amplia gama de propuestas culturales de gran dimensión como el Festival Internacional de Jazz, el Festival Internacional de Cine o exposiciones de artistas contemporáneos de renombre. ",
    parrafoTres:"Punta del Este es también un destino natural único. Con más de 20 kilómetros de costa y altas sierras que miran al mar, el balneario también ofrece encantadores rincones y paisajes para quienes llegan en busca de una tranquilidad absoluta. El punto de encuentro de sus dos playas más famosas, Playa Mansa y Playa Brava, supone el fin del Río de la Plata y el comienzo del Océano Atlántico. El balneario creció hacia el Oeste formando Punta Ballena y hacia el Este creando La Barra y José Ignacio. ",
    parrafoCuatro:'La diversidad de su costa y sus arenas finas y blancas la hacen un destino ideal para la realización de deportes como el surf, windsurf, jet-ski, motonáutica, vela, pesca y yachting. En tierra firme, los turistas también encuentran escenarios privilegiados para la práctica de otros deportes como el polo, el golf, el tenis o el rugby. En síntesis, Punta del Este, es sinónimo de un sinfín de alternativas para satisfacer las necesidades de los paladares turísticos más exigentes y heterogéneos.',
    parrafoCinco:'Fuente Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/dedos.jpg",
        citatitulo:"La Mano o Los Dedos.",
        cita:"Es una escultura de cinco dedos parcialmente sumergidos en arena, localizada en la parada 1 de la playa Brava en Punta del Este"

      },
      {
        foto: "/img/puerto.jpg",
        citatitulo:"Puerto de Punta del Este.",
        cita:"El Puerto de Punta del Este, llamado Puerto Nuestra Señora de la Candelaria, es el puerto deportivo más destacado del país y de la región. Fue descubierto en 1516 por Juan Díaz de Solís en el día de Nuestra Señora de la Candelaria (2 de febrero), de allí su nombre."

      }
    ]
  })
})

router.get('/maldonado', (req, res) =>{
  res.render('departamento', {
    title: 'Maldonado',
    titleUrl: "Maldonado - Lugar de Interes - Book Art & Design",
    url: "/img/maldonado.jpg",
    tamanoUrl:"-190px",
    parrafoUno:'Maldonado, es la capital del departamento homónimo. Actualmente se encuentra conurbada con la ciudad de Punta del Este y de forma parcial está vinculada a la ciudad de San Carlos.',
    parrafoDos:"Entre las tres ciudades conforman el segundo conurbano más amplio y poblado del país. El departamento en su conjunto es rico en contrastes. Posee un relieve sorprendente que se caracteriza por la presencia de sierras y por más de 100 kilómetros de costa diversa para disfrutar desde su límite con Canelones (por el arroyo Solís Grande) hasta su frontera con Rocha en el extremo este del país.",
    parrafoTres:"Su famosa península de Punta del Este divide al río de la Plata del océano Atlántico, y es conocida como la ciudad balnearia más glamorosa de la región.",
    parrafoCuatro:'La catedral de San Fernando de Maldonado es uno de los edificios más emblemáticos de la capital. Frente a ella se ubica la moderna plaza San Fernando de Maldonado, donde se desarrollan numerosos eventos culturales y sociales. El cuartel de dragones es otro de los edificios importantes que no pueden dejar de conocerse. Su construcción culminó en 1797 y actualmente alberba diversos vestigios histórico-culturales que permiten al turista trasladarse en el tiempo',
    parrafoCinco:'Fuente Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/sanfernando.jpg",
        citatitulo:"Catedral de San Fernando.",
        cita:"Emblemática iglesia de estilo neoclásico, construida a lo largo de casi un siglo, entre 1801 y 1895. El altar mayor, obra de Antonio Veiga, guarda la imagen de la Virgen del Carmen, perteneciente al vapor Ciudad de Santander, naufragado en 1829 cerca de la Isla de Lobos."

      },
      {
        foto: "/img/cuartel.jpg",
        citatitulo:"Cuartel de Dragones.",
        cita:"El edificio histórico construido entre 1771 y 1797, abarca una manzana frente a la plaza principal. En su interior funcional el Museo Didáctico Artiguista, a su vez, se exhibe una colección de pintura y escultura Nacional, donada por Nicolás García Uriburu."

      }
    ]
  })
})

router.get('/melo', (req, res) =>{
  res.render('departamento', {
    title: 'Melo',
    titleUrl: "Melo - Lugar de Interes - Book Art & Design",
    url: "img/melo.png",
    tamanoUrl:"-290px",
    parrafoUno:'Ubicada en la zona centro del departamento de Cerro Largo y apenas a 60 kilómetros de Brasil,  la ciudad de Melo está marcada por la mixtura cultural que caracteriza a los sitios fronterizos. ',
    parrafoDos:"Son célebres sus carnavales muy influenciados por los ritmos del vecino país.",
    parrafoTres:"A su vez,el dominio simultáneo de los idiomas español y portugués es una constante de la mayoría de sus pobladores.",
    parrafoCuatro:'Entre sus atractivos turísticos se destacan la plaza Constitución, donde se halla un monumento al héroe nacional general José Gervasio Artigas y la iglesia catedral,  fundada en 1876. La plaza Independencia, ubicada también en el centro de la ciudad, es el lugar elegido para la reunión de familiares y amigos durante el fin de semana. Los parques o espacios verdes, ubicados muy cerca del centro, constituyen otros de los atractivos de Melo, fundamentalmente para quienes disfrutan de las jornadas al aire libre.',
    parrafoCinco:'Fuente Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/melo-parque-zorrilla-de-san-martin.jpg",
        citatitulo:"Zoológico Municipal.",
        cita:"Ubicado frente al Parque Rivera, sobre la ruta 26, es sin dudas, uno de los paseos predilectos de los más pequeños. En el predio es posible avistar animales autóctonos de Cerro Largo, además de especies de otros lugares como leones, monos, llamas, yacarés y faisanes. A pasos del zoo está el histórico Rancho de Bartolo Silva, donde falleció el General Fructuoso Rivera, primer Presidente de la República."

      },
      {
        foto: "/img/MuseoMelo.jpeg",
        citatitulo:"Museo Histórico Regional.",
        cita:"Ubicado sobre la Plaza Constitución, en Gral Artigas y 18 de Julio, este museo considerado el más importante de Melo,  exhibe interesante documentación histórica sobre el departamento, además de fotografías, uniformes, armamentos y piezas arqueológicas de las culturas indígenas."

      },
      {
        foto: "/img/ParqueZorrilla.jpeg",
        citatitulo:"Parque Zorilla de San Martín.",
        cita:"A orillas del Arroyo Conventos, este parque cuenta con dos patios españoles con hermosos azulejos originales además de albergar el Teatro Municipal de Verano (para tres mil personas), juegos para niños, la icónica Fuente de los Sapos y el Club Remeros de Melo."

      },
      {
        foto: "/img/Ibarbourou.jpg",
        citatitulo:"Casa de Juana de Ibarbourou.",
        cita:"Visitar la casa natal de poetisa más famosa de Uruguay y una de las más reconocidas del continente, resulta inevitable para quienes llegan a Melo. La vivienda mantiene los objetos y el mobiliario de época, así como la higuera bajo la que escribió sus primeros poemas. La casa-museo queda en la calle Treinta y Tres 317."

      },
      {
        foto: "/img/melo.png",
        citatitulo:"Estancia El Cordobés.",
        cita:"En esta histórica estancia, ubicada a 130 kilómetros de Melo, y a 30 de Santa Clara de Olimar, por la Ruta 38,  funciona el Museo Gral. Aparicio Saravia, ya que aquí vivió el legendario caudillo nacionalista. El casco es una típica construcción campestre del siglo XIX, con techo de tejas y gruesas paredes en piedra. En su interior pueden apreciarse diversos documentos y objetos de época."

      }
    ]
  })
})

router.get('/minas', (req, res) =>{
  res.render('departamento', {
    title: 'Minas',
    titleUrl: "Minas - Lugar de Interes - Book Art & Design",
    url: "/img/minas.jpg",
    tamanoUrl:"-290px",
    parrafoUno:'La ciudad de Minas, capital departamental de Lavalleja, se encuentra asentada entre las sierras de Minas y Carapé.',
    parrafoDos:"La zona se caracteriza por un paisaje de sierras onduladas, que junto a la verde vegetación, la riqueza de flora y fauna constituyen un ambiente idílico para el disfrute físico y espiritual.",
    parrafoTres:"Pesca, caza, vuelo en ala delta, y navegación por ríos y lagunas forman parte del diverso abanico turístico de esta zona única en Sudamérica.",
    parrafoCuatro:' La ciudad que hoy alberga 40.000 habitantes fue diagramada siguiendo estrictamente las Leyes del Reino de Indias, y su construcción fue posible gracias al trabajo de funcionarios de la corona y la ayuda de los indios Tapes, que le proporcionaron un encanto único. La principal riqueza del departamento de Lavalleja es el agro, aunque también se realiza una importante explotación de minerales como Dolomita, Cal, Mármol, Cobre, Piedra Laja y Caliza.El agua mineral, producto de sus diversos manantiales naturales, y la madera, producto de las grandes extensiones dedicadas a la forestación, también cumplen un rol preponderante en el departamento',
    parrafoCinco:'Fuente Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/Parque_Salus_1_en_Minas.jpeg",
        citatitulo:"Parque Salus",
        cita:"Ubicado en el kilómetro 109,500 de la Ruta 8, a 10 kilómetros de Minas, está compuesto por un bosque repleto de coronillas,  arrayanes y pinos que brindan una sombra ideal para la práctica de senderismo. Los helechos y rosales, también son protagonistas en el recorrido."

      },
      {
        foto: "/img/Arequita.jpeg",
        citatitulo:"Cerro Arequita",
        cita:"Este cerro de granito, de origen volcánico, con 230 metros de altura constituye un punto ineludible. Tiene una gruta espaciosa, la Gruta Colón, rodeado por un bosque indígena que despierta el interés de turistas de todo el mundo"

      },
      {
        foto: "/img/Salto_del_Penitente.jpg",
        citatitulo:"Salto del Penitente",
        cita:"Ubicado a 25 kilómetros de la ciudad de Minas, esta caída de agua de más de 20 metros de altura, ofrece un entorno ideal para organizar una jornada de picnic en medio de un hermoso paisaje natural."

      }
    ]
  })
})

router.get('/lapedrera', (req, res) =>{
  res.render('departamento', {
    title: 'La Pedrera',
    titleUrl: "La Pedrera - Lugar de Interes - Book Art & Design",
    url: "/img/la-pedrera.jpg",
    tamanoUrl:"-290px",
    parrafoUno:'El balneario rochense resulta ideal para las vacaciones familiares. Sus playas admiten tanto el descanso y la recreación, como la pesca o los más variados deportes náuticos. La Pedrera está ubicada en el km 227,200 de la ruta 10, Juan Díaz de Solís, un poco más al este del Cabo de Santa María, sobre una península angosta y pequeña llamada Punta Rubia.Es un pequeño balneario con una excelente infraestructura para el alojamiento.',
    parrafoDos:"Por sus peculiaridades tiene un fuerte carácter exclusivo y cosmopolita. Es ideal para las vacaciones familiares. Sus playas admiten tanto el descanso y la recreación, como la pesca o los más variados deportes náuticos.",
    parrafoTres:"Su principal playa suele conocerse como el Desplayado y es un gran centro de atracción durante los meses de verano. En la playa sur, se pueden observar los últimos vestigios del buque pesquero Cathay, encallado en el año 1971. Más hacia el sur las Barrancas de la Pedrera ofrecen al caminante una sorprendente combinación de texturas y colores de la naturaleza.",
    parrafoCuatro:'El Club Social se encuentra en la calle principal de La Pedrera, así como también su Iglesia, la feria artesanal, varias boutiques, y una gran variedad de pequeños comercios y restaurantes que brindan calidez y servicio para una estadía inolvidable. La Rambla, es el lugar perfecto a la hora de compartir un fascinante paisaje de luna llena o de observar el increíble cortejo de las ballenas francas en los meses de invierno.',
    parrafoCinco:'Fuente Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/la-pedrera.jpg",
        citatitulo:"El Desplayado y El Barco.",
        cita:"Son las dos principales playas del balneario y dos puntos ideales para la práctica del surf tanto en plena temporada como en los meses más fríos. "

      }
    ]
  })
})

router.get('/lapaloma', (req, res) =>{
  res.render('departamento', {
    title: 'La Paloma',
    titleUrl: "La Paloma - Lugar de Interes - Book Art & Design",
    url: "/img/La-Paloma.jpg",
    tamanoUrl:"-190px",
    parrafoUno:'Por su belleza y popularidad La Paloma es uno de los balnearios más emblemáticos del departamento de Rocha. Enclavado en pleno océano atlántico su principal atractivo son sus magníficas playas.',
    parrafoDos:"Es que La Paloma tiene playas para todos los gustos, desde las de aguas serenas como las de la bahía chica, hasta las de gran oleaje como La Balconada, La Aguada o La Pedrera. Las ensenadas, las puntas rocosas, las grandes extensiones de arenas blancas y finas, los altos médanos, las aguas llanas o profundas y un sinfín de diversidad natural hacen que cada quien encuentre en La Paloma su sitio de preferencia. La pescadería artesanal se concentra en la playa Los Botes, allí los pescadores se encomiendan al Cristo de Lucho, que es una escultura realizada por el pescador Lucho Maurente.",
    parrafoTres:"El balneario cuenta con una playa accesible. La playa Bahía Grande, fue acondicionada en enero de 2014 y cuenta con atención personalizada de especialistas para que jóvenes y adultos con discapacidades físicas tengan la posibilidad de disfrutar del mar. Apoyo de un docente,  sillas anfibias, andadores, y elementos de seguridad forman parte de sus servicios que están disponibles durante temporada de verano de lunes a domingos de 9 a 12 horas y de 15 a 19.",
    parrafoCuatro:'Además una amplia pasarela de madera facilita la llegada desde la costanera hasta el mar para quienes tienen dificultades para caminar. También hay estacionamiento para lisiados.',
    parrafoCinco:'Fuente Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/FaroLaPaloma.jpeg",
        citatitulo:"Faro de Santa María.",
        cita:"Es el principal icono del balneario y su construcción más antigua. Es posible acceder a  su cima y obtener las mejores postales del lugar."

      },
      {
        foto: "/img/CaboSantaMaria.jpeg",
        citatitulo:"Cabo de Santa María.",
        cita:"El barrio antiguo, en torno al faro, alberga las primeras residencias de La Paloma y combina estilos y arquitecturas, que le dan una identidad señorial e inconfundible. "

      }
    ]
  })
})

router.get('/lagunagarzon', (req, res) =>{
  res.render('departamento', {
    title: 'Laguna Garzón',
    titleUrl: "Laguna Garzón - Lugar de Interes - Book Art & Design",
    url: "/img/puente-laguna-garzon.jpg",
    tamanoUrl:"-390px",
    parrafoUno:'Sobre la costa Atlántica y en el límite entre los departamentos de Rocha y Maldonado se sitúa la Laguna de Garzón, que forma parte de el Área de manejo de hábitats y/o especies, área protegida de Uruguay. La zona, de gran riqueza por su diversidad biológica, abarca 9596 hectáreas de superficie terrestre y 27332 hectáreas de superficie marina. El espejo de agua, que conforma la Laguna Garzón, representa 1750 hectáreas. Al igual que la Laguna de Rocha, se comunica con el océano Atlántico por una barra de arena que se abre periódicamente, de forma natural o artificial por acción humana. Este proceso favorece la productividad biológica, pues es el sitio de cría de un número importante de especies de aves residentes y migratorias, peces, moluscos y crustáceos. Esto le otorga al área de la laguna un gran valor económico, ecológico y paisajístico',
    parrafoDos:"El paisaje entorno a la laguna está formado por colinas, lomadas, llanuras bajas, la franja costera y una porción de la plataforma costera. En el área adyacente existen otros espejos de agua más pequeños que drenan sus aguas a la Laguna Garzón. En las lomadas costeras existen parches de matorral psamófilo, una etapa leñosa pionera en la colonización de dunas, que lleva a la fijación natural y a la formación de suelo en los campos de dunas próximos a la playa. El bosque psamófilo es una etapa posterior, más estable, que se desarrolla en lugares relativamente protegidos de los vientos dominantes.",
    parrafoTres:"El área conforma un sitio interesante para el avistamiento de aves, de hecho ha sido denominada como Área Importante para la Conservación de Aves, por su importancia ornitológica. Es posible observar allí la gaviota cangrejera, el playerito canela, cisnes de cuello negro y el flamenco austral. También el chorlo pampa y el playero de rabadilla blanca, chorlos migratorios neárticos, especies que se reproducen en Norte América y que regularmente migran hacia al sur durante temporada no reproductora. También habitan la zona el sapito de Darwin, reptiles, guazú-birá, murciélago cola de ratón, tortuga de canaleta y en las aguas oceánicas se avistan ejemplares de ballena Franca Austral, durante la temporada de migración para la reproducción.",
    parrafoCuatro:'Antiguamente, el cruce por la Laguna Garzón, desde Rocha a Maldonado y viceversa, se realizaba en balsa. Sin embargo, en  diciembre de 2015 quedó inaugurado el Puente Laguna Garzón, una maravilla arquitectónica conciliadora y totalmente novedosa, que facilita el disfrute de los múltiples destinos turísticos de Rocha y Maldonado. Con forma de anillo sostenido por una serie de columnas, permite el libre flujo de los cambios de la laguna y además el uso de embarcaciones, un elemento típico del lugar.',
    parrafoCinco:'Fuente Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/puente-laguna-garzon.jpg",
        citatitulo:"Puente Laguna Garzón.",
        cita:"A la altura del km 188, de la ruta 9 se indica el camino para llegar a la Laguna Garzón. Se debe transitar durante 40 minutos hasta llegar al cruce con la ruta 10, allí doblando a la derecha hasta llegar al Puente Laguna Garzón. Además se puede acceder por los balnearios El Caracol, Costa Bonita y El Bonete."

      }
    ]
  })
})

router.get('/joseignacio', (req, res) =>{
  res.render('departamento', {
    title: 'José Ignacio',
    titleUrl: "José Ignacio - Lugar de Interes - Book Art & Design",
    url: "/img/joseignacio.jpg",
    tamanoUrl:"-390px",
    parrafoUno:'El pequeño pueblo de pescadores ubicado a tan solo 40 minutos de Punta del Este, es el nuevo paraíso del “jet set internacional”. Personajes del mundo de la moda, celebridades y grandes empresarios se dan cita cada verano en sus playas para encontrar momentos de paz y tranquilidad.',
    parrafoDos:"Son varias las razones que lo han transformado en un destino premium.  En primer lugar, la belleza y la tranquilidad de sus playas exclusivas. A un lado, mirando al Oeste, está la Playa Mansa, con sus pequeños barcos pesqueros y sus mágicos atardeceres. Al otro lado, admirando el Este, la Playa Brava, ancha y de imponentes olas.",
    parrafoTres:"Otra de las claves es su singular gastronomía. Sus restaurantes son un polo de atracción para quienes buscan saborear no sólo los mejores frutos del mar, sino también platos originales y de tendencia, elaborados por destacados chef de la región.",
    parrafoCuatro:'El poblado, por su parte, es sumamente pintoresco. Se halla entre dos lagunas, Garzón y José Ignacio, en ambos casos, con una riqueza biológica que suscita el interés internacional. En las inmediaciones de José Ignacio, existe una zona de lujosas chacras de veraneo con lujosa infraestructura y la certeza de encontrar la calma tan deseada por las celebridades. José Ignacio, es para ellos, garantía de tranquilidad, hermosos paisajes y servicios de alta gama. En las últimas temporadas, el balneario contó con la visita de James Murdoch, el hijo y heredero de Rupert Murdoch (el dueño de Fox y el Wall Street Journal), Elon Musk, el multimillonario creador de Paypal, el sistema de pagos online más popular del mundo, y Martin Sorrel, el CEO de WPP Group, una multinacional de la publicidad y las relaciones públicas.',
    parrafoCinco:'Otro de los aspectos que más atrae la atención de las celebridades es su capacidad para mantenerse como un pueblito de campo inmerso en el mar. En gran medida esto es posible debido a que desde 1993, el lugar tiene una serie de regulaciones estrictas para la construcción y la llegada de inversionistas. Entre las medidas restrictivas, se encuentra, la prohibición de abrir discotecas lo que contribuye a mantener la calma del lugar. En Jose Ignacio, no hay edificios altos, ni llamativos resort de lujo, solo una variopinta colección de casas chic que le dan una identidad totalmente romántica. Los hoteles de la zona se esconden detrás de muros y vallas, y quedan prácticamente invisibles para el visitante promedio, pero al mismo tiempo ofrecen a sus huéspedes espectaculares vistas al mar, los que resulta altamente conveniente para quienes pretenden escaparle a los flashes.Fuente Ministerio de Turismo',
    ciudadArreglo:[
    ]
  })
})

router.get('/cabopolonio', (req, res) =>{
  res.render('departamento', {
    title: 'Cabo Polonio',
    titleUrl: "Cabo Polonio - Lugar de Interes - Book Art & Design",
    url: "/img/cabo-polonio.jpg",
    tamanoUrl:"-390px",
    parrafoUno:'El Parque Nacional Cabo Polonio es un área de sugerente belleza paisajistica, que aún conserva características típicas del paisaje de la costa atlántica uruguaya, previo al proceso de transformación que se inició a mediados del siglo XX por la expansión del modelo urbano-turístico tradicional.',
    parrafoDos:"Esta área costero marina posee una gran heterogeneidad de ambientes naturales, que incluye playas arenosas, puntas rocosas, dunas, bosque nativo costero, pequeños humedales, ambientes oceánicos e islas. Muchos de estos ecosistemas son prioritarios para el SNAP, dada su distribución restringida en el territorio uruguayo (ecosistemas raros). El componente más destacado -por su singularidad- es el sistema dunar de Cabo Polonio, que constituye el remanente más extenso de una faja arenosa que se extendía antiguamente a lo largo de nuestra costa. Es una de las pocas áreas de dunas móviles de la región, con zonas que superan los 20 metros de altura.",
    parrafoTres:"El Parque Nacional Cabo Polonio alberga varias especies prioritarias para el SNAP, incluyendo especies en peligro o amenazadas de extinción (como el sapito de Darwin), especies vegetales y animales con distribución restringida (como la banana do mato, la rana de cuatro ojos y la tortuga de canaleta) y especies migratorias de importancia regional y global (como gaviotines, ballena franca austral y tortuga verde).",
    parrafoCuatro:'También comprende sitios clave para el ciclo anual de crustáceos de interés comercial (como camarón rosado, camarón marino y langostino de mar), y para la cría y alimentación de más de 47 especies de peces (tiburón gatuso, corvina, brótola, pejerrey). En sus islas se localiza casi la mitad de las poblaciones de lobo marino fino y león marino de Uruguay. Sus áreas son utilizadas para la reproducción y la cría de estas especies. La zona rocosa del cabo alberga el único asentamiento continental de lobo fino del país y ofrece una oportunidad única para observar de cerca a estos animales.',
    parrafoCinco:'Fuente Ministerio de Turismo',
    ciudadArreglo:[
      {
        foto: "/img/Cabo.jpg",
        citatitulo:"Arena y Sol.",
        cita:"El balneario cuenta con dos hermosas playas, La Playa Sur, con aguas turbulentas y una franja de arena que llega hasta La Pedrera; y la Playa Norte, que bordea el balneario hasta la Punta del Diablo. También se la conoce como Playa de la Calavera, por los numerosos naufragios que allí ocurrieron."

      },
      {
        foto: "/img/FaroCabo.jpg",
        citatitulo:"Faro del Cabo.",
        cita:"Es el mayor símbolo del Cabo, y una de las visitas clásicas durante la estadía en el lugar. Fue construido en 1881, mide unos 40 metros de altura."

      }
    ]
  })
})

router.get('/trinidad', (req, res) =>{
  res.render('departamento', {
    title: 'Trinidad',
    titleUrl: "Trinidad - Lugar de Interes - Book Art & Design",
    url: "/img/trinidad.jpg",
    tamanoUrl:"-390px",
    parrafoUno:'Trinidad es la capital del departamento de Flores. Antiguamente era llamada Santísima Trinidad de los Porongos, o simplemente Porongos y por ello sus habitantes suelen ser conocidos como porongueros. La ciudad está ubicada en la zona centro del departamento de Flores, sobre la Cuchilla Porongos, a la altura de las rutas nacionales 3, 14 y 57.2 ',
    parrafoDos:"Una de las paradas imperdibles para quienes visiten la ciudad es  la Reserva de Flora y Fauna Dr. Rodolfo Tálice, que alberga más de 90 especies diferentes de animales y 25 especies de árboles y arbustos. Es un sitio muy bonito para recorrer en familia, en buen estado de conservación y con amplias zonas verdes para descansar.",
    parrafoTres:"Al recorrerlo es muy común ver  pavos reales, coatíes y otras especies caminando libremente o más precisamente en semi cautiverio. El puente colgante y los juegos para niños suelen ser los lugares preferidos para los más chicos.",
    parrafoCuatro:'Sin embargo, a quienes anden en busca de experiencias de turismo alternativo les recomendamos tomar el tramo viejo de la Ruta 3 y recorrer 40 kilómetros de la capital para visitar las singulares Grutas del Palacio, que en 2013, se transformaron en el segundo Geoparque reconocido por Unesco en toda Sudamérica. ',
    parrafoCinco:'Fuente Intendencia de Florida',
    ciudadArreglo:[
      {
        foto: "/img/flores1.jpg",
        citatitulo:"Parque Centenario.",
        cita:"Cuenta con varios espacios para la práctica de deportes y para el disfrute familiar y con diversos servicios como parrilleros, quinchos, mesas y gabinetes higiénicos."

      },
      {
        foto: "/img/parquecentenario.jpg",
        citatitulo:"Plaza Constitución.",
        cita:"En el centro de la ciudad se encuentra la Plaza Constitución que constituye el principal punto de encuentro de los habitantes. En su entorno los edificios singulares que hacen al patrimonio arquitectónico de la ciudad como el de la Junta Departamental,  Intendencia Municipal, el Cine Plaza y la Iglesia de la Santísima Trinidad, en cuyo altar se destaca la obra del artista plástico José Luis Zorrilla de San Martín. "

      },
      {
        foto: "/img/flores3.jpg",
        citatitulo:"Estancias turísticas próximas.",
        cita:"Conservan entrañables y ricas tradiciones, ofreciéndoles a los turistas alojamiento, gastronomía típica, caminatas por senderos interpretativos, cabalgatas, paseos en embarcaciones, permitiéndoles además participar de las actividades agropecuarias de los establecimientos. "

      }
    ]
  })
})
router.get('/sanjose', (req, res) =>{
  res.render('departamento', {
    title: 'San José de Mayo',
    titleUrl: "San José de Mayo - Lugar de Interes - Book Art & Design",
    url: "/img/sanjose.jpg",
    tamanoUrl:"-190px",
    parrafoUno:'Con unos 40 mil habitantes, San José de Mayo conjuga múltiples entretenimientos, arte y tradición. Tanto en la capital como en los balnearios y campos fértiles del departamento, pueden encontrarse diversas alternativas de recreación y entretenimiento para unas vacaciones en pareja, en familia o con amigos. Paseos en carro, práctica de tareas de campo, degustaciones de gastronomía tradicional, avistamiento de aves, pesca de pejerrey y otras especies, deportes y actividades náuticas, son solo algunas de ellas',
    parrafoDos:"Tradicionalmente, San José ha sido el mayor productor de papas del país, aunque la ganadería también ocupa un lugar preponderante en la economía del departamento, fundamentalmente en lo que respecta a la lechería. De hecho, es el departamento con mayor cantidad de tambos.",
    parrafoTres:"A los habitantes de San José se los conoce como maragatos, aunque curiosamente solo una de las primeras familias pobladoras, provenía del antiguo Región de León. De suelo poco ondulado, la geografía del departamento se ve interrumpida al norte por la hermosa Sierra de Mahoma, y por las panorámicas Barrancas de Mauricio, San Gregorio y Jesús María.",
    parrafoCuatro:'Las playas de San José están ubicadas sobre el Río de la Plata, y se caracterizan por su tranquilidad, la calma de sus aguas y por el encuadre que proporcionan las barrancas. Los principales balnearios son: Kiyú y Boca del Cufré.',
    parrafoCinco:'Fuente: Ministerio de Turísmo.',
    ciudadArreglo:[
      {
        foto: "/img/museosanjose.jpeg",
        citatitulo:"Museo Departamental de San José.",
        cita:"Funciona en la antigua casa de Santiago Ortuño, descendiente de los primeros pobladores de la ciudad. La residencia fue construida en la década de 1810 y es una de las más representativas de la época colonial.Hoy es uno de los principales centros culturales de la ciudad."
      },
      {
        foto: "/img/TeatroMaccio.jpg",
        citatitulo:"Teatro Maccio.",
        cita:"El emblemático teatro fue construido entre 1909 y 1912 y desde entonces innumerables personalidades nacionales e internacionales han pasado por su sala principal, incluyendo Carlos Gardel, quien dio aquí su último espectáculo en Uruguay. Es capaz de albergar a más de 700 personas y es el principal escenario cultural del departamento."
      }
    ]
  })
})
router.get('/lapaz', (req, res) =>{
  res.render('departamento', {
    title: 'La Paz',
    titleUrl: "La Paz - Lugar de Interes - Book Art & Design",
    url: "/img/lapaz.jpg",
    tamanoUrl:"-90px",
    parrafoUno:'Primer asentamiento migratorio, establecido en 1858, centro de una colonia agrícola formada a partir del trabajo de inmigrantes europeos, más tarde piamonteses, por eso también se conoce al lugar como Colonia Piamontesa.',
    parrafoDos:"En su centro se encuentra la Plaza principal, Doroteo García, que luce la obra de José Belloni, Monumento al Colono Valdense.",
    parrafoTres:"Esta pequeña Villa contiene cinco Monumentos Históricos Nacionales.",
    parrafoCuatro:'Algunos de los sitios recomendados para visitar son: la primer casa de la villa, que se terminó de construir en 1859, el Molino de Agua Bonjour, construido en 1877, la primera Iglesia Evangélica Vadense de América, consagrada en 1893, el Puerto Concordia, la Fábrica de Aguardientes, construida en 1887, destilaba maíz para producir alcoholes, la Capilla de la Santa Cruz y Seminario Católico, y el Puente Negro, inaugurado en 1902, primer puente carretero de hierro del Uruguay.',
    parrafoCinco:'Fuente: Ministerio de Turísmo.',
    ciudadArreglo:[
      {
        foto: "/img/PuenteNegro.jpg",
        citatitulo:"Puente Negro.",
        cita:"Inaugurado en 1902, fue el primer puente carretero de hierro de Uruguay y cumple la finalidad de cruzar el Río Rosario en Colonia."
      }
    ]
  })
})
router.get('/grutasdelpalacio', (req, res) =>{
  res.render('departamento', {
    title: 'Gruta del Palacio',
    titleUrl: "Gruta del Palacio - Lugar de Interes - Book Art & Design",
    url: "/img/grutas.jpg",
    tamanoUrl:"-90px",
    parrafoUno:'Ubicado en el departamento de Flores, el Geoparque Grutas del Palacio es un destino ampliamente recomendable para quienes busquen experiencias diferentes y estén interesados en áreas temáticas específicas como la geología, la paleontología y la arqueología. ',
    parrafoDos:"Ingresar en antiguas cavernas, contemplar pinturas rupestres, recorrer bellos paisajes de colinas y cerros, disfrutar de grandes lagos, arroyos y ríos, y admirar una falla geológica de más de un kilómetro de extensión, son sólo algunas de las experiencias que regala este destino ubicado en la región centro sur de Uruguay. ",
    parrafoTres:"El Geoparque Grutas del Palacio , abarca una superficie total de 3.641 km2, y está apenas a dos horas de Montevideo. Es  uno de los dos geoparques existentes en Sudamérica, que cuentan con el reconocimiento de la UNESCO.",
    parrafoCuatro:'Sus formaciones geológicas tienen diferentes edades, que van desde los 2.500 millones de años hasta la actualidad.',
    parrafoCinco:'Fuente: Ministerio de Turísmo.',
    ciudadArreglo:[
      {
        foto: "/img/Talice.jpg",
        citatitulo:"Reserva Rodolfo Tálice.",
        cita:"A solo 3 km de Trinidad,  y con una superficie de 75 há,  alberga  alrededor de 1500 animales de más de 150 especies diferentes, predominando la Fauna Autóctona."
      },
      {
        foto: "/img/Cerro_Ojormin.jpeg",
        citatitulo:"Cerro de Ojosmin.",
        cita:"A 30 kilómetros de  Trinidad, por ruta 57, se encuentra este paisaje de gran complejidad geológica que se considera una “ventana tectónica” o sea un lugar donde se aprecia el choque de placas. Se estima que sus rocas rondan los 2000 millones de años de antiguedad."

      },
      {
        foto: "/img/marpiedra.jpeg",
        citatitulo:"Mar de Piedras.",
        cita:"En la estancia San Martín del Yi, localizada en el norte de Flores se encuentra este importante afloramiento de rocas, con formas curiosas y distintos tamaños."

      }
    ]
  })
})
router.get('/durazno', (req, res) =>{
  res.render('departamento', {
    title: 'Durazno',
    titleUrl: "Durazno - Lugar de Interes - Book Art & Design",
    url: "/img/durazno.jpg",
    tamanoUrl:"-190px",
    parrafoUno:'La ciudad de Durazno se ubica en el corazón del país. Es famosa por sus festivales populares, sus playas sobre el Río Yí y el ánimo alegre de su pueblo.',
    parrafoDos:" De clima templado y con muy poca amplitud térmica, invita a ser descubierta durante todo el año. Está inmersa en el departamento más grande del país, y también el menos densamente poblado junto con Flores.",
    parrafoTres:"Tanto la capital, como el departamento en su conjunto, cuentan con una rica tradición en materia de pesca recreativa que se lleva a cabo durante todo el año, tanto en los caudalosos ríos Yí y Negro como en  generosos arroyos y en los lagos de Rincón del Bonete y Baygorria.",
    parrafoCuatro:'Entre los atractivos que se destacan en Durazno se encuentra el Parque de la Hispanidad, ubicado a pocos kilómetros de la ciudad, donde se realizan los eventos más importantes de la región como el Festival del Folclore y el Encuentro Gaucho.',
    parrafoCinco:'Durazno también tienen lugar las “Primeras llamadas del interior”, donde la ciudad toda vibra al ritmo del tamboril. En Durazno capital, los turistas no pueden dejar de visitar la parroquia de San Pedro, que luego de sufrir un incendio fue remodelada y hoy es considerada una joya arquitectónica por el estilo moderno y avanzado para la época. Fuente: Ministerio de Turísmo',
    ciudadArreglo:[
      {
        foto: "/img/IglesiaSanPedrodeDurazno.jpg",
        citatitulo:"Parroquia de San Pedro.",
        cita:"Ocupa el mismo sitio donde se levantó el primitivo templo de la villa. El edificio actual es el resultado de un largo proceso constructivo que se inició a finales del siglo XIX. Se trata de una obra monumental que lleva la firma del célebre Eladio Dieste."

      },
      {
        foto: "/img/elsauzal.jpg",
        citatitulo:"Playa El Sauzal.",
        cita:"Situada sobre la ribera de Río Yí en su pasaje frente a la ciudad, se extiende una franja de arena que en época estival convoca la mayor concentración de bañistas duraznenses y de su amplia zona de influencia."

      },
      {
        foto: "/img/zoologico.jpg",
        citatitulo:"Bioparque Durazno.",
        cita:"Sobre el kilómetro 183 de la ruta Nacional 5, se encuentra ubicado el zoológico municipal, valorado como uno de los mejores del país."

      }
    ]
  })
})

router.get('/florida', (req, res) =>{
  res.render('departamento', {
    title: 'Florida',
    titleUrl: "Florida - Lugar de Interes - Book Art & Design",
    url: "/img/florida.jpg",
    tamanoUrl:"-190px",
    parrafoUno:'Florida es una ciudad uruguaya, capital del departamento homónimo. Tiene una población de 33 640 habitantes.',
    parrafoDos:"La ciudad de Florida se encuentra situada en la zona suroeste del departamento homónimo, sobre las costas del río Santa Lucía Chico, próximo a la desembocadura del arroyo del Pintado en el mencionado río, y en el cruce de las rutas nacionales 5 y 56. Dista 98 km de la ciudad de Montevideo.",
    parrafoTres:"En 1808 el Presbítero Santiago Figueredo es nombrado cura párroco de Nuestra Señora de Luján, en la Villa del Pintado. Convencido de la inevitable ruina de ese poblado, Figueredo propone al Cabildo de Montevideo el traslado de la población a una estancia en la rinconada que forman el arroyo Pintado y el río Santa Lucía Chico. El Cabildo pide un informe a su síndico procurador, Bernardo Suárez de Rondelo, propietario de la pulpería del Pintado. A partir de ese informe, el Cabildo decide la fundación de una nueva Villa, afectando a ello los terrenos de su Estancia",
    parrafoCuatro:'Así, el 24 de abril de 1809 se realizan simultáneamente dos acciones: la fundación de la Villa de San Fernando de la Florida Blanca, por mandato del Cabildo de Montevideo, ejecutado por Suárez de Rondelo, con los servicios del coronel agrimensor Prudencio Murguiondo y el traslado de la parroquia Nuestra Señora del Luján ejecutado por Figueredo.',
    parrafoCinco:'El nombre de la población es un homenaje al Rey Fernando VII, "el Deseado", entonces prisionero de Napoleón Bonaparte y al válido y favorito real español de inicios del siglo XIX, el Conde de Floridablanca, organizador de la resistencia española contra la invasión francesa, fallecido meses antes. Fuente Intendencia de Florida',
    ciudadArreglo:[
      {
        foto: "/img/florida.jpg",
        citatitulo:"Piedra Alta Sala de Convenciones.",
        cita:"Un emprendimiento único e innovador, nacido de un sueño: otorgarle a Florida un espacio para orgullo y disfrute de los floridenses, con una clara vocación de servicio para satisfacer la exigente demanda de nuestra ciudad y cercanías, lugar de encuentro, de tránsito y de referencia para gran parte de la actividad económica, comercial y social del Uruguay. Piedra Alta Florida está ubicado en el centro mismo de la ciudad, conformado como un espacio multipropósito, que cuenta con un edificio de tres niveles en los que conviven: Salas de convenciones equipadas con la mayor tecnología y servicios. Sala social para celebraciones. Un Restaurant y Confitería. Una sala de atracciones con juegos de azar electrónicos."

      },
      {
        foto: "/img/catedral.jpg",
        citatitulo:"Turismo Cultural - Senderos de Fe.",
        cita:"Florida es el Santuario Nacional de la Virgen de los 33 Orientales, Patrona del Uruguay; es San Cono y popular peregrinación; es la Estancia de los Jesuitas, Ntra. Sra. De los Desamparados, primer agroindustria del Siglo XVIII de la Banda Oriental; y un conjunto de centros religiosos en todo el departamento."

      }
    ]
  })
})
router.get('/colonia', (req, res) =>{
  res.render('departamento', {
    title: 'Colonia del Sacramento',
    titleUrl: "Colonia del Sacramento - Lugar de Interes - Book Art & Design",
    url: "/img/colonia.jpg",
    tamanoUrl:"-190px",
    parrafoUno:'Un barrio histórico patrimonio de la humanidad, quesos que dan que hablar en todo el mundo, y óptimas condiciones náuticas son algunos de los motivos por los que no podés dejar de visitar el oeste. Colonia del Sacramento es uno de los más importantes referentes turísticos del Uruguay, recibiendo miles de visitantes durante el año. A tan sólo una hora de Buenos Aires por barco, y a dos horas de Montevideo por carretera, Colonia del Sacramento es un remanso donde el visitante se encuentra con la cultura, la historia y la magia de un destino ineludible en el Río de la Plata.El encanto de la ciudad está vinculado a la particularidad de su historia.',
    parrafoDos:"Fundada en 1680 por el portugués Manuel Lobo, la ciudad pasó de dominio portugués a dominio español varias veces, hasta la Declaratoria de Independencia de la Banda Oriental en 1825. Estos sucesos hicieron del Casco Histórico de la capital coloniense un crisol de estilos arquitectónicos y urbanísticos en el que conviven estilos coloniales típicamente portugueses y viviendas de porte español. El Casco Histórico de Colonia del Sacramento, declarado Patrimonio Mundial por UNESCO en 1995, atrae a turistas de todo el mundo y es escenario de innumerables producciones fotográficas que buscan captar la magia del lugar.",
    parrafoTres:"Caminar por sus empedradas e irregulares calles permite rememorar la historia, y disfrutar de un paisaje único con vistas privilegiadas del Río de la Plata.La enigmática Calle de los Suspiros, pavimentada con piedras de cuña, posee un encanto único, capaz de transportar al visitante a un mundo de ensueño.",
    parrafoCuatro:'Una visita guiada por el Casco Histórico de Colonia del Sacramento permite sumergirse en la historia y acercarse al rico legado cultural de la ciudad. Museos, teatro, arte, artesanías y una buena gastronomía complementan un abanico de posibilidades para el visitante. Además, la ciudad ofrece al visitante una vasta oferta hotelera de calidad, con opciones que van desde cadenas de hoteles internacionales a las típicas posadas, alojadas en antiguas casas coloniales, así como una gran variedad de alegres y pintorescos restaurantes.',
    parrafoCinco:'Siguiendo por la rambla de la ciudad, paseo que muchos eligen hacer en bicicleta, se llega al Real de San Carlos, antiguo enclave militar español. Allí se encuentra la iglesia de San Benito, con su imagen de santo negro, y el emprendimiento de Nicolás Mihanovich, que a comienzos del siglo XX desarrolló en este lugar un complejo turístico al gusto de la época y que actualmente posee su principal ícono en la Plaza de Toros. Como parte del encanto de la ciudad, Colonia del Sacramento seduce con sus atardeceres sobre el Río de la Plata cargados de color y magia. La vista desde el faro o desde el muelle viejo es, sin duda, un espectáculo que seduce a los sentidos. Consulte sobre circuitos turísticos y paseos guiados.    Fuente: Ministerio de Turísmo',
    ciudadArreglo:[
      {
        foto: "/img/FAROCOLONIA.jpg",
        citatitulo:"Faro de Colonia de Sacramento.",
        cita:"Inaugurado en 1857, está emplazado en la calle San Francisco, entre Plaza Mayor y San Pedro. Se asciende a través de una angosta escalera de caracol que conduce a una de las mejores vistas de la ciudad."

      },
      {
        foto: "/img/Calledelossuspiros.jpg",
        citatitulo:"Calle de los Suspiros.",
        cita:"Esta angosta y pintoresca callecita construida con  adoquines que perviven desde la época colonial,  es la arteria principal del Barrio Histórico y está rodeada de construcciones antiguas de gran interés."

      },
      {
        foto: "/img/PUERTOCOLONIA.jpg",
        citatitulo:"Puerto de Colonia.",
        cita:"Por su cercanía a Buenos Aires, es la principal puerta de entrada desde el país vecino, con intenso tránsito de pasajeros entre las dos orillas del Río de la Plata. Contemplar un atardecer con los buques de fondo resulta una experiencia renovadora."

      }
    ]
  })
})
router.get('/canelones', (req, res) =>{
  res.render('departamento', {
    title: 'Canelones',
    titleUrl: "Canelones - Lugar de Interes - Book Art & Design",
    url: "/img/canelones.jpg",
    tamanoUrl:"-90px",
    parrafoUno:'Los primeros habitantes se afincaron en 1726 y el poblado creció luego de un loteo realizado hacia el año 1730. El proceso de conformación de la ciudad se consolidó con la llegada de inmigrantes canarios y gallegos en 1774. Llamada originalmente "Villa de Nuestra Señora de Guadalupe", fue fundada el 24 de abril de 1783 por orden del virrey Juan José de Vértiz y Salcedo, cuando ya tenía 70 casas, capilla, casa capitular y cárcel. Es por esto que la historia reconoce como su fundador al presbítero Juan Miguel de la Laguna. A este se le autoriza la construcción de la iglesia parroquial (actual Catedral) y la gestión de las radicaciones de familias españolas después de 1774.',
    parrafoDos:"El 12 de mayo de 1811, previo a la batalla de Las Piedras, el general José Artigas situó sus tropas en la Villa Nuestra Señora del Guadalupe, en las cercanías del arroyo Canelón Chico.",
    parrafoTres:"La Villa de Nuestra Señora de Guadalupe llegó a ser capital de la Provincia Oriental en 1813, por nombramiento de José Gervasio Artigas, al ser elegido este Jefe provisional de los orientales. En la Provincia Oriental, con capital en Canelones, estando aquella al mando del Jefe de los Orientales, José Gervasio Artigas, se dictó el Reglamento provisorio de 1815, donde se dispuso el reparto de tierras para los más desfavorecidos, la abolición de la esclavitud, la alfabetización (creación de la primera biblioteca a cargo del Prebístero Dámaso Antonio Larrañaga); la aplicación de lo dispuesto en el Reglamento se vio interrumpida por el inicio de la invasión luso-brasileña.",
    parrafoCuatro:'El 27 de enero de 1816, por decreto del Cabildo de Montevideo, refrendado por José Gervasio Artigas, se creó el departamento de Canelones, uno de los primeros seis en que se dividía la Provincia Oriental y cuya primera jurisdicción se extendía desde el río Santa Lucía hasta Montevideo. La proximidad con Montevideo, centro geopolítico de la Provincia Oriental, convirtió a Guadalupe en un escenario político de relevancia histórica.El 18 de diciembre de 1828 fue creada en Canelones la bandera nacional por la Asamblea General Constituyente y Legislativa del Estado a iniciativa del gobernador provisorio, Joaquín Suárez.',
    parrafoCinco:'El tramo de ferrocarril que la une con Montevideo llegó en 1872 y el primer viaje fue realizado en 1874 (Montevideo-Durazno). El 12 de octubre de 1892 se inauguró el Parque Artigas, conocido también como "el Prado". Molinos, frigoríficos y diversas agroindustrias se establecieron allí a partir de 1900. El 23 de marzo de 1916, por disposición de la ley Nº 5.400, Canelones adquiere la categoría de "ciudad".',
    ciudadArreglo:[
      {
        foto: "/img/politeama.png",
        citatitulo:"Complejo Cultural Politeama.",
        cita:"Teatro Atahualpa del Cioppo. Reinaugurado en el año 2014 luego de varias reformas, es considerado el polo artístico de la ciudad y ámbito céntrico de realización de actividades culturales. Contacto: 1828 Int. 1233."

      },
      {
        foto: "/img/spikerman.png",
        citatitulo:"Museo Spikerman.",
        cita:"En el mismo se exhiben materiales representativos de la etapa fundacional de la ciudad y una valiosa colección numismática y otra de armas pertenecientes al proceso revolucionario Artiguista, a la Cruzada Libertadora y a las guerras civiles de la primera mitad del siglo XIX, además de arañas y un reloj que pertenecieron a jefes políticos del departamento de la misma época. Contacto: (+598) 43323111."

      },
      {
        foto: "/img/bandera.png",
        citatitulo:"Monumento a la bandera.",
        cita:"Ubicado en la plaza 18 de Julio de Canelones, es un monumento de estilo historicista  en homenaje al primer pabellón nacional. Consiste en una figura femenina en postura vertical, con la cabeza erguida y expresión severa. Vestida con una túnica, sostiene una espada en la mano derecha y con la izquierda alza la bandera.",

      },
      {

        foto: "/img/granja.png",
        citatitulo:"Granja de los niños.",
        cita:"Se trata de un espacio interdisciplinario e interinstitucional y educativo, que buscar promover la producción responsable y una cultura de vida saludable, posicionando a la granja como un lugar de referencia en los paseos públicos del área metropolitana. El mismo contempla espacios lúdicos recreativos, un galpón cultural, un sector agroecológico, un espacio pecuario, ludoteca al aire libre, casitas en los árboles, corrales de animales domésticos y un auditorio. Contacto: 43323060"
      }
    ]
  })
})

router.get('/montevideo', (req, res) =>{
  res.render('departamento', {
    title: 'Montevideo',
    titleUrl: "Montevideo - Lugar de Interes - Book Art & Design",
    url: "/img/montevideo.jpg",
    tamanoUrl:"-90px",
    parrafoUno:'Montevideo, capital de la República Oriental del Uruguay, tiene una historia de casi tres siglos, que comienza en la época de la colonia española.',
    parrafoDos:"Entre 1680 y 1683 la soberanía era de España en la región. Los colonizadores portugueses de Brasil establecieron diversos asentamientos sobre las costas del Río de la Plata, frente a la ciudad de Buenos Aires, como Colonia del Sacramento. Sin embargo, los españoles no efectuaron ningún intento para desalojar a los portugueses hasta 1723, cuando comenzaron a fortificar las alturas que rodean la bahía de Montevideo.",
    parrafoTres:"Una expedición española proveniente de Buenos Aires, organizada por el gobernador español en esa ciudad, Bruno Mauricio de Zabala, obligó a los portugueses a abandonar el lugar, en el que los españoles empezaron a poblar la nueva ciudad, inicialmente con seis familias provenientes de Buenos Aires y luego con familias arribadas desde las Islas Canarias; aunque de hecho, ya había un poblador establecido en la zona, el genovés Jorge Burgues. El 20 de diciembre de 1724 se confeccionó un padrón de habitantes y, finalmente, el 24 de diciembre se trazó un plano delineatorio y se la designó como San Felipe y Santiago de Montevideo, nombre que posteriormente sería abreviado en Montevideo.",
    parrafoCuatro:'Según el padrón oficial, en sus orígenes estuvo compuesta por cincuenta familias de origen canario, más 1000 tapes (guaraníes) a los que posteriormente se sumarán africanos de origen bantú de los reinos de Bengela, Ngola y Kongo como esclavos.',
    parrafoCinco:' En 1726 adquirió el estatus de ciudad. La segunda oleada de isleños llegó a la ciudad el 27 de marzo de 1729, treinta familias canarias en esta ocasión',
    ciudadArreglo: [
      {
        foto: "/img/plazamatriz.jpg",
        citatitulo:"Plaza Matriz.",
        cita:"Ubicada en la Ciudad Vieja, entre las calles Peatonal Sarandí y Juan Carlos Gómez,  en esta plaza se respira historia. La Iglesia Matriz, El Cabildo y otros edificios históricos se encuentran rodeando su mítica fuente, uno de los monumentos más bellos de la ciudad."
      },
      {
        foto: "/img/estadio_centenario.jpg",
        citatitulo:"Estadio Centenario.",
        cita:"Ubicado en la zona de Parque Batlle,es el principal escenario deportivo del país, con una imponente infraestructura capaz de albergar hasta 80.000 espectadores. Es posible coordinar visitas guiadas y conocer los hitos que transformaron al fútbol en la mayor pasión de los uruguayos.",
      },
      {
        foto: "/img/Bajo_el_sol_de_otoño.jpeg",
        citatitulo:"Jardín Botánico.",
        cita:"Ubicado en el Prado,  alberga una gran colección de flora de distintas partes del mundo a lo largo y ancho de más de trece hectáreas. El entorno es ideal para extensas jornadas de picnic y para conectarse con la naturaleza, sin salir de la ciudad. El acceso es gratuito.",
      },
      {
        foto: "/img/mercado.jpg",
        citatitulo:"Mercado del Puerto.",
        cita:"Es uno de los puntos de mayor congregación de turistas en la capital. Su gastronomía representa las más arraigadas tradiciones de Uruguay. El asado es el plato predominante y la mayoría de los restaurantes son parilladas pero existen otras opciones. Los espectáculos culturales y las artesanías también son protagonistas en el entorno."
      },
      {
        foto: "/img/teatrosolis.jpeg",
        citatitulo:"Teatro Solis.",
        cita:"El Teatro Solís es el principal teatro de Uruguay, ubicado en la ciudad de Montevideo. Inaugurado en 1856. El teatro es uno de los escenarios más importantes del país, con una capacidad para 1.500 espectadores."
      },
      {
        foto: "/img/sodre.jpeg",
        citatitulo:"Auditorio Nacional de Sodre Dra. Adela Reta.",
        cita:"El Auditorio Nacional Adela Reta fue inaugurado el 21 de noviembre de 2009 siendo hoy el espacio que alberga a los Cuerpos Estables del Sodre: la Orquesta Sinfónica, el Ballet Nacional, la Orquesta Juvenil, el Coro Nacional y el Conjunto de Música de Cámara, brindando a los artistas condiciones locativas inmejorables tanto para su trabajo diario como para sus presentaciones y espectáculos ante el público. Cuenta con dos salas: Eduardo Fabini y Hugo Balzo, además de un anfiteatro, salas de ensayo para los cuerpos estables y talleres donde se realiza la producción de montajes escénicos"
      }
    ]
  })
})
 
router.get('/santalucia', (req, res) =>{
  res.render('departamento', {
    title: 'Santa Lucía',
    titleUrl: "Santa Lucía - Lugar de Interes - Book Art & Design",
    url: "/img/Plaza_Tomas_Berreta.jpeg",
    tamanoUrl:"-90px",
    parrafoUno:'Sus comienzos datan del año 1839, llamado «Guardia de los Paraguayos» por ser su pobladores oriundos de la misma gobernación. Pasan algunos años hasta que el 26 de octubre de 1781, llegan al lugar Francisco Zurdo y acompañado de su familia quines serían los primeros pobladores. Días más tarde el 9 de noviembre de ese mismo año, por orden del entonces virrey Juan José de Vértiz y con consentimiento del propietario se produce el reparto de tierras, que comprendía la zona desde el paso del arroyo Canelón Grande al paso del Bote sobre el río Santa Lucía. En 1783 se realiza el primer cabildo de la ciudad siendo su primer nombre el de Villa San Juan Bautista. En ese mismo año se produce su fundación legal, si bien el comienzo del proceso se inicia en 1781',
    parrafoDos:"Su primer capilla, que se denominara San Juan Bautista, comenzó a construirse el 1º de diciembre de 1782, quedando finalizada pocos meses después. Años más tarde, en 1830 se coloca la piedra fundamental de la nueva iglesia, pero dicha obra no se concreta hasta que en 1854 se obtienen los fondos para tal fin, siendo el arquitecto Alberto Capurro el director de la obra que finalizara varias décadas después6​ con la consagración de la Parroquia San Juan Bautista.",
    parrafoTres:"A partir del año 1862, comienzan a instalarse en la localidad varias casas quintas y Palacetes que se caracterizaban por ser viviendas suntuosas, con grandes jardines y usadas para veraneo, un ejemplo de ello es el Palacio Lacueva, que fuera construido por la familia Lacueva en 1866. Esto lleva a que la localidad sea considerada como el primer centro turístico del país.",
    parrafoCuatro:'En 1872 llega el servicio de ferrocarril a la localidad inaugurándose la estación Santa Lucía. En ese mismo año, el 1º de septiembre, se inaugura el primer hotel turístico de Uruguay, que hasta el año 1920 se denominó Hotel Oriental, en dicho año cambia su nombre por el de The Biltmore Hotel.',
    parrafoCinco:'El 15 de mayo de 1925, por Ley 7.837, la Villa San Juan Bautista es elevada a la categoría de ciudad y cambia su nombre al actual Santa Lucía. A partir del año 1920 decae su actividad turística, debido al surgimiento de los balnearios en las costas de Canelones y Maldonado. Sin embargo a partir de la década de 1940 se convierte en una importante zona fabril, aprovechando el proteccionismo económico que el país llevó a cabo hasta finales de la década del 70. Luego de la apertura económica, este auge llegó a su fin y Santa Lucía pasa a ser un centro de servicios, en cuyos alrededores se desarrolla la agricultura.',
    ciudadArreglo: [
      {
        foto: "/img/quintacapurro.jpg",
        citatitulo:"Quinta Capurro.",
        cita:"Ícono de la época más esplendorosa de la ciudad, cuando era un destino de veraneo elegido por la aristocracia montevideana esta casa quinta construida en 1873, hoy propiedad de la Intendencia de Canelones resulta ineludible. Cuenta con una gran reserva forestal y un museo con entrada libre. Horarios: Luneas a domingo de 10.30 a 17 horas.       Contacto: 4334 6137. "
      },
      {
        foto: "/img/casarodo.jpg",
        citatitulo:"Centro Cultural Enrique Rodó.",
        cita:"Este monumento histórico Nacional consta de una casona con estilo morisco-español rodeada de un cautivante jardín. Hasta 1984, esta casa perteneció a la familia del escritor José Enrique Rodó, quien durante su niñez disfrutó los veranos allí. Contacto: 43346782",
      }
    ]
  })
})
router.get('/laspiedras', (req, res) =>{
  res.render('departamento', {
    title: 'Las Piedras',
    titleUrl: "Las Piedras - Lugar de Interes - Book Art & Design",
    url: "/img/obelisco.jpg",
    tamanoUrl:"-490px",
    parrafoUno:'Las Piedras es una ciudad de Uruguay perteneciente al departamento de Canelones. Es además sede del municipio homónimo.',
    parrafoDos:"La ciudad se ubica al sur del departamento de Canelones, sobre las costas del arroyo Las Piedras, límite con el departamento de Montevideo. Forma parte del área Metropolitana de Montevideo.",
    parrafoTres:"La Asociación Histórica de Las Piedras considera que el proceso de fundación de la actual Las Piedras comenzó un 8 de marzo de 1744, cuando Luis de Sosa Mascareñas recibe como donación un terreno de una legua cuadrada.",
    parrafoCuatro:'El primer nombre de la actual ciudad fue San Isidro Labrador de Las Piedras y a partir de 1925 se la reconoce como ciudad. Su nombre tiene origen en las piedras que caracterizaban al vado por donde las carretas y diligencias en tránsito hacia y desde Montevideo cruzaban el arroyo homónimo.',
    parrafoCinco:'En la ciudad se erige el Obelisco de Las Piedras que conmemora una de las victorias más importantes del ejército de José Gervasio Artigas sobre las tropas españolas. El 18 de mayo de 1811 el ejército oriental derrotó las tropas españolas al mando de José Posadas en la denominada batalla de Las Piedras.',
    ciudadArreglo: [
      {
        foto: "/img/escenario.png",
        citatitulo:"Escenario Don José.",
        cita:"Fue inaugurado en el marco de los festejos de un nuevo Aniversario de la Batalla de Las Piedras en el año 2015. Esta excelente obra arquitectónica fue realizada en base al sistema constructivo del Ing. Eladio Dieste y llevada adelante por la empresa Dieste Montañez, empresa que el famoso ingeniero fundara junto a su socio Eugenio Montañez, en la década de 1950."
      },
      {
        foto: "/img/obeliscodos.png",
        citatitulo:"Obselisco de Las Piedras.",
        cita:"El 25 de mayo de 1911 se inauguró este monumento en homenaje al centenario de la batalla de Las Piedras. La obra fue realizada por el escultor Juan Manuel Ferrari. Una imagen de la Victoria en bronce luce en la parte superior del monumento. En el entorno del monumento se encuentra el Parque Artigas, ubicado en el lugar donde habría sucedido la emblemática batalla.",
      },
      {
        foto: "/img/sosa.png",
        citatitulo:"Museo Julio Sosa.",
        cita: 'Creado en homenaje al "Varón del Tango" nacido en Las Piedras. Se trata de un Espacio Cultural ubicado en las instalaciones del Hipódromo de Las Piedras en el que se desarrollan muestras y exposiciones de la cultura predense. Contacto: 4332 0365',
      }
    ]
  })
})
// OBRAS DE OLIVERI
router.use(require('./oliveri'))
router.use(require('./obrasOliveri'))

// OBRAS GIACOYA
router.use(require('./giacoya'))
router.use(require('./obrasGiacoya'))

// OBRAS DE ALBERNAZ
router.use(require('./albernaz'))

// OBRAS DE MANUELE
router.use(require('./manuele'))

// OBRAS DE MASCOLO
router.use(require('./mascolo'))


// router.get('/exito', (req, res)=>{
//   res.render('exito',{
//     exito:"exito"
//   })
// })
router.post('/enviar',urlencodedParser, (req, res) => {
    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'carlosdaniel8@gmail.com',
          pass: process.env.CONTRASENA_MAIL
        }
      });
      
      var mailOptions = {
        from: 'Carlos Sánchez <carlosdaniel8@gmail.com>',
        to: req.body.email,
        subject: "Soy Artista",
        text: req.body.asuntoTxt
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.render('sobreNosotros', {
             titulo: "Error al enviar el email"
                    })
        } else {
          console.log('Email sent: ' + info.response);
          res.redirect('/')
        }
      });
    
});

router.post('/inscripciones',urlencodedParser, (req, res) => {
    
  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'guiabookart@gmail.com',
        pass: process.env.CONTRASENA_BOOK
      }
    });
    
    var mailOptions = {
      from: req.body.email,
      to: 'guiabookart@gmail.com',
      subject: req.body.asunto,
      text: "Nombre: " + req.body.nombre + "Apellido: " + req.body.apellido + "Mail: " + req.body.email + "Asunto: " + req.body.asunto
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.render('sobreNosotros', {
           titulo: "Error al enviar el email"
                  })
      } else {
        console.log('Email sent: ' + info.response);
        res.redirect('/')
        
      }
    });
  
});

router.post('/comprar',urlencodedParser, (req, res) => {
    
  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'guiabookart@gmail.com',
        pass: process.env.CONTRASENA_BOOK
      }
    });
    
    var mailOptions = {
      from: req.body.email,
      to: 'guiabookart@gmail.com',
      subject: req.body.asunto,
      text: "Nombre: " + req.body.nombre + "Apellido: " + req.body.apellido + "Mail: " + req.body.email + " Tel:" + req.body.tel + "Obra: " + req.body.obra + "Asunto: " + req.body.asunto 
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.render('sobreNosotros', {
           titulo: "Error al enviar el email"
                  })
      } else {
        console.log('Email sent: ' + info.response);
        res.render('exito')
      }
    });
  
});
// Error 404 siempre va a lo último de todo
router.use(( req, res, next) => {
    let error = new Error(),
        locals = {
            title: 'Error 404',
            descripcion: 'Recurso no encontrado',
            error: error
    } 
    error.status = 404
    
    res.render('error', locals)
    
    next()
    
});


module.exports = router;