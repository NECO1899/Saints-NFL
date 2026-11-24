export interface TemporadaPlantilla {
    id: number;
    nombre: string;
    estado: string;
    ciudad: string;
    posicion: string;
    estadisticas?: string;
}
export declare class TemporadaPlantillaModel {
    static obtenerTodos(): Promise<TemporadaPlantilla[]>;
    static obtenerPorId(id: number): Promise<TemporadaPlantilla | null>;
}
//# sourceMappingURL=temporada-plantilla.model.d.ts.map