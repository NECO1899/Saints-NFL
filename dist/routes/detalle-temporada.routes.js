"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detalle_temporada_controller_1 = require("../controllers/detalle-temporada.controller");
const router = (0, express_1.Router)();
router.get('/', detalle_temporada_controller_1.obtenerDetallesTemporada);
router.get('/:id', detalle_temporada_controller_1.obtenerDetalleTemporadaPorId);
//router.post('/', crearDetalleTemporada);
//router.put('/:id', actualizarDetalleTemporada);
//router.delete('/:id', eliminarDetalleTemporada);
exports.default = router;
//# sourceMappingURL=detalle-temporada.routes.js.map