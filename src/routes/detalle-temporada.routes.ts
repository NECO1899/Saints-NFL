import { Router } from 'express';
import {
  obtenerDetalleTemporadaPorId,
  obtenerDetallesTemporada
} from '../controllers/detalle-temporada.controller';

const router = Router();

router.get('/', obtenerDetallesTemporada);
router.get('/:id', obtenerDetalleTemporadaPorId);
//router.post('/', crearDetalleTemporada);
//router.put('/:id', actualizarDetalleTemporada);
//router.delete('/:id', eliminarDetalleTemporada);

export default router;
