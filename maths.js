export const factorial = n => [...Array(n)].map((n,i)=> i+1).reduce((s,x)=>s*x,1)

export const randomInt = (min,max) => 
  max === undefined ? Math.floor(Math.random()*min)
  : min + Math.floor(Math.random()*(max - min + 1))

export const isPrime = n => !(n < 2 || (n > 2 && n%2 ===0) || [...Array(Math.floor(n**.5/2))].map((_,i)=>i*2+3).filter(x => n%x === 0).length)

export const factors = n => [...Array(Math.abs(n))].map((_,i)=>++i).filter(x => n%x === 0)

export const even = n => n%2 === 0

export const odd = n => n%2 !== 0

export const sum = n => (n*(n+1))/2

export const sumOfSquares = n => (n*(n+1)*(2*n+1))/6

export const sumOfCubes = n => ((n**2)*((n+1)**2))/4

export const digitSum = n => n%9

export const roundDP = (n,dp) => n.toFixed(dp)

export const roundSF = (n, sf) => n.toPrecision(sf)

export const gcd = (a,b) => b ? gcd(b, a%b) : a

export const lcm = (a,b) => (a*b)/gcd(a,b)

const Maths = {
  factorial, randomInt, isPrime, factors, even, odd, digitSum, roundDP, roundSF, gcd, lcm, sum, sumOfSquares, sumOfCubes
}

export default Maths