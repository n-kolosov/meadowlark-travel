var Browser = require('zombie'), assert = require('chai').assert;

var browser;

suite('Interpage tests', function(){
  setup(function(){
    browser = new Browser();
  });

  test('Group price request from Hood River tour page ' + 'must fill Referrer field', function(done){
    var referrer = 'http://localhost:3000/tours/hood-river';
    browser.visit(referrer, function(){
      browser.clickLink('.requestGroupRate', function(){
        assert(browser.field('referrer').value === referrer);
        done();
      });
    });
  });

  test('Group price request from Hood River tour page ' + 'from Oregon Coast hotel ' + 'must fill Referrer field', function(done){
    var referrer = 'http://localhost:3000/tours/oregon-coast';
    browser.visit(referrer, function(){
      browser.clickLink('.requestGroupRate', function(){
        assert(browser.field('referrer').value === referrer);
        done();
      });
    });
  });

  test('Direct visit to Request group rate ' + 'must remain Referrer field empty', function(done){
    browser.visit('http://localhost:3000/tours/request-group-rate',
    function(){
      assert(browser.field('referrer').value === '');
      done();
    });
  });
});
