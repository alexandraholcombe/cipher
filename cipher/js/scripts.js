//console.log(sentence);
var sentence = prompt("Please enter a sentence:")

var sentenceCount = sentence.length - 1;

var firstCharacter = sentence.charAt(0).toUpperCase();
var lastCharacter = sentence.charAt(sentenceCount).toUpperCase();

var capitalizer = function(sentence) {
  return firstCharacter + lastCharacter;
};

var reverseCapitalizer = function(sentenceInput) {
  return sentenceInput.charAt(1) + sentenceInput.charAt(0);
};

var autoReverse = function() {
  var capSentence = capitalizer(sentence);
  return sentence + reverseCapitalizer(capSentence);
}

var middleLetter = function() {
  var rounded = Math.floor(sentence.length / 2);
  return sentence.charAt(rounded) + autoReverse();
}

function reverse(x) {
  return x.split('').reverse().join('');
}

console.log(capitalizer(sentence));
console.log(reverseCapitalizer(capitalizer(sentence)));
console.log(autoReverse());
console.log(middleLetter(sentence));
console.log(reverse(middleLetter(sentence)));


function splitString(x) {
  return x.split('amaz');
}

console.log(splitString("This is amazing!"));

$(function() {
  $("img.left").click(function() {
    alert(sentence);
  })
  $("img.right").click(function() {
    alert(reverse(middleLetter(sentence)));
  })
});
