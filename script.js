function show(){
  var a = document.getElementById("linkedIn");
  var x = document.getElementById("insta");
  if ((x.style.display && x.style.display) === "none") {
     x.style.display = "block";
    a.style.display = "block";
  } else {
     x.style.display = "none";
    a.style.display = "none";
  }
  
 

  
}

function back(){
  document.getElementById('contactbtn').style.width= "auto";
}