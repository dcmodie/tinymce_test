var App = (function (){
    var privateVar =  "foo";
    var privateFcn = function privateFcn(){
    };
    return {
        initialize: function initialize(){
            tinymce.init({
                selector: '#container',
                menubar: "edit format",
                toolbar: 'mybutton || insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                height: 500,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table contextmenu paste code'
                ],
                setup: function (editor) {
                    editor.addButton('mybutton', {
                        text: 'My Custom Button',
                        icon: false,
                        onclick: function () {
                            editor.insertContent('&nbsp;<b>It\'s my custom button!</b>&nbsp;');
                        }
                    });
                }
            });
        }
    }
})();
