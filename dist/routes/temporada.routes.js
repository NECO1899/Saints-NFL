"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const temporada_controller_1 = require("../controllers/temporada.controller");
const router = (0, express_1.Router)();
router.get('/', temporada_controller_1.obtenerTemporadas);
router.get('/:id', temporada_controller_1.obtenerTemporadaPorId);
//router.post('/', crearTemporada);
//router.put('/:id', actualizarTemporada);
//router.delete('/:id', eliminarTemporada);
exports.default = router;
//# sourceMappingURL=temporada.routes.js.map