$(document).ready(function(){



	$('#nav ul li img').delay(400)

					.animate({left:'0px',top:'0px',width:'160px',height:'60px'},800);

 	$('#content').css('opacity','0');

	$('#content').delay(800).animate({opacity:'1'},600);



	var $moveDiv = $('<div></div>');


	//mouseenter事件特效


	function moveImgIn(divNum,imgNum){

			var	$img = $('#content div:eq('+divNum+') img:eq('+imgNum+')');


			//添加文本
			//var $p =$('<p>'+text+'</p>');

			//$p.appendTo($moveDiv);




$img.mouseenter(function(event){

		$moveDiv.css('opacity','1');

		event.preventDefault();

		event.stopPropagation(); 

		var width = $img.width();

		var height = $img.height();


		var moveDivWidth = width+'px';

		var moveDivHeight = height+'px';

		$moveDiv.appendTo($('#content'));

		var padding = parseInt($img.css('padding'));

		var marginTop = parseInt($img.css('margin-top'));

		var $moveDivPosition = $img.position();
		
		left1 = $moveDivPosition.left+padding+1;

		top1 = $moveDivPosition.top+padding+marginTop+2;

		$moveDiv.addClass('absolute');
		//用于解决firefox像素偏移问题，但不可用
	 	//$moveDiv.style.top = top1+'px';

		//$moveDiv.style.left = left1+'px';

		$moveDiv.css({'left':left1+'px',"top":top1+'px'});


		$moveDiv.css({height:moveDivHeight,width:moveDivWidth});


	//if(!$moveDiv.is(':animated')){



	//	$moveDiv.animate({"width":moveDivWidth,opacity:'0.8'},400)
	//			.delay(500)
	//			.animate({"height":moveDivHeight},100,function(){


			$moveDiv.css('background','rgb(255,255,255)');


	//	});

		//};
		//快照效果
		$moveDiv.animate({opacity:'0.3'},200);

		console.log($img);

		});


	};


for(var i =0;i<3;i++){

	for(var j=0;j<6;j++){

		moveImgIn(i,j);	

	};

};



});


