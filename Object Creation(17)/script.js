let array = [];


let Creation = () => {
    let a = document.getElementById("text1").value;
    let b = document.getElementById("number").value;
    let c = document.getElementById("text2").value;

array.push({
  Name : a,
  Age : b,
  Country : c,
})
  
  document.getElementById("output").innerHTML = "Ans :-" + JSON.stringify(array);
  
}