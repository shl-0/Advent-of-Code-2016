// Advent of Code 2016
// Día 6: Signals and Noise
// https://adventofcode.com/2016/day/6

const fs = require("fs");
var input = fs.readFileSync("Inputs/2016_dia6.txt","utf-8");

// Input de ejemplo
/*
input = "eedadn\n"+
"drvtee\n"+
"eandsr\n"+
"raavrd\n"+
"atevrs\n"+
"tsrnev\n"+
"sdttsa\n"+
"rasrtv\n"+
"nssdts\n"+
"ntnada\n"+
"svetve\n"+
"tesnvt\n"+
"vntsnd\n"+
"vrdear\n"+
"dvrsen\n"+
"enarar";*/

var inputSplit = input.split("\n");
var resultado = "";

for(let i=0;i<inputSplit.length;i++) {
    let mapa = new Map();

    let maxC = '.';
    let minN = 99999;

    inputSplit.forEach(s => {
        
        if (mapa.has(s.charAt(i))) {
            let n = mapa.get(s.charAt(i))+1;
            mapa.set(s.charAt(i),n);
        }
        else
        {
            mapa.set(s.charAt(i),1);
        }
    });

    mapa.forEach((v,k,m) => {
        if (v < minN) {
            maxC = k;
            minN = v;
        }
    });

    resultado += maxC;
}

console.log("Resultado (Parte 2): "+resultado);
