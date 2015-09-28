(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
   * 2. What `SELECTOR` will get the element involved in the interaction?
   * 3. What `CALLBACK` should be run when the interaction happens?
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */
  // document.querySelector(SELECTOR)
  //   .addEventListener(TYPE, CALLBACK);
  // // AKA
  // jQuery(SELECTOR).on(TYPE, CALLBACK);
  // // Where CALLBACK is...
  // function CALLBACK (EVENT){
  //   // Do something with Models and Views...
  //   // Maybe do something with EVENT...?
  // }


  // Controller for "next move"...
  jQuery('#rewind').on('click', function(){
    console.log('rewind clicked');
    game.prev();

    // TODO: Tell the Model -- `game` -- to advance to the next move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "previous move"...
  jQuery('#forward').on('click', function(event){
    console.log('forward clicked');
    game.next();
    // TODO: Tell the Model -- `game` -- to advance to the previous move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });


  // Controller for "previous move"...
  jQuery('#playpause').on('click', function(event){
    console.log('play clicked');

    // TODO: Tell the Model -- `game` -- to advance to the previous move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "fast-forward"...
  // jQuery(/* your "fast-forward" button */).on('click', function(event){  /* wat? */
  //   // TODO: Fire tracer bullet!
  //   // TODO: Tell the Model -- `game` -- to advance to the last move...
  //   // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  // });

  // Controller for anything else...
  jQuery('#back').on('click', function(event){
    console.log('back clicked');
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });



  // Controller for "fast-forward"...
  jQuery(/* your "fast-forward" button */).on('click', function(event){
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to advance to the last move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for anything else...
  jQuery(/* any other buttons out there? */).on('click', function(event){
    // TODO: Fire tracer bullet!
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

// Am I supposed to recognize this?
})(window || module && module.exports || this)