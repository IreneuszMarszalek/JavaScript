/*console.log(window.document);
document.write("<h1>Nowa treść</h1>");

window.onload = function(){
    var top = document.getElementById('top');
    top.innerHTML = '<h1>ZMIANA</h1>'
}*/

console.log(window.document);
document.write("<h1>Nowa treść</h1>");

window.onload = function(){
    var paragraph = document.getElementsByTagName("p");
    alert(paragraph.length);
}

