let array = [];


let RemoveDuplicates = () => {
    let number = document.getElementById("remove").value;


    array.push(number);

  
  document.getElementById("result").innerHTML = "Main array:-" + JSON.stringify(array);

  

  let remove = array.filter((item , index) => array.indexOf(item) === index); 
  document.getElementById("result1").innerHTML = "removeduplicates :-" + JSON.stringify(remove);


}