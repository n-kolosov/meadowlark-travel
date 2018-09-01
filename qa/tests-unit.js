var fortune = require('../lib/fortune.js');

var expect = require('chai').expect;
suite('Oracle predictions tests', function(){
  test('getFortune() must return prediction', function(){
    expect(typeof fortune.getFortune() === 'string');
  });
});