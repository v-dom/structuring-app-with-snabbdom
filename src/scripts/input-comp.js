'use strict';

module.exports = function(h) {
    return function(name, update) {
        return h('div', [
            h('input', {
                props: { type: 'text', placeholder: 'Type  your name' },
                on: { input: update }
            }),
            h('div', 'Hello ' + name)
        ]);
    };
};
