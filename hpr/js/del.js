function deleteR(btn, id) {
    if(window.confirm("Chiar doriți să efectuați ștergerea?")){
        $.ajax({
            type: "DELETE",
            url: "php/del.php?id=" + id,
            success: function(){
                btn.style.backgroundColor = "red";
            }
        });
    }
}