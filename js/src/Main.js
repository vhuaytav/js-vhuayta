// main.js

/*function sayHello(name) {
	document.write ('Hello '+ name +'!');
	console.log('Hello '+ name +'!');
}
sayHello('Vania');

var age='';
function calculateAge(bornYear){
	var age = 2014 - bornYear;
	return age;
}*/
//var max = 0;
//var min = 999, ave=0, sum=0;

/*var doOperation = function(){
	var numbers=arguments;
    var max=0;
    var min = 999, ave=0, sum=0;
    var getMax = function (numbs, index) {
        var x = numbs[index];
        if (x > max)
            max = x;

        if (index == 0)
            return max;

        return getMax(numbs, index - 1)
    };

var getMin = function (numbs, index){
    var y = numbs[index];
    if (y < min)
        min = y;

    if (index == 0)
        return min;

    return getMin(numbs, index - 1)
};*/

var countParagraph = function (p){

    return p.split(' ').length;
}

var doOperation = function (){
    var sum=0;
    var numbers=arguments;

    var getDoSum = function (numbs, index){
        var w = Number(numbs [index]);
        if (index !== 0)
            sum=sum+w;

        if (index == 0){
            sum=sum+w;
            return sum;
        }

        return getDoSum(numbs,index -1)
    };

    console.log('Sum is: ',getDoSum(numbers,numbers.length -1));
}

var printDate= function (){
    var date = new Date();
    var today = function (day){
        var d=day;
        var dayT='';
        if (d == 1) dayT="Monday";
        if (d == 4) dayT="Thursday";
        if (d == 5) dayT="Friday";

        return dayT;
    };
    var h = date.getHours()
    var med = (h < 12) ? 'AM' : 'PM';
    var time= h + med +' : '+ date.getMinutes() + ': '+ date.getSeconds();
    console.log('Today is: ',today(date.getDay()));
    console.log('Current time is: ',time);
}

var dateValidation = function (stringDate) {
    var regEx1 = new RegExp(/^[0-9]{4}.-[0-9]{2}$/);
    var val = regEx1.test(stringDate);

    return val;
}

/*var getDoSum = function (numbs, index){
	var w = numbs [index];	
	if (index !== 0)
		sum=sum+w;

	if (index == 0){
		sum=sum+w;
		return sum;
	}

	return getDoSum(numbs,index -1)
};

    console.log('Max is: ',getMax(numbers,numbers.length -1));
    console.log('Min is: ',getMin(numbers,numbers.length -1));
    
    console.log('Sum is: ',getDoSum(numbers,numbers.length -1));
    var i = numbers.length;
    ave = sum / i;
    console.log('Average is: ',ave);  

};
*/





