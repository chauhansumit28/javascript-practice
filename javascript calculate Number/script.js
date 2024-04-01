function reset(){
    document.getElementById("txtNum1").value = ""
    document.getElementById("txtNum2").value = "";
    document.getElementById("txtSum").value = "";
}




function Addition(){

    let number1 = parseInt(document.getElementById("txtNum1").value)  ;
    let number2 = parseInt(document.getElementById("txtNum2").value)  ;

    let result = number1 + number2 ;

    document.getElementById("txtSum").value = result ;

}
function subtraction(){

    let number1 = parseInt(document.getElementById("txtNum1").value)  ;
    let number2 = parseInt(document.getElementById("txtNum2").value)  ;

    let result = number1 - number2 ;

    document.getElementById("txtSum").value = result ;

}
function mul(){

    let number1 = parseInt(document.getElementById("txtNum1").value)  ;
    let number2 = parseInt(document.getElementById("txtNum2").value)  ;

    let result = number1 * number2 ;

    document.getElementById("txtSum").value = result ;

}

function div(){

    let number1 = parseInt(document.getElementById("txtNum1").value)  ;
    let number2 = parseInt(document.getElementById("txtNum2").value)  ;

    let result = number1 / number2 ;

    document.getElementById("txtSum").value = result ;

}

