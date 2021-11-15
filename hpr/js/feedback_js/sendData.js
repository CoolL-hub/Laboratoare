function sendData(){
    mark = document.getElementById("mark");
    
    if(mark.value >= 0 && mark.value <= 10){
        data=$('#myform').serialize();
        $.ajax({
            url: "php/feedback_php/sendData.php",
            type:'POST',
            data:data,
            dataType:'html'
        });

        document.getElementById("myform").reset();
        nota.style.borderColor = "";
        document.getElementById("markErr").innerHTML = "";
    } 
    else{
        alert("Nota trebuie să fie înre 0 și 10!");
    }
}
