'use strict';

FamousFramework.scene('famous-demos:space-demo', {
    behaviors: {},
    events: {},
    states: {},
    tree: 'framework.html'
})
.config({
    includes: 
        ['Game.js'], 
        ['Level.js'],
        ['AstroidField.js'],
        ['Ship.js'],
        ['ShipController.js'],
        ['InputController.js'],
        ['Input.js'],
        ['Shot.js'],
        ['Stats.js']
});