'use strict';

module.exports = function(h) {
  return function(props) {
    return h('div', [

      h('button.inc', {
        on: {
          click: [props.callback, {
            type: props.INC,
            value: props.value
          }]
        }
      }, '+'),

      h('button.dec', {
        on: {
          click: [props.callback, {
            type: props.DEC,
            value: props.value
          }]
        }
      }, '-'),

      h('div', ('value: ' + props.value))
    ]);
  };
};
