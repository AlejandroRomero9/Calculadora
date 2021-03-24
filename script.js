function celsiusafaren(){
    let celsius = document.querySelector('#CaF');
    celsius= (CaF.value*9/5)+32;
    console.log(celsius+" Grados Celsius");
    CaF.value=celsius;
}
function farenacelsius(){
    let faren = document.querySelector('#FaC');
    faren= (FaC.value -32)*5/9;
    console.log(faren+ " Grados Fahrenheit");
    FaC.value=faren;
}
function metrosakilo(){
    let metro = document.querySelector('#MaK');
    metro= MaK.value / 1000;
    console.log(metro+" Kilometros");
    MaK.value=metro;
}
function kiloametros(){
    let kilo = document.querySelector('#KaM');
    kilo= KaM.value * 1000;
    console.log(kilo+" Metros");
    KaM.value=kilo;
}

let botonCaF= document.querySelector('#botonCaF');
botonCaF.addEventListener('click',celsiusafaren);
let botonFaC= document.querySelector('#botonFaC');
botonFaC.addEventListener('click',farenacelsius);
let botonMaK= document.querySelector('#botonMaK');
botonMaK.addEventListener('click',metrosakilo);
let botonKaM= document.querySelector('#botonKaM');
botonKaM.addEventListener('click',kiloametros);