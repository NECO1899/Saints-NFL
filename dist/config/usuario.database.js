"use strict";
//import type { Usuario } from '../models/usuario.model';
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerUsuarios = void 0;
const database_1 = require("./database");
const obtenerUsuarios = async () => {
    const [rows] = await database_1.db.query('SELECT * FROM usuarios');
    console.log(rows);
    return rows;
};
exports.obtenerUsuarios = obtenerUsuarios;
//let siguienteId = usuarioDB.length + 1;
//export const obtenerSiguienteIdUsuario = (): number => {
//  const id = siguienteId;
//  siguienteId += 1;
//  return id;
//};
//# sourceMappingURL=usuario.database.js.map