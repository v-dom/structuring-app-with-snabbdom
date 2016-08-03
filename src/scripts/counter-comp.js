'use strict';

module.exports = function(h) {
  return function(props) {
    return h('div', [

      h('button.inc', {
        on: {
          click: [props.callback, props.INC]
        }
      }),

      h('button.dec', {
        on: {
          click: [props.callback, props.DEC]
        }
      }),

      h('div', ('value: ' + props.value))

    ]);
  };
};
