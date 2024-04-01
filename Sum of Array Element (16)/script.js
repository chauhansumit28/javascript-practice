let array = [];


let sum = () => {

    let number = document.getElementById("number").value;

    array.push(number);

    document.getElementById("result").innerHTML = "main array:-" + JSON.stringify(array);

    // let remove = array.sum ; 


    let sum = 0;

    for (let i = 0; i < array.length; i++ ) {
        sum += parseInt(array[i]);
      }
      
      console.log(sum) 
      document.getElementById("result1").innerHTML = "Sum array:-" + JSON.stringify(sum);

      let avr = sum / array.length;
      document.getElementById("result2").innerHTML = "avr of array:-" + JSON.stringify(avr);

}