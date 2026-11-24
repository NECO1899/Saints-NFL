import { Router } from 'express';
import {
  //actualizarTemporadaPlantilla,
  //crearTemporadaPlantilla,
  //eliminarTemporadaPlantilla,
  obtenerTemporadaPlantillaPorId,
  obtenerDetallesTemporada
} from '../controllers/temporada-plantilla.controller';

const router = Router();

router.get('/', obtenerDetallesTemporada);
router.get('/:id', obtenerTemporadaPlantillaPorId);
//router.post('/', crearTemporadaPlantilla);
//router.put('/:id', actualizarTemporadaPlantilla);
//router.delete('/:id', eliminarTemporadaPlantilla);

export default router;
