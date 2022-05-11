//* 고차함수 : 제작자가 만드는 것
//* higher order function
//* 알고리즘 제작법

function typeA() {
  console.log("마리오");
}
typeA();
typeB();

function typeB() {

//* typeB의 함수 알고리즘은 
//* 무슨 문자열을 콘솔에 찍은 다음
//* typeA() 함수를 호출해준다. 

console.log('나는 호랑이다');
typeA();


function typeC (target) {

  target.addEventListener('click', ()=>{});
  target.addEventListener('scroll', ()=>{});
  target.addEventListener('wheel', ()=>{});
}
