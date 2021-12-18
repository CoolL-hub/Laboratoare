function deleteR(btn, id) {
    if(window.confirm("Chiar doriți să efectuați ștergerea?")){
        $.ajax({
            type: "GET",
            url: "php/feedback_php/del.php?id=" + id,
            success: function(){
                btn.style.backgroundColor = "red";
            }
        });
    }
}