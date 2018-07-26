var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_scale, _name) {
        return _super.call(this, _scale, _name) || this;
    }
    Apple.prototype.about = function () {
        console.log('Я яблоко с именем ' + this.name);
    };
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_scale, _name) {
        return _super.call(this, _scale, _name) || this;
    }
    Tomato.prototype.about = function () {
        console.log('Я помидор с именем ' + this.name);
    };
    return Tomato;
}(Product));
var Scales = /** @class */ (function () {
    function Scales() {
        this.arrayProduct = [];
    }
    Scales.prototype.add = function (product) {
        this.arrayProduct.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var sumScale;
        sumScale = this.arrayProduct.reduce(function (curSum, el) { return curSum + el.getScale(); }, 0);
        return sumScale;
    };
    Scales.prototype.getNameList = function () {
        var nameList;
        nameList = this.arrayProduct.map(function (el) { return el.name; });
        return nameList;
    };
    return Scales;
}());
var scales1 = new Scales();
var tomato1 = new Tomato(1, 'Помидор1');
var tomato2 = new Tomato(1.5, 'Помидор2');
var tomato3 = new Tomato(0.5, 'Помидор3');
var apple1 = new Apple(1, 'Яблоко1');
var apple2 = new Apple(2, 'Яблоко2');
scales1.add(tomato1);
scales1.add(tomato2);
scales1.add(tomato3);
scales1.add(apple1);
scales1.add(apple2);
console.log(scales1.getNameList());
console.log(scales1.getSumScale());
//# sourceMappingURL=app.js.map