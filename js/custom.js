$(function () {
    //변수 ht에 브라우저의 높이값을 저장
    var ht = $(window).height();
    //브라우저의 높이값을 section에 높이값으로 지정
    $('section').height(ht);
    //리사이즈 될 때 맞춰주기
    $(window).on('resize', function () {
        var ht = $(window).height();
        $('section').height(ht);
    })

    //마우스 무브
    $('section').on('mousemove',function(e){
        //변수 posX에 마우스 커서의 x 축 위치를 저장
        var posX = e.pageX;
        //변수 posY에 마우스 커서의 y 축 위치를 저장
        var posY = e.pageY;

        //반영시키기
        //첫번째 박스의 이미지 위치값을 마우스 커서의 위치 값과 연동
        $('.s1').css({'left':  0-(posX/30), 'bottom': 0-(posY/30),});
        $('.s2').css({'right':  10-(posX/30), 'top': -170-(posY/30),});
        $('.s3').css({'right':  130-(posX/30), 'top': 180-(posY/30)});
        $('.s4').css({'left':  50-(posX/30), 'top': 0-(posY/30)});
        //두번째 박스
        $('.p1').css({'right':-30-(posX/30), 'bottom' : -10-(posY/30) });
        $('.p2').css({'left': -450-(posX/50), 'bottom' : -50-(posY/50) });
        //세번쨰 박스
        $('.c1').css({'left': 0-(posX/30), 'top' : 0-(posY/30)});
        $('.c2').css({'right':10-(posX/30), 'bottom' : 0-(posY/30)});
        //네번째 박스
        $('.m1').css({'right':-100-(posX/30),'bottom': 0-(posY/30)});
        $('.m2').css({'left': -360-(posX/20),'bottom':-460-(posY/20)});
    });

    //클릭시 내려가게
    $('#menu li').on('click',function(e){
        e.preventDefault(); //a 활동 지워주기
        //변수 ht에 브라우저 높이 값저장
        var ht = $(window).height();

        //변수 i에 현재 클릭한 li의 순서 값을 저장
        var i = $(this).index();

        //브라우저의 높이값 * 박스의 순서값은 현재 박스의 스크롤 위치 값과 동일
        var nowTop = i*ht;

        //해당 스크롤의 위치값으로 문서를 이동
        $('html,body').stop().animate({'scrollTop':nowTop},1400);
    });

    $(window).on('scroll',function(){
        //변수 ht에 브라우저의 높이값 저장
        var ht = $(window).height();

        //변수 scroll에 현재 문서가 스크롤된 거리를 저장
        var scroll = $(window).scrollTop();

        //스크롤 탑값 계산
        /* if(scroll>=ht*0 && scroll<ht*1){ //0~1사이에 있을 때
            $('#menu li').removeClass('on');
            $('#menu li').eq(0).addClass('on')
        }
        if(scroll>=ht*1 && scroll<ht*2){
            $('#menu li').removeClass('on');
            $('#menu li').eq(1).addClass('on')
        }
        if(scroll>=ht*2 && scroll<ht*3){
            $('#menu li').removeClass('on');
            $('#menu li').eq(2).addClass('on')
        }
        if(scroll>=ht*3 && scroll<ht*4){
            $('#menu li').removeClass('on');
            $('#menu li').eq(3).addClass('on')
        } */

        for( var i=0; i<4; i++){
            if(scroll>=ht*i && scroll<ht*(i+1)){
                $('#menu li').removeClass('on')
                $('#menu li').eq(i).addClass('on')
            }
        }
    });

     //휠 굴리면 다음장으로 넘어가게
     $('section').bind('wheel',function(e){
        e.preventDefault(); //맥에서 일어나는 이벤트 방지 
        if(e.originalEvent.wheelDelta>0 || e.originalEvent.detail<0){ //스크롤 위로 올렸을 때(전 페이지) // || 는 true를 반환
            var prev = $(this).prev().offset().top;
            //해당 스크롤의 위치값으로 문서를 이동
            $('html,body').stop().animate({'scrollTop':prev},1400,'easeOutBack');
            
        }else{//내렸을때
            var next = $(this).next().offset().top;
            $('html,body').stop().animate({'scrollTop':next},1400,'easeOutBack');
        }
     })   

}) /* ready end */