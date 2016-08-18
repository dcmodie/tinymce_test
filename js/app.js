var App = (function (){
    var privateVar =  "foo";
    var privateFcn = function privateFcn(){
    };
    return {
        initialize: function initialize(){
            tinymce.init({
                selector: '#container'
            });
        }
    }
})();
