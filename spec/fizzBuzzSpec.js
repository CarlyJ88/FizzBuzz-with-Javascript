/*
Print the numbers from 1 to 100
If a number is divisible by 3 print "Fizz" instead
If a number is divisible by 5 print "Buzz" instead
If a number is divisible by 3 and 5 print "FizzBuzz" instead
*/

describe("FizzBuzz", function(){
  var fizzbuzz = new FizzBuzz();

  describe("divisible by 3", function() {
    it("returns true when number is divisible by 3", function() {
      expect(fizzbuzz.divisibleByThree(3)).toEqual(true);
    });
  });

  describe("not divisible by 3", function() {
    it("returns false when not divisible by 3", function() {
      expect(fizzbuzz.divisibleByThree(7)).toEqual(false);
    });
  });
});