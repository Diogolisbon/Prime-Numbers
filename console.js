function isPrime(num) {
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  let i = 500;
  let primeNumbers = [];
  
  while(i > 1) {
    if(isPrime(i)) {
      primeNumbers.push(i);
    }
    i--;
  }
  
  console.log(primeNumbers);
  
  /*This program defines the isPrime function as before. It then initializes i to 500 and creates an empty array primeNumbers.
   It then iterates over the range of numbers from 500 down to 2, and for each number, it checks if it is prime using the isPrime function.
    If the number is prime, it adds it to the primeNumbers array using the push method.

Finally, the program logs the primeNumbers array to the console. You can run this program in Node.js 
by saving it to a file with a .js extension (e.g. prime.js) and running it with the node command in a terminal or command prompt.*/