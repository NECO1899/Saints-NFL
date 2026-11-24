"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioModel = void 0;
const usuario_database_1 = require("../config/usuario.database");
class UsuarioModel {
    static async obtenerTodos() {
        const db = await (0, usuario_database_1.obtenerUsuarios)();
        return db;
    }
    static async obtenerPorUsuario(usuario) {
        const db = await (0, usuario_database_1.obtenerUsuarios)();
        return (db.find((u) => u.usuario.toLowerCase() === usuario.toLowerCase()) || null);
    }
    static async obtenerPorId(id) {
        const db = await (0, usuario_database_1.obtenerUsuarios)();
        return db.find((u) => u.id === id) || null;
    }
}
exports.UsuarioModel = UsuarioModel;
//# sourceMappingURL=usuario.model.js.map