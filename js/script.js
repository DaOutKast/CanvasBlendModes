const drawingApp = (function () {

	"use strict";


	function blendMode() {
		const blend = document.querySelector('#blendSelector').value;
		return blend;
		console.log('The current blend mode is ' + blend);
	};

	let canvas;
	let ctx;
	let newLayer;

	//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-//
	//----------------------------------CANVAS----------------------------------//
	//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-//

	function newCanvas() {
		canvas = document.createElement('canvas');
		ctx = canvas.getContext('2d');
		canvas.setAttribute('id', 'canvas');
		canvas.width = window.innerWidth - 20;
		canvas.height = window.innerHeight - 70;
		// ctx.strokeRect(10, 10, window.innerWidth - 30, window.innerHeight - 80);
		canvas.style.cssText = "position:absolute;top:60px;left:5px;";

		newLayer = document.querySelector('#canvasContainer').appendChild(canvas);

	}; newCanvas();

	// addLayer.addEventListener('click', newCanvas);

	//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-//
	//--------------------------------CANVAS END--------------------------------//
	//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-//

	//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-//
	//----------------------------------LAYERS----------------------------------//
	//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-//

	//
	// let selectedLayer;
	// function layerName() {
	// 	const layerDrop = document.querySelector('#layers').innerHTML;
	// 	selectedLayer = document.createElement('option');
	// 	const layerVal = selectedLayer.setAttribute('value', 'layer' + (1 + layers.length));
	// 	const layerInner = selectedLayer.innerHTML = 'Layer ' + (1 + layers.length);
	// 	document.querySelector('#layers').appendChild(selectedLayer);
	// };
	//
	// addLayer.addEventListener('click', layerName);

	//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-//
	//--------------------------------LAYERS END--------------------------------//
	//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-//

	//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-//
	//----------------------------IMAGE MANIPULATION----------------------------//
	//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-//

	let displayArea;
	let displayAreaImg;
	let reader;
	let url;
	// INSERT MAIN IMAGE
	function renderImage(file) {
		reader = new FileReader();

		reader.onload = function(e) {
			url = reader.result;
			displayArea = document.querySelector('#preview1');
			displayArea.innerHTML = '';
			displayAreaImg = document.createElement('img');
			displayArea.appendChild(displayAreaImg);
			displayAreaImg.src = url;
			displayArea.style.cssText = "position:absolute;top:80px;left:20px;";
			displayAreaImg.setAttribute('class', 'main-img');
			// blendImg();
		};
		reader.readAsDataURL(file);

	};

	// INSERT IMAGE TO BLEND WITH
	// function renderBlendImage(file) {
	// 	reader = new FileReader();
	//
	// 	reader.onload = function(e) {
	// 		url = reader.result;
	// 		displayArea = document.querySelector('#preview2');
	// 		displayArea.innerHTML = '';
	// 		displayAreaImg = document.createElement('img');
	// 		displayArea.appendChild(displayAreaImg);
	// 		displayAreaImg.src = url;
	// 		displayArea.style.cssText = "position:absolute;top:80px;left:20px;";
	// 		displayAreaImg.setAttribute('class', 'blend-img');
	//
	// 	};
	// 	reader.readAsDataURL(file);
	// };

	setInterval(function () {

	}, 1000);

	const img1 = document.querySelector('#mainImg').onchange = function() {
		console.log(this.files[0]);
		renderImage(this.files[0]);
	};
	// const img2 = document.querySelector('#blendImg').onchange = function() {
	// 	console.log(this.files[0]);
	// 	renderBlendImage(this.files[0]);
	// };

	// let input;
	// let displayArea;
	// let file;
	// let imageType;
	// let reader;
	// let img;
	// // INSERT MAIN IMAGE
	// function renderImage(file) {
	// 	input = document.querySelector('#mainImg');
	// 	displayArea = document.querySelector('#preview1');
	// 	// input.addEventListener.onchange = function(e) {
	// 	input.addEventListener('click', function(e) {
	// 		file = input.files[0];
	// 		imageType = /image.*/;
	//
	// 		if (file.type.match(imageType)) {
	// 			reader = new FileReader();
	//
	// 			reader.onload = function(e) {
	// 				displayArea.innerHTML = "";
	// 				img = new Image();
	// 				img.src = reader.result;
	// 				imgTag = document.createElement(img);
	// 				displayArea.appendChild(imgTag);
	// 				displayArea.appendChild(img);
	// 			}
	// 			reader.readAsDataURL(file);
	// 		} else {
	// 			displayArea.innerHTML = 'Not Supported';
	// 		}
	// 	});
	// }

	// // INSERT IMAGE TO BLEND WITH
	// function renderBlendImage(file) {
	// 	input = document.querySelector('#blendImg');
	// 	displayArea = document.querySelector('#preview2');
	// 	// input.addEventListener.onchange = function(e) {
	// 	input.addEventListener('click', function(e) {
	// 		file = input.files[0];
	// 		imageType = /image.*/;
	//
	// 		if (file.type.match(imageType)) {
	// 			reader = new FileReader();
	//
	// 			reader.onload = function(e) {
	// 				displayArea.innerHTML = "";
	// 				img = new Image();
	// 				img.src = reader.result;
	// 				displayArea.appendChild(img);
	// 			}
	// 			reader.readAsDataURL(file);
	// 		} else {
	// 			displayArea.innerHTML = 'Not Supported';
	// 		}
	// 	});
	// }

	// // INSERT IMAGE
	// let image;
	// // const mainImg = img1;
	// function insertImg() {
	// 	canvas.style.cssText = "position:absolute;top:60px;left:5px;";
	// 	image = new Image;
	// 	// image.src = img1;
	// 	image.src = "../images/src/Layer-119.png";
	// 	image.onload = function() {
	// 		ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
	// 		blendImg();
	// 	}
	// }; insertImg();

	// IMAGE BLEND MODE
	let blend = document.querySelector('#blendSelector').value;
	function blendImg() {
		canvas.style.cssText = "position:absolute;top:60px;left:5px;";
		blend = blendMode();
		image = new Image;
		// image.src = img2;
		image.src = "../images/src/Layer-129.png";
		ctx.globalCompositeOperation = blend;
		image.onload = function() {
			// ctx.globalCompositeOperation = blendMode();
			ctx.globalCompositeOperation = blend;
			// ctx.globalCompositeOperation = 'overlay';
			ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
			return blend;
		}
	};
	if (blend === 'normal') {
		// return addEventListener('click', insertImg);
		return addEventListener('click', renderImage);
		// return addEventListener('click', blendImg);

	// } else if (blend !== 'normal') {
	// 		return removeEventListener('click', blendImg())
	} else {
			blend.value = 'normal';
	}

	//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-//
	//--------------------------IMAGE MANIPULATION END--------------------------//
	//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-//

	//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-//
	//------------------------------IMAGE DOWNLAOD------------------------------//
	//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-//

	function draw() {
	  // if (!isDrawing) return;

		function downloadImg(link, canvasId, filename) {
			link.href = document.querySelector(canvasId).toDataURL();
			link.download = filename;
		};

		const download = document.querySelector('#download');
		download.addEventListener('click', function() {
			downloadImg(this, 'cavas', 'img-001.png');
		}, false);
	} draw();


	//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-//
	//----------------------------IMAGE DOWNLOAD END----------------------------//
	//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-//

}());
