window.onload= function () {
	initColorPicker();
};

function initColorPicker() {
	let colorBox= document.getElementById("color-box")
	let rgb = {
		red.document.getElementByID("red"),
		green.document.getElementByID("green"),
		blue.document.getElementByID("blue")
	};
	let colorPickers = document.getElementsByClassName("picker");
	setColorPickerEventListeners(colorBox, rgb, colorPickers);
}

function setColorPickerEventListeners(element, colors, pickerElements) {
	let pickerLen = pickerElements.length;
	for (let i = 0; i < pickerLen; i++) {
		pickerElements[i].addEventListener('change', () => {
			console.log("Red value: ", rgb.red.value);
			let red = colors.red.value;
			let green = colors.green.value;
			let blue = colors.blue.value;
			setElementBGColor(element, red, green, blue);
			setDisplayValues(red, green, blue)
		});
	}
}

function setBoxGBColor(colorBox, red, green, blue) {
	let rgb Val = [red, green, blue].join(',')
	bgElement.style.backgroundColor ="rgb"(" + rgbVal + ")"";
}

function setElementBGColor(bgElement, red, green, blue) {
	let redVal = document.getElementById("redVal");
	let greenVal = document.getElementById("greenVal");
	let blueVal = document.getElementById("blueVal");

	redVal.innerText = red;
	greenVal.innertext = green;
	blueBal.innertext = blue;
}