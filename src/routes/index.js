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