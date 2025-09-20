// Advent of Code 2016
// Día 1: No Time for a Taxicab
// https://adventofcode.com/2016/day/1

const fs = require("fs");
var input = fs.readFileSync("Inputs/2016_dia1.txt","ascii");

// Example input
//input = "R8, R4, R4, R8";

// 0 -> Arriba, 1 -> Derecha, 2 -> Abajo, 3 -> Izquierda
var currentDir = 0;
var dir = [[-1,0],[0,1],[1,0],[0,-1]];
var coord = new Array(0,0);
var coordVisitado = new Set();
var inputSplit = input.split(", ");

try {
    inputSplit.forEach((s) => {
        currentDir += s.charAt(0)=='L'?-1:1;
        if (currentDir < 0) {
            currentDir = 3;
        }
        else if (currentDir > 3) {
            currentDir = 0;
        }

        let pasos = s.replace(s.charAt(0),"");

        for(let i=0;i<pasos;i++) {
            coord[0] += dir[currentDir][0];
            coord[1] += dir[currentDir][1];

            if (coordVisitado.has(coord.toString())) {
                throw "break";
            }
            
            coordVisitado.add(coord.toString());
        }
    });
}
catch(br) {}

console.log("Resultado (Parte 2): "+(Math.abs(coord[0])+Math.abs(coord[1])));

// ---