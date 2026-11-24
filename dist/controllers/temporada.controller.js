"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerTemporadaPorId = exports.obtenerTemporadas = void 0;
const temporada_model_1 = require("../models/temporada.model");
const formatearDatosTemporada = (body) => {
    return {
        ...body,
        anio: body.anio !== undefined ? Number(body.anio) : (body['año'] !== undefined ? Number(body['año']) : (body.ano !== undefined ? Number(body.ano) : undefined)),
        noTD: body.noTD !== undefined ? Number(body.noTD) : (body['No TD'] !== undefined ? Number(body['No TD']) : (body.notd !== undefined ? Number(body.notd) : undefined)),
        titulo: body.titulo,
        mvp: body.mvp !== undefined ? body.mvp : body.MVP,
        detalleTemporadaId: body.detalleTemporadaId !== undefined ? Number(body.detalleTemporadaId) : undefined
    };
};
const obtenerTemporadas = async (req, res, next) => {
    try {
        const temporadas = await temporada_model_1.TemporadaModel.obtenerTodos();
        res.status(200).json(temporadas);
    }
    catch (error) {
        next(error);
    }
};
exports.obtenerTemporadas = obtenerTemporadas;
const obtenerTemporadaPorId = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const temporada = await temporada_model_1.TemporadaModel.obtenerPorId(id);
        if (!temporada) {
            return res.status(404).json({
                message: 'Temporada no encontrada'
            });
        }
        res.status(200).json(temporada);
    }
    catch (error) {
        next(error);
    }
};
exports.obtenerTemporadaPorId = obtenerTemporadaPorId;
//export const crearTemporada = async (
//  req: Request,
//  res: Response,
//  next: NextFunction
//) => {
//  try {
//    const datos = formatearDatosTemporada(req.body);
//    const temporada = await TemporadaModel.crear(datos as any);
//    res.status(201).json(temporada);
//  } catch (error) {
//    next(error);
//  }
//};
//export const actualizarTemporada = async (
//  req: Request,
//  res: Response,
//  next: NextFunction
//) => {
//  try {
//    const id = Number(req.params.id);
//    const datos = formatearDatosTemporada(req.body);
//    const temporada = await TemporadaModel.actualizar(id, datos as any);
//    if (!temporada) {
//      return res.status(404).json({
//        message: 'Temporada no encontrada'
//      });
//    }
//    res.status(200).json(temporada);
//  } catch (error) {
//     next(error);
//  }
//};
//export const eliminarTemporada = async (
//  req: Request,
//  res: Response,
//  next: NextFunction
//) => {
//  try {
//    const id = Number(req.params.id);
//    const eliminado = await TemporadaModel.eliminar(id);
//    if (!eliminado) {
//      return res.status(404).json({
//        message: 'Temporada no encontrada'
//      });
//    }
//    res.status(204).send();
//  } catch (error) {
//    next(error);
//  }
//};
//# sourceMappingURL=temporada.controller.js.map