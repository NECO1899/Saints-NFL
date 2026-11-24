import {obtenerTemporadaPlantilla} from '../config/temporada-plantilla.database';

export interface TemporadaPlantilla {
  id: number;
  nombre: string;
  estado: string;
  ciudad: string;
  posicion: string;
  estadisticas?: string;
}

export class TemporadaPlantillaModel {
  static async obtenerTodos(): Promise<TemporadaPlantilla[]> {
    return await obtenerTemporadaPlantilla() as TemporadaPlantilla[];
  }

  static async obtenerPorId(id: number): Promise<TemporadaPlantilla | null> {
    const obtenerTemporadaPlantillaResult = await obtenerTemporadaPlantilla() as TemporadaPlantilla[];
    
    return (
      obtenerTemporadaPlantillaResult.find((plantilla) => plantilla.id === id) || null
    );
  }

  //static async crear(
  //  plantilla: TemporadaPlantilla
  //): Promise<TemporadaPlantilla> {
  //  const nuevaPlantilla: TemporadaPlantilla = {
  //    ...plantilla,
  //    id: obtenerSiguienteIdTemporadaPlantilla()
  //  };

  //  temporadaPlantillaDB.push(nuevaPlantilla);
  //  return nuevaPlantilla;
  //}

  ///static async actualizar(
  //  id: number,
  //  plantilla: Partial<TemporadaPlantilla>
  //): Promise<TemporadaPlantilla | null> {
  //  const index = temporadaPlantillaDB.findIndex((actual) => actual.id === id);

  //  if (index === -1) {
  //    return null;
  //   }

//    const plantillaExistente = temporadaPlantillaDB[index];
//    if (!plantillaExistente) {
//      return null;
//    }

//    const plantillaActualizada: TemporadaPlantilla = {
//      ...plantillaExistente,
//      ...plantilla,
//      id
//    };

//    temporadaPlantillaDB[index] = plantillaActualizada;
//    return plantillaActualizada;
//  }

//  static async eliminar(id: number): Promise<boolean> {
//    const index = temporadaPlantillaDB.findIndex(
//      (plantilla) => plantilla.id === id
//    );

//    if (index === -1) {
//      return false;
//    }

//    temporadaPlantillaDB.splice(index, 1);
//    return true;
//  }
}
