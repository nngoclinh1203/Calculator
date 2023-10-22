var inputElement = document.querySelector('#display');
var currentValue;
var currentResult;

console.log(typeof currentValue)

function addValue(value) {
    if (typeof value === typeof 5) {
        currentValue = value;
        inputElement.value += currentValue;
        console.log(typeof currentValue)
        console.log(typeof inputElement.value);
    } else if (typeof currentValue === typeof 'string') {

    } else {
        if (value === '.' && typeof currentValue === typeof undefined) {

        } else {
            currentValue = value;
            inputElement.value += currentValue;
        }
    }
}
function removeValue() {
    inputElement.value = '';
}

function CEValue() {
    var string1 = inputElement.value;
    var string2 = string1.slice(0, -1);
    inputElement.value = string2;
}

function equalValue() {
    console.log(typeof inputElement.value)
    var result = eval(inputElement.value);
    currentResult = result;
    inputElement.value = result;
    console.log(typeof result)

}