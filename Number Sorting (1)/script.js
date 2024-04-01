const array = [];
function pushValue() {
  
  
  let number = document.getElementById("number").value;

  array.push(number);

  
  document.getElementById("result").innerHTML = "Origanal array:-" + JSON.stringify(array);
  
  let sort = array.sort(function(a,b){return a-b})
  
  document.getElementById("result1").innerHTML = "sorted array:-" + JSON.stringify(array);

}
