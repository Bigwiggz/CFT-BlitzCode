//Blitz Code Implementation

//geting starting values from the screen
function getValues(){
    //get teh values from the page
    let startValue=parseFloat(document.getElementById("startValue").value);
    let endValue=parseFloat(document.getElementById("endValue").value);

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
            className="even"
        }
        else{
            className="odd"
        }

        //Note **Prisom shows this line incorrect see the page source
        templateRows+=`${number}`;
    }

    document.getElementById("results").innerHTML=templateRows;
}


