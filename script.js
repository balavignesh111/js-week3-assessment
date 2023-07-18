'use script'

// 1.Pattern Printing: Write a function that takes a positive integer n as input and prints a pattern 

const pattern = (num)=>{
  let patternStr = '';
  for(let i=1;i<=num;i++){
    for(let j=1;j<=i;j++){
      patternStr += i + ' ';
    }
    patternStr += '\n';
  }
  return patternStr;
}
console.log(`Answer for the problem 1 is \n\n${pattern(5)}`);

