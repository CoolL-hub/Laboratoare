function sendData() {
    nume = document.getElementById("name");
    review = document.getElementById("review");
    mark = document.getElementById("mark");

    if (mark.value != "" && review.value != "" && nume.value != "") {
        if (mark.value >= 0 && mark.value <= 10) {
            data = $("#myform").serialize();
            $.ajax({
                type: "POST",
                url: "php/feedback_php/sendData.php",
                data:data,
                success: function (data) {
                    console.log(data);
                },
            });

            document.getElementById("myform").reset();
        } else {
            alert("Nota trebuie să fie între 0 și 10!");
        }
    } else {
        alert("Campurile nu trebuie sa fie goale!"); 
    }
}
