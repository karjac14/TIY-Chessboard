(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
   * 2. What `SELECTOR` will get the element involved in the interaction?
   * 3. What `CALLBACK` should be run when the interaction happens?
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */



  // Controller for "reset move"...
  jQuery('#rewind').on('click', function(){
    console.log('rewind clicked');
    var arr = game.reset();
    orig(arr);

  });

  // Controller for "fast forward move"...
  jQuery('#forward').on('click', function(event){
    console.log('forward clicked');
    var arr = game.end();
    transform(arr);
  });

// Controller for "next move"...
  jQuery('#next').on('click', function(event){
    console.log('play clicked');
    var arr = game.next();
    nextTransform (arr);
  });

// Controller for "back move"...
  jQuery('#back').on('click', function(event){
    var arr = game.prev();
    backTransform (arr);
  });

//  altering the classes to change beahvious of html element


function nextTransform (arr){
  if (arr[4][3] === 'p') {          //basically the same as board[4][3]
    $('#D4').addClass('wpawn');     //add class to div#d4 in html
    $('#D2').removeClass('wpawn');  //remove class to div#d2 in html
  }
  if (arr[2][5] === 'N') {          //basically the same as board[2][5]
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

function backTransform (arr){
  if (arr[6][3] === 'p') {          //basically the same as board[4][3]
    $('#D2').addClass('wpawn');     //add class to div#d4 in html
    $('#D4').removeClass('wpawn');  //remove class to div#d2 in html
  }
  if (arr[0][6] === 'N') {          //basically the same as board[2][5]
    $('#G8').addClass('bknight');
    $('#F6').removeClass('bknight');
  }
  if (arr[6][2] === 'p') {
    $('#C2').addClass('wpawn');
    $('#C4').removeClass('wpawn');
  }
  if (arr[1][4] === 'P') {
    $('#E7').addClass('bpawn');
    $('#E6').removeClass('bpawn');
  }
  if (arr[6][6] === 'p') {
    $('#G2').addClass('wpawn');
    $('#G3').removeClass('wpawn');
  }
  if (arr[1][3] === 'P') {
    $('#D7').addClass('bpawn');
    $('#D5').removeClass('bpawn');
  }
  if (arr[7][5] === 'b') {
    $('#F1').addClass('wbishop');
    $('#G2').removeClass('wbishop');
  }
  if (arr[0][5] === 'B') {
    $('#F8').addClass('bbishop');
    $('#E7').removeClass('bbishop');
  }
  if (arr[7][6] === 'n') {
    $('#G1').addClass('wknight');
    $('#F3').removeClass('wknight');
  }
}



function orig (arr){


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
