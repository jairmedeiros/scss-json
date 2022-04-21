'use strict';

var Processor = require('./src/processor');

function scss2Json(path, options) {
  var processor = new Processor(path, options);
  return processor.object;
}

module.exports = scss2Json;
