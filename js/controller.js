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
  jQuery('#play').on('click', function(){
    console.log('rewind clicked');
    game.play();
  });



  jQuery('#rewind').on('click', function(){
    console.log('rewind clicked');
    var arr1 = game.reset();

  });

  // Controller for "fast forward move"...
  jQuery('#forward').on('click', function(event){
    console.log('forward clicked');
    var arr1 = game.end();
    console.log (arr1);
  });

// Controller for "next move"...
  jQuery('#next').on('click', function(event){
    console.log('next clicked');
    game.next();
    transform ();
  });

// Controller for "back move"...
  jQuery('#back').on('click', function(event){
    var arr1 = game.prev();
  });


// view helper starts here



// Because the game board only corresponds to the `tbody` element...
var $chessboard = jQuery('.chessboard tbody');
// I always start variable names with `$` when they reference `jQuery.Collection` values

// This looks strangely familiar... is that COPY-PASTA!?
// TODO: Don't use COPY-PASTA!
var gameboard = game.board;


// [
//   [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
//   [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
//   Array(8).fill(null),
//   Array(8).fill(null),
//   Array(8).fill(null),
//   Array(8).fill(null),
//   [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
//   [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
// ];
// You could also use nested `for` loops, but this is better...
function transform () {

jQuery(gameboard).each(function(rank, row){
  jQuery(row).each(function(file, piece){
    // http://stackoverflow.com/questions/1442925/how-to-get-nth-jquery-element
    var $square = $chessboard
      .find('tr').eq(rank) // Get the `tr` inside the `chessboard` for the `rank`
      .find('td').eq(file) // Get the `td` inside the `tr` for the `file`

    console.log($square.get(), rank, file, piece, gameboard, gameboard[rank][file]);
    console.log(gameboard);
    // Use the log, Luke!


    if (piece) $square.text(piece);



    if (gameboard[rank][file] === 'R') {
      $square.addClass('brook');
     }
    if (gameboard[rank][file]=== 'P') {
      $square.addClass('bpawn');
    }
    if (gameboard[rank][file] === 'N') {
      $square.addClass('bknight');
    }
    if (gameboard[rank][file] === 'B') {
      $square.addClass('bbishop');
    }
    if (gameboard[rank][file] === 'p') {
      $square.addClass('wpawn');
    }
    if (gameboard[rank][file] === 'n') {
      $square.addClass('wknight');
    }
    if (gameboard[rank][file] === 'b') {
      $square.addClass('wbishop');
    }








    // $square.text(piece); // Not _exactly_ what we discussed in class...
    // TODO: Convert `square` to class name(s)
    // TODO: Add class name(s) to `td` instead
  });
});

// Don't go breaking my IIFE...


}






})(window || module && module.exports || this)
