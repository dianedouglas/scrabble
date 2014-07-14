describe("scrabbleWord",function(){
  it("it takes a single letter and returns its values",function(){
    scrabbleWord("a").should.equal(1);
  });
  it("it takes 2 of the same letters and returns their total value.", function(){
    scrabbleWord("aa").should.equal(2);
  });
});

