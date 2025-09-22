// Advent of Code 2016
// Día 3: Squares With Three Sides
// https://adventofcode.com/2016/day/3

const fs = require("fs");
var input = fs.readFileSync("Inputs/2016_dia3.txt","utf-8");
input = input.replaceAll(/\n +/g,"\n");
input = input.replaceAll(/  +/g," ");

var inputSplit = input.split("\n");
var total = 0;

for(let i=0;i<inputSplit.length;i+=3) {
    var row1 = inputSplit[i].split(" ");
    var row2 = inputSplit[i+1].split(" ");
    var row3 = inputSplit[i+2].split(" ");

    for(let j=0;j<3;j++) {
        var n = [Number(row1[j]),Number(row2[j]),Number(row3[j])];

        if ((n[0]+n[1] > n[2]) && (n[0]+n[2] > n[1]) && (n[1]+n[2] > n[0])) {
            total++;
        }
    }
}

console.log("Resultado (Parte 2): "+total);