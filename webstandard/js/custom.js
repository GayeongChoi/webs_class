//type: HTML5부터 생략 가능
//라이트 박스
$(".lightgallery").lightGallery({
    thembnail: true, //썸네일 설정
    autoplay: true, //
    pause: 3000,
    progressBar: true
}); 

//윈도우 팝업
$(".window").click(function(e){ //윈도우를 클릭했을 때 
    e.preventDefault(); // #링크 방지
    //window.open("파일명", "팝업이름", "옵션설정");
    //옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen 를 설정할 수 있다
    window.open("sample_popup.html","popup01","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
                         //파일명,                      ,팝업이름   ,위드 값        ,하이트값   ,마진값                ,스크롤바X   ,툴바X        ,메뉴바X    
});

//레이어 팝업
$(".layer").click(function(e){ //레이어를 클릭했을 떄 ~가 작동되라
    e.preventDefault(); // #링크 방지
    //$("#layer").css("display","block"); //방법1
    //$("#layer").show();   //방법2
    //$("#layer").fadeIn();  //방법3 효과를 줌
    $("#layer").slideDown();  //방법4 효과줌 /toggle이 아닌 이유: 한번만 작동되면 됨
});
$("#layer .close").click(function(e){ //닫기 버튼
    e.preventDefault();
    //$("#layer").css("display","none"); 
    //$("#layer").hide();
    //$("#layer").fadeOut();
    $("#layer").slideUp();
});

//탭메뉴
var $tab_list = $(".tab_menu"); //변수: 데이터 저장소, 변수명: $tab_list
$tab_list.find("ul ul").hide(); //find: 메서드 / ul의 ul태그를 찾아서 숨겨줌(css에선{disply:none;})
$tab_list.find("li.active > ul").show(); //li.active의 첫ul은 보여줌
function tabMenu(e){    //tabMenu란 함수를 선언 
    e.preventDefault();     //#이동 막아줌
    var $this = $(this);    //클릭해주는 타켓(몇번째 탭을 클릭했나)의 값을 저장 
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
    //ul을 보여줌.부모에 있는 li한테.active class 추가. 형제li.한테는 active를 지워주고. 그 밑의 ul은. 숨겨줌
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu); 
//ul>li>a를 클릭하면(tabMenu)가 작동.포커스도 같이 작동
// 포커스: 탭1번을 탭했을 때 탭2로 넘어감, 웹표준 준수 때문에 해준것

//배너
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

//갤러리
$(".gallery_img").slick({
    arrows: false, //기본 설정 버튼 없애기
    fade: true, // 넘길때 페이드 효과
    pauseOnHover: true,
    infinite: true,
    autoplay: true, //오토플레이
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});
//버튼을 클릭했을 때
$(".play").click(function(){ // play를 클릭했을 때
     $(".gallery_img").slick("slickPlay"); //slickPlay: 슬릭이 설정한 Play버튼 명령어
});
$(".pause").click(function(){  //정지 버튼
    $(".gallery_img").slick("slickPause");
});
$(".prev").click(function(){ //이전 버튼
    $(".gallery_img").slick("slickPrev");
});
$(".next").click(function(){  //넥스트 버튼
    $(".gallery_img").slick("slickNext");
});

//버튼을 클릭하면 전체 메뉴를 보이게 하세요.
$(".tit .btn").click(function(e){ // .tit .btn를 클릭하면 ~해라  //e 클릭했을 때 변수
    e.preventDefault(); // e에 대한 이벤트를 차단, 링크#으로 이동하는 것을 차단
    //cont_nav의 display:none을 보이게 
    // $("#cont_nav").css("display","block");  //css 제이쿼리 메서드
    // CSS로 썼을 때:  #cont_nav: {display:block}
    //$("#cont_nav").show(); //none, block으로 바꿔줌
    //$("#cont_nav").fadeIn(); //서서히 나타나게 해주는 효과
    //$("#cont_nav").slideDown(); //슬라이드처럼 나타나는 효과, 애니메이션이 적용, 한번만 쓸 수 있음
    //반복가능
    //$("#cont_nav").toggle(); //show,hide 기능이 합쳐진 기능,
    //$("#cont_nav").fadeToggle(); //서서히 나타났다가 없어졌다하는 기능
      $("#cont_nav").slideToggle(200); //슬라이드 기능 //200 - 몇초만에 펼쳐지냐 설정
     //버튼을 클릭을 떄 버튼을 변경하고 싶음, 클래스 on 추가 - on 붙었을 때 css 설정해주면 됨
     // $(".tit .btn").addClass("on");  // .tit .btn에 on클래스 추가
    // $(".tit .btn").toggleClass("on") //addClass + removeClass  기능이 합쳐짐
    $("this").toggleClass("on") //this: 자기 자신($(".tit .btn").) - 많은 뜻 중 하나
});