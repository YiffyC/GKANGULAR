"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    //cstr
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        console.log(this.name + "a bougé de " + distance + " mètres.");
    };
    return Animal;
}());
exports.Animal = Animal;
