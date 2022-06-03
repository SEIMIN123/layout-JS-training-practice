const poketmon = {

  a: '꼬부기',
  b: '파이리',
  c: '피카츄',
  d: '이상해씨'
}

// console.log(poketmon.a); 하던방식
// console.log(poketmon['a']); 배열로 지정해서 하는방식 

// for(let props in poketmon) {
//   console.log(typeof props);
//   console.log(poketmon[props]);
// }

// console.log(poketmon.length);

// for(let props in poketmon) {
//   console.log(poketmon[props]);

// }

// for(let props of poketmon) {
//   console.log(props);
// }

let poketmonArr = [];

for (let props in poketmon) {

  console.log(poketmon[props]);
  poketmonArr.push(poketmon[props]);
}

console.log(poketmonArr);