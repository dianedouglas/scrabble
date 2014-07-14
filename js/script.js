var scrabbleWord = function(word){
  var onePointLetters = ["a","e","i","o","u","l","n","r","s","t"];
  var twoPointLetters = ["d", "g"];
  var threePointLetters = ["b","c","m","p"];
  var fourPointLetters = ["f","h","v","w","y"];
  var fivePointLetters = ["k"];
  var eightPointLetters = ["j","x"];
  var tenPointLetters = ["q","z"];
  var score = 0;

  for(var i = 0; i < word.length; i++){
    if (onePointLetters.indexOf(word.charAt(i)) >= 0){
      score++;
    } else if (twoPointLetters.indexOf(word.charAt(i)) >= 0){
      score += 2;
    } else if (threePointLetters.indexOf(word.charAt(i)) >= 0){
      score += 3;
    } else if (fourPointLetters.indexOf(word.charAt(i)) >= 0){
      score += 4;
    } else if (fivePointLetters.indexOf(word.charAt(i)) >= 0){
      score += 5;
    } else if (eightPointLetters.indexOf(word.charAt(i)) >= 0){
      score += 8;
    } else if (tenPointLetters.indexOf(word.charAt(i)) >= 0){
      score += 10;
    } else { alert("you've obvilously never played this before and are trying to trick me!")
    };
  };
  return score;
};
