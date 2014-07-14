var scrabbleWord = function(word){

  var pointLookup = {
  1 : ["a","e","i","o","u","l","n","r","s","t"],
  2 : ["d", "g"],
  3 : ["b","c","m","p"],
  4 : ["f","h","v","w","y"],
  5 : ["k"],
  8 : ["j","x"],
  10 : ["q","z"]
  }

  var score = 0;

  for ( var letterArray in pointLookup){
    for(var i = 0; i < word.length; i++){
      if(pointLookup[letterArray].indexOf(word.charAt(i)) >=0){
        score = score + parseInt(letterArray);
      }
    }
  }

  return score;
};

$(function(){
  $("form#scrabbleInput").submit(function(event){
    var word = $("input#input-word").val().toLowerCase();
    if (word.split("").indexOf(" ") >= 0){
      alert("one word at a time please!");

    } else {
    var result = scrabbleWord(word);
      if(result){
        $("#result").show();
        $(".points").text(result);
      } else {
        $("#result").hide();
      }
    }
    event.preventDefault();
  })
})
