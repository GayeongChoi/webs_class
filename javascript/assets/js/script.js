//결과보기 버튼을 클릭하면 경고창의 띄워주세요~
document.querySelectorAll(".result").forEach(function(el){
    el.addEventListener("click", function(){
        el.classList.toggle("active");
    });
});
// document.querySelectorAll(".result").forEach(function(el){ // document.querySelector(".result").addEventListener("click", () => {});
//     el.addEventListener("click", function(){
//         el.classList.add("active");
//     });
// });

