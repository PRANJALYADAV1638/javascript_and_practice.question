 //  prtotype in js
 /*
 a js object is an entity having state and behaviour 
 js objects have a special property called prototype 
 we can set prototype using __proto__

* if object & protoy[pe have the same method objects methof will be use]
  
 */




 const student={
    name:" yash yadav ",marks: 90,
    printmarks : function(){
        console.log("marks = ",this.marks);
    }
 } 


 const employee={
    calctax(){
        console.log("tax rate : 10%");
    }
 };
 const yash={
    salary=500000,
    calctax(){
        console.log("tax 20%");
    }
 }
 yash.__proto__ = employee;


 /*
 CLASS IN JS

 class is a program code template for creating objects 
 those object will have same state & same behaviour insite it

 */

 class toyota{
    start(){
        console.log("start");
    }
    stop(){
        console.log("start");
    }
    setbrand(brand){
        this.brandName=brand;
    }
 }
 let fortuner =new toyota();
  let hilux =new toyota();

  /*  CONSTRUCTOR 
  it is automatically invoked by new 
  intitialize object */

  /*  INHERITENCE IN JS 
  it is passing dowm properties & method from parent calss to child class
  if chils and parent have same mthod child method will be used {overriding}
  */

  class parent {
    constructor(){
        this.species="homo sapiens";
    }
    hello(){
        console.log("hello");
    }
  }
  class child extends parent { 
    constructor(age){
        super();  // to invoke parents class constructor
        this.age=age;
    }
    learn(){
        console.log("learn cpp");
    }
  }
  let obj =new child();

  /*  SUPER KEYWORD

  it is used to call the constructor of its parents class to access the parents properties and methods
  super(args)
  */


  //  PRACTICE 1
  /* YOU are creatingg a website for your college . create a class user with 2 properies
  name & email it also has a method called viewData() that alloes user to view website
  */
 let data = "College Website Data";
class user {
    name(name){
this.name=name;
    }
    email(email){

        this.email=email;
    }
    viewdata(){
        console.log(data);
                console.log(this.name);
                console.log(this.email);


    }
}
let student1=new user();
student1.name("yash");
student1.email("yash@gmail");
student1.viewdata();
/*  2 sol 

let data = "College Website Data";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(data);
    }
}

let student1 = new User("Yash", "yash@gmail.com");

student1.viewData();
*/




  // PRACTICE 2
  /* Create a new class admin which inherits from user add a new method called
  editData to admin thata alloes it to edit website data
  */
 let data = "College Website Data";

class User {
    viewData() {
        console.log(data);
    }
}

class Admin extends User {
    editData(newData) {
        data = newData;
    }
}

let admin1 = new Admin();

admin1.viewData();          // College Website Data

admin1.editData("New Website Data");

admin1.viewData();          // New Website Data