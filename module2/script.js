$(document).ready(function(){
    $(".move_up,.move_down").click(function(){
        var row = $(this).parents("tr:first");
        if ($(this).is(".move_up")) {
            row.insertBefore(row.prev());
        }else if ($(this).is(".move_down")) {
            row.insertAfter(row.next());
        }
    });
});