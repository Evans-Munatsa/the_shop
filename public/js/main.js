var Shuffle = require('shufflejs');

var myShuffle = new Shuffle(document.getElementById('grid'), {
  itemSelector: '.js-item',
  sizer: '.js-shuffle-sizer'
});