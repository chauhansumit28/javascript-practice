function number(){
    let name = document.getElementById("number").value;
    let reverse = name.split("").reverse("").join("")

    if (name == reverse){
        document.getElementById("result1").innerHTML = "palindrome"

    }
    else{
        document.getElementById("result2").innerHTML = "not palindrome"

    }

}
