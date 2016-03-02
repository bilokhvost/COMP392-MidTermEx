/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(rotationSpeed) {
            this.rotationSpeedY = rotationSpeed;
        }
        return Control;
    }());
    objects.Control = Control;
})(objects || (objects = {}));

//# sourceMappingURL=control.js.map
