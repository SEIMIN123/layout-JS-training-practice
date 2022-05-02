// console.log('test');

// let one; 

// Todo : 변수 선언은 했고 값을 무엇을 가리키지는 않은 상태 
// 1; 
// Todo : 식별을 위해서 값과 변수를 대입 하는 과정을 통한다. =(이퀄표시)

// let test = 1; 

// 변수 선언과 동시에 값을 가리켰다.(초기화가 되었다) 
// RAM 이라는 메모리에 일단 담긴다. 식별할 방법 === 변수의 큰의미

//값은 존재하는 상태
// 활용이 아직 안된 상태

//변수를 왜 쓰는가?
// 데이터 숫자타입 1이라는 저 값을 쓸 방법이 없음 => 변수를 사용하지 않으면

// console.log(one);

// const two = 1; 
// 변수 선언과 동시에 값도 같이 가리키게 만든다. const의 규칙
// 에러가 났다는 것은 해결만 된다면 무결해짐.

// console.log(two);


// console.log(1 === "1");

// == 이 작성법은 버그이다. ===으로 하는게 맞음.

// let a = 1; 
// let b = 2;

// console.log( a === b);
// console.log(typeof a === typeof b);


// let a = 1;
// let b = "2";

// console.log (a === b);
// console.log (typeof a === typeof b);

// let a = 1;
// let b = "2";

// let change = Number(b);

// console.log(typeof change);

// let a = 1;
// let b = "세이민"

// let change = Number(b);

// console.log(typeof change);

// let a = 1;
// let b = "세이민"

// let change =  String(b);

// console.log(typeof change);


// let seimin = null;
// todo: null 존재는 하지만 비어있는 값. 프로그래밍에만 있는 개념.(빈공간)
// todo : null이라는 값이 존재하면 아직 값이 정해지지 않았다.
// 이건 버그임.

// console.log(typeof seimin);

// let arr = ['타입1', '타입2', '타입3', '타입4'];

// console.log(typeof arr);
// console.log(Array.isArray(arr));

// 이건 버그 아님.
// 제대로 체크하려면 console.log(Array.isArray(arr));

let text = "나는 누구인가";

console.log(text[3], text[5], text[6]);
console.log(text.length);

