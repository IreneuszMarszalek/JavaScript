//iteracje
//var i =1;

//while(i<=1){
 //   alert(i);
 //   i++;
//}

//const a= 10;
//const b= 20;
//for(var i =1;i<=a && i<=b;i++){
 //   alert(i);
//}

/*let i = 1;
let j = 1;
let txt="";
for (i=1;i<=4;i++){
    for (j=1;j<=6;j++){
        txt = txt +"*";
    }
    txt = txt + "\n";
}

console.log(txt);

let a = 1;
let sum = 1;

while (sum <= 1000){
    a++;
    sum = sum + a;
    
}

console.log(a);

function gwiazdki() {
    let str = "";
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            str += "*";
        }
        str += "\n";
    }
    console.log(str);
}*/

/*var myArray= [20,34, "ok", true, 102, "test"];
let n=0;
for (n=0;n<myArray.length; n++){
    if(myArray[n] == "ok"){
        alert(myArray[n]);
    }
    alert(myArray[n]);
}*/


const numbers = [2, 5, 7, 10, 34, 16, 879, 1]
function parzyste(tab){
    let parzysteTab =[];
    let n = 0;
    for (n=0;tab.length; n++){
        if(tab[n]%2===0){
            parzysteTab.push(tab[n]);
        }
    }
    return parzysteTab;
}

alert(parzyste[0]);

