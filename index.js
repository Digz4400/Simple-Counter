let counter = 0;
document.getElementById("Counter").innerHTML = counter;

document.getElementById("Decrease").onclick = function(){
    counter-=1;
    document.getElementById("Counter").innerHTML = counter;
}
document.getElementById("Reset").onclick = function(){
    counter=0;
    document.getElementById("Counter").innerHTML = 0;
}
document.getElementById("Increse").onclick = function(){
    counter+=1;
    document.getElementById("Counter").innerHTML = counter;
}
