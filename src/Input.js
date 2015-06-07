function Input(node){
    // Store a reference to the node
    this.node = node;
    // Add the component and store its path
    this.id = node.addComponent(this);
    // Event listener for key down
    document.addEventListener('keydown', function(){ onKeyDown(event,node); 
    }, false);
    // Event listener for key up
    document.addEventListener('keyup', function(){ onKeyUp(event,node);
    }, false);
    // Request update on this node
    this.node.requestUpdate(this.id);
}

var onKeyDown = function(event, node){
    for(var value in KEYS){
        if(event.which == KEYS[value]){
            node.emit('keydown', value);
        }
    }
}

var onKeyUp = function(event, node){
    for(var value in KEYS){
        if(event.which == KEYS[value]){
            node.emit('keyup', value);
        }
    }
}

//Input.prototype.onKeyDown = function(event, node) {
//    console.log("Test in Input::KEYDOWN::"+this.node);
//    for(var value in KEYS){
//        if(event.which == KEYS[value]){
//            this.node.emit('keydown', value);
//        }
//    }
//};
//
//Input.prototype.onKeyUp = function(event) {
//    console.log("Test in Input::KEYUP::"+this.node);
//    for(var value in KEYS){
//        if(event.which == KEYS[value]){
//            this.node.emit('keyup', value);
//        }
//    }
//};

//Input.prototype = Object.create(Node.prototype);
//Input.prototype.constructor = Node;

//Input.prototype.onUpdate = function onUpdate(time){
//    console.log("Test in Input::"+this.node);
//    this.node.requestUpdateOnNextTick(this.id);
//};

var KEYS = {
    BACKSPACE: 8,
    TAB:       9,
    RETURN:   13,
    ESC:      27,
    SPACE:    32,
    PAGEUP:   33,
    PAGEDOWN: 34,
    END:      35,
    HOME:     36,
    LEFT:     37,
    UP:       38,
    RIGHT:    39,
    DOWN:     40,
    INSERT:   45,
    DELETE:   46,
    ZERO:     48, ONE: 49, TWO: 50, THREE: 51, FOUR: 52, FIVE: 53, SIX: 54, SEVEN: 55, EIGHT: 56, NINE: 57,
    A:        65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89,     Z: 90,
    TILDA:    192
};

module.exports = Input;