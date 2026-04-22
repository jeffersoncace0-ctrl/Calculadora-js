const num1 = document.getElementById("numero1");
const num2 = document.getElementById("numero2");
const op = document.getElementById("operacion");
const res = document.getElementById("resultado");

const botonesNum = document.querySelectorAll(".num");
const botonesOp = document.querySelectorAll(".op");

const btnIgual = document.getElementById("igual");
const btnClear = document.getElementById("clear");

const historial = document.getElementById("historial");


botonesNum.forEach(function(boton){
    boton.addEventListener("click", function(){

        if (op.value === "") {
            num1.value += boton.textContent;
        } else {
            num2.value += boton.textContent;
        }

    });
});

botonesOp.forEach(function(boton){
    boton.addEventListener("click", function(){

        if (num1.value !== "") {
            op.value = boton.textContent;
        }

    });
});


btnIgual.addEventListener("click", function(){

    if(num1.value === "" || num2.value === "" || op.value === ""){
        return;
    }

    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let oper = op.value;
    let total = 0;

    if(oper === "+") total = n1 + n2;
    if(oper === "-") total = n1 - n2;
    if(oper === "*") total = n1 * n2;
    if(oper === "/") total = n1 / n2;

    res.value = total;

    const item = document.createElement("li");
    item.textContent = `${n1} ${oper} ${n2} = ${total}`;
    historial.appendChild(item);

    num1.value = "";
    num2.value = "";
    op.value = "";
    res.value = "";

});


btnClear.addEventListener("click", function(){

    num1.value = "";
    num2.value = "";
    op.value = "";
    res.value = "";

    historial.innerHTML = "";

});