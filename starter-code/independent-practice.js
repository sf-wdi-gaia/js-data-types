/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.

    (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image sources. Use image1.png, image2.png, and image3.png as the array values.
 */

// Your code here
var q1 = ["image1.png","image2.png","image3.png"];
console.log(q1)
/**
 * Question 2
 * Using the array from Question 1, store the first element of the array in variable q2.
 */

// Your code here
var q2 = q1[0];
console.log(q2);


/**
 * Question 3
 * Get the length of the first array (number of elements in the array) and store it in variable q3
 */

// Your code here
var q3 = q1.length;

/**
 * Question 4
 *  Using the array from Question 1, store the last element of the array in variable q4. Hint: How can we get the number of elements in the array?
 */


// Your code here
var q4 = q1.pop();


// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1,2,3, and 4 as values. Use forEach to increase each value by 1 and store the value back in the array.
The end result should be an array of numbers with values 2,3,4,5
 */

// Your code here
var number = [1,2,3,4];
number.forEach(index, num)

function add(array){
  for(var i=0; i < array.length; i++){
    array.push(array[i] + 1);
  }
  console.log(array)
  return array
};
number.forEach(add);
console.log(number)


/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array (average=sum of all numbers/number of numbers). Store the average in q6.
 */

var total = 0;
for(var i = 0; i < array.length; i++){
  total += number[i];
}
var q6 = total/ number.length;

// Your code here
