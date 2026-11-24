import {obtenerTodosLosDetallesTemporada} from '../config/detalle-temporada.database';

export interface DetalleTemporada {
  id: number;
  fecha: string;
  estadio: string;
  rival: string;
  marcador: string;
  plantilla: string;
  plantillaId?: number;
  temporadaId?: number;
  anio?: number;
}

export class DetalleTemporadaModel {
  static async obtenerTodos(): Promise<DetalleTemporada[]> {
    return await obtenerTodosLosDetallesTemporada() as DetalleTemporada[];
  }

  static async obtenerPorId(id: number): Promise<DetalleTemporada | null> {
    const detalles = await obtenerTodosLosDetallesTemporada() as DetalleTemporada[];
    return detalles.find((detalle) => detalle.id === id) || null;
  }

  static async obtenerPorAnio(anio: number): Promise<DetalleTemporada[]> {
    const detalles = await obtenerTodosLosDetallesTemporada() as DetalleTemporada[];
    return detalles.filter((detalle) => detalle.anio === anio);
  }

  //static async crear(detalle: DetalleTemporada): Promise<DetalleTemporada> {
  //  const nuevoDetalle: DetalleTemporada = {
  //    ...detalle,
  //    id: obtenerSiguienteIdDetalleTemporada()
  //  };

    //detalleTemporadaDB.push(nuevoDetalle);
    //return nuevoDetalle;
  //}

  //static async actualizar(
  //  id: number,
  //  detalle: Partial<DetalleTemporada>
  //): Promise<DetalleTemporada | null> {
  //  const index = detalleTemporadaDB.findIndex((actual) => actual.id === id);

    //if (index === -1) {
    // return null;
    //}

//    const detalleExistente = detalleTemporadaDB[index];
//    if (!detalleExistente) {
//      return null;
//    }

//    const detalleActualizado: DetalleTemporada = {
//      ...detalleExistente,
//      ...detalle,
//      id
//    };

//    detalleTemporadaDB[index] = detalleActualizado;
//    return detalleActualizado;
//  }

//  static async eliminar(id: number): Promise<boolean> {
//    const index = detalleTemporadaDB.findIndex((detalle) => detalle.id === id);

//    if (index === -1) {
//      return false;
//    }

//    detalleTemporadaDB.splice(index, 1);
//    return true;
//  }
}
