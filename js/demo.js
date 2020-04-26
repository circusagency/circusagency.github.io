document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: 'transparent',
    lineColor: 'black',
    proximity: 100,
    particleRadius: 0,
    directionY: 'center',
    directionX: 'center'
    //density: 10
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 0 + 'px';
}, false);
