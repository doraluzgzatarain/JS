let divName = document.getElementById("divName");
let divTwo = document.getElementById("divTwo");
let divThree = document.getElementById("divThree");
let divFour = document.getElementById("divFour");
let divFive = document.getElementById("divFive");
let divSix = document.getElementById("divSix");


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

//EXERCISE 3
let xValue = 10;
divThree.innerHTML = "Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive." + "<br>";
while(xValue > 0){
    console.log(xValue);
    divThree.innerHTML += xValue + "<br>";
    xValue -= 0.5;
}

divFour.innerHTML = "Print all the odd numbers between 1 - 100." + "<br>";
xValue = 1;
while (xValue < 100){
    if (xValue !=1){
        console.log(xValue);
        divFour.innerHTML += xValue + "<br>";
    }
    xValue++;
}

divFive.innerHTML = "Write a method with a while loop to print 1 through n in square brackets." + "<br>";
let n = 8;
let s = 1;
while (s <=n){
    console.log(s);
    divFive.innerHTML += "[" + s + "]" + "<br>" ;
    s++;
}

s = 0;
let i = 1;
let d = 19;
function sum (s,i){
    while(i <= d){
        s = i + s;
        i++;
    }
    return s;
} 
console.log(sum(s,i));
divSix.innerHTML = "Write a method with a while loop that computes the sum of first n positive integers:" + "<br>" + "n = " + d + "<br>" + "Result = " + sum(s,i);
