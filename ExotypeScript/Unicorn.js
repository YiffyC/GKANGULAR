"use strict";
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
exports.__esModule = true;
var Animal_1 = require("./Animal");
var Unicorn = /** @class */ (function (_super) {
    __extends(Unicorn, _super);
    function Unicorn(name) {
        return _super.call(this, name) || this;
    }
    Unicorn.prototype.move = function (distance) {
        _super.prototype.move.call(this, distance);
        console.log("Dancing on rainbow");
    };
    return Unicorn;
}(Animal_1.Animal));
exports.Unicorn = Unicorn;
