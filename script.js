//alert("tresc komunikatu");
//confirm("tresc komunikatu");
//prompt("tresc komunikatu", "domyslna wartosc");

//let x = 2;
//let y =3;
//let z = 4;
//let v = 5;
//let imie = "Irek";

//alert(x*y);
//alert(imie);

//let txt = "przykladowy text"; // zmienna 
//txt = "inny tekst"; // zmieniamy wartosc;

//const nr = 102; //stala
//nr = 103; // blad nie mozna zmieniac stalej.

//function myFunction(a,b){
//
//    var result = a+b;
//    return result;
//}

//var aa = myFunction(2,8);
//alert(aa);

//function print(name="Michał", status = "Najlepszy"){
//    console.log(name + "jest" + status);
//}

//print();
//print("karol");
//print("Paweł", "wysoki");
//print("undefined", "wysoki");

function sum(){
    console.log(arguments);
}


sum();
sum(1,2,3,4);
sum("ala", "ma", "kota");

//deklaracja
function myFn(){
    
}

//wyrazenie funkcyjne
cont myFn = function(){
    
}

//za pomoca fukcji strzalkowej
const myFn = () => {
    
}

const myFn = function(a){
    console.log(a*a);
} 

//skracamy zapis z pominieciem nawiasow
const myFn = a =>{
    console.log(a*a);
}

const myFn = (a, b) =>{
    console.log(a*b);
}

//instrukcja warunkowa
const nr1 = prompt("Podaj jakas liczbe");
if (nr1 > 20){
    console.log("liczba jest wieksza od 20");
}else{
    console.log("liczba jest mniejsza od 20");
}






