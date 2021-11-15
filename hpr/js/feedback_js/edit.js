function editData(id){
    nume = document.getElementById("name");
    review = document.getElementById("review");
    mark = document.getElementById("mark");
    buton = document.getElementById("sendButton")

    data=$('#myform').serialize();
    $.ajax({
        url: "php/feedback_php/edit.php?id="+id,
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

function showFeed(id){
    var modal = document.getElementById('modal');

    $.ajax({
    type: "POST",
    datatype: "html",
    url: "php/feedback_php/showFeed.php?id="+id,
    success: function(data){
        $('#modal-content').html(data);

        $("#modal").show();
        $("#modal-content").slideDown("medium");
    }
});
}

function resendData(id){
    buton = document.getElementById("sendButton");

    if(mark.value >= 0 && mark.value <= 10){
        data=$('#myform').serialize();
        $.ajax({
            url: "php/feedback_php/resendData.php?id="+id,
            type:'POST',
            data: data,
            dataType:'html',
            success:function(){
                document.getElementById("myform").reset();
                buton.innerHTML = "Trimite";
                buton.setAttribute( "onClick", "sendData()" );
            }
        });
    }
    else{
        alert("Nota trebuie să fie înre 0 și 10!");
    }
}

