import { makeTemplate } from './@functions/makeTemplate';
import { helloVariable } from './@functions/start';
import { addTwoNumbers, multiplyTwoNumbers } from './@helpers/math';
import { toBoolean } from './@helpers/toBoolean';
const main = document.querySelector('main')

let arr = [1,2,3,4,5,6,7,8,9]

arr = arr.map(a => multiplyTwoNumbers(a,2))

const result = addTwoNumbers(10,98)
console.log(helloVariable('thomas'), result, arr);

main.innerHTML += `<h1>${helloVariable('thomas')}</h1>`
main.innerHTML += `10 + 98 = ${result}`
main.innerHTML += `<br/>array values doubled<br/><ul></ul>`
arr.map(a => {
  main.querySelector('ul').innerHTML += `<li>${a}</li>`
})
main.innerHTML += toBoolean("true") ? "<p>to boolean works</p>" : "<p>blah</p>"

const posts = [
  {title: 'this is title one'},
  {title: 'this is title two'},
  {title: 'this is title three'},
]

posts.map(post => main.innerHTML += makeTemplate(post))