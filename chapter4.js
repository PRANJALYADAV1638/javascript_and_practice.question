//   array
//  array is a type of object

let marks=[97,96,57];
console.log(marks);

// array indices

/*   string are immutabke in js while array is mmmuttable*/

console.log(marks[2]);

//  loop over array 

for( let b=0;b<marks.length;b++){
    console.log(marks[b]);
}

for(let mark of marks){
    console.log(mark);
}


/*  ***  PRACTICE 1 ***  */
// FIND AVERAGE OF MARKS 85 97 44 37 76 60

let numbers=[85,97,44,37,76,60];
let total=0;
let element =0;
for(let number of numbers){
    total+=number;
    element++;
}
console.log(total/element);



//  array method   -> push  pop   toString()

let food=["potato","tomato"];
food.push("chips","panner");
console.log(food);
food.pop();
console.log(food);

// concat()
// unshift -> add to front
// shift -> delete from front

let name1 = ["yash", "happy"];
let name2 = ["piyush", "rinku", "sahil", "nikhil"];

let all = name1.concat(name2);

console.log(all);

// slice() -> returns a portion of the array (does not change the original array)

console.log(all.slice(1, 4));

// splice() -> changes the original array
// Syntax:
// array.splice(startIndex, deleteCount, item1, item2, ...)

// 1. Add elements
let arr1 = [1, 2, 3, 4];
arr1.splice(2, 0, 100); // Add 100 at index 2
console.log(arr1);
// Output: [1, 2, 100, 3, 4]

// 2. Delete elements
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(1, 2); // Delete 2 elements from index 1
console.log(arr2);
// Output: [1, 4, 5]

// 3. Replace elements
let arr3 = [1, 2, 3, 4];
arr3.splice(1, 2, 10, 20); // Replace 2,3 with 10,20
console.log(arr3);
// Output: [1, 10, 20, 4]

// 4. Add multiple elements
let arr4 = [10, 20];
arr4.splice(1, 0, 30, 40, 50);
console.log(arr4);
// Output: [10, 30, 40, 50, 20]

// 5. Delete everything from an index
let arr5 = [1, 2, 3, 4, 5];
arr5.splice(2);
console.log(arr5);
// Output: [1, 2]



/*  PRACTICE QUESTION   ARRAY="MICROSFOT","UBER","GOOOGLE","IBM","NETFLIX"
remove first company
remove uber add ola
add amazon at last
*/

let company=["MICROSOfT","UBER","GOOGLE","IBM","NETFLIX"];
company.shift();
company.splice(0, 1, "OLA");
company.push("amazon");
console.log(company);