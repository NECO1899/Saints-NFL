"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const usuario_model_1 = require("../models/usuario.model");
const login = async (req, res, next) => {
    try {
        const usuario = req.body.usuario || req.body.username;
        const password = req.body.password;
        if (!usuario || !password) {
            return res.status(400).json({
                message: 'Por favor ingresa usuario y contraseña'
            });
        }
        const user = await usuario_model_1.UsuarioModel.obtenerPorUsuario(usuario);
        if (!user || user.password !== password) {
            return res.status(401).json({
                message: 'Usuario o contraseña incorrectos'
            });
        }
        const { password: _, ...usuarioSinPassword } = user;
        return res.status(200).json({
            message: 'Inicio de sesión exitoso',
            usuario: usuarioSinPassword
        });
    }
    catch (error) {
        next(error);
    }
};
exports.login = login;
//# sourceMappingURL=auth.controller.js.map