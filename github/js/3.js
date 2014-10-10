$(document).ready(function(){


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


	//点击显示社交信息
	function moveOverBtn(i,text){

		$('#socialContact li:eq('+i+')').click(function(event){

		event.preventDefault();

		event.stopPropagation(); 

		if(!$('#socialContact li:eq('+i+')').is(':animated')){

		$('#socialContact li:eq('+i+')').animate({width:'400px'},600,function(){

			var $p=$('<p class="socialInfo">'+text+'</p>');

			$p.appendTo($('#socialContact li:eq('+i+')'));

			$p.animate({opacity:'1'},200);
		
			});	

		}

		$('#socialContact li:eq('+i+')').siblings('li').css('width',"150px");

			$('p.socialInfo').remove();

			return false;

		});

	};	


		//点击其他地方回退到原来的状态
		function clickOther(){

			$('#socialContact li').animate({width:'220px'},300);

			$('.socialInfo').remove();

		};


			moveOverBtn(0,'jimmy-钟华洋');
			moveOverBtn(1,'jimmyc');
			moveOverBtn(2,'474533527@163.com');
			moveOverBtn(3,'faezhong');
			$('body:not(p)').click(clickOther);

		













});