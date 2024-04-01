let array = [1,2,3,5,7,8,9];
let array1 = [1,2,9,78,4,2,15];
let array2 = []


let Merging = () => {
   

   // let merg = array2.concat(array,array1);
   // document.getElementById("result").innerHTML = JSON.stringify(merg)

   // console.log(merg);
   
   array2 = [...array,...array1];
   document.getElementById("result").innerHTML = JSON.stringify(array2)
  

}
