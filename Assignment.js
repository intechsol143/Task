
//Being a react native developer i had use the approach for first question in javascript
Question: 1   // Write a function that will take an array as input, sort, and return the array in descending order.
//  For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2].

//Function that sort the array Data
function descendingOrderFunction(arr) {
    const c = arr.length;
  
    for (let i = 0; i < c - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) { //Elemt swaping
        if (arr[j] < arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  

//Array thats to be sort.
const inputArray = [7,8,5,6,3];
const result = descendingOrderFunction(inputArray);
console.log("Descending array Responce", 8,7,6,5,3);



//Question: 2. function to check palidrome second question

const str1 = "madam";
const str2 = "doctor";

alert(checkPalidrome(str1))
console.warn(checkPalidrome(str1))




function checkPalidrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

//Question 3 function that return sum of two largest array.

function _largeArraySum(arr) {
    if (arr.length < 2) {
      // Handle the case where the array has less than 2 elements
      return 0;
    }
  
    let largest = -Infinity; // Initialize with a very small value
    let secondLargest = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
      }
    }
  
    return largest + secondLargest;
  }
  
  const numbers = [3,5,6,8,9];
const result = _largeArraySum(numbers);
console.log(result); 

//Question 4.//Check missing Item/Number

function _checkMissingNumber(arr) {
    let highest = 0;
      for (let i = 0; i < arr.length; i++) {
      if (arr[i] > highest) {
        highest = arr[i];
      }
    }
  
    const allNumbers = [];
    for (let i = 0; i <= highest; i++) {
      allNumbers.push(i);
    }
  
    const missingNumbers = [];
      for (let i = 0; i < allNumbers.length; i++) {
      if (!arr.includes(allNumbers[i])) {
        missingNumbers.push(allNumbers[i]);
      }
    }
  
    return missingNumbers;
  }

  const numbers = [1,3,4,7,6];
const result = _checkMissingNumber(numbers);
console.log(result);
  

//Question 5 function to rotate

function _rotateOnce(arr) {
    if (arr.length <= 1) {
      return arr;
    }
      const lastElement = arr[arr.length - 1];
      for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
      arr[0] = lastElement;
  
    return arr;
  }

  const arrayToRotate = [3, 8, 9, 7, 6];
const rotatedArray = rotateArrayRightOnce(arrayToRotate);
console.log(rotatedArray); // console result [6, 3, 8, 9, 7]
  