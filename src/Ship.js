var FamousEngine = require('famous/core/FamousEngine');
var Node = require('famous/core/Node');
var Mesh = require('famous/webgl-renderables/Mesh');
var Geometry = require('famous/webgl-geometries/Geometry');
var OBJLoader = require('famous/webgl-geometries/OBJLoader');
var Material = require('famous/webgl-materials/Material');
var Color = require('famous/utilities/Color');
var Position = require('famous/components/Position');
var ShipController = require('./ShipController');

var ship = new Node();
var shipMesh;
var controller;
var position;
var isInit = false;

var clock = FamousEngine.getClock();

function Ship(scene, options){
    // Load ship object
    OBJLoader.load('obj/ship_v2.obj', function(geometries){
        var buffers = geometries[0];
        var geometry = new Geometry({
            buffers: [
                { name: 'a_pos', data: buffers.vertices, size: 3 },
                { name: 'a_normals', data: buffers.normals, size: 3 },
                { name: 'a_texCoords', data: buffers.textureCoords, size: 2 },
                { name: 'indices', data: buffers.indices, size: 1 }
            ]
        });
        
        // Create ship node
        ship = scene.addChild(); 
        // Add geometry to ship
        shipMesh = new Mesh(ship)
            .setGeometry(geometry)
            .setBaseColor(new Color('silver'));
        // Set up ships properties
        ship
            .setOrigin(0.5, 0.5, 0.5)
            .setAlign(0.5, 0.9, 0.5)
            .setMountPoint(0.5, 0.5, 0.5)
            .setSizeMode(1, 1, 1)
            .setAbsoluteSize(30, 30, 30)
            .setRotation(-0.5,3,0);
        
        this._id = ship.getLocation();
        this._node = ship;
        ship.tagName = 'ship';
        
        // Add ship controller
        controller = new ShipController(ship);
    });
    
    isInit = true;
}

Ship.prototype.isAlive = function(){
    console.log("Ship still kickin'!");   
}

Ship.prototype.onReceive = function(type, ev){
    console.log("Received an event in Ship");
}

//  Ship update
FamousEngine.getClock().setInterval(function() { var time = clock.getTime();

}, 16);

module.exports = Ship;