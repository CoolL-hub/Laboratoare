var modal = document.getElementById('modal');

function showFeed(id){
    $.ajax({
    type: "POST",
    datatype: "html",
    url: "php/showFeed.php?id="+id,
    success: function(data){
        $('#modal-content').html(data);

        $("#modal").show();
        $("#modal-content").slideDown("medium");
    }
});
}