// Advent of Code 2016
// Día 7: Internet Protocol Version 7
// https://adventofcode.com/2016/day/7

const fs = require("fs");
var input = fs.readFileSync("Inputs/2016_dia7.txt","utf-8");

// Input de ejemplo
/*
input = "abba[mnop]qrst\n"+
"abcd[bddb]xyyx\n"+
"aaaa[qwer]tyui\n"+
"ioxxoj[asdfgh]zxcvbn";
*/

var inputSplit = input.split("\n");
var total = 0;

inputSplit.forEach(s => {
    
    let indexCorchete = s.indexOf('[');

    while(indexCorchete != -1) {
        let sub = s.substring(indexCorchete+1,s.indexOf(']',indexCorchete));

        if (comparar(sub)) {
            return;
        }
        s = s.replace("["+sub+"]",".");

        indexCorchete = s.indexOf('[',indexCorchete+1);
    }

    let esValido = false;
    let split = s.split(".");
    try {
        split.forEach(sp => {
            if (comparar(sp)) {
                esValido = true;
                throw br;
            }
        });
    }
    catch(br) {}

    if (esValido) {
        total++;
    }
});

function comparar(s) {
    for(let i=0;i<s.length-3;i++) {
        if ((s.charAt(i) == s.charAt(i+3)) && (s.charAt(i+1) == s.charAt(i+2)) && (s.charAt(i) != s.charAt(i+1))) {
            return true;
        }
    }

    return false;
}

console.log("Resultado (Parte 1): "+total);