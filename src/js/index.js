/* Your JS here. */

function RED(){
    document.getElementById("CARD").style.backgroundColor = "red";
    
}
function BLUE(){
    document.getElementById("CARD").style.backgroundColor = "blue";
}
function GREY(){
    document.getElementById("CARD").style.backgroundColor = "grey";
}


function abtme() {
  var x = document.querySelector(".abt-me");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  x.innerHTML = `<br>
  <a onClick="myFunction1()">asozzer2@illinois.edu</a><br><br><a href="https://github.com/Amsozzer1/">Github</a><p>Hi, I'm Ahmed. I'm a senior at the University of Illinois at Urbana-Champaign studying Computer Science. I'm interested in software engineering, web development, and machine learning. I'm currently looking for full-time opportunities in software engineering.</p>
  `;
}
function myFunction1() {
  navigator.clipboard.writeText('asozzer2@illinois.edu');
  alert('Email Copied');
}

