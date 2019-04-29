$(document).ready(function() {
    let textArea = $("#textArea");
    let ul = $("ul");
    ul.on('click', 'li', function () {
        $(this).toggleClass("strike");
    });
    $("button").click(function () {
        let item = "<li>"+textArea.val()+"</li>";
        ul.append(item);
        textArea.val('');
    });

});
