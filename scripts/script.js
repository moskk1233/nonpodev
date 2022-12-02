let height = document.getElementById("height"),
	weight = document.getElementById("weight");
	bmi_result = document.getElementById("bmi-result-text");
function BMICal() {
	let e = weight.value / (height.value / 100) ** 2;
	if (height.value && height.value > 0) {
		if (e < 18.5) {
			document.getElementsByClassName("result-box")[0].style.display = "flex";
			bmi_result.innerHTML = "ค่า BMI ของคุณคือ " + e.toFixed(2) + " มีค่าเป็นผอม";
		}
		else if (e > 18.5, e < 22.9) {
			document.getElementsByClassName("result-box")[0].style.display = "flex";
			bmi_result.innerHTML = "ค่า BMI ของคุณคือ " + e.toFixed(2) + " มีค่าเป็นปกติ";
		}
		else if (e > 23, e < 24.9) {
			document.getElementsByClassName("result-box")[0].style.display = "flex";
			bmi_result.innerHTML = "ค่า BMI ของคุณคือ " + e.toFixed(2) + " มีค่าเป็นท้วม";
		}
		else if (e > 25, e < 29.9) {
			document.getElementsByClassName("result-box")[0].style.display = "flex";
			bmi_result.innerHTML = "ค่า BMI ของคุณคือ " + e.toFixed(2) + " มีค่าเป็นอ้วน";
		}
		else if (e > 30) {
			document.getElementsByClassName("result-box")[0].style.display = "flex";
			bmi_result.innerHTML = "ค่า BMI ของคุณคือ " + e.toFixed(2) + " มีค่าเป็นอ้วนมาก";
		}
	}
}
let bmr_height = document.getElementById("bmr-height"),
	bmr_weight = document.getElementById("bmr-weight"),
	bmr_age = document.getElementById("bmr-age"),
	exercise = document.getElementById("bmr-exercise"),
	bmr_result = document.getElementById("bmr-result-text");

function BMRCalmen() {
	let e = 88.362 + 13.397 * bmr_weight.value + 4.799 * bmr_height.value - 5.677 * bmr_age.value;
	if (exercise.value == 1) {
		document.getElementsByClassName("result-box")[1].style.display = "flex";
		bmr_result.innerHTML = "ค่า BMR ของคุณคือ " + Math.floor(1.2 * e) + " กิโลแคลอรี่";
	}
	else if (exercise.value == 2) {
		document.getElementsByClassName("result-box")[1].style.display = "flex";
		bmr_result.innerHTML = "ค่า BMR ของคุณคือ " + Math.floor(1.375 * e) + " กิโลแคลอรี่";
	}
	else if (exercise.value == 3) {
		document.getElementsByClassName("result-box")[1].style.display = "flex";
		bmr_result.innerHTML = "ค่า BMR ของคุณคือ " + Math.floor(1.55 * e) + " กิโลแคลอรี่";
	}
	else if (exercise.value == 4) {
		document.getElementsByClassName("result-box")[1].style.display = "flex";
		bmr_result.innerHTML = "ค่า BMR ของคุณคือ " + Math.floor(1.725 * e) + " กิโลแคลอรี่";
	}
	else if (exercise.value == 5) {
		document.getElementsByClassName("result-box")[1].style.display = "flex";
		bmr_result.innerHTML = "ค่า BMR ของคุณคือ " + Math.floor(1.9 * e) + " กิโลแคลอรี่";
	}
}
function BMRCalWomen() {
	let e = 447.593 + 9.247 * bmr_weight.value + 3.098 * bmr_height.value - 4.33 * bmr_age.value;
	if (exercise.value == 1) {
		document.getElementsByClassName("result-box")[1].style.display = "flex";
		bmr_result.innerHTML = "ค่า BMR ของคุณคือ " + Math.floor(1.2 * e) + " กิโลแคลอรี่";
	}
	else if (exercise.value == 2) {
		document.getElementsByClassName("result-box")[1].style.display = "flex";
		bmr_result.innerHTML = "ค่า BMR ของคุณคือ " + Math.floor(1.375 * e) + " กิโลแคลอรี่";
	}
	else if (exercise.value == 3) {
		document.getElementsByClassName("result-box")[1].style.display = "flex";
		bmr_result.innerHTML = "ค่า BMR ของคุณคือ " + Math.floor(1.55 * e) + " กิโลแคลอรี่";
	}
	else if (exercise.value == 4) {
		document.getElementsByClassName("result-box")[1].style.display = "flex";
		bmr_result.innerHTML = "ค่า BMR ของคุณคือ " + Math.floor(1.725 * e) + " กิโลแคลอรี่";
	}
	else if (exercise.value == 5) {
		document.getElementsByClassName("result-box")[1].style.display = "flex";
		bmr_result.innerHTML = "ค่า BMR ของคุณคือ " + Math.floor(1.9 * e) + " กิโลแคลอรี่";
	}
}
function BMRProgram() {
	let e = document.getElementById("female"),
		t = document.getElementById("male");
	bmr_age.value > 0 && bmr_height.value > 0 && bmr_weight.value > 0 && (1 == t.checked ? BMRCalmen() : 1 == e.checked ? BMRCalWomen() : alert("คุณยังไม่ได้เลือกเพศ"))
}

$(document).ready(function(){
	$('.disdrag').on('dragstart', function() {
		return false;
	});
	$('.disselect').on('selectstart', function() {
		return false;
	});
});