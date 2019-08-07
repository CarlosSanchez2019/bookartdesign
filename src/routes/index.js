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

router.get('/minas', (req, res) =>{
  res.render('departamento', {
    title: 'Minas',
    titleUrl: "Minas - Lugar de Interes - Book Art & Design",
    url: "url(/img/minas.jpg)",
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
    url: "url(/img/la-pedrera.jpg)",
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
    url: "url(/img/La-Paloma.jpg)",
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
    url: "url(/img/puente-laguna-garzon.jpg)",
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
    url: "url(/img/joseignacio.jpg)",
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
    url: "url(/img/cabo-polonio.jpg)",
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
    url: "url(/img/trinidad.jpg)",
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
    url: "url(/img/sanjose.jpg)",
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
    url: "url(/img/lapaz.jpg)",
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
    url: "url(/img/grutas.jpg)",
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
    url: "url(/img/durazno.jpg)",
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
    url: "url(/img/florida.jpg)",
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
    url: "url(/img/colonia.jpg)",
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
    url: "url(/img/canelones.jpg)",
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
    url: "url(/img/montevideo.jpg)",
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
    url: "url(/img/Plaza_Tomas_Berreta.jpeg)",
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
    url: "url(/img/obelisco.jpg)",
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


router.get('/exito', (req, res)=>{
  res.render('exito',{
    exito:"exito"
  })
})
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
        res.redirect('/exito')
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