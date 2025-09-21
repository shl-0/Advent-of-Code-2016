// Advent of Code 2016
// Día 2: Bathroom Security
// https://adventofcode.com/2016/day/2

const fs = require("fs");
var input = fs.readFileSync("Inputs/2016_dia2.txt","ascii");

// Input de ejemplo
/*
input = "ULL\n"
+"RRDDD\n"
+"LURDL\n"
+"UUUUD";
*/

var inputSplit = input.split("\n");

var keypad = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

var keypadDir = [
    ["U",[-1,0]],
    ["R",[0,1]],
    ["D",[1,0]],
    ["L",[0,-1]]
]

var coord = [1,1];
var codigo = "";


inputSplit.forEach(s => {
    for(let i=0;i<s.length;i++) {
        let c = s.charAt(i);

        try {
            keypadDir.forEach(cod => {
                if (c == cod[0]) {
                    coord[0] += cod[1][0];
                    coord[1] += cod[1][1];

                    coord[0] = Math.max(0,Math.min(2,coord[0]));
                    coord[1] = Math.max(0,Math.min(2,coord[1]));

                    throw br;
                }
            })
        }
        catch(br) {}    
    }

    codigo += keypad[coord[0]][coord[1]];
});

console.log("Resultado (Parte 1): "+codigo);