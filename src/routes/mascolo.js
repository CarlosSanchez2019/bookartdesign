const express = require('express');

const router = express.Router();

const mascolo = require('../bio/bioMascolo')

router.get('/monicamascolo', (req, res) =>{
    res.render('artistaId', {
      titleArt: mascolo.titleArt,
      title: mascolo.title,
      url: mascolo.url,
      urlPerfil: mascolo.urlPerfil,
      parrafoUno: mascolo.parrafoUno,
      parrafoDos: mascolo.parrafoDos,
      parrafoTres: mascolo.parrafoTres,
      parrafoCuatro: mascolo.parrafoCuatro,
      parrafoCinco: mascolo.parrafoCinco,
      general: [
        {
          obra: mascolo.obraUno,
          titulo: mascolo.tituloObraUno,
          tamano: mascolo.tamanoObraUno,
          tecnica: mascolo.tecnicaObraUno,
          ano: mascolo.anoObraUno,
          enlace: mascolo.enlaceUno
        },
        {
          obra: mascolo.obraDos,
          titulo: mascolo.tituloObraDos,
          tamano: mascolo.tamanoObraDos,
          tecnica: mascolo.tecnicaObraDos,
          ano: mascolo.anoObraDos,
          enlace: mascolo.enlaceDos
        },
        {
          obra: mascolo.obraTres,
          titulo: mascolo.tituloObraTres,
          tamano: mascolo.tamanoObraTres,
          tecnica: mascolo.tecnicaObraTres,
          ano: mascolo.anoObraTres,
          enlace: mascolo.enlaceTres
        },
        {
          obra: mascolo.obraCuatro,
          titulo: mascolo.tituloObraCuatro,
          tamano: mascolo.tamanoObraCuatro,
          tecnica: mascolo.tecnicaObraCuatro,
          ano: mascolo.anoObraCuatro,
          enlace: mascolo.enlaceCuatro
        },
        {
          obra: mascolo.obraCinco,
          titulo: mascolo.tituloObraCinco,
          tamano: mascolo.tamanoObraCinco,
          tecnica: mascolo.tecnicaObraCinco,
          ano: mascolo.anoObraCinco,
          enlace: mascolo.enlaceCinco
        }
      ]
    })
})

module.exports = router;