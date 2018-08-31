suite('About tests', function(){
  test('This page contains \"Contact\" link', function(){
    assert($('a[href="/contact"]').length);
  });
});