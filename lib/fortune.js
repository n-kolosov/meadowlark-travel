'use strict'

var fortunes = ['Everything has beauty, but not everyone can see it.',
                'If you have an idea, make it into reality.',
                'Move quickly. Now is the time to make progress.',
                'It may be difficult, but it will be worth it in the end.',
                'Don\'t worry what others think of you.'];

exports.getFortune = function() {
  let idx = Math.floor(Math.random()*fortunes.length);
  return fortunes[idx];
}
