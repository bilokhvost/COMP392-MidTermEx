/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
         public rotationSpeedOne:number;
         public rotationSpeedTwo:number;
         public rotationSpeedThree:number;
         public rotationSpeedFour:number;
         public rotationSpeedFive:number;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(rotationSpeedOne:number, rotationSpeedTwo:number, rotationSpeedThree:number, rotationSpeedFour:number, rotationSpeedFive:number) {
              this.rotationSpeedOne = rotationSpeedOne;
              this.rotationSpeedTwo = rotationSpeedTwo;
              this.rotationSpeedThree = rotationSpeedThree;
              this.rotationSpeedFour = rotationSpeedFour;
              this.rotationSpeedFive = rotationSpeedFive;
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
       
    }
}
