// Advent of Code 2016
// Día 8: Two-Factor Authentication
// https://adventofcode.com/2016/day/8

const fs = require("fs");
var input = fs.readFileSync("Inputs/2016_dia8.txt","utf-8");

// Input de ejemplo
/*
input = "rect 3x2\n"+
"rotate column x=1 by 1\n"+
"rotate row y=0 by 4\n"+
"rotate column x=1 by 1";
*/

var grid = Array.from({length: 6},() => (
    Array.from({length: 50},() => '.')
));

var inputSplit = input.split("\n");
inputSplit.forEach(s => {
    if (s.includes("rect")) {
        let split = s.substring(s.indexOf(" ")+1).split("x");
        rect(split[0],split[1],grid);
    }
    else if (s.includes("rotate row")) {
        let split = s.substring(s.indexOf("=")+1).replace("by ","").split(" ");
        grid = rotateRow(split[0],split[1],grid);
    }
    else if (s.includes("rotate column")) {
        let split = s.substring(s.indexOf("=")+1).replace("by ","").split(" ");
        grid = rotateColumn(split[0],split[1],grid);
    }
});

function rect(x, y, grid) {
    for(let i=0;i<y;i++) {
        for(let j=0;j<x;j++) {
            grid[i][j] = '#';
        }
    }
}

function rotateRow(rowPos, cantidad, grid) {
    let nuevaGrid = Array.from({length: grid.length},() => (
        Array.from({length: grid[0].length},() => '.')
    ));

    for(let i=0;i<nuevaGrid.length;i++) {
        for(let j=0;j<nuevaGrid[0].length;j++) {
            nuevaGrid[i][j] = grid[i][j];
        }
    }

    for(let i=0;i<grid[0].length;i++) {
        let iShift = Number(i)+Number(cantidad);

        while(iShift >= grid[0].length) {
            iShift -= grid[0].length;
        }

        nuevaGrid[rowPos][iShift] = grid[rowPos][i];
    }

    return nuevaGrid;
}

function rotateColumn(columnPos, cantidad, grid) {
    let nuevaGrid = Array.from({length: grid.length},() => (
        Array.from({length: grid[0].length},() => '.')
    ));

    for(let i=0;i<nuevaGrid.length;i++) {
        for(let j=0;j<nuevaGrid[0].length;j++) {
            nuevaGrid[i][j] = grid[i][j];
        }
    }

    for(let i=0;i<grid.length;i++) {
        let iShift = Number(i)+Number(cantidad);

        while(iShift >= grid.length) {
            iShift -= grid.length;
        }

        nuevaGrid[iShift][columnPos] = grid[i][columnPos];
    }

    return nuevaGrid;
}

function contar(grid) {
    let total = 0;

    for(let i=0;i<grid.length;i++) {
        for(let j=0;j<grid[0].length;j++) {
            if (grid[i][j] == '#') {
                total++;
            }
        }
    }

    return total;
}

console.log("Resultado (Parte 1): "+contar(grid));