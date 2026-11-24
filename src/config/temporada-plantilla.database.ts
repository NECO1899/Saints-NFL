//import type { TemporadaPlantilla } from '../models/temporada-plantilla.model';
import { db } from './database';

export const obtenerTemporadaPlantilla = async () => {
  const [rows] = await db.query(
    'SELECT * FROM temporada_plantilla'
  );

  return rows;
};

//export const temporadaPlantillaDB: TemporadaPlantilla[] = [
//  {
//    id: 1,
//    nombre: 'Tyler Shough',
//    estado: 'Texas',
//    ciudad: 'Arlington',
//    posicion: 'Quarterback',
//    estadisticas: '3850 Yds, 42 TD, 8 INT'
//  },
//  {
//    id: 2,
//    nombre: 'Chris Olave',
//    estado: 'Florida',
//    ciudad: 'Jacksonville',
//    posicion: 'Wide Receiver',
//    estadisticas: '1120 Yds, 10 TD, 85 REC'
//  }
//];

//let siguienteId = temporadaPlantillaDB.length + 1;

//export const obtenerSiguienteIdTemporadaPlantilla = (): number => {
//  const id = siguienteId;
//  siguienteId += 1;

//  return id;
//};
