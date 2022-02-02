let firstName = prompt("Please enter your name.")
console.log(firstName);

let lastName = prompt("Please enter your last name.")
console.log(lastName);

let getAge = prompt("Please enter your age.")
console.log(getAge);

if (getAge >= 18) {
    alert(document.getElementById("name").hidden = firstName + " " + lastName + ", " + "you are an adult.");;
} else {
    alert(document.getElementById("name").hidden = firstName + " " + lastName + ", " + "you are not an adult.");
}
