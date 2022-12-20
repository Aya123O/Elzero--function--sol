/***************************************************************************************************************** */
//Functio
/**Assigment one* */
function sayHello(theName, theGender) {
    if(theGender=="Male"){
        console.log(`Hello Mr ${theName}`)
    }else if(theGender == "Female"){
        console.log(`Hello Miss ${theName}`)

    }else{console.log(`Hello ${theName}`)}
  }
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"
  /***************************************************************************************************************** */
/**Assigment two* */
function calculate(firstNum, secondNum, operation) {
    if(secondNum == undefined){
        console.log("Second Number Not Found")
    }else{
        if(operation=='add' || operation==undefined){
            console.log(firstNum+secondNum)
        }else if(operation=='subtract'){
            console.log(firstNum-secondNum)
        }else if(operation=='multiply'){
            console.log(firstNum*secondNum)
        }
    }
  }
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600
  calculate(20); // Second Number Not Found
  /****************************************************************************************************************** */
  /**Assigment Three* */
  function ageInTime(theAge) {
    if(theAge>10 && theAge<100){
        console.log(`your Age in Months = ${theAge*12}`)
        console.log(`your Age in Days = ${theAge*365}`)
    }else{
        console.log("Age Out Of Range")
    }
  }
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months
/****************************************************************************************************************** */
//Assigment Four

function checkStatus(a, b, c) {
    let myarr=[]
    let state;
    if(typeof a=="string"){
        myarr.push(a);
    }else if(typeof b=="string"){
        myarr.push(b);
    }else if(typeof c=="string"){
        myarr.push(c);
    }
    if(typeof a=="number"){
        myarr.push(a);
    }else if(typeof b=="number"){
        myarr.push(b);
    }else if(typeof c=="number"){
        myarr.push(c);
    }
    if(typeof a=="boolean"){
        myarr.push(a);
    }else if(typeof b=="boolean"){
        myarr.push(b);
    }else if(typeof c=="boolean"){
        myarr.push(c);
    }
    if(myarr[2] == true)
    {
       state="Avilable"
    }else{
        state="NOT Avilable"


    }
console.log(`Hello ${myarr[0]},Your Age IS ${myarr[1]},You ${state} For Hire`)
console.log(myarr)
}
  checkStatus(false, "Osama", 38);// "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"

/********************************************************************************************************************************** */
/**Assigment five* */
function createSelectBox(startYear, endYear) {

    document.write(`<select>`)
    for(let i=startYear;i<endYear;i++){
        document.write(`<option value=${i}>${i}</option>`)
    }
    document.write(`</select>`)
  }
  createSelectBox(2000, 2021);
  /******************************************************************************************************************* */
/**Assigment six* */
function multiply(g,h,k){
    let myarr2=[];
    if(typeof g=="number"){myarr2.push(g)}
    if(typeof h=="number"){myarr2.push(h)}
    if(typeof k=="number"){myarr2.push(k)}
    console.log( Math.floor(myarr2[0])*Math.floor(myarr2[1]))
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
//Anthor Solution
/************************************************************************************************************************* */
function multiply(...numbers){
    let result=1;
    if(numbers.length ==0){
        console.log(0);
        return 0;
    }
    for(let i=0;i<numbers.length;i++){
        if(typeof numbers[i]=="number"){
            result*=Math.floor(numbers[i]);
        }else{continue;}
    }
    console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
/************************************************************************************************ */