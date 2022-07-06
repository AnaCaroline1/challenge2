let form = document.getElementById("form");

let inputP = document.getElementById("P-digitaP");
let inputC = document.getElementById("P-digitaC");


let btnAddPalavra = document.querySelector("#p-confirma");



btnAddPalavra.addEventListener("click", function(e){
    e.preventDefault();

    let palavra = inputP.value;
    let categoria = inputC.value;
    
    inputP;
    inputC;

    alert("Sua palavra foi adicionada");

    form.reset();
})

