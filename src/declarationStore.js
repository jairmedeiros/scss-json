'use strict';

function DeclarationStore() {
  this.declarations = [];
  this.useRules = [];
}

DeclarationStore.prototype = {
  addDeclaration: function(declaration) {
    this.declarations.push(declaration);
  },

  addUseRule: function(useRule) {
    this.useRules.push(useRule);
  },

  replaceVariables: function(scssString) {
    var replacedString = scssString;

    this.declarations.forEach(function(declaration) {
      var variable = declaration.variable.value;
      var value = declaration.value.value;

      var subsetRegex = new RegExp('\\' + variable + '[\\w_-]', 'g');
      var isSubset = !!replacedString.match(subsetRegex);

      if (!isSubset && variable) {
        var regex = new RegExp('(\\' + variable + ')([\\W\\,]?)', 'g');
        replacedString = replacedString.replace(regex, value + '$2');
      }
    });
    return replacedString;
  }
};

module.exports = DeclarationStore;
