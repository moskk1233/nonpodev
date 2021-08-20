let height = document.getElementById("height"),
	weight = document.getElementById("weight");
function BMICal() {
	let e = weight.value / (height.value / 100) ** 2;
	weight.value && height.value > 0 && (e < 18.5 ? alert("ค่า BMI ของคุณคือ " + e.toFixed(2) + " คุณอยู่ในระดับผอม") : e >= 18.5 && e <= 22.9 ? alert("ค่า BMI ของคุณคือ " + e.toFixed(2) + " คุณอยู่ในระดับปกติ") : e >= 23 && e <= 24.9 ? alert("ค่า BMI ของคุณคือ " + e.toFixed(2) + " คุณอยู่ในระดับท้วม") : e >= 25 && e <= 29.9 ? alert("ค่า BMI ของคุณคือ " + e.toFixed(2) + " คุณอยู่ในระดับอ้วน") : e >= 30 && alert("ค่า BMI ของคุณคือ " + e.toFixed(2) + " คุณอยู่ในระดับอ้วนมาก"))
}
let bmr_height = document.getElementById("bmr-height"),
	bmr_weight = document.getElementById("bmr-weight"),
	bmr_age = document.getElementById("bmr-age"),
	exercise = document.getElementById("bmr-exercise");
function BMRCalmen() {
	let e = 88.362 + 13.397 * bmr_weight.value + 4.799 * bmr_height.value - 5.677 * bmr_age.value;
	1 == exercise.value ? alert("ค่า BMR ของคุณคือ " + Math.floor(1.2 * e) + " กิโลแคลอรี่") : 2 == exercise.value ? alert("ค่า BMR ของคุณคือ " + Math.floor(1.375 * e) + " กิโลแคลอรี่") : 3 == exercise.value ? alert("ค่า BMR ของคุณคือ " + Math.floor(1.55 * e) + " กิโลแคลอรี่") : 4 == exercise.value ? alert("ค่า BMR ของคุณคือ " + Math.floor(1.725 * e) + " กิโลแคลอรี่") : 5 == exercise.value && alert("ค่า BMR ของคุณคือ " + Math.floor(1.9 * e) + " กิโลแคลอรี่")
}
function BMRCalWomen() {
	let e = 447.593 + 9.247 * bmr_weight.value + 3.098 * bmr_height.value - 4.33 * bmr_age.value;
	1 == exercise.value ? alert("ค่า BMR ของคุณคือ " + Math.floor(1.2 * e) + " กิโลแคลอรี่") : 2 == exercise.value ? alert("ค่า BMR ของคุณคือ " + Math.floor(1.375 * e) + " กิโลแคลอรี่") : 3 == exercise.value ? alert("ค่า BMR ของคุณคือ " + Math.floor(1.55 * e) + " กิโลแคลอรี่") : 4 == exercise.value ? alert("ค่า BMR ของคุณคือ " + Math.floor(1.725 * e) + " กิโลแคลอรี่") : 5 == exercise.value && alert("ค่า BMR ของคุณคือ " + Math.floor(1.9 * e) + " กิโลแคลอรี่")
}
function BMRProgram() {
	let e = document.getElementById("female"),
		t = document.getElementById("male");
	bmr_age.value > 0 && bmr_height.value > 0 && bmr_weight.value > 0 && (1 == t.checked ? BMRCalmen() : 1 == e.checked ? BMRCalWomen() : alert("คุณยังไม่ได้เลือกเพศ"))
}

$(document).ready(function(){
	$('.discontextmenu').on('contextmenu', function() {
		Alert();
		return false;
	});
	$('.disdrag').on('dragstart', function() {
		return false;
	});
	$('.disselect').on('selectstart', function() {
		return false;
	});
});