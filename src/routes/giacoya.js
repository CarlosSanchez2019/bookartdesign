const express = require('express');

const router = express.Router();

const giacoya = require('../bio/bioGiacoya')

router.get('/mariogiacoya', (req, res) =>{
    res.render('artistaId', {
      titleArt: giacoya.titleArt,
      title: giacoya.title,
      url: giacoya.url,
      urlPerfil: giacoya.urlPerfil,
      parrafoUno: giacoya.parrafoUno,
      parrafoDos: giacoya.parrafoDos,
      parrafoTres: giacoya.parrafoTres,
      parrafoCuatro: giacoya.parrafoCuatro,
      parrafoCinco: giacoya.parrafoCinco,
      general: [
        {
          obra: giacoya.obraUno,
          titulo: giacoya.tituloObraUno,
          tamano: giacoya.tamanoObraUno,
          tecnica: giacoya.tecnicaObraUno,
          ano: giacoya.anoObraUno,
          enlace: giacoya.enlaceUno
        },
        {
          obra: giacoya.obraDos,
          titulo: giacoya.tituloObraDos,
          tamano: giacoya.tamanoObraDos,
          tecnica: giacoya.tecnicaObraDos,
          ano: giacoya.anoObraDos,
          enlace: giacoya.enlaceDos
        },
        {
          obra: giacoya.obraTres,
          titulo: giacoya.tituloObraTres,
          tamano: giacoya.tamanoObraTres,
          tecnica: giacoya.tecnicaObraTres,
          ano: giacoya.anoObraTres,
          enlace: giacoya.enlaceTres
        }
      ]
      
    })
})

module.exports = router;