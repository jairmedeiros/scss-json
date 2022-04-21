"use strict";

var assert = require("assert");
var proxyquire = require("proxyquire");
var sinon = require("sinon");

describe("Main", function () {
  var scssJson;
  var ProcessorStub;
  var returnedObject;
  var path;
  var options;

  beforeEach(function () {
    returnedObject = {
      test: true,
    };

    ProcessorStub = sinon.spy(function () {
      this.object = returnedObject;
    });

    scssJson = proxyquire("../main", {
      "./src/processor": ProcessorStub,
    });

    path = "test/path.scss";
    options = {
      dependencies: [],
    };
  });

  describe("Constructor", function () {
    it("create a new processor and return its object", function () {
      var json = scssJson(path, options);

      assert.ok(ProcessorStub.calledOnce);
      assert.ok(ProcessorStub.calledWith(path, options));
      assert.deepEqual(json, returnedObject);
    });
  });
});
