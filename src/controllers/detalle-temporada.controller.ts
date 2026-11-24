import type { NextFunction, Request, Response } from 'express';
import { DetalleTemporadaModel } from '../models/detalle-temporada.model';

export const obtenerDetallesTemporada = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { anio } = req.query;
    if (anio) {
      const detalles = await DetalleTemporadaModel.obtenerPorAnio(Number(anio));
      return res.status(200).json(detalles);
    }

    const detalles = await DetalleTemporadaModel.obtenerTodos();
    res.status(200).json(detalles);
  } catch (error) {
    next(error);
  }
};

export const obtenerDetalleTemporadaPorId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const detalle = await DetalleTemporadaModel.obtenerPorId(
      Number(req.params.id)
    );

    if (!detalle) {
      return res
        .status(404)
        .json({ message: 'Detalle de temporada no encontrado' });
    }

    res.status(200).json(detalle);
  } catch (error) {
    next(error);
  }
};

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
