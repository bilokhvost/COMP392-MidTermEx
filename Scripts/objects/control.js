/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(rotationSpeedOne, rotationSpeedTwo, rotationSpeedThree, rotationSpeedFour, rotationSpeedFive) {
            this.rotationSpeedOne = rotationSpeedOne;
            this.rotationSpeedTwo = rotationSpeedTwo;
            this.rotationSpeedThree = rotationSpeedThree;
            this.rotationSpeedFour = rotationSpeedFour;
            this.rotationSpeedFive = rotationSpeedFive;
        }
        return Control;
    }());
    objects.Control = Control;
})(objects || (objects = {}));

//# sourceMappingURL=control.js.map
