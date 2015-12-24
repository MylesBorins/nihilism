var test = require('tap').test;

var nihilism = require('../lib/whatever');

test('nihilism:', function (t) {
  t.equals(typeof nihilism, 'function', 'nihilism is a function');
  t.equals(nihilism(), null, 'life is meaningless');
  t.end();
});
