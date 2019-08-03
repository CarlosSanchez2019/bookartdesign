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

router.get('/mariogiacoya', (req, res) =>{
  res.render('artistaId', {
    titleArt: 'Mario Giacoya',
    title: 'Mario Giacoya',
    url: 'url(/img/1883-obra-gde.jpg)',
    urlPerfil: '/img/giacoya/179fotoautor.jpg',
    parrafoUno:'Giacoya, nacido en Sarandí Grande (Florida, Uruguay) el 31 de diciembre de 1951, se inscribe entre los artistas de interés de la nueva generación.',
    parrafoDos:'Su trayectoria artística comenzó en 1964, a la edad de 12 años, con una muestra en el Salón Departamental de Florida (Uruguay). En 1978 se radica en Montevideo (Uruguay).',
    parrafoTres:'Su formación estuvo muy signada por sus docentes. En primer lugar con Daymán Antunez, artista vinculado al Taller Torres García, luego en el año 1981 comienza su trabajo con el gran maestro colorista Miguel Ángel Pareja. La primera presencia internacional de Giacoya se produjo en 1986 cuando expuso en la Galería Magister de la ciudad de Asunción (Paraguay). Posteriormente, sus obras se exhibieron en Brasil, Estados Unidos, Gran Bretaña y Japón.',
    parrafoCuatro:'Giacoya fue definido como "un pintor auténticamente ingenuo, que tiene el don de seguir viendo el mundo con los ojos puros e incontaminados de la infancia, recreando la pérdida gracia preternatural en cuadros de frescura y candor edénico". Sus temas participan de la nostalgia y de los recuerdos. La base de su temática la constituyen la iconografía y la mitología.',
    parrafoCinco: 'Su obra está presente en colecciones nacionales e internacionales.',
    obraUno:'img/giacoya/obra1.jpg',
    obraDos: 'img/giacoya/obra2.jpg', 
    obraTres:'img/giacoya/obra3.jpg',
    tituloObraUno:'Título: Granja Amanbay',
    tamanoObraUno: 'Tamaño: 150 x 120 cm',
    tecnicaObraUno:'Técnica: Acrílico sobre tela.',
    anoObraUno:'Año: 2015',
    tituloObraDos:'Título: El encanto de volar.',
    tamanoObraDos: 'Tamaño: 150 x 140 cm',
    tecnicaObraDos:'Técnica: Acrílico sobre tela.',
    anoObraDos:'Año: 2017',
    tituloObraTres:'Título: Sin Título',
    tamanoObraTres: 'Tamaño: 120 x 120 cm',
    tecnicaObraTres:'Técnica: Acrílico sobre tela.',
    anoObraTres:'Año: 2017',
    enlaceUno:'/granja_amanbay',
    enlaceDos:'/el_encanto_de_volar',
    enlaceTres:'/obragiacoya'
  })
})

router.get('/sebastianmanuele', (req, res) =>{
  res.render('artistaId', {
    titleArt: 'Sebastián Manuele',
    title: 'Sebastián Manuele',
    url: 'url(/img/sebastian.jpg)',
    urlPerfil: '/img/manuele/199fotoautor.jpg'
  })
})

