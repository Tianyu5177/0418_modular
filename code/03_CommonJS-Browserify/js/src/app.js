let module1 = require('./module1')
let module2 = require('./module2')
let module3 = require('./module3')
let uniq = require('uniq')
let $  = require('jquery')

console.log(module1.data);
module1.foo1()
module1.foo2()
module2()
module3.bar1()
module3.bar2()
let arr = [1,3,5,4,2,2,2,6,7,9,11,10]
uniq(arr)
$('body').css('background','skyblue')
