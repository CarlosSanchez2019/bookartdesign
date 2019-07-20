const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

//Rutas
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/sobrenosotros', (req, res) => {
    res.render('sobreNosotros',{
      title: "Sobre Nosotros"
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
    parrafoCinco: 'Su obra está presente en colecciones nacionales e internacionales.'
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
    urlPerfil: '/img/albernaz/109fotoautor.jpg'
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
    parrafoCinco: 'Sus obras se encuentran en entidades públicas y privadas en Uruguay, Argentina, Brasil, Venezuela, Irlanda, Puerto Rico, Alemania, Francia, EE.UU, Emiratos Árabes, Corea del Sur, entre otros.'
  })
})

router.get('/contacto', (req, res) =>{
  res.render('contacto', {
    titleArt: 'Contacto - Book Art & Design',
    title: 'Contactanos'
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