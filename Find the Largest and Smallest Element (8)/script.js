let array =[]
function result(){
    let name = document.getElementById("number").value;
    array.push(name)
   
  document.getElementById("result1").innerHTML = "main array:-" + JSON.stringify(array);

  let sort = array.sort(function(a,b){return a-b})
  

   let small = sort[0];
   let large = sort[sort.length -1];

   document.getElementById("result2").innerHTML = "smallest number:-" + JSON.stringify(small);
   document.getElementById("result3").innerHTML = "largest number:-" + JSON.stringify(large);
  


  
  
}