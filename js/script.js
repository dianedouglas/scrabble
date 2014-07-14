var scrabbleWord = function(word){
  var onePointLetters = ["a","e","i","o","u","l","n","r","s","t"];
  var score = 0;

  for(var i = 0; i < word.length; i++){
    if (onePointLetters.indexOf(word.charAt(i)) >= 0){
      score++;
    };
  };
  return score;
}
