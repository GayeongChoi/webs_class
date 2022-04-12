(function($){ //스크립트 순서가 바뀌어도 실행 
    
    $(".menu > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(500);
    });
    $(".menu > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(500);
    });
   
    //탭메뉴
    var tabMenu = $("#tebmenu");
    
    tabMenu.find("ul > li > ul").hide();
    tabMenu.find("ul > li.active > ul").show();

    function tabList(e){
        e.preventDefault();
        var target = $(this);  //사용자가 클릭한 메뉴
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
    }
    tabMenu.find("ul > li > a").click(tabList);

})(jQuery);