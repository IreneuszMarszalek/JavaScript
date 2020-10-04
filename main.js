function sprawdz_z2(x){
    switch(x) {
        case "0":
            alert("Pn");
            break;
        case "1":
            alert("Wt");
            break;
        case "2":
            alert("Sr");
            break;
        case "3":
            alert("Czw");
            break;
        case "4":
            alert("Pt");
            break;
        case '5':
            alert("Sb");
            break;
        case "6":
            alert("Ndz");
            break;
      default:
            alert("Nie ma takiego dnia");
    }
}
    
let n = prompt("Daj dzień", "Daj dzień");
sprawdz_z2(n);