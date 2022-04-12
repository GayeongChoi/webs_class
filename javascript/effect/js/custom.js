//highlight
hljs.highlightAll(); //소스보기 박스에 스킨 씌우기

//modal(화면 위에 하나의 작은 화면) : 소스를 보여주는 작은 화면
const modal = function(){
    //소스 보기(source-btn)를 클릭하면 maodal창을 보이게 해주세요(show 추가)
    document.querySelector(".source-btn").addEventListener("click", () => {
        document.querySelector("#modal").classList.add("show");
        document.querySelector("#modal").classList.remove("hide");
    });

    // //닫기 버튼(modal-close) 클릭하면 없어지게 해주세요(show 삭제)
    // document.querySelector(".modal-close").addEventListener("click", () => {
    //     document.querySelector("#modal").classList.remove("show");
    // });
    
    document.querySelector(".modal-close").addEventListener("click", () => {
        document.querySelector("#modal").classList.add("hide");
    });
}
modal();

//tabMenu(modal창의 탭메뉴)
const tabMenu = function(){
    const tabBtn = document.querySelectorAll(".view-title > ul > li");
    const tabCont = document.querySelectorAll(".view-cont > div") //4개의 박스를 저장

    // //각각의 버튼을 클릭하면 경고창~~~
    // tabBtn.forEach((btn)=>{
    //     btn.addEventListener(“click”, ()=>{
    //         alert(“D”);
    //     })
    
    tabBtn.forEach((btn, index) => {  //버튼을 클릭하면... (아래와 같은 효과를 가짐)
        btn.addEventListener ("click", () => { 
            
            //내가 클릭하지 않은 건 active 삭제  = 모든 클래스 active를 삭제
            tabBtn.forEach((el) => {
                el.classList.remove("active")
            });

            //내가 클릭한건 active 추가
            btn.classList.add("active")

            //모든 컨텐츠 박스 안보이게
            tabCont.forEach((el) => { 
                el.style.display = "none";
            });
            
            //내가 클릭한 컨텐츠 박스를 보이게
            tabCont[index].style.display = "block"  //버튼[인덱스 : 0,1,2,3]번을 클릭하면 / 박스[]번을 보여줌

        }) ;   
    });
}
tabMenu();
