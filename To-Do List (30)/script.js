let ToDoList = () =>{
    let Name = document.getElementById("text").value;
    let TASK = document.getElementById("task").value;
    let PRIORITY = document.getElementById("select").value;
    let Date = document.getElementById("date").value;
    



let transaction  = JSON.parse(sessionStorage.getItem("item"))


if(transaction == null){
    transaction = [];
}

transaction.push({
   name : Name,
   task : TASK,
   PRIORITY : PRIORITY,
   date : Date,
})


sessionStorage.setItem("item", JSON.stringify(transaction));
console.log(JSON.parse(sessionStorage.getItem("item")));


let tbody = document.getElementById("sumit");

//double value ne remove mate : removechild/
while(tbody.firstChild){
    tbody.removeChild(tbody.firstChild)
}


transaction.forEach((sub) => {
let num = document.createElement("tr");

let abc = document.createElement("td");
let abc1 = document.createElement("td");
let abc2 = document.createElement("td");
let abc3 = document.createElement("td");

//table tr ni ander td store karyu
abc.innerHTML = sub.name,
abc1.innerHTML = sub.task,
abc2.innerHTML = sub.PRIORITY,
abc3.innerHTML = sub.date,

//tabel   td ne tr  ma  data stroe mate appendchiled

num.appendChild(abc);
num.appendChild(abc1);
num.appendChild(abc2);
num.appendChild(abc3);

tbody.appendChild(num);


    

});





}