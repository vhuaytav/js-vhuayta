/**
 * Created by jalatraining on 10/4/2014.
 * definicion de funciones anonimas
 */

/*var doOperation = function (a,b,sum, substract){
    // ...
    console.log('starting operation...');

    console.log('sum: ',sum(a,b));
    console.log('substract: ',substract(a,b));
};

doOperation(3,
            2,
            function(a,b){
                return a+b;
            },
            function(a,b){
                return a-b;
            }
);*/

/*
*
* ejemplo de asincronia // arreglar
 */

/*var myFunction = function(){
    setTimeout(function(cb){
        console.log('I am myFunction');
        cb();
    },5000);

};

myFunction( function(){
console.log('Execution is complete');});*/
/*
*funcion autoejecutable
* no se puede hacer referencia a la funcion en otras lineas
 */
(function(){
    console.log('Hello World');
})();
