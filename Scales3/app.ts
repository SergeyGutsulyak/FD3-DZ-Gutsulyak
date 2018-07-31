class Product{
    scale:number;
    name:string;
    constructor(_scale:number,_name:string){
        this.scale=_scale;
        this.name=_name;
    }

    getScale():number{
        return this.scale;
    }

    getName():string{
        return this.name;
    }
}

class Apple extends Product{

    constructor(_scale:number,_name:string){
        super(_scale,_name);
    }

    about():void{
        console.log('Я яблоко с именем '+this.name)
    }

}

class Tomato extends Product{

    constructor(_scale:number,_name:string){
        super(_scale,_name);
    }

    about():void{
        console.log('Я помидор с именем '+this.name)
    }
}


class Scales{
    arrayProduct:Product[];

    constructor(){
        this.arrayProduct=[];
    }

    add(product:Product):void{
        this.arrayProduct.push(product);
    }

    getSumScale():number{
        let sumScale:number;
        sumScale=this.arrayProduct.reduce((curSum:number,el:Product):number=>{return curSum+el.getScale()},0);
        return sumScale;
    }

    getNameList():string[]{
        let nameList:string[];
        nameList=this.arrayProduct.map((el:Product):string=>{return el.name});
        return nameList;

    }

}

let scales1:Scales=new Scales();

let tomato1:Tomato=new Tomato(1,'Помидор1')
let tomato2:Tomato=new Tomato(1.5,'Помидор2')
let tomato3:Tomato=new Tomato(0.5,'Помидор3')

let apple1:Apple=new Apple(1,'Яблоко1');
let apple2:Apple=new Apple(2,'Яблоко2');

scales1.add(tomato1);
scales1.add(tomato2);
scales1.add(tomato3);
scales1.add(apple1);
scales1.add(apple2);

console.log(scales1.getNameList());
console.log(scales1.getSumScale());

