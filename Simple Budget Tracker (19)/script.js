function bTracker(){
    let Amount = document.getElementById("amount").value;
    let Text = document.getElementById("text").value;
    
    let transaction  = JSON.parse(localStorage.getItem("item"))
    let type = ""

    if(Amount >= 0){
        type = "i"
    }   
    else{
        type = "e"
    }

    if(transaction == null){
        transaction = [];
    }

    transaction.push({
        discripsion : Text,
        Amount : Amount,
        type : type,
    })

    localStorage.setItem("item", JSON.stringify(transaction));
    console.log(JSON.parse(localStorage.getItem("item")));

    let sum = 0;
    transaction.forEach((x) => {
        sum += parseInt(x.Amount)
    });

    document.getElementById("balance").innerHTML = sum; 

    let his = document.createElement("li")
    let data = document.createTextNode(Text + " " + Amount)

    his.appendChild(data)
    document.getElementById("list").appendChild(data)

    let income = 0
    let expences = 0

   transaction.forEach((x) => {

    if(x.type === "i"){
        income += parseInt(x.Amount)
    }else{
        expences += parseInt(x.Amount)
    }

   })
   document.getElementById("money-plus").innerHTML= income;
   document.getElementById("money-minus").innerHTML= expences;
   
}








