let divName = document.getElementById("divName");
let divTwo = document.getElementById("divTwo");

// EXERCISE 1
let names = ["Sofia", "David", "Juan"];
names.shift();
names.push("Sarah", "Agustin");
names.splice(1, 0, 'Renata');
names.push("Elena");

let strName = names.join(", ");
divName.innerHTML = strName;

// EXERCISE 2
let element = ["*"];
console.log(element);
for (let start=1 ; start<=5 ; start++){
    for( let x=1 ; x<=start; x++){
        divTwo.innerHTML += element ;
    }
    divTwo.innerHTML += "<br>";
}
