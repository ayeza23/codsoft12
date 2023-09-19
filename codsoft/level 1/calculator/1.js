document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    let currentInput = "";
    let currentOperator = "";
    let previousInput = "";

    // Add event listeners to number buttons
    const numberButtons = document.querySelectorAll(".number");
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentInput += button.innerText;
            updateDisplay();
        });
    });

    // Add event listeners to operator buttons
    const operatorButtons = document.querySelectorAll(".operator");
    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (currentInput !== "") {
                if (currentOperator !== "") {
                    calculate();
                } else {
                    previousInput = currentInput;
                }
                currentOperator = button.innerText;
                currentInput = "";
                updateDisplay();
            }
        });
    });

    // Add event listener for equals button
    document.getElementById("equals").addEventListener("click", () => {
        if (currentInput !== "") {
            calculate();
            currentOperator = "";
            updateDisplay();
        }
    });

    // Add event listener for clear button
    document.getElementById("clear").addEventListener("click", () => {
        clear();
        updateDisplay();
    });

    // Add event listener for backspace button
    document.getElementById("backspace").addEventListener("click", () => {
        if (currentInput !== "") {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        }
    });

    // Function to update the display
    function updateDisplay() {
        display.innerText = currentInput !== "" ? currentInput : previousInput;
    }

    // Function to perform calculations
    function calculate() {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);
        switch (currentOperator) {
            case "+":
                currentInput = (num1 + num2).toString();
                break;
            case "-":
                currentInput = (num1 - num2).toString();
                break;
            case "*":
                currentInput = (num1 * num2).toString();
                break;
            case "/":
                if (num2 !== 0) {
                    currentInput = (num1 / num2).toString();
                } else {
                    currentInput = "Error";
                }
                break;
        }
        previousInput = currentInput;
    }

    // Function to clear the calculator
    function clear() {
        currentInput = "";
        currentOperator = "";
        previousInput = "";
    }
});
