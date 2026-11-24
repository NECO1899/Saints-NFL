import { Router } from 'express';
import {
  //actualizarTemporada,
  //crearTemporada,
  //eliminarTemporada,
  obtenerTemporadas,
  obtenerTemporadaPorId,
} from '../controllers/temporada.controller';

const router = Router();

router.get('/', obtenerTemporadas);
router.get('/:id', obtenerTemporadaPorId);
//router.post('/', crearTemporada);
//router.put('/:id', actualizarTemporada);
//router.delete('/:id', eliminarTemporada);

export default router;
