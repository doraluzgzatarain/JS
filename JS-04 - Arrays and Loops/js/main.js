let divName = document.getElementById("divName");

// EXERCISE 1
let names = ["Sofia", "David", "Juan"];
names.shift();
names.push("Sarah", "Agustin");
names.splice(1, 0, 'Renata');
names.push("Elena");

let strName = names.join(", ");
divName.innerHTML = strName;

