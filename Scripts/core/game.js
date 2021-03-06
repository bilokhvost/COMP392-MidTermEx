/*game.ts
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
/// <reference path="_reference.ts"/>
// MAIN GAME FILE
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var Geometry = THREE.Geometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var Face3 = THREE.Face3;
var Point = objects.Point;
var CScreen = config.Screen;
//Custom Game Objects
var gameObject = objects.gameObject;
// setup an IIFE structure (Immediately Invoked Function Expression)
var game = (function () {
    // declare game objects
    var scene = new Scene();
    var renderer;
    var camera;
    var ambientLight;
    var spotLight;
    var control;
    var gui;
    var stats;
    var axes;
    var ground;
    var groundGeometry;
    var groundMaterial;
    var cubeOne;
    var cubeOneGeometry;
    var cubeOneMaterial;
    var cubeTwo;
    var cubeTwoGeometry;
    var cubeTwoMaterial;
    var cubeThree;
    var cubeThreeGeometry;
    var cubeThreeMaterial;
    var cubeFour;
    var cubeFourGeometry;
    var cubeFourMaterial;
    var cubeFive;
    var cubeFiveGeometry;
    var cubeFiveMaterial;
    function init() {
        // Instantiate a new Scene object
        //scene = new Scene();
        setupRenderer(); // setup the default renderer
        setupCamera(); // setup the camera
        //adding amber light to the scene
        ambientLight = new AmbientLight(0x292929);
        scene.add(ambientLight);
        console.log("Added an Ambient Light to Scene");
        //adding spot light to the scene
        spotLight = new SpotLight(0xFFFFFF);
        spotLight.position.set(-40, 40, -20);
        spotLight.castShadow = true;
        spotLight.shadowDarkness = 1;
        scene.add(spotLight);
        console.log("added pointLight to the scene");
        //adding AxisHelper
        axes = new AxisHelper(10);
        scene.add(axes);
        console.log("Added Axis Helper to scene...");
        // add plane
        groundGeometry = new PlaneGeometry(40, 40);
        groundMaterial = new LambertMaterial({ color: 0x9dbf7e });
        ground = new Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -0.5 * Math.PI;
        scene.add(ground);
        //adddind first cube
        cubeOneMaterial = new LambertMaterial({ color: Math.random() * 0xffffff });
        cubeOneGeometry = new CubeGeometry(15, 3, 15);
        cubeOne = new gameObject(cubeOneGeometry, cubeOneMaterial, 0, 2.5, 0);
        scene.add(cubeOne);
        //adddind second cube
        cubeTwoGeometry = new CubeGeometry(12, 3, 12);
        cubeTwoMaterial = new LambertMaterial({ color: Math.random() * 0xffffff });
        cubeTwo = new gameObject(cubeTwoGeometry, cubeTwoMaterial, 0, 5.5, 0);
        scene.add(cubeTwo);
        //adddind third cube
        cubeThreeGeometry = new CubeGeometry(9, 2, 9);
        cubeThreeMaterial = new LambertMaterial({ color: Math.random() * 0xffffff });
        cubeThree = new gameObject(cubeThreeGeometry, cubeThreeMaterial, 0, 8, 0);
        scene.add(cubeThree);
        //adddind fourth cube
        cubeFourGeometry = new CubeGeometry(7, 2, 7);
        cubeFourMaterial = new LambertMaterial({ color: Math.random() * 0xffffff });
        cubeFour = new gameObject(cubeFourGeometry, cubeFourMaterial, 0, 10, 0);
        scene.add(cubeFour);
        //adddind fifth cube
        cubeFiveGeometry = new CubeGeometry(3, 3, 3);
        cubeFiveMaterial = new LambertMaterial({ color: Math.random() * 0xffffff });
        cubeFive = new gameObject(cubeFiveGeometry, cubeFiveMaterial, 0, 12.5, 0);
        scene.add(cubeFive);
        // add controls to rotate five cubes
        gui = new GUI();
        control = new Control(0, 0, 0, 0, 0);
        addControl(control);
        // Add framerate stats
        addStatsObject();
        console.log("Added Stats to scene...");
        document.body.appendChild(renderer.domElement);
        gameLoop(); // render the scene	
    }
    function addControl(controlObject) {
        gui.add(controlObject, 'rotationSpeedOne', -0.5, 0.5);
        gui.add(controlObject, 'rotationSpeedTwo', -0.5, 0.5);
        gui.add(controlObject, 'rotationSpeedThree', -0.5, 0.5);
        gui.add(controlObject, 'rotationSpeedFour', -0.5, 0.5);
        gui.add(controlObject, 'rotationSpeedFive', -0.5, 0.5);
    }
    function addStatsObject() {
        stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    }
    // Setup main game loop
    function gameLoop() {
        stats.update();
        //rotation functionality
        cubeOne.rotation.y += control.rotationSpeedOne;
        cubeTwo.rotation.y += control.rotationSpeedTwo;
        cubeThree.rotation.y += control.rotationSpeedThree;
        cubeFour.rotation.y += control.rotationSpeedFour;
        cubeFive.rotation.y += control.rotationSpeedFive;
        // render using requestAnimationFrame
        requestAnimationFrame(gameLoop);
        // render the scene
        renderer.render(scene, camera);
    }
    // Setup default renderer
    function setupRenderer() {
        renderer = new Renderer();
        renderer.setClearColor(0xb9d2e9, 1.0);
        renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
        //renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        console.log("Finished setting up Renderer...");
    }
    // Setup main camera for the scene
    function setupCamera() {
        camera = new PerspectiveCamera(35, config.Screen.RATIO, 0.1, 100);
        camera.position.x = 15;
        camera.position.y = 30;
        camera.position.z = -70;
        camera.rotation.set(-1.10305, 0.49742, -0.1396);
        camera.lookAt(new Vector3(0, 0, 0));
        console.log("Finished setting up Camera...");
    }
    window.onload = init;
    return {
        scene: scene
    };
})();

//# sourceMappingURL=game.js.map
