import assert from "assert";
import Maths from "../maths.js";

describe("factorial function", function () {
  it('should say 0! is 1', function () {
    assert.equal(Maths.factorial(0), 1);
  });
  it('should say 1! is 1', function () {
    assert.equal(Maths.factorial(1), 1);
  });
  it('should say 2! is 2', function () {
    assert.equal(Maths.factorial(2), 2);
  });
  it('should say 5! is 120', function () {
    assert.equal(Maths.factorial(5), 120);
  });
});

describe("isPrime function", function () {
  it('should say 2 is prime', function () {
    assert.equal(Maths.isPrime(2), true);
  });
  it('should say 313 is prime', function () {
    assert.equal(Maths.isPrime(313), true);
  });
  it('should say 1 is NOT prime', function () {
    assert.equal(Maths.isPrime(1), false);
  });
  it('should say 2895 is NOT prime', function () {
    assert.equal(Maths.isPrime(2895), false);
  });
});

describe("factors function", function () {
  it('should return all the factors of 2', function () {
    assert.deepEqual(Maths.factors(2), [1,2]);
  });
  it('should return all the factors of 20', function () {
    assert.deepEqual(Maths.factors(20), [1,2,4,5,10,20]);
  });
});

describe("even and odd functions", function () {
  it('should say 2 is even', function () {
    assert.equal(Maths.even(2), true);
  });
  it('should say 7 is not even', function () {
    assert.equal(Maths.even(7), false);
  });
  it('even should throw a range error if an intgeger is not given', function () {
    assert.throws(_ => Maths.even(1.2),RangeError,"Value must be an integer.");
  });
  it('should say 1 is odd', function () {
    assert.equal(Maths.odd(1), true);
  });
  it('should say 0 is NOT odd', function () {
    assert.equal(Maths.odd(0), false);
  });
  it('odd should throw a range error if an intgeger is not given', function () {
    assert.throws(_ => Maths.odd("one"),RangeError,"Value must be an integer.");
  });
});

describe("sum functions", function () {
  it('should return the sum of the first 100 integers', function () {
    assert.equal(Maths.sum(100), 5050);
  });
  it('should return the sum of the first 100 square numbers', function () {
    assert.equal(Maths.sumOfSquares(100), 338350);
  });
  it('should return the sum of the first 100 cube numbers', function () {
    assert.equal(Maths.sumOfCubes(100), 25502500);
  });
});

describe("digit sum function", function () {
  it('should return zero for zero', function () {
    assert.equal(Maths.digitSum(0), 0);
  });
  it('should return the same digit for a single digit', function () {
    assert.equal(Maths.digitSum(7), 7);
  });
  it('should return 9 for 9', function () {
    assert.equal(Maths.digitSum(9), 9);
  });
  it('should return the sum of digits', function () {
    assert.equal(Maths.digitSum(23), 5);
  });
  it('should keep adding the digits until a single digit is returned', function () {
    assert.equal(Maths.digitSum(78), 6);
  });
});

describe("rounding functions", function () {
  it('should round to the nearest integer by default', function () {
    assert.equal(Maths.roundDP(Math.PI), 3);
  });
  it('should return pi correctly to 2 d.p.', function () {
    assert.equal(Maths.roundDP(Math.PI,2), 3.14);
  });
  it('should round to 1 s.f. by default', function () {
    assert.equal(Maths.roundSF(2789.6), 3000);
  });
  it('should round big numbers to 2 s.f.', function () {
    assert.equal(Maths.roundSF(4990123,2), 5000000);
  });
  it('should round small numbers to 2 s.f.', function () {
    assert.equal(Maths.roundSF(0.000003751,2), 0.0000038);
  });
});

describe("gcd and lcm functions", function () {
  it('should return 1 as the gcd of coprimes', function () {
    assert.equal(Maths.gcd(3,5), 1);
  });
  it('should return the gcd of numbers with a common factor', function () {
    assert.equal(Maths.gcd(8,12), 4);
  });
  it('should return the gcd of three numbers', function () {
    assert.equal(Maths.gcd(8,12,18), 2);
  });
  it('should return the lcm of coprimes', function () {
    assert.equal(Maths.lcm(3,5), 15);
  });
  it('should return the lcm of numbers with a common factor', function () {
    assert.equal(Maths.lcm(8,12), 24);
  });
  it('should return the lcm of three numbers', function () {
    assert.equal(Maths.lcm(8,12,20), 120);
  });
});