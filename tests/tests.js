/**
 * Created by jtkeller2 on 1/24/16.
 * Demo test
 */

var should = require('should');
var assert = require('assert');
//var threeSeconds = require('seconds');

describe ('Test Framework', function () {
    it ('You should have mocha installed and running.', function () {
        assert.equal(true, true);
    })
    it ('You should have the should library installed and running for fluent testing.', function () {
        true.should.eql(true)
    })
})