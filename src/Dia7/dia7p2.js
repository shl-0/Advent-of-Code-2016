// Advent of Code 2016
// Día 7: Internet Protocol Version 7
// https://adventofcode.com/2016/day/7

const fs = require("fs");
var input = fs.readFileSync("Inputs/2016_dia7.txt","utf-8");

// Input de ejemplo
/*
input = "aba[bab]xyz\n"+
"xyx[xyx]xyx\n"+
"aaa[kek]eke\n"+
"zazbz[bzb]cdb";
*/

var inputSplit = input.split("\n");
var total = 0;

inputSplit.forEach(s => {
    
    let indexCorchete = s.indexOf('[');
    let sHyper = "";

    while(indexCorchete != -1) {
        let sub = s.substring(indexCorchete+1,s.indexOf(']',indexCorchete));

        sHyper += "."+sub;
        s = s.replace("["+sub+"]",".");

        indexCorchete = s.indexOf('[',indexCorchete+1);
    }

    let esValido = false;
    for(let i=0;i<sHyper.length-2;i++) {
        if (sHyper.charAt(i) == sHyper.charAt(i+2) && sHyper.charAt(i) != sHyper.charAt(i+1)) {
            let bab = sHyper.charAt(i+1)+sHyper.charAt(i)+sHyper.charAt(i+1);

            if (s.includes(bab)) {
                esValido = true;
                break;
            }
        }
    }

    if (esValido) {
        total++;
    }
});

console.log("Resultado (Parte 2): "+total);