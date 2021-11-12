//Blitz Code Implementation

//Event Listener to start program when button is pushed
let runBlitzCode=document.getElementById("btnSubmit");
runBlitzCode.addEventListener("click",getValues);

//geting starting values from the screen
function getValues(){
    //get the values from the page
    let startValue=parseInt(document.getElementById("startValue").value);
    let endValue=parseInt(document.getElementById("endValue").value);
    
    //Validate number entry
    if(Number.isInteger(startValue)==false || Number.isInteger(endValue)==false){
        errorMessage="On or more of the values provided start value: "+ startValue +" or end value: "+ endValue +" are not numbers";
        let errorMessageDisplay=document.getElmentById("validation-summary");
        errorMessageDisplay.innerHTML=errorMessage;
    }
    
    //generate the numbers return them in an array
    let numbers=generateNumbers(startValue,endValue)

    //display the results on the page
    displayNumbers(numbers);
}


function generateNumbers(startValue,endValue){
    
    let numbersArray=[];

    //loop over the values from start to end
    for(let i=startValue; i<endValue; i++){
        numbersArray.push(i);
    }
    return numbersArray;
}

function displayNumbers(numbers){
    let className="even";
    let templateRows="";

    for(let i=0; i<numbers.length; i++){
        let number=numbers[i];

        if(number%2==0){
            className="even";
        }
        else{
            className="odd";
        }

        //Note **Prism shows this line incorrect see the page source
        templateRows+=`<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML=templateRows;
}


