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


function hideIngr(){
  document.getElementById("ingr").style.display="none";
  document.getElementById("butonIngr").innerText = "Afișează";
  document.getElementById("butonIngr").onclick = function() { showIngr(); };
}

function showIngr(){
  document.getElementById("ingr").style.display="block";
  document.getElementById("butonIngr").innerText = "Ascunde";
  document.getElementById("butonIngr").onclick = function() { hideIngr(); };
}