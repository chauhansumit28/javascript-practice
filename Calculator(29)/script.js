 function display(abc){
    document.getElementById("text").value += abc ;

 }
 function clearscreen(){
    document.getElementById("text").value = "" ;

 }
 function solve(){
    let total = document.getElementById("text").value;
    let result = eval(total);
    document.getElementById("text").value = result;
 }