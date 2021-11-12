// Prism JS Setup

// Prism JS Setup

// Validation Check
let startValue=parseFloat(document.getElementById("startValue").value);
let endValue=parseFloat(document.getElementById("endValue").value);

//
var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

// Insert a row at the end of table
var newRow = tbodyRef.insertRow();

// Insert a cell at the end of the row
var newCell = newRow.insertCell();

// Append a text node to the cell
var newText = document.createTextNode('new row');
newCell.appendChild(newText);

function ValidateDataEntry(startValue, endValue){

    if(startValue>endValue){
        errorMessage="The starting number ("+ startValue +") must be less than the ending number ("+endValue+")";
    }
    else{
        
        for(let i=startValue; i<endValue; i++){
            if(i%2==0){
                class="gray";
            }
            else{
            }
        }
    }
}
