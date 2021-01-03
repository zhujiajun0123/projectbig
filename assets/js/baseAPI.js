//每次调用ajax会先调用ajaxPrefilter这个函数
$.ajaxPrefilter(function(options){
    options.url = "http://ajax.frontend.itheima.net"+options.url
})