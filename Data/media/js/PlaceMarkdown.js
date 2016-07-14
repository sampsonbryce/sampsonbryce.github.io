$(document).ready(function () {
    $('.desc').each(function (index) {

        var file_name = $(this).attr('data')


        jQuery.get(file_name, function (data) {
            var text = data;
            convert(text, file_name);
        })

        function convert(mark, file) {
            var converter = new showdown.Converter(),
                mark,
                html = converter.makeHtml(mark);
            document.querySelector('div[data="' + file + '"]').innerHTML = html;
        }
    });
});