router.get('/carolinaalbernaz', (req, res) =>{
  res.render('artistaId', {
    titleArt: 'Carolina Albernaz',
    title: 'Carolina Albernaz',
    url: 'url(/img/caro.jpg)',
    urlPerfil: '/img/albernaz/109fotoautor.jpg',
    parrafoUno:'Carolina Albernaz, nace en la ciudad de Salto, Uruguay, desarrolla actividades dentro del campo del dibujo, la pintura, fotografía, diseño, muralismo y la docencia, trabajando con escuelas e instituciones. Hasta la fecha ha expuesto en la ciudades de Salto, Maldonado, Montevideo y sus obras pertenecen a colecciones particulares en Argentina, Brasil, España y Estados Unidos.',
    parrafoDos:'Hoy radicada en Montevideo, orienta el taller Baúl de Roble y dirige proyectos como Acercamiento a las Artes.',
    parrafoTres:'Expocisiones: 2000 en el Hotel Horacio Quiroga, 2003 al 2008 exposición permanente de retratos y caricaturas en diversas técnicas, en el Hotel Los Naranjos. 2004 a 2010 exposiciones itinerantes por el país. 2003 colectiva junto al taller de la Intendecia de Salto, APLAS (Asociación de Plásticos Salteños). 2004 colectiva con el taller de los Pájaros Pintados. 2005 Encuentro de dibujantes en el Ex Mercado 18 de Julio. 2010/11/12/13/14 exposiciones colectivas con el Grupo Artistas Unidos con reconocimiento en los premios Victoria',
    parrafoCuatro:'2014 exposición en el Hotel Nogaró de Punta del Este, exposición curada por el galerísta Sebastián Manuele. 2016, primera exposición individual en el Hotel Sisai, llamada "Como nos Miramos".',
    parrafoCinco: 'Actualmente, se encuentra liderando, junto al Artista, Galerista y Curador, Sebastián Manuele, la Guía Nacional de las Artes Visuales, Book Art & Design.'
  })
})
router.get('/fernandooliveri', (req, res) =>{
  res.render('artistaId', {
    titleArt: 'Fernando Oliveri',
    title: 'Fernando Oliveri',
    url: 'url(/img/oliveri.jpg)',
    urlPerfil: '/img/oliveri/189fotoautor.jpg',
    parrafoUno:'Fernando Oliveri (Montevideo,11 de Agosto de 1957) es pintor Uruguayo. En 1978 se traslada a Montevideo donde ingresa a la Escuela de Bellas Artes San Fco de Asís a cargo del pintor Clever Lara donde permanece hasta el año 1981.',
    parrafoDos:'Luego concurre al taller del reconocido pintor uruguayo Gustavo Alamon, donde permanece por espacio de 8 años. Luego en el 1986 asiste al Club de Grabado de Montevideo',
    parrafoTres:'Desde 1982 hasta la fecha ha participado en diferentes exposiciones individuales y colectivas en el país y en el exterior, obteniendo premios y distinciones. Representa a Uruguay en el X Salón de Arte Iberoamericano en el Instituto Cultural Mexicano (Washington DC- EE.UU) también representa a Uruguay en Arte Contemporáneo de America Latina en Corea. ',
    parrafoCuatro:'En el año 2000 crea su propio taller hasta la fecha.',
    parrafoCinco: 'Sus obras se encuentran en entidades públicas y privadas en Uruguay, Argentina, Brasil, Venezuela, Irlanda, Puerto Rico, Alemania, Francia, EE.UU, Emiratos Árabes, Corea del Sur, entre otros.',
    obraUno:'img/oliveri/obra1.jpg',
    obraDos: 'img/oliveri/obra2.jpg', 
    obraTres:'img/oliveri/obra3.jpg',
    tituloObraUno:'Título: Visión',
    tamanoObraUno: 'Tamaño: 140 x 110 cm',
    tecnicaObraUno:'Técnica: Óleo sobre tela.',
    anoObraUno:'Año: 2017',
    tituloObraDos:'Título: Astor.',
    tamanoObraDos: 'Tamaño: 120 x 150 cm',
    tecnicaObraDos:'Técnica: Óleo sobre tela.',
    anoObraDos:'Año: 2017',
    tituloObraTres:'Título: La Visión de Pablo',
    tamanoObraTres: 'Tamaño: 150 x 120 cm',
    tecnicaObraTres:'Técnica: Óleo sobre tela.',
    anoObraTres:'Año: 2017',
    enlaceUno:'/vision',
    enlaceDos:'/astor',
    enlaceTres:'/la_vision_de_pablo'
  })
})

