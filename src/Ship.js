var FamousEngine = require('famous/core/FamousEngine');
var Node = require('famous/core/Node');
var Mesh = require('famous/webgl-renderables/Mesh');
var Geometry = require('famous/webgl-geometries/Geometry');
var OBJLoader = require('famous/webgl-geometries/OBJLoader');
var Material = require('famous/webgl-materials/Material');
var Color = require('famous/utilities/Color');
var Position = require('famous/components/Position');
var ShipController = require('./ShipController');

var _ship = new Node();
var _shipMesh;

function Ship(node){
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
        _ship = node.addChild(); 
        // Add ship tag
        _ship.tagName = 'ship';
        // Add ship component to node
        _ship.id = _ship.addComponent(this);
        // Add geometry to ship
        _shipMesh = new Mesh(_ship)
            .setGeometry(geometry)
            .setBaseColor(new Color('silver'));
        // Set up ships properties
        _ship
            .setOrigin(0.5, 0.5, 0.5)
            .setAlign(0, 0.9, 0)
            .setMountPoint(0.5, 0.5, 0.5)
            .setSizeMode(1, 1, 1)
            .setAbsoluteSize(30, 30, 30)
            .setRotation(-0.5,3.17,0)
            .setPosition(window.innerWidth/2, 0.9, 0.5);

        // Create ship controller
        new ShipController(_ship);
    });
}

Ship.prototype.onReceive = function(type, event){
    
};

Ship.prototype.onUpdate = function onUpdate(){
    
//    _ship.requestUpdateOnNextTick(_ship.id);
};

module.exports = Ship;