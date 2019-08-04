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
      obraUno: oliveri.obraUno,
      obraDos: oliveri.obraDos, 
      obraTres: oliveri.obraTres,
      tituloObraUno:oliveri.tituloObraUno,
      tamanoObraUno: oliveri.tamanoObraUno,
      tecnicaObraUno:oliveri.tecnicaObraUno,
      anoObraUno:oliveri.anoObraUno,
      tituloObraDos: oliveri.tituloObraDos,
      tamanoObraDos: oliveri.tamanoObraDos,
      tecnicaObraDos: oliveri.tecnicaObraDos,
      anoObraDos:oliveri.anoObraDos,
      tituloObraTres: oliveri.tituloObraTres,
      tamanoObraTres: oliveri.tamanoObraTres,
      tecnicaObraTres:oliveri.tecnicaObraTres,
      anoObraTres:oliveri.anoObraTres,
      enlaceUno:oliveri.enlaceUno,
      enlaceDos:oliveri.enlaceDos,
      enlaceTres:oliveri.enlaceTres
    })
  })

  module.exports = router;