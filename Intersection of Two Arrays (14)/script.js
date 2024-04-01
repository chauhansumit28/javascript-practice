let array = [];


let Intersection = () => {
    let number = document.getElementById("remove").value;


    array.push(number);

  
  document.getElementById("result").innerHTML = "Main array:-" + JSON.stringify(array);

  

  let remove = array.filter((item , number) => array.indexOf(item) === number); 
  document.getElementById("result1").innerHTML = "Intersection :-" + JSON.stringify(remove);


}