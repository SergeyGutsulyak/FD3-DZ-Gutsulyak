var Apple = /** @class */ (function () {
    function Apple(_scale) {
        this.scale = _scale;
        this.name = 'Яблоко';
    }
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_scale) {
        this.scale = _scale;
        this.name = 'Помидор';
    }
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
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
        nameList = this.arrayProduct.map(function (el) { return el.getName(); });
        return nameList;
    };
    return Scales;
}());
var scales1 = new Scales();
var tomato1 = new Tomato(1);
var tomato2 = new Tomato(0.5);
var tomato3 = new Tomato(0.5);
var apple1 = new Apple(1);
var apple2 = new Apple(2);
scales1.add(tomato1);
scales1.add(tomato2);
scales1.add(tomato3);
scales1.add(apple1);
scales1.add(apple2);
console.log(scales1.getNameList());
console.log(scales1.getSumScale());
//# sourceMappingURL=app.js.map