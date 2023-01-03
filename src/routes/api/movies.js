const express = require('express');
const router = express.Router();
const {list,detail,recomended,create,update,destroy} = require('../../controllers/api/moviesAPIController');

//Rutas
//Listado de películas
router.get('/', list);
//Detalle de una película
router.get('/:id', detail);
//Filtrar películas por rating. Puede colocar desde 1 hasta 10
router.get('/recomended/:rating',recomended);
//Agregar una película
router.post('/create', create);
//Modificar una película
router.put('/update/:id', update);
//Eliminar una película
router.delete('/delete/:id', destroy);

module.exports = router;