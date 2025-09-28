// Advent of Code 2016
// Día 9: Explosives in Cyberspace
// https://adventofcode.com/2016/day/9

const fs = require("fs");
var input = fs.readFileSync("Inputs/2016_dia9.txt","utf-8");

// Input de ejemplo
/*
input = "ADVENT\n"+
+"A(1x5)BC\n"
+"(3x3)XYZ\n"
+"A(2x2)BCD(2x2)EFG\n"
+"(6x1)(1x3)A\n"
+"X(8x2)(3x3)ABCY";
*/

var inputSplit = input.split("\n");
var resultado = "";

inputSplit.forEach(s => {
    let aperturaIndex = s.indexOf("(");
    let cierreIndex = s.indexOf(")",aperturaIndex);

    resultado = s.substring(0,aperturaIndex);

    while(aperturaIndex != -1) {
        let split = s.substring(aperturaIndex+1,cierreIndex).split("x");
        let salto = 1;

        for(let i=0;i<Number(split[1]);i++) {
            resultado += s.substring(cierreIndex+1,cierreIndex+1+Number(split[0]));
        }
        salto += Number(split[0]);

        aperturaIndex = s.indexOf("(",aperturaIndex+salto);
        cierreIndex = s.indexOf(")",aperturaIndex);
    }
});

console.log("Resultado (Parte 1): "+resultado.length);