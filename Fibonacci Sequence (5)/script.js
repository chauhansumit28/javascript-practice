function sub() {
    let Number = document.getElementById("Number").value;

    let a = 0;
    let b = 1;
    let result;

    for (let i = 2; i<= Number; i++){

   

    result = a + b;

     a = b;

     b = result;
     console.log(result)

     document.getElementById("result").innerHTML = result ;
    
    }
}