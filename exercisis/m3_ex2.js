function find_number() {

    var first_number = parseInt(document.getElementById("Text1").value);
    var second_number = parseInt(document.getElementById("Text2").value);
    var result = first_number + second_number;
    var result2 = first_number - second_number;
    var result3 = first_number * second_number;
    var result4 = first_number / second_number;

    document.getElementById("textresult").value = result;
    document.getElementById("textresult2").value = result2;
    document.getElementById("textresult3").value = result3;
    document.getElementById("textresult4").value = result4;
    
}