// get values
alert("hello before");

function getValues() {

    alert("hello");
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // get integers
    let startValue = parseInt(startValue);
    let endValue = parseInt(endValue);

    let numbers = generateNumbers(startValue, endValue);
    displayNumbers(numbers);
}


// generate numbers
function generateNumbers(sValue, eValue) {
    let numbers = [];

    for (let index = sValue; index <= eValue; index++) {
        numbers.push(index);
    }
    return numbers;
}

// display numbers
function displayNumbers(numbers) {
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {

        let number = numbers[index];
        templateRows += `<tr><td>${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;
}