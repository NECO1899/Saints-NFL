"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const temporada_plantilla_controller_1 = require("../controllers/temporada-plantilla.controller");
const router = (0, express_1.Router)();
router.get('/', temporada_plantilla_controller_1.obtenerDetallesTemporada);
router.get('/:id', temporada_plantilla_controller_1.obtenerTemporadaPlantillaPorId);
//router.post('/', crearTemporadaPlantilla);
//router.put('/:id', actualizarTemporadaPlantilla);
//router.delete('/:id', eliminarTemporadaPlantilla);
exports.default = router;
//# sourceMappingURL=temporada-plantilla.routes.js.map