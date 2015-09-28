(function(globals){
// Don't worry if that seems a little funky...

  /**
   * Internal representation of the game board in its current state.
   *
   * @see game.board
   * @see game.tracer
   * @see initial
   * @var {Array} of {Array} of {String|null}
   */
  var board = initial(); // initialize the `board`
  var ctr = -1;
  var moveTotal = 7; // should be nine though...
  /**
   * List of moves for the "Catalan Opening: Closed Variation" suitable for use
   * as arguments to `applyMove` below.
   *
   * @see applyMove
   * @var {Array} of...?
   */
  var moves = [
    [4,3,6,3],
    [2,5,0,6],
    [4,2,6,2],
    [2,4,1,4],
    [5,6,6,6],
    [3,3,1,3],
    [6,6,7,5],
    [1,4,0,5],
    [5,5,7,6]
    // TODO: Fill me in!
  ]; // END moves

  // var current; TODO: do we need this?

  // You don't need to understand `globals` yet...
  var game = globals.game = {
    /**
     * Provide a _copy_ of the game board in order to update the View from it
     *
     * @return {Array} of {Array} of {String|null}
     */
    board: function(){
      return board.map(function(row){
        return row.slice();
      });
    },
    /**
     * Reset the internal game board to it's initial state.
     *
     * @return {Object} the game object for Method Chaining
     */
    reset: function(){
      console.log ("mainjs reset!");
      board = initial();
      console.log (board.join ('\n' + '|'));
      return board;
    },
    /**
     * Advance the internal game board to the next move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    next: function(){
      // Doesn't this seem to be missing something?
      console.log ("mainjs next!");
      if (ctr < 9) {
      ctr += 1;
      console.log (ctr);
      game.applyMove(true,false);
      return board;
    }
      // return this;
    },
    /**
     * Advance the internal game board to the previous move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    prev: function(){
      for (var i =0; i < 1; i++){
        game.applyMove(false,true);
        console.log('main back');// Another good place for code...
        console.log (ctr);
        ctr -= 1;
        return board;
      }
    },
    /**
     * Advance the internal game board to the last move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    end: function(){
      console.log('mainjs end');
      board = final();
      console.log (board.join ('\n' + '|'));
      return board;
    },
    /**
     * Provide a printable representation of the game board for use as a tracer
     *
     * @return {String} representation of `board`
     * @todo Refactor to use Array methods?
     */
    tracer: function(){
      var bullet = '';

      for ( var rank = 0; rank < board.length; rank++ ){
        bullet += '|';
        for ( var file = 0; file < board[rank].length; file++ ){
          bullet += board[rank][file] || ' |';
        }
        bullet += '\n';
      }

      return bullet;
    },
    /**
     * Apply a move to the game board, given a `from` and `to` position that both
     * contain values for `rank` and `file`.
     *
     * @param {Object} from with `rank` and `file`
     * @param {Object} to with `rank` and `file`
     * @return undefined
     *
     * @todo Fill me in! ...and remove this comment.
     */
    applyMove: function(from,to){
      if(from === true){
        board[moves[ctr][0]][moves[ctr][1]]= board[moves[ctr][2]][moves[ctr][3]];
        board[moves[ctr][2]][moves[ctr][3]]= ' ';
        console.log (board.join ('\n' + '|'));
      } if (to === true ){
        board[moves[ctr][2]][moves[ctr][3]]= board[moves[ctr][0]][moves[ctr][1]];
        board[moves[ctr][0]][moves[ctr][1]]= ' ';
        console.log (board.join ('\n' + '|'));
      }
      // return board.join ('\n' + ' |');

      // You should write something in here...
    } // END applyMove
  }; // END game

  /**
   * Provide the initial state of the game board, useful for any game.
   *
   * @return {Array} of {Array} of {String|null}
   */
  function initial(){
    return [
      [ '|R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
      [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
      [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
      [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
      [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
      [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
      [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
      [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
    ];
  } // END initial

  function final(){
    return [
      [ '|R','N', 'B', 'Q', 'K', ' ', ' ', 'R' ],
      [ 'P', 'P', 'P', ' ', 'B', 'P', 'P', 'P' ],
      [ ' ', ' ', ' ', ' ', 'P', 'N', ' ', ' ' ],
      [ ' ', ' ', ' ', 'P', ' ', ' ', ' ', ' ' ],
      [ ' ', ' ', 'p', 'p', ' ', ' ', ' ', ' ' ],
      [ ' ', ' ', ' ', ' ', ' ', 'n', 'p', ' ' ],
      [ 'p', 'p', ' ', ' ', 'p', 'p', 'b', 'p' ],
      [ 'r', 'n', 'b', 'q', 'k', ' ', ' ', 'r' ],
    ];
  } // END initial


// You are not expected to understand anything below this line...
})(window || module && module.exports || this);
