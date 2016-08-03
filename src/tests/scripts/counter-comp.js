'use strict';

var test = require('tape');
var h = require('snabbdom/h');
var sinon = require('sinon');
var Counter = require('scripts/counter-comp');

var before = test;
var after = test;

before('description: counter', function(t) {
  t.end();
});

test('example wiew', function(t) {

  var callback = sinon.spy();

  var props = {
    callback: callback,
    INC: 'increment',
    DEC: 'decrement',
    value: 5
  };

  var createCounter = Counter(h);
  var counter = createCounter(props);

  var actual, expect;
  actual = counter.sel;
  expect = 'div';
  t.equal(actual, expect, 'should render correctly');

  // simulate click
  counter.children[0].data.on.click[0]();

  actual = callback.called;
  expect = true;
  t.equal(actual, expect, 'callaback increment was called');

  // simulate click
  counter.children[1].data.on.click[0]();
  actual = callback.called;
  expect = true;
  t.equal(actual, expect, 'callaback decrement was called');

  actual = counter.children[2].text;
  expect = 'value: 5';
  t.equal(actual, expect, 'should be "value: 5"');

  t.end();
});

after('end test ---------------------------------------', t => {
  t.end();
});
