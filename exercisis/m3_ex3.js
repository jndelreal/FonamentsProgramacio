let grade1 = prompt("Enter a grade.");
let grade2 = prompt("Enter another grade.");
let grade3 = prompt("Enter final grade.");

let grades = [grade1, grade2, grade3];

function gradeAvg () {
return (Number(grade1) + Number(grade2) + Number(grade3)) / 3;
}
let average = gradeAvg ();
document.getElementById("gradeAvg").innerHTML = average;