export interface Temporada {
    id: number;
    anio: number;
    titulo: string;
    noTD: number;
    mvp: string;
    detalleTemporadaId?: number;
}
export declare class TemporadaModel {
    static obtenerTodos(): Promise<Temporada[]>;
    static obtenerPorId(id: number): Promise<Temporada | null>;
    static obtenerPorAnio(anio: number): Promise<Temporada | null>;
}
//# sourceMappingURL=temporada.model.d.ts.map