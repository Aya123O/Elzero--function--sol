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
/******************************************************************************************************************** */
/**Assigment One* */
function getDetails(zName, zAge, zCountry) {
    let result,result2,result3;
    function namePattern(zName) {
      // Write Your Code Here
        let arr=zName.split(" ");
        result=arr[0]+" "+((arr[1][0]).toUpperCase())+".";
      return result;
    }
    function ageWithMessage(zAge) {
      // Write Your Code Here
        let arr1=zAge.split(" ");
        result2=arr1[0]
      return result2;
    }
    function countryTwoLetters(zCountry) {
      // Write Your Code Here
        result3=zCountry[0].toUpperCase()+zCountry[1].toUpperCase()
        return result3;
    }
    function fullDetails() {
      // Write Your Code Here
      namePattern(zName);
      ageWithMessage(zAge);
      countryTwoLetters(zCountry);
       return `Hello ${result} , Your Age Is ${result2}, You Live In ${result3}`;


    }
    return fullDetails(); // Do Not Edit This
  }

  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));// Hello Osama M., Your Age Is 38, You Live In EG
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));// Hello Ahmed A., Your Age Is 32, You Live In SY
  /*************************************************************************************************************** */
/**Assigment two* */
function itsMe() {
    return `Iam A Normal Function`;
  }

  console.log(itsMe()); // Iam A Normal Function

   itsMe =>`Iam A Arrow Function`;
  console.log(itsMe()); // Iam A Arrow Function
  /////////////////////////////////////////////////////////////////////////
  function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
  }

  console.log(urlCreate("https", "elzero", "org"));//Iam A Normal Function
    urlCreate = (protocol, web, tld)=>`${protocol}://www.${web}.${tld}`;

  console.log(urlCreate("https", "elzero", "org"));//Iam A Normal Function

  /********************************************************************************************************* */
/**Assigment three* */
function checker(zName) {
    return function (status) {
      return function (salary) {
        return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
      };
    };
  }

  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

    checker=(zName) =>{
    return  status => {
      return  salary => {
        return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
      };
    };
  }

  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
/************************************************************************************************************** */
/**Assigment four* */
function specialMix(...data) {
    let num;
    let myresult=0;
    for(let i=0;i<data.length;i++){
        num=parseInt(data[i])
        if ( isNaN(num))
        {
            num=0
        }
        myresult+=num;
    }
    return myresult;
  }

  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
/************************************************************************************************************** */





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
