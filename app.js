var textManipulator = {};

textManipulator.checkTheDataType = function(argument) {

  if(argument === null){
    return null;
  }
  if (argument === undefined){
    return 'need an argument';
  }

  return typeof argument;
}

//return the longest word of a given text sentence
textManipulator.longestWord = function(text){
  if(typeof text != "string"){
    return null;
  }


  var textInArray = text.split(' ');
  var longest = textInArray[0];
  for (let i=1; i<textInArray.length; i++){
    if (textInArray[i].length > longest.length){
      longest = textInArray[i];
    }
  }
  return longest;
};


textManipulator.nbrOfVowels = function(text){
  if(typeof text != "string"){
    return 0;
  }

  var textInArray = text.split("");
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  var vowelCount = 0;

  for (let i=0; i<textInArray.length; i++){
    if(vowels.includes(textInArray[i])){
      vowelCount++;
    }
  }
  return vowelCount;
};

module.exports = textManipulator;
