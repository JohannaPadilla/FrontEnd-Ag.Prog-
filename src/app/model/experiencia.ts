export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string; 
    empresaE : string;

    constructor(nombreE: string, descripcionE: string, empresaE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.empresaE = empresaE;
    }
}
