
interface IScalable{
    getScale():number;
    getName():string;
}


class Apple implements IScalable{

    name:string;
    scale:number;
    constructor(_scale:number,){
        this.scale=_scale;
        this.name='Яблоко';
    }

    getScale():number{
        return this.scale;
    }

    getName():string{
        return this.name;
    }

}

class Tomato implements IScalable{

    name:string;
    scale:number;
    constructor(_scale:number,){
        this.scale=_scale;
        this.name='Помидор';
    }

    getScale():number{
        return this.scale;
    }

    getName():string{
        return this.name;
    }
}


class Scales{
    arrayProduct:IScalable[];

    constructor(){
        this.arrayProduct=[];
    }

    add(product:IScalable):void{
        this.arrayProduct.push(product);
    }

    getSumScale():number{
        let sumScale:number;
        sumScale=this.arrayProduct.reduce((curSum:number,el:IScalable):number=>{return curSum+el.getScale()},0);
        return sumScale;
    }

    getNameList():string[]{
        let nameList:string[];
        nameList=this.arrayProduct.map((el:IScalable):string=>{return el.getName()});
        return nameList;

    }

}

let scales1:Scales=new Scales();

let tomato1:Tomato=new Tomato(1)
let tomato2:Tomato=new Tomato(0.5)
let tomato3:Tomato=new Tomato(0.5)

let apple1:Apple=new Apple(1);
let apple2:Apple=new Apple(2);

scales1.add(tomato1);
scales1.add(tomato2);
scales1.add(tomato3);
scales1.add(apple1);
scales1.add(apple2);

console.log(scales1.getNameList());
console.log(scales1.getSumScale());

