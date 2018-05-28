window.addEventListener('load', function() {
});

let scrollPreventer = 0;
let scrollPreventerTimeout = null;
let scrollPreventerMax = 20;
let windowMultiple = 1;
window.addEventListener('scroll', function(e) {
  let maxScroll = window.innerHeight * windowMultiple;
  let overScrolled = window.scrollY > maxScroll;
  if (overScrolled && scrollPreventer < scrollPreventerMax) {
    window.scrollTo(0, window.innerHeight * windowMultiple);
    scrollPreventer++;
    if (!scrollPreventerTimeout) {
      scrollPreventerTimeout = setTimeout(function(){
        scrollPreventer = scrollPreventerMax;
      }, 200);
    }
  } else if (overScrolled) {
    scrollPreventer = 0;
    scrollPreventerTimeout = null;
    windowMultiple++;
  }

  if (window.scrollY < window.innerHeight * (windowMultiple - 1)) {
    windowMultiple--;
  }
});
