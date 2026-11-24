"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerTemporadas = void 0;
//import type { Temporada } from '../models/temporada.model';
const database_1 = require("./database");
const obtenerTemporadas = async () => {
    const [rows] = await database_1.db.query('SELECT * FROM temporada');
    return rows;
};
exports.obtenerTemporadas = obtenerTemporadas;
//# sourceMappingURL=temporada.database.js.map