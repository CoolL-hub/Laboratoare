$(document).ready(function () {
    getData();
});

function getData(){
    $.ajax({
    url: "php/feedback_php/db_data.php",
    type: "POST",
    datatype: "html",
    success: function(data){
        $('#revs').html(data);
    }
});
}