var $images = document.querySelectorAll("div img");
var $zoom = document.querySelector("div#zoom");

/*function printImages(){
	console.log($images);
	console.log("smile");
	console.log(((15987 + 4879)*2)/4);
}
printImages();
function printImage(index){
	console.log($images[index]);
}

function hello(){
	console.log("hello");
}

var names = ["dom", "morze", "okno"]

console.log(names);*/

//-----------------------------------------------------//

$images.forEach (function printImages(image){
	console.log(image);
	image.addEventListener("click", function clickHandler(e){
		var $image=document.createElement("img");
		$image.src=image.parentNode.href;
		//console.log("klikniete", $image);
		e.preventDefault();
		$zoom.innerHTML="";
		$zoom.appendChild($image);
		console.log($zoom.innerHTML);
	});
});

