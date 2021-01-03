function test(d) {
  var text = document.querySelector('input').value;
  if (text.includes("@") === true && text.includes(".com") === true || text.includes(".de")) {
    document.getElementById("submit-reaction").innerHTML = "Thank you for your interest!";
    document.querySelector('input').style.border = "1px solid hsl(0, 36%, 70%)";
    document.getElementById("error").classList.add("hide");
  } else {
    document.getElementById("submit-reaction").innerHTML = "Please enter a valid email.";
    document.querySelector('input').style.border = "2px solid hsl(0, 93%, 68%)";
    document.getElementById("error").classList.remove("hide");
  }
}

function enter(e) {
  if (e.key === "Enter") {
    var text = document.querySelector('input').value;
    if (text.includes("@") === true && text.includes(".com") === true || text.includes(".de")) {
      document.getElementById("submit-reaction").innerHTML = "Thank you for your interest!";
      document.querySelector('input').style.border = "1px solid hsl(0, 36%, 70%)";
      document.getElementById("error").classList.add("hide");
    } else {
      document.getElementById("submit-reaction").innerHTML = "Please enter a valid email.";
      document.querySelector('input').style.border = "2px solid hsl(0, 93%, 68%)";
      document.getElementById("error").classList.remove("hide");
    }
  }
}

document.querySelector('button').addEventListener("click", test);
document.querySelector('input').addEventListener("keydown", enter);
