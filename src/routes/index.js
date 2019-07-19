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
    url: 'url(/img/1883-obra-gde.jpg)'
  })
})

router.get('/sebastianmanuele', (req, res) =>{
  res.render('artistaId', {
    titleArt: 'Sebastián Emanuele',
    title: 'Sebastián Emanuele',
    url: 'url(/img/sebastian.jpg)'
  })
})

router.get('/carolinaalbernaz', (req, res) =>{
  res.render('artistaId', {
    titleArt: 'Carolina Albernaz',
    title: 'Carolina Albernaz',
    url: 'url(/img/caro.jpg)'
  })
})
router.get('/fernandooliveri', (req, res) =>{
  res.render('artistaId', {
    titleArt: 'Fernando Oliveri',
    title: 'Fernando Oliveri',
    url: 'url(/img/oliveri.jpg)'
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