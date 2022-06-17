(function($){ //스크립트 순서가 바뀌어도 실행
    
    //$(".submenu").css("display","block");

    // //첫번째 유형 : this 자기 자신(각 li태그) 안에 li만 
    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").css("display","block");
    // });
    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").css("display","none");
    // });

    // //두번째 유형 : 선택자 선택자의 li | 서브메뉴 전체 보여주고 싶을 때
    // $(".nav > ul > li").mouseover(function(){
    //     $(".nav > ul > li").find(".submenu").css("display","block");
    // });
    // $(".nav > ul > li").mouseout(function(){
    //     $(".nav > ul > li").find(".submenu").css("display","none");
    // });


    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").stop().slideDown(500);
    // });
    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").stop().slideUp(500);
    // });

    // //서브메뉴 전체를 보일/감출 때
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li").find(".submenu").stop().slideDown(500);
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li").find(".submenu").stop().slideUp(500);
    });

    //탭메뉴
    var tabMenu = $(".notice");
    
    tabMenu.find("ul > li > ul").hide();
    tabMenu.find("ul > li.active > ul").show();

    function tabList(e){
        e.preventDefault();
        var target = $(this);  //사용자가 클릭한 메뉴
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
    }
    tabMenu.find("ul > li > a").click(tabList);

})(jQuery);

//제이쿼리 $ : 선택자?
//this : 1.자기 자신