router.get('/contacto', (req, res) =>{
  res.render('contacto', {
    titleArt: 'Contacto - Book Art & Design',
    title: 'Contactanos'
  })
})
router.get('/vision', (req, res) =>{
  res.render('artistasCompra', {
    titleArt: 'Fernando Oliveri - Visión',
    title: 'Fernando Oliveri - Visión',
    url: 'url(img/oliveri/obra1.jpg)',
    obraUno:'img/oliveri/obra1.jpg',
    tituloObraUno:'Visión',
    tamanoObraUno: '140 x 110 cm',
    tecnicaObraUno:'Óleo sobre tela.',
    anoObraUno:'2017',
    precio: 'US$ 8000',
    urlVolver:"/fernandooliveri"
  })
})
router.get('/astor', (req, res) =>{
  res.render('artistasCompra', {
    titleArt: 'Fernando Oliveri - Astor',
    title: 'Fernando Oliveri - Astor',
    url: 'url(img/oliveri/obra2.jpg)',
    obraUno:'img/oliveri/obra2.jpg',
    tituloObraUno:'Astor',
    tamanoObraUno: '120 x 150 cm',
    tecnicaObraUno:'Óleo sobre tela.',
    anoObraUno:'2017',
    precio: 'US$ 8000',
    urlVolver:"/fernandooliveri"
  })
})
router.get('/la_vision_de_pablo', (req, res) =>{
  res.render('artistasCompra', {
    titleArt: 'Fernando Oliveri - La Visión de Pablo',
    title: 'Fernando Oliveri - La Visión de Pablo',
    url: 'url(img/oliveri/obra3.jpg)',
    obraUno:'img/oliveri/obra3.jpg',
    tituloObraUno:'La Visión de Pablo',
    tamanoObraUno: '150 x 120 cm',
    tecnicaObraUno:'Óleo sobre tela.',
    anoObraUno:'2017',
    precio: 'US$ 8000',
    urlVolver:"/fernandooliveri"
  })
})
router.get('/granja_amanbay', (req, res) =>{
  res.render('artistasCompra', {
    titleArt: 'Mario Giacoya - Granja Amanbay',
    title: 'Mario Giacoya - Granja Amanbay',
    url: 'url(img/giacoya/obra1.jpg)',
    obraUno:'img/giacoya/obra1.jpg',
    tituloObraUno:'Granja Amanbay',
    tamanoObraUno: '150 x 120 cm',
    tecnicaObraUno:'Acrílico sobre tela.',
    anoObraUno:'2015',
    precio: 'US$ 3000',
    urlVolver:"/mariogiacoya"
  })
})
router.get('/el_encanto_de_volar', (req, res) =>{
  res.render('artistasCompra', {
    titleArt: 'Mario Giacoya - El encanto de volar',
    title: 'Mario Giacoya - El encanto de volar',
    url: 'url(img/giacoya/obra2.jpg)',
    obraUno:'img/giacoya/obra2.jpg',
    tituloObraUno:'El encanto de volar',
    tamanoObraUno: '150 x 140 cm.',
    tecnicaObraUno:'Acrílico sobre tela.',
    anoObraUno:'2017',
    precio: 'US$ 5000',
    urlVolver:"/mariogiacoya"
  })
})
router.get('/obragiacoya', (req, res) =>{
  res.render('artistasCompra', {
    titleArt: 'Mario Giacoya',
    title: 'Mario Giacoya',
    url: 'url(/img/giacoya/obra3.jpg)',
    obraUno:'img/giacoya/obra3.jpg',
    tituloObraUno:'Sin Título',
    tamanoObraUno: '120 x 120 cm.',
    tecnicaObraUno:'Acrílico sobre tela.',
    anoObraUno:'2017',
    precio: 'US$ 2700',
    urlVolver:"/mariogiacoya"
  })
})
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
          pass: '43543071Dd$'
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
        pass: 'bookart2020'
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
        pass: 'bookart2020'
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