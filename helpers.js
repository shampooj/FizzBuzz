var fizzBuzzTurn = function(number){
  if (number % 15 == 0) {
    return "fizz buzz";
  }
  if (number % 3 == 0){
    return "fizz";
  }
  if (number % 5 == 0){
    return "buzz";
  }
  else {
    return number.toString();
  }
}

var fizzBuzzResults = function(digit){
  var results = "";
  for (var i = 1; i < digit + 1; i++){
    results = results + " " + fizzBuzzTurn(i);
  }
  return results;
}

module.exports = { results: fizzBuzzResults, turn: fizzBuzzTurn };
