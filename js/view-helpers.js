// TODO: Should probably live in `js/view-helpers.js` one day...
(function(globals){ // That damn IIFE again!
// Your code BELOW here...

// Because the game board only corresponds to the `tbody` element...
var $chessboard = jQuery('.chessboard tbody');
// I always start variable names with `$` when they reference `jQuery.Collection` values
var regen = globals.regen = {

transform: function () {
// This looks strangely familiar... is that COPY-PASTA!?
// TODO: Don't use COPY-PASTA!
var gameboard = game.board;



jQuery(gameboard).each(function(rank, row){
  jQuery(row).each(function(file, piece){
    // http://stackoverflow.com/questions/1442925/how-to-get-nth-jquery-element
    var $square = $chessboard
      .find('tr').eq(rank) // Get the `tr` inside the `chessboard` for the `rank`
      .find('td').eq(file) // Get the `td` inside the `tr` for the `file`

    // console.log($square.get(), rank, file, piece);
    // console.log(gameboard[rank][file]);
    // Use the log, Luke!


    // if (piece) $square.text(piece);



    if (gameboard[rank][file] === 'R') {
      $square.addClass('brook');
    }
    if (gameboard[rank][file] === 'r') {
      $square.addClass('wrook');
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
    if (gameboard[rank][file] === 'k') {
      $square.addClass('wking');
    }
    if (gameboard[rank][file] === 'K') {
      $square.addClass('bking');
    }
    if (gameboard[rank][file] === 'Q') {
      $square.addClass('bqueen');
    }
    if (gameboard[rank][file] === 'q') {
      $square.addClass('wqueen');
    }
    if (gameboard[rank][file] === ' ') {
      $square.removeClass();
    }








    // $square.text(piece); // Not _exactly_ what we discussed in class...
    // TODO: Convert `square` to class name(s)
    // TODO: Add class name(s) to `td` instead
  });
});

}
}

// Don't go breaking my IIFE...
})(window || module && module.exports || this);
