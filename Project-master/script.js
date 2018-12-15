var n = 50, m = 50;
var side = 15;
var socket = io();
// var matrix = [];
// for(var y=0; y<m; ++y) {
//   matrix.push([]);
//   for(var x=0; x<n; x += 1) {
//     matrix[y].push(Math.round(Math.random()*4.6))
//   }
// }



// var grassArr = [];
// var xotakerArr = [];
// var gishatichArr = [];
// var drakonArr = [];
// var ararichArr = [];

function setup() {
    frameRate(8);
    // createCanvas(matrix[0].length * side, matrix.length * side);
    createCanvas(m * side, n * side);
    background('#acacac');


}

function drawMatrix(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
            }
            rect(x * side, y * side, side, side);

        }
    }


}

socket.on("matrix",drawMatrix);
