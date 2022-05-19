
let obj = {
  a : 1,
  b : 2,
  c : 1,
  d : 2 
  sum : function(one, two){
    if(typeof one === "number" && typeof two === "number") {
      return one + two;
    } else {
      console.error("너 지금 데이터 입력 잘못 됐어");
    }
  }
}

console.log(obj.a === obj.b || obj.a === obj.c);
console.log(obj.a === obj.b && obj.a === obj.c);
console.log(obj.sum(obj.a, "2"));
