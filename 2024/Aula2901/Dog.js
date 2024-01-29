var Dog = /** @class */ (function () {
    function Dog(name, wheigt) {
        this.name = name;
        this.wheigt = wheigt;
    }
    Dog.prototype.bark = function () {
        console.log('Bark');
    };
    Dog.prototype.eat = function (quantity) {
        console.log("The dog ate ".concat(quantity, " food(s)"));
    };
    return Dog;
}());
var doge = new Dog('Toby', 10);
doge.bark();
doge.eat(3);
