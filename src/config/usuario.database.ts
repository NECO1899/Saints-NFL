//import type { Usuario } from '../models/usuario.model';

import { db } from "./database";


export const obtenerUsuarios = async () => {
  const [rows] = await db.query(
    'SELECT * FROM usuarios'
  );

   console.log(rows);

  return rows;
};

//let siguienteId = usuarioDB.length + 1;

//export const obtenerSiguienteIdUsuario = (): number => {
//  const id = siguienteId;
//  siguienteId += 1;
//  return id;
//};
