/**
 * Created by jalatraining on 10/4/2014.
 */
var getFirstCap = function (a,b){
    var initRange = parseInt(a);
    var endRange = parseInt(b);

    if (a> b) return null;

    var num;
    for (var i=a; i <= b; i++){
        num=i;
        var reversedNum = parseInt(num.toString().split('').reverse().join(''));

        if (num == reversedNum){
            break;
        }
    }
    return num;
}

var getFirstOddEvenNumbers = function (a){
    var odd = [];
    var even = [];

    for (var x=1; x<= a*2; x++){
        if ((x%2) == 0) {
            even.push(x);
        }
        else{
            odd.push(x);
        }
    }
    console.log('Odd numbers: ',odd);
    console.log('Even numbers: ',even);
}