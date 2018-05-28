console.log('----NUMERAL.JS----');

//example 1
console.log('-Example 1(Format Number):')
console.log(numeral(1234.56).format('0,0.00'));


//example 2
var number = numeral(1000);
var multiply = number.multiply(100);
console.log('-Example 2(Multiply Number):')
console.log(multiply._value);


