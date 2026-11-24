//import type { Temporada } from '../models/temporada.model';
import { db } from './database';

export const obtenerTemporadas = async () => {
  const [rows] = await db.query(
    'SELECT * FROM temporada'
  );

  return rows;
};
