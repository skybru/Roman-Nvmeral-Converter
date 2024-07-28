const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");
const valInt = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const valRoman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

const convertToRoman = (input, index) => {
    if (input <= 0) {
        console.log("base");
        return "";
    }

    for (let i = index; i < valInt.length; i++) {
        if (input >= valInt[i]) {
            console.log(valRoman[i]);
            result.textContent += valRoman[i];
            result.style.display = "block";
            return convertToRoman(input - valInt[i], i)
        }
    }
}

const checkInput = () => {
    const inputParsed = parseInt(inputNumber.value);

    if (isNaN(inputParsed)) {
        result.classList.add("error");
        result.textContent = "Please enter a valid number";
    } else if (inputParsed <= 0 ) {
        result.classList.add("error");
        result.textContent = "Please enter a number greater than or equal to 1";
        return;
    } else if (inputParsed > 3999) {
        result.classList.add("error");
        result.textContent = "Please enter a number less than or equal to 3999";
        return;
    } else {
        result.classList.remove("error");
        result.textContent = "";
        convertToRoman(inputParsed, 0);
    }

    inputNumber.value = "";
}

convertBtn.addEventListener("click", checkInput);