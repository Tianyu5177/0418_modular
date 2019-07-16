module.exports = {
  name:'kobe',
    age:18,
    setName(name){
    this.name = name
  }
}

/*
* 在CommonJs模块化的规范中，存在这样一个默认关系：module.exports = exports = {}
* 当一个模块中同时使用了module.exports和exports两种暴露方式的时候，最生效的是module.exports暴露的内容
* */


