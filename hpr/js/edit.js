function editData(id){
    nume = document.getElementById("name");
    review = document.getElementById("review");
    mark = document.getElementById("mark");
    buton = document.getElementById("sendButton")

    data=$('#myform').serialize();
    $.ajax({
        url: "php/edit.php?id="+id,
        type:'GET',
        dataType:'JSON',
        success: function(data){ 
            nume.value = data['name'];
            review.value = data['review'];
            mark.value = parseInt(data['mark']);
            buton.innerHTML = "Retrimite";
            buton.setAttribute( "onClick", "resendData("+id+")" );
        }
    });
}