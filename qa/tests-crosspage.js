var Browser = require('zombie'), assert = require('chai').assert;

var browser;

suite('Interpage tests', function(){
  setup(function(){
    browser = new Browser();
  });

  test('Direct visit to Request group rate ' + 'must remain Referrer field empty', function(done){
    browser.visit('http://localhost:3000/tours/request-group-rate',
    function(){
      assert(browser.field('referrer').value === '');
      done();
    });
  });
});
