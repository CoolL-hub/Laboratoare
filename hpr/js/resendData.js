function resendData(id){
    buton = document.getElementById("sendButton");

    if(mark.value >= 0 && mark.value <= 10){
        data=$('#myform').serialize();
        $.ajax({
            url: "php/resendData.php?id="+id,
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

