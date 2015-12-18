$(document).ready(function(){
	
});
function count () {
	var left = document.getElementById("left")
	var right = document.getElementById("right")
	var result = parseInt(left.value) + parseInt(right.value)
	document.getElementById("result").innerHTML = "Сумма: " + result
	}
function but1 () {
	$("#result").show("slow");
}
function count2 () {
	var left = document.getElementById("left2")
	var right = document.getElementById("right2")
	var result2 = parseInt(left.value) * parseInt(right.value)
	document.getElementById("result2").innerHTML = "Произведение: " + result2
	}
function but2 () {
	$("#result2").show("slow");
}	