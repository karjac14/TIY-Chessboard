(function(globals) {

it("would have a `game` in the `window`", function () {
  chai.expect(window.game).equal(game);
  chai.expect(game).an('object');
});

it("would have an array `board`", function () {
  chai.expect(game.board()).to.be.an('array');
  chai.expect(game.board()).to.have.length(8);
  chai.expect(game.reset()).to.be.an('array');
});

var cb = game.board();

it("have elements in the array", function () {
  chai.expect(cb).to.be.an('array');
  chai.expect(cb[0][1]).to.be.deep.equal('N');
});

it("have applymove function", function () {

  chai.expect(game.applyMove).to.be.a('function');
  // chai.expect(game.applyMove).to.equal('array');

});

it("applymove should be able to move pieces", function () {
  //pre-condition
  game.reset();
  var boardCopy = game.board();
  console.log(boardCopy);
  chai.expect(boardCopy[6][3])to.equal('p');
  chai.expect(boardCopy[4][3])to.equal(' ');

  chai.expect(applyMove(
    { rank: 6, file: 3},
    { rank: 4, file: 3}
  )).to.be.a('array');
});



}) (window || module && module.exports || this);
