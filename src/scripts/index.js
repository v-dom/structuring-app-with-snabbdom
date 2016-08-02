'use strict';

var snabbdom = require('snabbdom');
var createInput = require('scripts/input-comp');
var h = require('snabbdom/h');
var patch = snabbdom.init([
    require('snabbdom/modules/props'), // for setting properties on DOM elements
    require('snabbdom/modules/eventlisteners') // attaches event listeners
]);

var render = function() {

    var Input = createInput(h);

    var oldVnode = document.querySelector('#placeholder-input');

    var update = function(e) {
        var newVnode = Input(e.target.value, update);
        oldVnode = patch(oldVnode, newVnode);
    };

    oldVnode = patch(oldVnode, Input('', update));
};

render();
