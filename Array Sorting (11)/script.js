let array = [];

let ArraySorting = () => {
  let number = document.getElementById("number").value;

  array.push(number);

  document.getElementById("result").innerHTML =
    "main:-" + JSON.stringify(array);

  let sort = array.sort(function (a, b) {
    return b - a;
  });
  document.getElementById("result1").innerHTML =
    "decending:-" + JSON.stringify(sort);
  // b-a mota thi nanu //

  let abc = array.sort(function (a, b) {
    return 1 - 2;
  });
  document.getElementById("result2").innerHTML =
    "ascending:-" + JSON.stringify(abc);
  //a-b nana thi motu//
};
