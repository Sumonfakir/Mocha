var assert = require('assert');
var textManipulator = require('../app.js');

describe('checkTheDataType', function() {  //task 1

  it('should return nbr when given a nbr as argument', function() {
    assert.equal('number', textManipulator.checkTheDataType(42));
  });
  it('should return null when given null as argument', function() {
    assert.equal(null, textManipulator.checkTheDataType(null));
  });
  it('should return error if not given any argument', function() {
    assert.equal('need an argument', textManipulator.checkTheDataType());
  });
});

describe('longestWord', function(){  //task 2
  it('should return "jumped" when given follwing text as parameter', function(){
    assert.equal('jumped', textManipulator.longestWord('the quick brown fox jumped over a big bear'));
  });
  it('should return a really long word', function(){
    assert.equal('otorhinofffff', textManipulator.longestWord('otorhinofffff'));
  });
  it('should return null if the parameter is not in text', function(){
    assert.equal(null, textManipulator.longestWord(3000));
  });
});

describe('nbrOfVowels', function() {
  it('should return 3 when given a word with 3 vowels', function(){
    assert.equal(3, textManipulator.nbrOfVowels('daaa'));
    //assert.equal(3, textManipulator.nbrOfVowels('hubaa'));
  });
  it('should return 0 when given a word with 0 vowels', function(){
    assert.equal(0, textManipulator.nbrOfVowels('gtgflkjhhfttg') );
  });
  it('should return 0 when given an empty string', function(){
    assert.equal(0, textManipulator.nbrOfVowels(''));
  });
  it('should return 0 when given any other data type', function(){
    assert.equal(0, textManipulator.nbrOfVowels(55));
  });
});
