let value = 0;
//* 변수 선언과 동시에 값을 대입했다. => 초기화했다. 
//* initaialize = init

// value = 100;
//* 값을 새로 할당(assignment) 
//* = (대입연산자를 활용)

// setInterval(function(){}, interval);
//* 첫번째 파라미터(매개변수) 함수, 매개변수 자리에 실행할 함수가 자리 잡은 것을 "콜백함수"
//* callback function 
//* callback function hell : 많이 헷갈리는 포인트가 있게 될 것.

let interval = 100;
const timer = setInterval(function(){
//* 함수를 변수에 담는 패턴 => 리터럴 / 함수 표현식 
//* 식별하기 위해 변수에 대입했다.
//* 변수 timer는 함수 setInterval를 가리킨다. 

  console.log(value);
  value++;

  if(value > 100) {

    clearInterval(timer);
  }
}, interval);
