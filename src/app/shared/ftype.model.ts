export class Ftype {
    constructor(name: string,id:number) {
        this.id = id;
        this.name = name;
        this.selected= false;
    }
    id: number;
    name: string;
    selected: boolean;
}
