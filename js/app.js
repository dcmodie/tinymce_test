var App = (function (){
    var privateVar =  "foo";
    var privateFcn = function privateFcn(){
    };
    return {
        initialize: function initialize(){
            tinymce.init({
                selector: '#tinymce-hook',
                menubar: "edit format",
                toolbar: 'mybutton || insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                height: 500,
                width:400,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table contextmenu paste code'
                ],
                setup: function (editor) {
                    editor.addButton('mybutton', {
                        text: 'Preview',
                        icon: false,
                        onclick: function () {

                        // Get the HTML contents of the currently active editor
                        console.debug(tinyMCE.activeEditor.getContent());
                        var output =   tinyMCE.activeEditor.getContent();
                        $("#output").html(output);

                        // Get the raw contents of the currently active editor
                   //     tinyMCE.activeEditor.getContent({format : 'raw'});

                        // Get content of a specific editor:
                        //         tinyMCE.get('content id').getContent()
                        //       var contentElement = document.getElementById("tinymce");
                        //      var contentHTML = contentElement.innerHTML;



                        }
                    });
                }
            });
        }
    }
})();
