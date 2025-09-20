// Advent of Code 2016
// Día 1: No Time for a Taxicab
// https://adventofcode.com/2016/day/1

const fs = require("fs");
var input = fs.readFileSync("Inputs/2016_dia1.txt","ascii");

// Example input
//input = "R5, L5, R5, R3";

// 0 -> Arriba, 1 -> Derecha, 2 -> Abajo, 3 -> Izquierda
var currentDir = 0;
var dir = [[-1,0],[0,1],[1,0],[0,-1]];
var coord = [0,0];
var inputSplit = input.split(", ");

inputSplit.forEach(resolver);

console.log("Resultado (Parte 1): "+(Math.abs(coord[0])+Math.abs(coord[1])));

// ---

function resolver(s) {
    currentDir += s.charAt(0)=='L'?-1:1;
    if (currentDir < 0) {
        currentDir = 3;
    }
    else if (currentDir > 3) {
        currentDir = 0;
    }

    let pasos = s.replace(s.charAt(0),"");
    coord[0] += dir[currentDir][0]*pasos;
    coord[1] += dir[currentDir][1]*pasos;
}