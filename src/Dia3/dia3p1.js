// Advent of Code 2016
// Día 3: Squares With Three Sides
// https://adventofcode.com/2016/day/3

const fs = require("fs");
var input = fs.readFileSync("Inputs/2016_dia3.txt","utf-8");
input = input.replaceAll(/\n +/g,"\n");
input = input.replaceAll(/  +/g," ");

var inputSplit = input.split("\n");
var total = 0;

inputSplit.forEach(s => {
    var split = s.split(" ");
    var n = [Number(split[0]),Number(split[1]),Number(split[2])];

    if ((n[0]+n[1] > n[2]) && (n[0]+n[2] > n[1]) && (n[1]+n[2] > n[0])) {
        total++;
    }
});

console.log("Resultado (Parte 1): "+total);