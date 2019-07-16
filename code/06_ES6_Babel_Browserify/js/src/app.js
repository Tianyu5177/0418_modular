//引入【分别暴露】的模块
import {demo,test} from './module1'

//引入【统一暴露】的模块
import {foo1,foo2} from "./module2";


import module3 from './module3'
import $ from 'jquery'

$('body').css('background','skyblue')
demo()
test()
foo1()
foo2()
let p1 = new module3('kobe',19)
p1.speak()