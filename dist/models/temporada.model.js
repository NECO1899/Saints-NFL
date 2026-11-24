"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemporadaModel = void 0;
const temporada_database_1 = require("../config/temporada.database");
class TemporadaModel {
    static async obtenerTodos() {
        return await (0, temporada_database_1.obtenerTemporadas)();
    }
    static async obtenerPorId(id) {
        const temporadas = await (0, temporada_database_1.obtenerTemporadas)();
        return temporadas.find((temporada) => temporada.id === id) || null;
    }
    static async obtenerPorAnio(anio) {
        const temporadas = await (0, temporada_database_1.obtenerTemporadas)();
        return temporadas.find((temporada) => temporada.anio === anio) || null;
    }
}
exports.TemporadaModel = TemporadaModel;
//# sourceMappingURL=temporada.model.js.map