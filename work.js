document.querySelectorAll(".keys").forEach(function(element) {
    element.addEventListener('click', fn);
});
function fn() {
    var a=this.textContent;
    document.querySelector(".display").textContent=a;

    document.querySelectorAll(".keys").forEach(function(element) {
        element.addEventListener('click', fn);
    });
    function fn() {
        var b=this.textContent;
        document.querySelector(".display").textContent=b;
    }
}
document.querySelectorAll(".sym").forEach(function(element) {
    element.addEventListener('click', fn);
});
function fn() {
    var op=this.textContent;
    document.querySelector(".display").textContent=op;
}



function calculator(num1, operator, num2) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
    }

    return result;
}

let calculation = calculator(a, op, b);
document.querySelector(".display").textContent=calculator;
