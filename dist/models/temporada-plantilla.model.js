"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemporadaPlantillaModel = void 0;
const temporada_plantilla_database_1 = require("../config/temporada-plantilla.database");
class TemporadaPlantillaModel {
    static async obtenerTodos() {
        return await (0, temporada_plantilla_database_1.obtenerTemporadaPlantilla)();
    }
    static async obtenerPorId(id) {
        const obtenerTemporadaPlantillaResult = await (0, temporada_plantilla_database_1.obtenerTemporadaPlantilla)();
        return (obtenerTemporadaPlantillaResult.find((plantilla) => plantilla.id === id) || null);
    }
}
exports.TemporadaPlantillaModel = TemporadaPlantillaModel;
//# sourceMappingURL=temporada-plantilla.model.js.map