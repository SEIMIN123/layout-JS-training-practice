const arr = [ "a", "b", "c"];
//* 위와 같은 배열이 있다.
//* 1. 원소값 중 "a"를 "c" 다음으로 놓는 방법이 있을까?

// arr.push(arr[0]);
// console.log(arr);
// arr.unshift(arr[2]);
// console.log(arr);
// arr.unshift(arr[arr.length-1]);
// console.log(arr);
// arr.push(arr[0]);
// console.log(arr);
// arr.shift();
// console.log(arr);

// let temp;
// temp = arr[0];
// console.log(temp);
// arr.shift();
// console.log(arr);
// arr.push(temp);
// console.log(arr);

//* 2. 원소값중 "c"를 "a" 앞으로 놓는 방법이 있을까?

// let temp;
// temp = arr[2]
// arr.unshift(arr[2]);
// console.log(arr);

//* 3. 혹은 ["b", "a", "c"] 형태로 바꿀 수 있을까?

// let temp;
// temp = arr[1];
// arr.splice(1,1);
// arr.unshift(temp);
// console.log(arr);