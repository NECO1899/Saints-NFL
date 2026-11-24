export interface Usuario {
    id: number;
    usuario: string;
    password?: string;
    nombre: string;
    rol?: string;
}
export declare class UsuarioModel {
    static obtenerTodos(): Promise<Usuario[]>;
    static obtenerPorUsuario(usuario: string): Promise<Usuario | null>;
    static obtenerPorId(id: number): Promise<Usuario | null>;
}
//# sourceMappingURL=usuario.model.d.ts.map