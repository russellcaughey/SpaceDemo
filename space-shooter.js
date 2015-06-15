'use strict';

FamousFramework.scene('famous-demos:space-shooter', {
    behaviors: {

    },
    events: {
        '$self': {
            'click': function($state) {
                console.log("Click")
            }
        }
    },
    states: {},
    tree: 'space-shooter.html'
})
.config({
    includes: 
        // ['src/Game.js','src/Level.js']
        // ['src/AstroidField.js'],
        // ['src/Ship.js'],
        // ['src/ShipController.js'],
        // ['src/InputController.js'],
        // ['src/Input.js'],
        // ['src/Shot.js'],
        // ['src/Stats.js']
});