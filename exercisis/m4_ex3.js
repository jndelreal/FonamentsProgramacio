let age = prompt("Please enter your age.");

let degree = prompt("Do you currently hold a college degree?\n\nEnter Yes or No.");

let unemployement = prompt("Are you currently unemployed?\n\nEnter Yes or No.");

if (age >= 18 && degree == "Yes" || age >= 18 && unemployement == "Yes") {
    alert("Congratulations! You are eligible for a scholarship.");
} else {
    alert("Sorry, you are not eligibe for a scholarship.");
}
