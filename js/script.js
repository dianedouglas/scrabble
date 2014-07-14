var scrabbleWord = function(word){
  var onePointLetters = ["a","e","i","o","u","l","n","r","s","t"];
  var twoPointLetters = ["d", "g"];
  var score = 0;

  for(var i = 0; i < word.length; i++){
    if (onePointLetters.indexOf(word.charAt(i)) >= 0){
      score++;
    } else if (twoPointLetters.indexOf(word.charAt(i)) >= 0){
      score += 2;
    }
  }
  return score;
}
