export class Proyectos {
    id: number;
    nombreP: string;
    descripcionP: string;
    imgP: string;

    constructor(nombreP: string, descripcionP: string, imgP: string){
        this.descripcionP = descripcionP;
        this.nombreP = nombreP;
        this.imgP = imgP
    }
}
