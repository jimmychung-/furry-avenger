$(document).ready(function(){
//nav


		//下拉时nav消失
		$('#nav').animate({opacity:'1'},1000);

		function scrollShadow(){

				var shadowHeight = $(document).scrollTop();

				if(shadowHeight>8){

					$('#nav').slideUp(200);

				}else{

					$('#nav').slideDown(200);

				}

			}

		$(document).scroll(scrollShadow); 

		//搜索框内容
		var text="请输入搜索内容";

		$('#search').focus(function(){

			$(this).stop(true,false).animate({width:"300px"},200);

			if($(this).val(text)){ 

				$(this).val('');
			}

		}).blur(function(){

			$(this).stop(true,false).animate({width:"200px"},400);

			if($(this).val('') ){ 

				$(this).val(text);

			}

		});

//轮播图


		//生成小圆点
		var $ulRotate = $('<ul class="bannerRotate"></ul>');

		$ulRotate.appendTo($('#main'));

		var $liRotate = $('<li><span  class="rotate" ><img src="./images/rotate.png"></span></li>');

		for(var i=0;i<3;i++){

				$('<li><span  class="rotate" ><img src="./images/rotate.png"></span></li>').appendTo($ulRotate);

		};



		//点击小圆点移动噶函数
		function RotateMove(i){

			$('.bannerRotate li:eq('+i+')').bind('click',function(){

				$('#banner ul.bannerPic').animate({left:'-'+i+'000px'},400);

				$('.bannerRotate li:eq('+i+')').addClass('rotateh');

				$('.bannerRotate li:eq('+i+')').siblings().removeClass('rotateh');

				});
		}

		//点击轮播图按键  小点随之变动
		function selectRotate(i){


				$('.bannerRotate li:eq('+(i)+')').addClass('rotateh');


				$('.bannerRotate li:eq('+(i)+')').siblings().removeClass('rotateh');
		}


		//戳左右按键，轮播图移动
		function clickAll(){
			var $parent = $(this).parents('#banner');

			var $pic = $parent.find('ul');

			var btnName = null;

			var count =	parseInt($pic.css('left'))/1000;

			var absCount = Math.abs(count);


			if($(this).hasClass('right')){

				btnName = 1;

			}else if($(this).hasClass('left')){

				btnName = -1;

			}

			//console.log('btnName is :'+btnName);

			if(!$pic.is(":animated")){

			
				$pic.animate({left:"-="+btnName+"000px"},250);


					if (btnName ==1) {

						if(absCount == 0){

							selectRotate(1);

						}else if(absCount == 1){

							selectRotate(2);

						}else{

							selectRotate(0);

						}

					
						if($pic.css("left")=="-2000px") {		
	
							$pic.stop(true,false).animate({left:"0px"},600);
	
						}

					}


					if (btnName == -1) {

						if(absCount == 0 ){

							selectRotate(2);

						}else if(absCount == 2){

							selectRotate(1);

						}else{

							selectRotate(0);

						}

						if($pic.css("left")=="0px") {

							$pic.stop(true,false).animate({left:"-2000px"},600);
			
						}						
					}

			}

		}
	


	$('span.right').bind('click',clickAll);
	$('span.left').bind('click',clickAll);
	selectRotate(0);
	RotateMove(0);
	RotateMove(1);
	RotateMove(2);

		




//相册部分

		//专辑封面图移出移入噶效果
		$('#content ul li img').mouseenter(function(){

			if(!$(this).is(':animated')){

				$(this).animate({height:"105%",width:"105%"},90);

			};
			
		}).mouseout(function(){

			if(!$(this).is(':animated')){

				$(this).animate({height:"100%",width:"100%"},90);

			};

		});


		//点击果阵时跳出新增div
		var $disapearDiv = $('<div class="disapear none"></div>');

		var $dispearDivUl = $('<ul id="disapearUl"></ul>');

		//var $disapearDivUlLi = $("<li><a href=''><img src='./images/79.jpg'></a></li>");

		$disapearDiv.insertAfter($('#content ul:eq(0)'));

		$dispearDivUl.appendTo($disapearDiv);


		//新增div的内容及动态效果

		function clickDetail(Num,picNum){

			$('#content ul.contentUl li img:eq('+Num+')').click(function(event){

							event.preventDefault();

							if($('.disapear').css('display')== "none" && !$('.disapear').is(':animated')){

								$('.disapear').removeClass('none').addClass('block');

								$('.disapear').animate({height:'270px','opacity':'1'},400);

								$('#main #content').animate({height:'750px'},200);	



								for(var i=0;i<3;i++){

									$("<li><img src='./images/"+(i+1)+picNum+".jpg'></li>").appendTo($dispearDivUl);
								}

								$('.disapear ul li:eq(0)').css('margin-left','40px');

								$('.disapear ul li').addClass('dispearUlLi');

								$('.disapear ul').css({'margin-top':'30px',});


							}else {

								$('.disapear ul li').remove();

								$('#main #content').animate({height:'480px'},200);	


								$('.disapear').animate({opacity:"0",height:'0px'},200,function(){

									$('.disapear').removeClass('block').addClass('none');

								});

							};

						});

		};

clickDetail(0,"a");
clickDetail(1,"b");
clickDetail(2,"c");
clickDetail(3,"d");










		
		//点击缩略图出现大图(未完成)

		$('#content div.disapear ul').click(function(event){



		console.log($('ul img'));


		event.preventDefault();

		event.stopPropagation(); 

		console.log($('.disapear ul li:eq(0)'));

		var $detialPicDiv = $('<div></div>');

		var $detialPicImg = $('<img class="detialPicDivImg" src="./images/1detail.jpg">')

		 $detialPicImg.appendTo($('body'));




		$detialPicImg.addClass('detialPicDivImg');


		$detialPicImg
		//.animate({'padding':'10px'},10)

						.animate({padding:'15px'},300)

						.animate({width:'600px'},150)

						.animate({height:'400px'},150,function(){

			$('body:not(.detialPicDivImg)').click(function(){

				$detialPicImg.stop(true,false).animate({height:'0px',width:'100px'},200,function(){

					$detialPicImg.css({'border':'none',"padding":"0px"});

				});

			});
		});





	//	alert('sss');



})




$('#footer p').animate({opacity:'1.0','background':'black'},2000);

		



});

		