var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
	fabric.image.fromURL('BirthdayImage.jpg', function(img){
    blockImageObject = Img;

    blockImageObject.scaleToWidth(700);
    blockImageObject.scaleToHeight(500);
    blockImageObject.set({
        top:0,
        left:0
    });
    canvas.add(blockImageObject)
    });

	
}

function playSound(){
	x.play();
}

<body class="bodyBackground" onload="newImage()"></body>
