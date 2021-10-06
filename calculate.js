// function calculate(x, y, operator) {
//   operator = ['+', '-', '*', '/', '%'];

//   for (var i = 0; i < operator.length; i++) {
//     console.log(parseInt(operator[i]))
//   }
//   switch (operator) {
//     case '+':
//       x + y;
//       break;
//     case '-':
//       x - y;
//       break;
//     case '*':
//       x * y;
//       break;
//     case '/':
//       x / y;
//       break;
//     case '%':
//       x % y;
//       break;
//     default:
//       console.error('error syntax!');
//   }
// }

var add = '+';
var sub = '-';
var mul = '*';
var div = '/';
var mod = '%';
parseInt(sub);
parseInt(mul);
parseInt(mod);
parseInt(add);



function calc(a, b, op) {

  switch (operator) {
        case add === true:
          return x + y;
          break;
        case sub === true:
          return x - y;
          break;
        case mul === '-':
          return x * y;
          break;
        case div === '/':
          return x / y;
          break;
        case mod === '%':
          return x % y;
          break;
        default:
          console.error('error');
}

console.log(calc(900, 100, '*'));
