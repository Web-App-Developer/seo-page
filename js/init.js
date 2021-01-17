function myFunction() {
	var x = document.getElementById("myLinks");
	var y = document.getElementById("m-drop");
	// if (x.style.display === "block") {
	//   x.style.display = "none";
	// } else {
	//   x.style.display = "block";
	// }
	if (y.style.display==="block"){
		y.style.display = "none";
	}else{
		y.style.display = "block";
	}
}
var parent = document.querySelector('.m-nav');
var children = parent.children;
for (var i = 0; i < children.length; i++) {
	children[i].addEventListener("click", function() {
	var current = document.getElementsByClassName(" active");
	current[0].className = current[0].className.replace(" active", "");
	this.className += " active";
	});
}