function calculate() {
    const input = document.getElementById('expression').value;
    const operator = input.match(/[+\-*/]/);
    if (!operator) {
        document.getElementById('result').innerText = '';
        return;
    }

    const [operand1, operand2] = input.split(operator);

    if (isNaN(operand1) || isNaN(operand2)) {
        document.getElementById('result').innerText = 'Invalid input';
        return;
    }

    let result;
    switch (operator[0]) {
        case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
        default:
            result = 'Invalid operator';
            break;
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}
