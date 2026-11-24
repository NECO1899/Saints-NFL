import { obtenerUsuarios } from '../config/usuario.database';

export interface Usuario {
  id: number;
  usuario: string;
  password?: string;
  nombre: string;
  rol?: string;
}

export class UsuarioModel {
  static async obtenerTodos(): Promise<Usuario[]> {
    const db = await obtenerUsuarios() as Usuario[];
    return db;
  }

  static async obtenerPorUsuario(usuario: string): Promise<Usuario | null> {
    const db = await obtenerUsuarios() as Usuario[];

    return (
      db.find((u) => u.usuario.toLowerCase() === usuario.toLowerCase()) || null
    );
  }

  static async obtenerPorId(id: number): Promise<Usuario | null> {
    const db = await obtenerUsuarios() as Usuario[];
    return db.find((u) => u.id === id) || null;
  }
}
