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
export declare class DetalleTemporadaModel {
    static obtenerTodos(): Promise<DetalleTemporada[]>;
    static obtenerPorId(id: number): Promise<DetalleTemporada | null>;
    static obtenerPorAnio(anio: number): Promise<DetalleTemporada[]>;
}
//# sourceMappingURL=detalle-temporada.model.d.ts.map