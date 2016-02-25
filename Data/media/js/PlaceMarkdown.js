$(document).ready(function () {
    $('.desc').each(function (index) {

        var file_name = $(this).attr('data')

        console.log(file_name)

        jQuery.get(file_name, function (data) {
            console.log(data)
            var text = data;
            convert(text, file_name);
        })

        function convert(mark, file) {
            console.log(file)
            var converter = new showdown.Converter(),
                mark,
                html = converter.makeHtml(mark);
            document.querySelector('div[data="' + file + '"]').innerHTML = html;
            console.log(html);
        }
    });
});
