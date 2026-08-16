//   CHAPTER 2   OPERATORS

// this is comment for singe line

/*this is for multiple line*/

//    **  arthimitic 

let a=5;
let b=4;
console.log("a =",a,"b =",b);
console.log("a+b",a+b);

/* modulus  %  = remainder
exponentiation   a**b   tells a ki power b
increment (uninary)
decrement  (uninary)

assignment operator
=
+=
-=
*=
%=
**=

comparison
==   only value check krta ha
!=
===   data type ko bo check krta ha 
!==
>=
<=
>
<


logical 

&&
||
!


conditional statement
if statement
if else
else if 
ternary ->  let result= age>18?"adult":"child";   console.log("result");
switch

*/
let age=18;
if(age>=18){
    console.log("you can vote");
}

let mode="dark";
let color;
if(mode==="dark"){
    color="black";
}
else if(mode==="light"){
    color="white";
}
console.log(color);



/* PRACTICE QUESTION -> GET USER TO INPUT A NUMBER USING PROMPT ENTER THE NUMBER  CHECK IF 
THE NUMNER IS MULTIPLE OF 5 OR NOT*/


/*  PROMT IS JUST LIFE ALERT JUST THE DIFFERENCE IS PROMT TAKE INPUT AND WE CAN STORE IT TO ANY VARIABLE*/

let number=prompt("ENTER THE NUMBER");
if(number%5===0){
    console.log("multiple of 5 ");

}
else{
    console.log("not multiple of 5");
}


/* PRACTICE QUESTION 2*/

/* give grade  80-100  ,A
70 79 B
60-69 C
50-59 D
0-49 F*/
 

let num=prompt("ENTER MARKS");
if(num>=80){
    console.log("you got grade on marks ",num," : A");
}
else if(num>70&&num<80){
     console.log("you got grade on marks ",num," : B");
}
else if(num>60&&num<70){
     console.log("you got grade on marks ",num," : C");
}
else if(num>50&&num<60){
     console.log("you got grade on marks ",num," : D");
}
else{
    console.log("you got grade on marks ",num," : F");
}
