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
    var arr = game.reset();
    orig(arr);

    // TODO: Tell the Model -- `game` -- to advance to the next move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "previous move"...
  jQuery('#forward').on('click', function(event){
    console.log('forward clicked');
    var arr = game.end();
    last(arr);
    // TODO: Tell the Model -- `game` -- to advance to the previous move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });


  // Controller for "previous move"...
  jQuery('#next').on('click', function(event){
    console.log('play clicked');
    var arr = game.next();
    transform (arr);
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
    var arr = game.prev();
    transform (arr);
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });



  // // Controller for "fast-forward"...
  // jQuery(/* your "fast-forward" button */).on('click', function(event){
  //   // TODO: Fire tracer bullet!
  //   // TODO: Tell the Model -- `game` -- to advance to the last move...
  //   // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  // });
  //
  // // Controller for anything else...
  // jQuery(/* any other buttons out there? */).on('click', function(event){
  //   // TODO: Fire tracer bullet!
  //   // TODO: Tell the Model -- `game` -- to do something it knows how to do...
  //   // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  // });


function transform (arr){
  if (arr[4][3] === 'p') {
    $('#D4').addClass('wpawn');
    $('#D2').removeClass('wpawn');
  }
  if (arr[2][5] === 'N') {
    $('#F6').addClass('bknight');
    $('#G8').removeClass('bknight');
  }
  if (arr[4][2] === 'p') {
    $('#C4').addClass('wpawn');
    $('#C2').removeClass('wpawn');
  }
  if (arr[2][4] === 'P') {
    $('#E6').addClass('bpawn');
    $('#E7').removeClass('bpawn');
  }
  if (arr[5][6] === 'p') {
    $('#G3').addClass('wpawn');
    $('#G2').removeClass('wpawn');
  }
  if (arr[3][3] === 'P') {
    $('#D5').addClass('bpawn');
    $('#D7').removeClass('bpawn');
  }
  if (arr[6][6] === 'b') {
    $('#G2').addClass('wbishop');
    $('#F1').removeClass('wbishop');
  }
  if (arr[1][4] === 'B') {
    $('#E7').addClass('bbishop');
    $('#F8').removeClass('bbishop');
  }
  if (arr[5][5] === 'n') {
    $('#F3').addClass('wknight');
    $('#G1').removeClass('wknight');
  }
}

function orig (arr){
    // $('#D2').addClass('wpawn');
    // $('#G8').addClass('bknight');
    // $('#C2').addClass('wpawn');
    // $('#E6').addClass('bpawn');
    // $('#G2').addClass('wpawn');
    // $('#D7').addClass('bpawn');
    // $('#F1').addClass('wbishop');
    // $('#F8').addClass('bbishop');
    // $('#G1').addClass('wknight');

    $('#D4').removeClass('wpawn');
    $('#D2').addClass('wpawn');
    $('#F6').removeClass('bknight');
    $('#G8').addClass('bknight');
    $('#C4').removeClass('wpawn');
    $('#C2').addClass('wpawn');
    $('#E6').removeClass('bpawn');
    $('#E7').addClass('bpawn');
    $('#G3').removeClass('wpawn');
    $('#G2').addClass('wpawn');
    $('#D5').removeClass('bpawn');
    $('#D7').addClass('bpawn');
    $('#G2').removeClass('wbishop');
    $('#F1').addClass('wbishop');
    $('#E7').removeClass('bbishop');
    $('#F8').addClass('bbishop');
    $('#F3').removeClass('wknight');
    $('#G1').addClass('wknight');
}

function last (arr){
    $('#D4').addClass('wpawn');
    $('#D2').removeClass('wpawn');
    $('#F6').addClass('bknight');
    $('#G8').removeClass('bknight');
    $('#C4').addClass('wpawn');
    $('#C2').removeClass('wpawn');
    $('#E6').addClass('bpawn');
    $('#E7').removeClass('bpawn');
    $('#G3').addClass('wpawn');
    $('#G2').removeClass('wpawn');
    $('#D5').addClass('bpawn');
    $('#D7').removeClass('bpawn');
    $('#G2').addClass('wbishop');
    $('#F1').removeClass('wbishop');
    $('#E7').addClass('bbishop');
    $('#F8').removeClass('bbishop');
    $('#F3').addClass('wknight');
    $('#G1').removeClass('wknight');
}

// Am I supposed to recognize this?
})(window || module && module.exports || this)
