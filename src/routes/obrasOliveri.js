const express = require('express');

const router = express.Router();

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

  module.exports = router