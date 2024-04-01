let TipCalculator = () =>{
 let  x = parseInt(document.getElementById("tip").value) ;
 let  y = parseInt(document.getElementById("tip1").value);

 let Tip = x * y / 100;
 let Gst = x * 18 /100;
let amount = y = x;
 let total = x + Tip + Gst

 

 document.getElementById("result1").innerHTML = "Tip = " + (Tip);
 document.getElementById("result2").innerHTML = "Gst = " + (Gst);
 document.getElementById("result").innerHTML = "Amount = " + (amount);
 document.getElementById("result3").innerHTML = "Total = " + (total);
}