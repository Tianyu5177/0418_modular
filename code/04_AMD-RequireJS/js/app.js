requirejs.config({
  //baseUrl: 'js/lib',
  //所有用到的模块，都要在此处声明
  paths: {
    dataService: './modules/dataService',
    loger:'./modules/loger',
    jquery:'./libs/jquery-1.10.1'
  }
});

requirejs(['loger','jquery'],function (loger,$) {
    loger.speak()
    $('body').css('background','skyblue')
    console.log($)
});