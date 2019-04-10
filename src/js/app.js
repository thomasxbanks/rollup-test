import { helloVariable } from './@functions';
import { addTwoNumbers, multiplyTwoNumbers } from './@helpers';

let arr = [1,2,3,4,5,6,7,8,9]

arr = arr.map(a => multiplyTwoNumbers(a,2))

const result = addTwoNumbers(10,98)
console.log(helloVariable('thomas'), result, arr);