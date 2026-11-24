import type { NextFunction, Request, Response } from 'express';
import { TemporadaPlantillaModel } from '../models/temporada-plantilla.model';

export const obtenerDetallesTemporada = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const plantillas = await TemporadaPlantillaModel.obtenerTodos();
    res.status(200).json(plantillas);
  } catch (error) {
    next(error);
  }
};

export const obtenerTemporadaPlantillaPorId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const plantilla = await TemporadaPlantillaModel.obtenerPorId(
      Number(req.params.id)
    );

    if (!plantilla) {
      return res
        .status(404)
        .json({ message: 'Jugador de plantilla de temporada no encontrado' });
    }

    res.status(200).json(plantilla);
  } catch (error) {
    next(error);
  }
};

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
