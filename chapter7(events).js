//  events
/*
change in state of anobject is known as an event 
events are fired to notified code of interesting changes that affecr code execution

* mouse event
* keyboard events
* form events
* print even and evenmore 


event handiling in js
node.event=()=>{
    handle here  }


    inline <js   priority

    event objext
    it is the special object that has details about the event 
    all event handler have acces to the event object propertis and method
    node.event=(e)=>{
        handle here}



        EVENT LISTENERS
        node.addEventLister(event , callback)
        node.removeEventListener(event,callback)

        events object ma jo last update hua ha vo print hoga meanwhile 
        addEvenet wala ma sara hi print hoga
         
        ek variable ma add krke bi kr skta h
         
*/

let btn=document.querySelector("#btn");
btn.oneclick=()=> {
    console.log("btn click");
    let a=25;
    a++;
    console.log(a);
}

let btn2=document.querySelector("#btn2");
btn2.addEventListener("click",(evt)=>{
    console.log("botton is click");
    console.log(evt);
    
})

// PRACTICE  MAKE A BUTTON TO CHANGE THE THEME 
let clicktochange=document.querySelector('#clicktochange');
let currmode="light";
clicktochange.addEventListener("click",()=>{
    console.log("you are try to change color");
    if(currmode==="light"){
        currmode="dark";
document.querySelector("body").style.backgroundColor="GREY";
    }
    else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log("currmode");
})