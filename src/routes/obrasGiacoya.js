const express = require('express');

const router = express.Router();

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

  module.exports = router