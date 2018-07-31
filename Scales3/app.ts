interface IstorageEngine{
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
}

class ScalesStorageEngineArray implements IstorageEngine{
    storage:Product[];
    constructor(){
        this.storage=[];
    }

    addItem(item:Product):void{
        this.storage.push(item);
    }
    getItem(index:number):Product{
        return this.storage[index];
    }
    getCount():number{
        return this.storage.length;
    }

}

class ScalesStorageEngineLocalStorage implements IstorageEngine{
    //storage:object;
    count:number;
    constructor(){
        window.localStorage.clear();
    }
    addItem(item:Product):void{
        window.localStorage.setItem(String(window.localStorage.length),JSON.stringify(item));

    }
    getItem(index:number):Product{
        let obj=JSON.parse(window.localStorage.getItem(String(index)));
        return new Product(Number(obj.scale),obj.name);
    }
    getCount():number{
        return window.localStorage.length;
    }

}

class Scales<StorageEngine extends IstorageEngine>{

    storage:StorageEngine;

    constructor(_storage:StorageEngine){
        this.storage=_storage;
    }

    add(product:Product):void{
        this.storage.addItem(product);
    }

    getSumScale():number{
        let sumScale:number=0;
        let count:number=this.storage.getCount();

        for (let i=0;i<count;i++){
             sumScale+=this.storage.getItem(i).getScale();
        }
        return sumScale;
    }

    getNameList():string[]{
        let nameList:string[]=[];
        let count:number=this.storage.getCount();
        for (let i=0;i<count;i++){
            nameList.push(this.storage.getItem(i).getName());
        }
        return nameList;
    }

}

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
let ArrStor=new ScalesStorageEngineArray();
let locStor=new ScalesStorageEngineLocalStorage();


let scaleArr=new Scales(ArrStor);
let scaleStor=new Scales(locStor);
//-----------------
let tomato1:Product=new Product(1,'Помидор1')
let tomato2:Product=new Product(1.5,'Помидор2')
let tomato3:Product=new Product(0.5,'Помидор3')

let apple1:Product=new Product(1,'Яблоко1');
let apple2:Product=new Product(2,'Яблоко2');
let apple3:Product=new Product(3,'Яблоко3');
//-------------------
scaleArr.add(tomato1);
scaleArr.add(tomato2);
scaleArr.add(apple1);
scaleArr.add(apple2);

console.log(scaleArr.getNameList());
console.log(scaleArr.getSumScale());

//---------------
scaleStor.add(tomato2);
scaleStor.add(tomato3);
scaleStor.add(apple2);
scaleStor.add(apple3);

console.log(scaleStor.getNameList());
console.log(scaleStor.getSumScale());