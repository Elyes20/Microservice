interface ICompagnie {
    
    compagnieId: number;
    compagnieName: string;
    compagniePays: string;
     
}
export class Compagnie implements ICompagnie {
    public compagnieId: number;
    public compagnieName: string;
    public compagniePays: string;
    constructor(compagnieId: number,
        compagnieName: string,
        compagniePays: string){
            this.compagnieId= compagnieId;
            this.compagnieName=compagnieName;
            this.compagniePays=compagniePays;
        }
    
}
