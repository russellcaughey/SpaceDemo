var Position = require('famous/components/Position');
var Mesh = require('famous/webgl-renderables/Mesh');
var Box = require('famous/webgl-geometries/primitives/Box');
var Particle = require('famous/physics/bodies/Particle');
var Material = require('famous/webgl-materials/Material');
var Color = require('famous/utilities/Color');
var Vector3 = require('famous/math/Vec3');
var Node = require('famous/core/Node');

   
function Shot(node, type){
    // Create new unmounted node
//    this.shotNode = new Node();
    this.shotNode = node.addChild();
//    this.shotNode = node.getParent().addChild();
    // Set this tag name
    this.tagName = 'Shot';
    // Set type
    this.type = type;
    // Add position component to this node
    this.position = new Position(this.shotNode);
  
    // Determine the type of shot
    if(type.constructor === String){
        switch (type.toLowerCase()){
            case 'laser':
                this.shotMesh = new Mesh(this.shotNode)
                    .setGeometry(new Box())
                    .setBaseColor(new Color('red'));
                this.shotNode.setMountPoint(1, 1, 0); 
                break;
            case 'particle':
                this.shotMesh = new Mesh(this.shotNode)
                    .setGeometry(new Box())
                    .setBaseColor(new Color('blue'));
                this.shotNode.setMountPoint(-1, 1, 0); 
                break;
            default:
                console.log("Misfire.");
                return;
        }
    }
    
//    var scene = this.shotNode.getParent();
//    while(scene.getLocation != 'body'){
//        scene = scene.getParent();   
//    }
    console.log("Start location: " + this.shotNode.getLocation() + " Start Parent: " + this.shotNode.getParent() + " Start Tag: " +this.tagName);
//    var sceneNode = this.shotNode.getParent().getParent().getLocation();
//    console.log("SHOT:" + this.shotNode.getLocation());
//    this.shotNode.getParent().removeChild(this);
//    this.shotNode.getParent().dismount(this.shotNode);
//    console.log("Parent node: " + this.shotNode.getParent());
//    this.shotNode.mount(sceneNode, this.id);
    this.shotNode.dismount();
    console.log("End location: " + this.shotNode.getLocation() + " End Parent: " + this.shotNode.getParent() + " End Tag: " +this.tagName);
//    console.log("End location:" + this.shotNode.getLocation() + " End Parent: " + this.shotNode.getParent() + " End Tag: " +this.tagName);
//    console.log("Ship node type :" + this.shotNode.constructor);
    
//    console.log("Shot parent: " + this.shotNode.getParent().tagName + " , " + this.shotNode.isMounted() + " , " + this.shotNode.getLocation())
//    node.removeChild(this.shotNode);
//    var Input = require('./Input');
//    this.shotNode.removeComponent(Input);
//    debugger;
//    this.shotNode.dismount();
//    console.log("Shot parent: " + this.shotNode.getParent().tagName + this.shotNode.isMounted() + " , " + this.shotNode.getLocation())
//        this.shotNode
//            .setOrigin(0.5, 0.5, 0.5)
//            .setAlign(0, 0.9, 0)
//            .setMountPoint(0.5, 0.5, 0.5)
////            .setSizeMode(1, 1, 1)
//            .setSizeMode('absolute', 'absolute', 'absolute')
//            .setAbsoluteSize(3000, 3000, 3000)
//            .setRotation(-0.5,3.17,0)
//            .setPosition(window.innerWidth/2, 0.9, 0.5);
    
//    var Transitionable = require('famous/transitions/Transitionable');
//    var myValue = new Transitionable(0);
//    myValue.set(100, { duration: 30000 });
    
//    this.shotNode
//        .setSizeMode('absolute', 'absolute')
//        .setAbsoluteSize(5,100,5)
//        .setPosition(myValue, myValue, myValue);

//    console.log("Position of the node: " + this.node._lastEulerX);
//    if (Date.now() - this.lastShot < 1000){
//    
//    } else{
//        this.lastShot = Date.now();
//        this.node._lastEulerX += 10;   
//    }
    
    // Request update on this node
    this.shotNode.requestUpdate(this.id);
}
    
//    if (Date.now() - this.lastShot < 500) return;
//    this.lastShot = Date.now();
    
//    var laserNode = new Node();
//      
//    console.log("Laser: " + laserNode + " IsShown: " + laserNode.isShown() + " Opacity: " + laserNode.getOpacity() + " Align: " + laserNode.getAlign().toString());
//    
//    laserNode.setAlign(9,1,1);
//    var test = [8,6,7,5,3,0,9];
//    for(var value in laserNode.getAlign()){
    
//    console.log(test.toString());
    
//    for(var value in laserNode.getAlign()){
//        console.log(value.toString());   
//    }

    
    
//        laser.rotateY(Math.PI / 2);
    
//        laser.position.set(
//            this.currentXPos, 0.5, 0.5
//            (Math.random() * otherObject.radius * 2) - otherObject.radius,
//            (Math.random() * otherObject.radius * 2) - otherObject.radius,
//            ((Math.random() * 10) - 20) + this.radius
//        );

//        this.group.add(laser);

//        var group = this.group;

//    $.animate({
//            duration: 1000,
//            onUpdate() {
//                var travelZVector = new THREE.Vector3(
//                    0,
//                    0,
//                    5
//                );

//                laser.position.add(travelZVector);
//            },
//        onFinish() {
//        group.remove(laser);1
//      }
//    });
//  }    
//};

// Set the boundaries the ship can move within
Shot.prototype.setBounds = function(size){
//    bounds = [boundsOffset, size-boundsOffset];
};



// Update ship controller
Shot.prototype.onUpdate = function onUpdate(time){
    

    // Request update
    this.node.requestUpdateOnNextTick(this.id);
};

module.exports = Shot;