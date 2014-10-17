/**
 * Created by jalatraining on 10/4/2014.
 * @type {string[]}
 */

var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard(){
    var getMatrixSize = function(){
        do {
            var n=parseInt(prompt('Introduce the size of the game (even number):'));
        }while((n % 2) != 0);
        return n;
    };
    var size = getMatrixSize();
    var generateMatrix = function(s){
        var i= 0;
        var m = [];
        var o=2;
        while(i < s){
            var j=0;
            while(j<o){
                var p = Math.floor((Math.random() * s) + 1);
                if (m[p] == undefined){
                    m[p]=String.fromCharCode(i+65);
                    j++;
                }
            }
            i++;
        }
        return m;
    };

    var generateTemp = function (n) {
        var m= [];
        for (var i =0;i<n;i++){
            m[i]='*';
        }
        return m;
    }
    var matrix = generateMatrix(size);


	tiles_flipped = 0;
	var output = '';
    //memory_array.memory_tile_shuffle();
	for(var i = 1; i < matrix.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+matrix[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}
function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array.length){
					alert("Board cleared... generating new board");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = '#08088A';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = '#08088A';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}