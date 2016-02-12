// function activate(){
  var rocket = '$(svg:hover)',
    tl = new TimelineLite({});

  tl
    .to($('#flame'), .1, {scaleY: '1.4', repeat: -1}, 'start')
    .to($('svg'), .05, { rotation: '+=.7', repeat: -1}, 'start');

  // return tl;
// }