"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerTemporadaPlantillaPorId = exports.obtenerDetallesTemporada = void 0;
const temporada_plantilla_model_1 = require("../models/temporada-plantilla.model");
const obtenerDetallesTemporada = async (req, res, next) => {
    try {
        const plantillas = await temporada_plantilla_model_1.TemporadaPlantillaModel.obtenerTodos();
        res.status(200).json(plantillas);
    }
    catch (error) {
        next(error);
    }
};
exports.obtenerDetallesTemporada = obtenerDetallesTemporada;
const obtenerTemporadaPlantillaPorId = async (req, res, next) => {
    try {
        const plantilla = await temporada_plantilla_model_1.TemporadaPlantillaModel.obtenerPorId(Number(req.params.id));
        if (!plantilla) {
            return res
                .status(404)
                .json({ message: 'Jugador de plantilla de temporada no encontrado' });
        }
        res.status(200).json(plantilla);
    }
    catch (error) {
        next(error);
    }
};
exports.obtenerTemporadaPlantillaPorId = obtenerTemporadaPlantillaPorId;
// export const crearTemporadaPlantilla = async (
//  req: Request,
//  res: Response,
//  next: NextFunction
//) => {
//  try {
//    const plantilla = await TemporadaPlantillaModel.crear(req.body);
//    res.status(201).json(plantilla);
//  } catch (error) {
//    next(error);
//  }
//};
// export const actualizarTemporadaPlantilla = async (
//  req: Request,
//  res: Response,
//  next: NextFunction
//) => {
//  try {
//    const plantilla = await TemporadaPlantillaModel.actualizar(
//      Number(req.params.id),
//      req.body
//    );
//    if (!plantilla) {
//      return res
//        .status(404)
//        .json({ message: 'Jugador de plantilla de temporada no encontrado' });
//    }
//    res.status(200).json(plantilla);
//  } catch (error) {
//    next(error);
//  }
//};
//export const eliminarTemporadaPlantilla = async (
//  req: Request,
//  res: Response,
//  next: NextFunction
//) => {
//  try {
//    const eliminado = await TemporadaPlantillaModel.eliminar(
//      Number(req.params.id)
//    );
//    if (!eliminado) {
//      return res
//        .status(404)
//        .json({ message: 'Jugador de plantilla de temporada no encontrado' });
//   }
//    res.status(204).send();
//  } catch (error) {
//    next(error);
//  }
//};
//# sourceMappingURL=temporada-plantilla.controller.js.map