"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleTemporadaModel = void 0;
const detalle_temporada_database_1 = require("../config/detalle-temporada.database");
class DetalleTemporadaModel {
    static async obtenerTodos() {
        return await (0, detalle_temporada_database_1.obtenerTodosLosDetallesTemporada)();
    }
    static async obtenerPorId(id) {
        const detalles = await (0, detalle_temporada_database_1.obtenerTodosLosDetallesTemporada)();
        return detalles.find((detalle) => detalle.id === id) || null;
    }
    static async obtenerPorAnio(anio) {
        const detalles = await (0, detalle_temporada_database_1.obtenerTodosLosDetallesTemporada)();
        return detalles.filter((detalle) => detalle.anio === anio);
    }
}
exports.DetalleTemporadaModel = DetalleTemporadaModel;
//# sourceMappingURL=detalle-temporada.model.js.map