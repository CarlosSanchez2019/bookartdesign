const express = require('express');

const router = express.Router();

router.get('/sebastianmanuele', (req, res) =>{
    res.render('artistaId', {
      titleArt: 'Sebastián Manuele',
      title: 'Sebastián Manuele',
      url: 'url(/img/sebastian.jpg)',
      urlPerfil: '/img/manuele/199fotoautor.jpg'
    })
})

module.exports = router