// add '.js' class to <html> at first chance (so we can hide text visually at this stage)
document.documentElement.classList.add( 'js' );

var el = document.querySelector( '.scroll-in' );
var elTxt = el.textContent;

// base animation speed on character length: that way scroll speed is consistent regardless of varying text length
var tweenTimeSecsPerChar = 0.01;
var tweenTimeSecs = tweenTimeSecsPerChar * elTxt.length;

// empty text before animation, set element visibility
el.textContent = '';
el.style.opacity = 1;

// tweens using GSAP's TextPlugin
TweenLite.to( el, tweenTimeSecs, { text: { value: elTxt, delimiter: '' } } );