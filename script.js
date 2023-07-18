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

// 2. Frequency Count: Write a function that takes an array of integers as input and returns an object representing the frequency count of each number in the array. 

const frequencyCount = function(arr){
  let obj = {};
  let uniqueArr = [];
  let count = 0;
  for(let i=0;i<arr.length;i++){
    if(!uniqueArr.includes(arr[i])){
      arr.forEach(element => {
        count = (arr[i] === element) ? (count+=1) : count;
      });
      uniqueArr.push(arr[i]);
      obj[arr[i]] = count;
      count = 0;
    }
  }
  return obj;
}
let obj2 = {
  1:100
}
console.log("Answer for problem 2 is");
console.log(frequencyCount([1,2,1,2,2,3,4,5,1]))

//3. Remove Duplicates: Write a function that takes an array as input and returns a new array with duplicates removed (maintaining the original order). 

const removeDuplicate = function(arr){
  let uniqueArr = [];
  arr.forEach((element)=>{
    if(!uniqueArr.includes(element)){
      uniqueArr.push(element);
    }
  })
  return uniqueArr;
}

console.log(`Answer for problem 3 is \n\n Input -> ${[1,2,1,2,2,6,7,6,3,4,5,1]}\n\n output -> ${removeDuplicate([1,2,1,2,2,6,7,6,3,4,5,1])}`)

// 4. Array Sum: Write a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const sumArray = function(arr){
  return  arr.reduce((accumulator,element)=>{
    accumulator += element;
    return accumulator;
  },0);
}

console.log(`Answer for problem 4 is \n\n Input -> ${[1,2,6,7,3,4,5]}\n\n output -> ${sumArray([1,2,6,7,3,4,5])}`)

// 10.Array Intersection: Write a function that takes two arrays as input and returns an array containing the elements that are present in both arrays. 
const intersectionArray = function(arrOne, arrTwo){
  return [...arrOne,...arrTwo]
}

console.log(`Answer for problem 10 is \n\n Input -> Array one ->${[1,2,3,4,5]} Array two -> ${[6,7,8,9,10]}\n\n output -> ${intersectionArray([1,2,3,4,5],[6,7,8,9,10])}`)