/**
 * Created by lijiahao on 16/8/12.
 */
//http://115.29.191.163/auth/get_permission_list?shop_type=1&version_id=0

var $ = require('jquery');

;(function () {
    var ajax = {
        init: function () {
            this.ajaxFunc()
        },
        ajaxFunc: function () {
            $.ajax({
                //url:'http://115.29.191.163/auth/get_permission_list',
                url:'../json/index.json',
                type:'get',
                dataType:'json',
                data:{
                    shop_type:1,
                    version_id:0
                },
                success: function (data) {
                    console.log(data)
                },
                fail: function () {

                }
            });
            $.ajax({
                url:"../json/TXT1.json",
                dataType:"json",
                type:"get",
                async:true,
                success: function(data){
                    console.log(data);
                    for( var i = 0 ; i < data.sky["1"].length ; i ++){
                        if( i == 1 ){
                            console.log(data.sky["1"][i].name)
                        }
                    }
                }
            });
        }
    };
    // run
    $(function(){
        ajax.init()
    })
})();