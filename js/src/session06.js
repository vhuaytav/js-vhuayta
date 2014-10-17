/**
 * Created by jalatraining on 10/10/2014.
 */



    var generateMatrix = function(s){
        var i= 0;
        var m = [];
        var o=2;
        var limit=(s*(s/2));
        console.log(limit);
        for(var i=0;i<limit;i++){
            var j=0;
            console.log('entro al for');
            while(j<o){
                var p = Math.floor((Math.random() * (limit*2)));
                if (m[p] == undefined){
                    m[p] = String.fromCharCode(i+65);
                    j++;
                }
            }
        }
        return m;
    };
    var size=0;
    var matrix=[];
    var matrixTemp = [];
    var matrixCellIDs = [];
    var cellBack = 0;

    function newBoard(){
        var getMatrixSize = function(){
            do {
                var n=parseInt(prompt('Introduce the size of the game (even number from 2 to 8):'));
            }while(((n % 2) != 0)||(n>=10));
            return n;
        };
        size = getMatrixSize();
        matrix = generateMatrix(size);
        var image=parseInt((270/size));
        var fontSize=parseInt((280/size));
        var padd=parseInt(13-size);
        cellBack = 0;
        var output = '';
        for(var i = 0; i < matrix.length; i++){
            output += '<div style="width:'+image+'px;	height:'+image+'px; font-size:'+fontSize+'px; padding:'+padd+'px;" id="tile_'+i+'" onclick="memoryCellFront(this,\''+matrix[i]+'\')"></div>';
        }
        document.getElementById('memory_board').innerHTML = output;
    }
    function memoryCellFront(cell,val){
        if(cell.innerHTML == "" && matrixTemp.length < 2){
            cell.style.background = '#FFF';
            cell.innerHTML = val;
            if(matrixTemp.length == 0){
                matrixTemp.push(val);
                matrixCellIDs.push(cell.id);
            } else if(matrixTemp.length == 1){
                matrixTemp.push(val);
                matrixCellIDs.push(cell.id);
                if(matrixTemp[0] == matrixTemp[1]){
                    cellBack += 2;
                    matrixTemp = [];
                    matrixCellIDs = [];
                    if(cellBack == matrix.length){
                        var r = confirm('You Win!!! Do you want to play again?');
                        if (r == true) {
                            document.getElementById('memory_board').innerHTML = "";
                            newBoard();
                        } else {
                            alert('Thanks for Playing :)');
                        }
                    }
                } else {
                    function cell2Back(){
                        var cell1 = document.getElementById(matrixCellIDs[0]);
                        var cell2 = document.getElementById(matrixCellIDs[1]);
                        cell1.style.background = '#000066';
                        cell1.innerHTML = "";
                        cell2.style.background = '#000066';
                        cell2.innerHTML = "";
                        matrixTemp = [];
                        matrixCellIDs = [];
                    }
                    setTimeout(cell2Back, 500);
                }
            }
        }
    }
