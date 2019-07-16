/*
* 统一暴露
* */

function foo1() {
  console.log('module2-----foo1')
}

function foo2() {
  console.log('module2-----foo1')
}

let arr = [1,3,5,7,9]

let person = {name:'kobe',age:18}

export {foo1,foo2,arr,person}

