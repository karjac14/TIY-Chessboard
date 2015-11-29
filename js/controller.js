(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
   * 2. What `SELECTOR` will get the element involved in the interaction?
   * 3. What `CALLBACK` should be run when the interaction happens?
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */
   regen.transform();

   var playNow = 0;
   var ctr = game.counter();

  // Controller for "auto play"...
  jQuery('#play').on('click', function (){
    jQuery('#play').addClass('playing');
    autoplay();
  });


  jQuery('.playing').on('click', function(){
    pause();
    jQuery('.playing').removeClass('playing');
  });


  function autoplay (){
  console.log ("ap1 reached");
  playNow = setInterval(autoPlayTwo, 1000);
  }

  function autoPlayTwo () {
    console.log("reached ap2");
    if (ctr < 8) {
      ctr = game.counter();
      game.next();
      transform ();
      console.log(ctr);
    } else {
      return;
    }
    return;
  }

  function pause (){
    clearInterval(playNow);
  }



  jQuery('#rewind').on('click', function(){
    console.log('rewind clicked');
    game.reset();
    regen.transform ();

  });

  // Controller for "fast forward move"...
  jQuery('#forward').on('click', function(event){
    console.log('forward clicked');
    game.end();
    regen.transform ();

  });

// Controller for "next move"...
  jQuery('#next').on('click', function(event){
    console.log('next clicked');
    game.next();
    regen.transform ();
  });

// Controller for "back move"...
  jQuery('#back').on('click', function(event){
    game.prev();
    regen.transform ();

  });


// view helper starts here







// Don't go breaking my IIFE...
})(window || module && module.exports || this)
