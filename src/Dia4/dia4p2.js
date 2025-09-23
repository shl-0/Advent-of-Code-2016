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
var sectorNorte = 0;

var inputValidos = [];

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
        inputValidos.push(s);
    }
});

inputValidos.forEach(s => {
    let charOrder = s.substring(s.indexOf("[")+1,s.indexOf("]"));
    let rawString = s.replace(charOrder,"");
    let sector = Number(s.substring(s.indexOf("[")-3,s.indexOf("[")));
    let charCount = [];
    let esValido = true;

    let resultado = "";
    let n = sector-(26*Math.floor(sector/26));

    for(let i=0;i<rawString.length;i++) {
        if (rawString.charAt(i) == '-') {
            resultado = resultado.concat(" ");
            continue;
        }
        
        let codigo = rawString.charCodeAt(i)+n;
        codigo = Math.floor(codigo);
        if (codigo > 122) {
            codigo -= 26
        }

        resultado = resultado.concat(String.fromCharCode(codigo));
    }

    if (resultado.includes("north")) {
        sectorNorte = sector;
    }
});

console.log("Resultado (Parte 2): "+sectorNorte);