import {obtenerTemporadas} from '../config/temporada.database';

export interface Temporada {
  id: number;
  anio: number;
  titulo: string;
  noTD: number;
  mvp: string;
  detalleTemporadaId?: number;
}

export class TemporadaModel {
  static async obtenerTodos(): Promise<Temporada[]> {
    return await obtenerTemporadas () as Temporada[];
  }

  static async obtenerPorId(id: number): Promise<Temporada | null> {
    const temporadas = await obtenerTemporadas() as Temporada[];
    
    return temporadas.find((temporada) => temporada.id === id) || null;
  }

  static async obtenerPorAnio(anio: number): Promise<Temporada | null> {
    const temporadas = await obtenerTemporadas() as Temporada[];
    
    
    return temporadas.find((temporada) => temporada.anio === anio) || null;
  }
}