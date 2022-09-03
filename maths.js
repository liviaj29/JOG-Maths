export const factorial = n => [...Array(n)].map((n,i)=> i+1).reduce((s,x)=>s*x,1)

export const randomInt = (min,max) => 
  max === undefined ? Math.floor(Math.random()*min)
  : min + Math.floor(Math.random()*(max - min + 1))

export const isPrime = n => !(n < 2 || (n > 2 && n%2 ===0) || [...Array(Math.floor(n**.5/2))].map((_,i)=>i*2+3).filter(x => n%x === 0).length)

export const factors = n => [...Array(Math.abs(n))].map((_,i)=>++i).filter(x => n%x === 0)

export const even = n => {
  if(Number.isInteger(n)) return n%2 === 0
  else throw RangeError("Value must be an integer.")
}

export const odd = n => {
  if(Number.isInteger(n)) return n%2 !== 0
  else throw RangeError("Value must be an integer.")
}

export const sum = n => (n*(n+1))/2

export const sumOfSquares = n => (n*(n+1)*(2*n+1))/6

export const sumOfCubes = n => ((n**2)*((n+1)**2))/4

export const digitSum = n => n === 0 ? 0 : n%9 || 9

export const roundDP = (n,dp=0) => Number(n.toFixed(dp))

export const roundSF = (n, sf=1) => Number(n.toPrecision(sf))

const hcf = (a,b) => b ? gcd(b, a%b) : a

export const gcd = (...numbers) => numbers.reduce((x,n) => hcf(x,n))

export const lcm = (...numbers) => numbers.reduce((product,n) => product * n,1)/(gcd(...numbers)**(numbers.length-1))

const Maths = {
  factorial, randomInt, isPrime, factors, even, odd, digitSum, roundDP, roundSF, gcd, lcm, sum, sumOfSquares, sumOfCubes
}

export default Maths