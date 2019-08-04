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
      obraUno: giacoya.obraUno,
      obraDos: giacoya.obraDos, 
      obraTres: giacoya.obraTres,
      tituloObraUno:giacoya.tituloObraUno,
      tamanoObraUno: giacoya.tamanoObraUno,
      tecnicaObraUno:giacoya.tecnicaObraUno,
      anoObraUno:giacoya.anoObraUno,
      tituloObraDos: giacoya.tituloObraDos,
      tamanoObraDos: giacoya.tamanoObraDos,
      tecnicaObraDos: giacoya.tecnicaObraDos,
      anoObraDos:giacoya.anoObraDos,
      tituloObraTres: giacoya.tituloObraTres,
      tamanoObraTres: giacoya.tamanoObraTres,
      tecnicaObraTres:giacoya.tecnicaObraTres,
      anoObraTres:giacoya.anoObraTres,
      enlaceUno:giacoya.enlaceUno,
      enlaceDos:giacoya.enlaceDos,
      enlaceTres:giacoya.enlaceTres
    })
})

module.exports = router;