const express = require('express');

const router = express.Router();

const oliveri = require('../bio/bioOliveri')

router.get('/fernandooliveri', (req, res) =>{
    res.render('artistaId', {
      titleArt: oliveri.titleArt,
      title: oliveri.title,
      url: oliveri.url,
      urlPerfil: oliveri.urlPerfil,
      parrafoUno: oliveri.parrafoUno,
      parrafoDos: oliveri.parrafoDos,
      parrafoTres: oliveri.parrafoTres,
      parrafoCuatro: oliveri.parrafoCuatro,
      parrafoCinco: oliveri.parrafoCinco,
      general: [
        {
          obra: oliveri.obraUno,
          titulo: oliveri.tituloObraUno,
          tamano: oliveri.tamanoObraUno,
          tecnica: oliveri.tecnicaObraUno,
          ano: oliveri.anoObraUno,
          enlace: oliveri.enlaceUno
        },
        {
          obra: oliveri.obraDos,
          titulo: oliveri.tituloObraDos,
          tamano: oliveri.tamanoObraDos,
          tecnica: oliveri.tecnicaObraDos,
          ano: oliveri.anoObraDos,
          enlace: oliveri.enlaceDos
        },
        {
          obra: oliveri.obraTres,
          titulo: oliveri.tituloObraTres,
          tamano: oliveri.tamanoObraTres,
          tecnica: oliveri.tecnicaObraTres,
          ano: oliveri.anoObraTres,
          enlace: oliveri.enlaceTres
        }
      ]
      
    })
  })

  module.exports = router;