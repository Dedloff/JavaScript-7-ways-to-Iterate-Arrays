//7 Ways to Iterate Over an Aray

//1  While loop
let arr1 = [5, 10, 15, 20, 25];
let i = 0;

while (i < arr1.length) {
  console.log("Method 1 " + arr1[i]);
  i++;
}

/*2 Do While Loop 

(Not ideal because it will automatically run through the code before it checks anything)


For example if you set i to a value that is not in the array, like i=6, it will automatically run before it is checked, and print in that case 'undefined'*/
let arr2 = [5, 10, 15, 20, 25];
let i2 = 0;

do {
  console.log("Method 2 " + arr2[i2]);
  i2++;
} while (i2 < arr2.length);

//For Loop (preferred, can be done in one line)
let arr3 = [5, 10, 15, 20, 25];
let i3 = 0;

for (let i3 = 0; i3 < arr3.length; i3++) {
  console.log("Method 3 " + arr3[i3]);
}

//For loop that is even better (For In)
let arr4 = [5, 10, 15, 20, 25];
let i4 = 0;

for (let i4 in arr4) {
  console.log("Method 4 " + arr4[i4]);
}

//For Loop that is even BETTER (For Of Loop)
let arr5 = [5, 10, 15, 20, 25];
let i5 = 0;

for (let i5 of arr5) {
  console.log("Method 5 " + i5);
}

//using the forEach method of Arrays (forEach is a method of the Array Object)
//you have to pass in a function, you don't need a variable to declare
let arr6 = [5, 10, 15, 20, 25];

arr6.forEach((val) => {
  console.log("Method 6 " + val);
});

//7th
let arr7 = [5, 10, 15, 20, 25];

let it = arr7[Symbol.iterator]();
console.log(it.next());
