// get values
function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    
    let numbers = generateNumbers();

}


// generate numbers
function generateNumbers(sValue, eValue) {
    let numbers = [];
    return numbers;
    for (let index = sValue; index <= eValue; index++) {       
        numbers.push(index);
    }
}

// display numbers
function displayNumbers() {
    
}