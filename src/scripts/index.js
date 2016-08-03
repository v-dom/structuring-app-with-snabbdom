'use strict';

var snabbdom = require('snabbdom');
var createInput = require('scripts/input-comp');
var createCounter = require('scripts/counter-comp');
var h = require('snabbdom/h');

var patch = snabbdom.init([
  require('snabbdom/modules/props'), // for setting properties on DOM elements
  require('snabbdom/modules/eventlisteners') // attaches event listeners
]);

var renderInput = function() {

  var Input = createInput(h);

  var oldVnode = document.querySelector('#placeholder-input');

  var update = function(e) {
    var newVnode = Input(e.target.value, update);
    oldVnode = patch(oldVnode, newVnode);
  };

  oldVnode = patch(oldVnode, Input('', update));
};

var renderCounter = function() {

  var INC = 'increment';
  var DEC = 'decrement';

  var Counter = createCounter(h);

  var oldVnode = document.querySelector('#placeholder-counter');

  var update = function(action) {
    var newVnode = Counter({
      INC: INC,
      DEC: DEC,
      value: action.type === INC ? action.value + 1 : action.value - 1,
      callback: update
    });
    oldVnode = patch(oldVnode, newVnode);
  };

  oldVnode = patch(oldVnode, Counter({
    INC: INC,
    DEC: DEC,
    value: 0,
    callback: update
  }));
};

renderInput();
renderCounter();
