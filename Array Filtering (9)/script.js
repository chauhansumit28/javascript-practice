let main = [];
let even = [];
let odd = [];

function ARRAYFiltering() {
    let number = document.getElementById("number").value;
    main.push(number);

    if (number % 2 == 0){
        even.push(number);
    }
    else{
        odd.push(number);
    }
    document.getElementById("result1").innerHTML = "main number" + JSON.stringify(main);

    document.getElementById("result2").innerHTML = "even number" + JSON.stringify(even);

    document.getElementById("result3").innerHTML = "odd number" + JSON.stringify(odd);


}

 

 
    
    
