function oddeven(){

let Number = document.getElementById("Number").value;

if (Number % 2 == 0){
    document.getElementById("result").innerHTML = Number + ":- this is Even Number";
}
else{
    document.getElementById("result").innerHTML = Number + ":- this is Odd Number";
}


} 
