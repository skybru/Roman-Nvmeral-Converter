const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const convertToRoman = (input) => {
   if (input <= 0) {
    result.textContent = "Please enter a number greater than or equal to 1";
   } else if (input > 3999) {
    result.textContent = "Please enter a number less than or equal to 3999";
   }
   console.log(Math.floor(input / 1000));
   console.log(input % 1000);


}

const checkInput = () => {
    const inputParsed = parseInt(inputNumber.value);
    
    if (isNaN(inputParsed)) {
        result.textContent = "Please enter a valid number";
    } else {
        result.textContent = inputParsed; //logging
        convertToRoman(inputParsed);
    }

}

convertBtn.addEventListener("click", checkInput);