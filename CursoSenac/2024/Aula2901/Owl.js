var Owl = /** @class */ (function () {
    function Owl(name, wheigt) {
        this.name = name;
        this.wheigt = wheigt;
    }
    Owl.prototype.chirp = function () {
        console.log("Pru, Pru");
    };
    Owl.prototype.eat = function (quantity) {
        console.log("The owl ate ".concat(quantity, " food(s)"));
    };
    Owl.prototype.fly = function (distance) {
        console.log("The Owl has flown ".concat(distance, " meters"));
    };
    return Owl;
}());
var owl = new Owl('Cruja', 10);
owl.chirp();
owl.eat(3);
owl.fly(10);
