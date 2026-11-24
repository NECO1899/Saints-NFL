//import type { DetalleTemporada } from '../models/detalle-temporada.model';
import {db} from './database';

export const obtenerTodosLosDetallesTemporada = async () => {
  const [rows] = await db.query(
    'SELECT * FROM detalle_temporada'
  );

  return rows;
};

//export const detalleTemporadaDB: DetalleTemporada[] = [
//  {
//    id: 1,
//    fecha: '2024-09-15',
//    estadio: 'Caesars Superdome',
//    rival: 'Atlanta Falcons',
//    marcador: '24-17',
//    plantilla: 'Plantilla Titular 2024',
//    plantillaId: 1,
//    anio: 2024
//  },
//  {
//    id: 2,
//    fecha: '2024-09-22',
//    estadio: 'Mercedes-Benz Stadium',
//    rival: 'Carolina Panthers',
//    marcador: '31-20',
//    plantilla: 'Plantilla Alterna 2024',
//    plantillaId: 2,
//    anio: 2024
//  }
//];

//let siguienteId = detalleTemporadaDB.length + 1;

//export const obtenerSiguienteIdDetalleTemporada = (): number => {
//  const id = siguienteId;
//  siguienteId += 1;

//  return id;
//};
