/**
 * Created by lijiahao on 16/8/12.
 */

var $ = require('jquery');
var zeptoAlertCss = require('zeptoAlertCss');
var zeptoAlertJs = require('zeptoAlertJs');

;(function () {
    var zeptoAlert = {
        init: function () {
            this.zeptoAlert()
        },
        zeptoAlert: function () {
            $.dialog({
                content : '窗口将在2秒后自动关闭',
                title: "alert",
                width: 600,
                time : 2000
            });

        }
    };
    // run
    $(function () {
        zeptoAlert.init()
    })
})();