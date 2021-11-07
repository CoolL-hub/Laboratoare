window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function showIngr(){
  $("#modal").show();
  $("#modal-content").slideDown("medium");
}

window.onclick = function(event) {
  if (event.target == modal) {
      $("#modal-content").slideUp("medium", function(){
          $("#modal").hide();
      });
  }
}