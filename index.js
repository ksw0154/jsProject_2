// const title = document.getElementById('title');
const title = document.querySelector("#title");
title.innerHTML  = "Hi! From JS";
// title.style.color = "blue"; 
document.title = "Abel"; // Tab Name
console.log("title");

// javascript는 html, css를 바꾸기 위해 나온 것이 아님
// event handler의 역할

function handleResize(event) {
    console.log(event);
    // JavaScript에 있는 event 함수
    // event가 발생할 때마다 event 객체가 호출 됌.
    console.log("I have been resized");
}

window.addEventListener("resize", handleResize); //window 사이즈가 변경될 때 나타나는 함수

function handleClick() {
    title.style.color = "black";
}
title.addEventListener("click", handleClick);