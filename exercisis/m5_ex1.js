function wordDisplay() {
    let userInputAmount = parseInt(document.getElementById("userInputAmount").value);
    let wordsEntered = document.getElementById("wordsEntered");
    let arr = []
    let word = "You've entered the following words:\n\n"

    for (i = 1; i <= userInputAmount; i++) {
        
        let wordsInput = prompt(`Word ${i}`)
        arr.push(wordsInput)
    }

for (word of arr){
    let returnInput =document.createElement ("h5")
        returnInput.textContent=word
        document.body.appendChild(returnInput)
}}