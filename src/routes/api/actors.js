const express = require('express');
const router = express.Router();
const {list,detail,actorMovies,create,update,destroy} = require('../../controllers/api/actorsAPIController');

//Rutas
//Listado de todos los actores
router.get('/', list);
//Detalle del actor
router.get('/:id', detail);
//En que peliculas trabajo el actor con id tal
router.get('/:id/movies', actorMovies);

//Agregar un actor
router.post('/create', create);
//Modificar un actor
router.put('/update/:id',update);
//Eliminar un actor
router.delete('/delete/:id',destroy);

module.exports = router;