var $ = require('jquery');

;(function () {
    var test = {
        init: function () {
            this.addEvent();
            this.renderTimer();
        },
        addEvent: function () {
            this.time = this.getTime();
            var that = this;
            setInterval(function () {
                that.renderTimer();
                $('#timer').attr('data-color',that.random());
                that.changeColor('body');
            },1000)
        },
        renderTimer: function () {
            var that = this;
            that.time = that.getTime();
            $('#timer').html('<div class="time">'+that.time+'</div>');
        },
        changeColor: function (dom) {
            var colorNum = $('#timer').attr('data-color');
            var color = {
                1: 'blue',
                2: 'green',
                3: 'red',
                4: 'yellow',
                5: 'white',
                6: 'black'
            };
            $(dom).css({'background':color[colorNum]})
        },
        random: function () {
            return Math.round(Math.random()*6);
        },
        getTime: function () {
            var date = new Date();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();

            if( minutes < 10 ){
                minutes = '0' + minutes
            }
            if( seconds < 10 ){
                seconds = '0' + seconds
            }

            return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + minutes + ':' + seconds;
        }
    };
    $(function () {
        test.init()
    });
})();