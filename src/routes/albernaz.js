const express = require('express');

const router = express.Router();

router.get('/carolinaalbernaz', (req, res) =>{
    res.render('artistaId', {
      titleArt: 'Carolina Albernaz',
      title: 'Carolina Albernaz',
      url: 'url(/img/caro.jpg)',
      urlPerfil: '/img/albernaz/109fotoautor.jpg',
      parrafoUno:'Carolina Albernaz, nace en la ciudad de Salto, Uruguay, desarrolla actividades dentro del campo del dibujo, la pintura, fotografía, diseño, muralismo y la docencia, trabajando con escuelas e instituciones. Hasta la fecha ha expuesto en la ciudades de Salto, Maldonado, Montevideo y sus obras pertenecen a colecciones particulares en Argentina, Brasil, España y Estados Unidos.',
      parrafoDos:'Hoy radicada en Montevideo, orienta el taller Baúl de Roble y dirige proyectos como Acercamiento a las Artes.',
      parrafoTres:'Expocisiones: 2000 en el Hotel Horacio Quiroga, 2003 al 2008 exposición permanente de retratos y caricaturas en diversas técnicas, en el Hotel Los Naranjos. 2004 a 2010 exposiciones itinerantes por el país. 2003 colectiva junto al taller de la Intendecia de Salto, APLAS (Asociación de Plásticos Salteños). 2004 colectiva con el taller de los Pájaros Pintados. 2005 Encuentro de dibujantes en el Ex Mercado 18 de Julio. 2010/11/12/13/14 exposiciones colectivas con el Grupo Artistas Unidos con reconocimiento en los premios Victoria',
      parrafoCuatro:'2014 exposición en el Hotel Nogaró de Punta del Este, exposición curada por el galerísta Sebastián Manuele. 2016, primera exposición individual en el Hotel Sisai, llamada "Como nos Miramos".',
      parrafoCinco: 'Actualmente, se encuentra liderando, junto al Artista, Galerista y Curador, Sebastián Manuele, la Guía Nacional de las Artes Visuales, Book Art & Design.'
    })
})

module.exports = router;
