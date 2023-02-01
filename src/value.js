'use strict';

var compile = require('./compile');
var utilities = require('./utilities');

function transforms(value) {
  return utilities.removeInlineComments(utilities.removeFlags(value));
}

function Value(scssString, useRules) {
  this._parse(scssString, useRules);
}

Value.prototype = {
  _parse: function(scssString, useRules) {
    var transformed = transforms(scssString);
    var compiled = compile.fromString(transformed, useRules);
    this.value = compiled.trim();
  }
};

module.exports = Value;
