const fruits = ["Banana", "Orange", "Apple", "Mango"];
let indexelement = () => {
let num = document.getElementById("remove").value;


    let indexe = fruits.indexOf(num);

document.getElementById("result").innerHTML = "ans " + indexe;

if(indexe == -1){
    document.getElementById("result").innerHTML = "Invalide index enter" 
}
    
}



