'use strict';

var test = require('tape');
var h = require('snabbdom/h');
var sinon = require('sinon');
var main = require('scripts/input-comp')

var before = test;
var after = test;

before('description: example 1', function(t) {
    t.end();
});

test('example view', function(t) {

    var createView = main(h);
    var actual, expect;
    var callback = sinon.spy(),
        view = createView('John', callback);

    actual = view.sel;
    expect = 'div';
    t.equal(actual, expect, 'should render correctly');

    actual = view.children[1].text;
    expect = 'Hello John';
    t.equal(actual, expect);

    // simulate input
    view.children[0].data.on.input({ target: { value: 'Andy' } });

    actual = callback.calledWith({ target: { value: 'Andy' } });
    expect = true;
    t.equal(actual, expect, 'event was called with args');

    t.end();
});

after('end test ---------------------------------------', t => {
    t.end();
});
