

const arr = ['a', 'b', 'c'];

//* 1. 원소값 중 "a"를 "c" 다음으로 놓는 방법이 있을까?

// arr.splice(3,1,arr[0]);

// console.log(arr);

//* 2. 원소값중 "c"를 "a" 앞으로 놓는 방법이 있을까?

// let temp;
// temp = arr[2]
// arr.unshift(arr[2]);
// console.log(arr);

//* 3. 혹은 ["b", "a", "c"] 형태로 바꿀 수 있을까?

// arr.splice(0,3,'b','c','a');
// console.log(arr);
let temp;
temp = arr[1];
arr.splice(1,1);
arr.unshift(temp);
console.log(arr);