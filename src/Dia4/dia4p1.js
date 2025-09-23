// Advent of Code 2016
// Día 4: Security Through Obscurity
// https://adventofcode.com/2016/day/4

const fs = require("fs");
var input = fs.readFileSync("Inputs/2016_dia4.txt","utf-8");

// Input de ejemplo
/*
input = 
"aaaaa-bbb-z-y-x-123[abxyz]\n"+
"a-b-c-d-e-f-g-h-987[abcde]\n"+
"not-a-real-room-404[oarel]\n"+
"totally-real-room-200[decoy]";
*/

var inputSplit = input.split("\n");
var totalSuma = 0;

inputSplit.forEach(s => {
    let charOrder = s.substring(s.indexOf("[")+1,s.indexOf("]"));
    let rawString = s.replace(charOrder,"");
    let charCount = [];
    let esValido = true;

    for(let i=0;i<charOrder.length;i++) {
        charCount.push(0);

        for(let j=0;j<rawString.length;j++) {
            if (rawString.charAt(j) == charOrder.charAt(i)) {
                charCount[i]++;
            }
        }

        if (charCount[i] == 0 || (i != 0 && (charCount[i] > charCount[i-1] || (charCount[i] == charCount[i-1] && charOrder.charCodeAt(i-1) > charOrder.charCodeAt(i))))) {
            esValido = false;
            break;
        }
    }

    if (esValido) {
        totalSuma += Number(s.substring(s.indexOf("[")-3,s.indexOf("[")));
    }
});

console.log("Resultado (Parte 1): "+totalSuma);