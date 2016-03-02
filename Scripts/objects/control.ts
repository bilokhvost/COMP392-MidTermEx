/*control.ts
Kateryna Bilokhvost
Last Modified by: Kateryna Bilokhvost
Date last Modified: March 02, 2016
This is a program to display the Tapered Tower. 
The following controls are available: change rotation of the bottom cube
Revision History:
    Commit 1: Created the project file
    Commit 2: Added the light, axes helper and plane to the scene
    Commit 3: adding two cubes with rotations
    Commit 4: added three more cubes with rotations
    Commit 5: changed camera position 

*/
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
