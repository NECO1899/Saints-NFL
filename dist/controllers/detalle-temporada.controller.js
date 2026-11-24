"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerDetalleTemporadaPorId = exports.obtenerDetallesTemporada = void 0;
const detalle_temporada_model_1 = require("../models/detalle-temporada.model");
const obtenerDetallesTemporada = async (req, res, next) => {
    try {
        const { anio } = req.query;
        if (anio) {
            const detalles = await detalle_temporada_model_1.DetalleTemporadaModel.obtenerPorAnio(Number(anio));
            return res.status(200).json(detalles);
        }
        const detalles = await detalle_temporada_model_1.DetalleTemporadaModel.obtenerTodos();
        res.status(200).json(detalles);
    }
    catch (error) {
        next(error);
    }
};
exports.obtenerDetallesTemporada = obtenerDetallesTemporada;
const obtenerDetalleTemporadaPorId = async (req, res, next) => {
    try {
        const detalle = await detalle_temporada_model_1.DetalleTemporadaModel.obtenerPorId(Number(req.params.id));
        if (!detalle) {
            return res
                .status(404)
                .json({ message: 'Detalle de temporada no encontrado' });
        }
        res.status(200).json(detalle);
    }
    catch (error) {
        next(error);
    }
};
exports.obtenerDetalleTemporadaPorId = obtenerDetalleTemporadaPorId;
//export const crearDetalleTemporada = async (
//  req: Request,
//  res: Response,
//  next: NextFunction
//) => {
//  try {
//    const detalle = await DetalleTemporadaModel.crear(req.body);
//    res.status(201).json(detalle);
//  } catch (error) {
//    next(error);
//  }
//};
//export const actualizarDetalleTemporada = async (
//  req: Request,
//  res: Response,
//  next: NextFunction
//) => {
//  try {
//    const detalle = await DetalleTemporadaModel.actualizar(
//      Number(req.params.id),
//      req.body
//    );
//    if (!detalle) {
//      return res
//        .status(404)
//        .json({ message: 'Detalle de temporada no encontrado' });
//    }
//    res.status(200).json(detalle);
//  } catch (error) {
//    next(error);
//  }
//};
//export const eliminarDetalleTemporada = async (
//  req: Request,
//  res: Response,
//  next: NextFunction
//) => {
//  try {
//    const eliminado = await DetalleTemporadaModel.eliminar(
//      Number(req.params.id)
//    );
//    if (!eliminado) {
//      return res
//        .status(404)
//        .json({ message: 'Detalle de temporada no encontrado' });
//    }
//    res.status(204).send();
//  } catch (error) {
//    next(error);
//  }
//};
//# sourceMappingURL=detalle-temporada.controller.js.map