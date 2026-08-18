//  CHAPTER 3

//  **  LOOP  **
// for loop
let sum =0;
for(let count= 1;count<=5;count++){
    console.log("JAI YADAV JAI MADHAV");
sum+=count;
}
// while loop
// do while
// for of loop  = string and array pa
let  str="yash";
for(let i of str){
    console.log(i);
}

// for in loop = objects pa



// PRACTICE QUESTION 1
// PRINT 1 TO 100

for(let num=1;num<=100;num++){
    if(num%2===0){
    console.log("num");
    }
}

// PRATCIE QUESTION 2
// MAKE A GAME STT BI RANDOM NUMBER AND USER GUESS THE NUMBER UNTILL THEY FIND THE NUMBER


let target=67;
let found;
while(found !=target){
found=prompt("enter the number");
}

console.log("You guessed the correct number!");


// ***strings***

//** template  literals  ** -> stirng k sath variable bi likh skta ha 
// string interpolation  -> create string by doing substitution of placeholder  /
let special=`yash yadav from gurgon`;
console.log(special);

//  escape charactor

/*   STRING METHOd   original string ma change nhi kraga new string banayga
string are immutable
str.toUpperCase();
str.toLowerCase();
str.trim()   remove whitespace 
str.slice(start,end)    return part of string   last value no include
str1.concat(str2);    
str.replace(searchold,new);
str.charAt(idx);




//   PRACTICE QUESTION

// TAKE NAME FROM USER AND MAKE USER NAME STT WITH @ THEN FULL NAME THEN LENGTH OF NAME ;
*/
let fullName = prompt("Enter your full name:");
console.log(`@${fullName}${fullName.length}`);