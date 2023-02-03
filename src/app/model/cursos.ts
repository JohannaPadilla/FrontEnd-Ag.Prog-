export class Cursos {
    id: number;
    institucionC: string; 
    cursoC: string;
    infoC: string;
    enlaceC: string;

    constructor(institucionC: string, cursoC: string, infoC: string, enlaceC: string){
        this.institucionC = institucionC;
        this.cursoC = cursoC;
        this.infoC = infoC;
        this.enlaceC = enlaceC;
    }
}
