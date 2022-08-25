# JOG-Maths

This mini JavaScript library is made up of useful mathematical functions that the inbuilt Math library does not have. 

## `factorial`
Accepts an integer and returns the product of all the integers up to and including the integer.
```javascript
Maths.factorial(4) === 24 //4 x 3 x 2 x 1
```

## `randomInt`
Takes two parameters `min` and `max` and returns a random integer between the two numbers.
```javascript
Maths.randomInt(2,7) = 2

Maths.randomInt(2,7) = 4

Maths.randomInt(6) = 3 //random integer between 0 and 5
```

## `isPrime`
Accepts an integer and returns a Boolean value based on whether it is a Prime number or not. Prime numbers are numbers that only have two distinct factors.
```javascript
Maths.isPrime(13) === true

Maths.isPrime(20) === false
```

## `factors`
Accepts an integer and returns an array of all its factors in ascending order.
```javascript
Maths.factors(20) === [1,2,4,5,10,20]
```

## `even`
Accepts an integer and returns a Boolean value based on whether it is an even number.
```javascript
Math.even(2) === true

Maths.even(5) === false
```

## `odd`
Accepts an integer and returns a Boolean value based on whether it is an odd number
```javascript
Maths.odd(3) === true

Maths.odd(8) === false
```

## `sum`
Accepts an integer (n) and returns the sum of all the numbers up to and including the number. It essentially calculates the nth Triangle Number. 
```javascript
Maths.sum(6) === 21 //1 + 2 + 3 + 4 + 5 + 6
```

## `sumOfSquares`
Accepts an integer (n) and returns the sum of the first n square numbers.
```javascript
Maths.sumOfSquares(3) === 14 // 1 + 4 + 9
```

## `sumOfCubes`
Accepts an integer (n) and returns the sum of the first n cube numbers.
```javascript
Maths.sumOfCubes(4) === 100 //1 + 8 + 27 + 64
```

## `digitSum`
Accepts an integer and returns the sum of all the individual digits until the value is a single integer.
```javascript
Maths.digitSum(123) === 6 //1 + 2 + 3
```

## `roundDP`
Takes two parameters, a floating-point number and the number of decimal places wanted (with a default value of 0). Returns the floating-point number rounded to the specified number of decimal places.
```javascript
Maths.roundDP(1.234567, 3) === 1.235

Maths.roundDP(3.14) === 3
```

## `roundSF`
Takes two parameters, a real number and the number of figures wanted (with a default value of 1). Returns the real number rounded to the specified number of figures.
```javascript
Maths.roundSF(1234567, 3) === 1230000

Math.roundSF(123.45) === 100
```

## `gcd`
Takes two integers as parameters and returns the greatest common divisor of the two.
```javascript
Maths.gcd(20, 10) === 10
```

## `lcm`
Takes two integers as parameters and returns the lowest common multiple of the two.
```javascript
Maths.lcm(2,3) === 6

Maths.lcm(8,4) === 8
```
