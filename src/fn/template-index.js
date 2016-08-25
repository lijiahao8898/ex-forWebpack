/**
 * Created by lijiahao on 16/8/15.
 */
var _ = require('underscore')

;(function () {
    var template = {
        init: function () {
            this.render()
        },
        render: function () {
            var template = _.template($('#j-template-index').html())
            $('#render').html(template())
        }
    };
    // run
    $(function () {
        template.init();
    })
})();