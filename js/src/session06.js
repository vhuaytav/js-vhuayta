/**
 * Created by jalatraining on 10/10/2014.
 */

var guessGame= function (){
    /**
     * Function
     * @returns {Number}
     */
    var getMatrixSize = function(){
        do {
            var n=parseInt(prompt('Introduce the size of the game (even number):'));
        }while((n % 2) != 0);
        return n;
    };
    var size = getMatrixSize();
    var generateMatrix = function(s){
        var i= 0;
        var m = generateTemp(s);
        var o=2;
        for(var i=0;i<s;i++){
            var j=0;
            while(j<o){
                var p = Math.floor((Math.random() * s) + 1);
                var r = Math.floor((Math.random() * s) + 1);
                console.log('Valores de p y r: '+ p+' '+r );
                console.log(m[p-1][r-1]);
                if (m[p-1][r-1] == '*'){
                    m[p-1][r-1] = String.fromCharCode(i+65);
                    j++;
                }
            }
        }
        return m;
    };

    var generateTemp = function (n) {
        var m = [];
        for (var i =0;i<n;i++){
            m[i]=[];
            for (var j = 0; j<n;j++){
                m[i][j]='*';
            }
        }
        return m;
    }
    var matrix = generateMatrix(size);

    var play = function(m,s){
        var matrixTemp= generateTemp(s);
        do{
            console.log('testing matrix: ', m);
            console.log('game matrix: ', matrixTemp);
            var pos1=(parseInt(prompt('(First cell)Introduce a number (1 - '+ s +'):')))-1;
            var pos2=(parseInt(prompt('(First cell)Introduce another number (1 - '+ s +'):')))-1;
            var pos3=(parseInt(prompt('(Second cell)Introduce a number (1 - '+ s +'):')))-1;
            var pos4=(parseInt(prompt('(Second cell)Introduce another number (1 - '+ s +'):')))-1;
            console.log(m[pos1][pos2]);
            console.log(m[pos3][pos4]);
            if ((pos1!= pos3) && (pos2!=pos4)){
                if (m[pos1][pos2]==m[pos3][pos4]){
                    matrixTemp[pos1][pos2]=m[pos1][pos2];
                    matrixTemp[pos3][pos4]=m[pos3][pos4];
                }else{
                    return false;
                }
            }else{
                alert("Don't set the same numbers for First cell and Second cell")
            }

        }while(matrixTemp.indexOf('*')>=0);

    }
    console.log(play(matrix,size));
    console.log(matrix);
}
