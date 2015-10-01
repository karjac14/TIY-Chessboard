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
})

it("have applymove function", function () {
  chai.expect(applyMove).to.be.a('function');
  chai.expect(applyMOve).

})

it("have applymove function", function () {
  chai.expect(applyMove).to.be.a('function');


})









}) (window || module && module.exports || this);
