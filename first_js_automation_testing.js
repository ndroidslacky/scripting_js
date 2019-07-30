var mocha = require("./bdd_tests/mocha");
var chai = require('./bdd_tests/chai');

mocha.setup('bdd');
var assert = chai.assert;

describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
  });

});

function pow(x, n) {
  /* function code is to be written, empty now */
}

mocha.run();