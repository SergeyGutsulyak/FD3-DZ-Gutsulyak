var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.storage = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.storage.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.storage[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.storage.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        window.localStorage.clear();
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        window.localStorage.setItem(String(window.localStorage.length), JSON.stringify(item));
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var obj = JSON.parse(window.localStorage.getItem(String(index)));
        return new Product(Number(obj.scale), obj.name);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return window.localStorage.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var Scales = /** @class */ (function () {
    function Scales(_storage) {
        this.storage = _storage;
    }
    Scales.prototype.add = function (product) {
        this.storage.addItem(product);
    };
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        var count = this.storage.getCount();
        for (var i = 0; i < count; i++) {
            sumScale += this.storage.getItem(i).getScale();
        }
        return sumScale;
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        var count = this.storage.getCount();
        for (var i = 0; i < count; i++) {
            nameList.push(this.storage.getItem(i).getName());
        }
        return nameList;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_scale, _name) {
        this.scale = _scale;
        this.name = _name;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var ArrStor = new ScalesStorageEngineArray();
var locStor = new ScalesStorageEngineLocalStorage();
var scaleArr = new Scales(ArrStor);
var scaleStor = new Scales(locStor);
//-----------------
var tomato1 = new Product(1, 'Помидор1');
var tomato2 = new Product(1.5, 'Помидор2');
var tomato3 = new Product(0.5, 'Помидор3');
var apple1 = new Product(1, 'Яблоко1');
var apple2 = new Product(2, 'Яблоко2');
var apple3 = new Product(3, 'Яблоко3');
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
//# sourceMappingURL=app.js.map