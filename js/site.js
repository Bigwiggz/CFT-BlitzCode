// Prism JS Setup

// Prism JS Setup

// Validation Check
let startValue=parseFloat(document.getElementById("startValue").value);
let endValue=parseFloat(document.getElementById("endValue").value);

function ValidateDataEntry(startValue, endValue){

    if(startValue>endValue){
        errorMessage="The starting number ("+ startValue +") must be less than the ending number ("+endValue+")";
    }
    else{
        
        for(let i=startValue; i<endValue; i++){

        }
    }
}
