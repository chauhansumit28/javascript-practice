let array = [];


let ArrayMapping = () => {
    let number = document.getElementById("mapp").value;


    array.push(number);

  
  document.getElementById("result").innerHTML = "Main array:-" + JSON.stringify(array);

  let mapp = array.map((nextValue) => nextValue * 2) 
  document.getElementById("result1").innerHTML = "Array Mapping :-" + JSON.stringify(mapp);


}