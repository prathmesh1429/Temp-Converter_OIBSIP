let celcius = document.getElementById("celcius");
let fahrenhite = document.getElementById("fahrenhite");

celcius.oninput =() => {
    let output = ( parseFloat(celcius.value) * 9)/5 + 32;
    fahrenhite.value = parseFloat(output.toFixed(2));
};

fahrenhite.oninput =() => {
    let output = ((parseFloat(fahrenhite.value) -32 )* 5)/9;
    celcius.value = parseFloat(output.toFixed(2));
};

