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

// 5. Object Transformation: Given an array of objects with 'id' and 'name' properties, write a function that transforms the array into an object where the keys are the 'id' values and the values are the 'name' values. 

const arr = [
  {
    "id1":"name",
    "id2":"age",
    "id3":"IsEligible"
  },
  {
    "key1":"Balavignesh",
    "key2":22,
    "key3":true
  }]

const arrayToObjectConversion = (arr)=>{
  const obj = {};
  if(arr.length === 2){
    const keyArray = Object.values(arr[0]);
    const valueArray = Object.values(arr[1]);
    if(keyArray.length === valueArray.length){
      for(let i=0;i<keyArray.length;i++){
        obj[keyArray[i]] = valueArray[i];
      }
    }
  }
  return obj;
}
console.log(`Answer for problem 5 is`)
console.log(arrayToObjectConversion(arr))

// 6.Nested Array Sum: Write a function that takes a nested array of numbers as input and returns the sum of all elements in the array. 
const nestedArray = [1,2,[1,2,3],[1,15],5]
let sum=0;
const arraySum = (arr)=>{
  arr.forEach((element)=>{
    if(typeof element === 'number'){
      sum += element;
    }else if(Array.isArray(element)){
      arraySum(element);
    }
  })
  return sum;
}

console.log(`Answer for problem 6 is --> \n\nInput is ${nestedArray} \n\nOutput ${arraySum(nestedArray)}`)

// 7.Largest Difference: Write a function that takes an array of numbers as input and returns the largest difference between any two elements in the array. 

let difference = 0;
const largestDifference = (arr)=>{
  difference = (arr.length > 2 ? (arr[0]-arr[1]) : 0);
  for(let i=2;i<arr.length-1;i++){
    difference = ((arr[i] - arr[i+1]) > difference) ? (arr[i]-arr[i+1]) : difference;
  }
  return difference;
}
console.log(`Answer for problem 7 is --> \n\nInput is ${[400,54,100,21,500,200]} \n\nOutput ${largestDifference([400,54,100,21,500,200])}`)

// 8.Array Rotation: Write a function that rotates elements of an array to the left by a given number of positions.
const arrayRotation = (arr,position)=>{
  let temp=0;
  let count=0;
  for(let i=0;i<arr.length-1;i++){
    if(count<position){
      temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
      if(i === arr.length-2){
        count++;
        i=-1;
      }
    }
  }
  return (arr);
}

console.log(`Answer for problem 8 is --> \n\nInput is ${[400,54,100,21,500,200]} and no of positions is ${2} \n\nOutput ${arrayRotation([400,54,100,21,500,200],2)}`)

// 9.Object Sorting: Write a function that takes an array of objects with 'name' and 'age' properties and sorts the objects based on age in ascending order. 
let sortArrOfObj = [
  {
    name:'sugan',
    age:24
  },
  {
    name:'bala',
    age:21
  },
  {
    name:'gowtham',
    age:22
  },
  {
    name:'abishek',
    age:20
  }
];

const sortMethod = (arr)=>{
  for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
      if(arr[i].age > arr[j].age){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}

console.log(`Answer for problem 9 is ---`);
sortMethod(sortArrOfObj);

// 10.Array Intersection: Write a function that takes two arrays as input and returns an array containing the elements that are present in both arrays. 
const intersectionArray = function(arrOne, arrTwo){
  return [...arrOne,...arrTwo]
}

console.log(`Answer for problem 10 is \n\n Input -> Array one ->${[1,2,3,4,5]} Array two -> ${[6,7,8,9,10]}\n\n output -> ${intersectionArray([1,2,3,4,5],[6,7,8,9,10])}`)