
function typeA() {
//* 선언(declaration)

}

//* 전역 스코프 (global)

typeA();

//* 기명 (이름이 있는) 선언방식


//* 익명함수 (anonymos function) / 함수 리터럴(literal) : 값을 직접 새긴다.
//* 함수표현식 (function expression) 
const typeB = function() {

}

//* 제작자는 알지만 외부사람은 모르는 방식 : 권장

typeB();


//* arrow function (화살표 함수)
//* 함수표현식과 같은 기능 
//* 축약형(개발자들이 귀찮다고)
//* 특정 작동 때문에 만들어진 최신 문법 중 하나임. 

const typeC = () => {}
const typeD = function () {}
const typeE = a => {} //* 매개변수가 하나일때는 소괄호도 안써도 돼.

//* 셋다 똑같은거임.

(function() {})
//* 선언이고 호출이고 모르겠고 즉시 실행하겠다는 뜻.
//* 즉시 실행함수 
//* 문서 시작할때 사용할 때가 있음. => 즉시 시작 함수

let function = 
test.addEvnetListener("type", function(){});
//* 함수의 매개변수 자리에 함수가 들어가 있는 것 => 콜백함수 
//* 콜백함수는 익명이 기본이다. 
//* 매우 많이 사용하기 때문에 눈에 익혀야 된다. 

test.addEvnetListener('test', testFunction); //* function() <= 소괄호를 쓰지 않는다. 

function testFunction() {
  //* 밖으로 빼낸 콜백함수
  //* 기명으로 함수를 만들어줌. 
}