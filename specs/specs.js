describe("pigLatinConverter",function(){
  it("takes a sentence and converts it to pig latin text",function(){
    pigLatinConverter("apple").should.equal("appleay");
  });
  it("takes multiple words and converts them to piglatin", function(){
    pigLatinConverter("apple apple").should.equal("appleay appleay");
  });
  it("takes a word with a consonant at the beginning, moves it to the end and adds ay", function(){
    pigLatinConverter("cat").should.equal("atcay");
  });
  it("takes words beginning with a multiple consonant and does the above function", function(){
    pigLatinConverter("knife").should.equal("ifeknay");
  });
  it("takes multiple words with multiple consonants and does the above function", function(){
    pigLatinConverter("knife rag").should.equal("ifeknay agray");
  });
  it("takes words that start with Qu and moves both letters to the end before ay, even though U is a vowel.", function(){
    pigLatinConverter("queen").should.equal("eenquay");
  });
  it("takes words that start with Y and treats it like a consonant", function(){
    pigLatinConverter("your").should.equal("ouryay");
  });
  it("if the second letter in the word is y continues as normal", function(){
    pigLatinConverter("my").should.equal("ymay");
  });
  it("if the words first syllable contains a qu then move everything from the first character to the end of the qu", function(){
    pigLatinConverter("squeal").should.equal("ealsquay");
  });
  it("its retains any puncuation after the last word",function(){
    pigLatinConverter("eek!").should.equal("eekay!");
  });
  it("it retains any punctuation after last word if last word includes consonants.", function(){
    pigLatinConverter("meek!").should.equal("eekmay!");
  });
});

describe("addsAyToCurrentWord", function(){

  it("takes the array of words in your sentence, and the index of the word currently being worked on, adds 'ay' or 'ay ' to the end.", function(){
    addsAyToCurrentWord("apple").should.equal("appleay ");
  })
})
