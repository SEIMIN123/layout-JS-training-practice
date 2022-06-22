let seimin = 100;

// work. 1 = 1번 행동에는 seimin이 10이 덧셈되고 콘솔에 출력된다. 110
// work. 2 = 2번 행동에는 seimin이 30을 빼고 콘솔에 출력된다. 80

// todo : 총 2초간 두번의 계산을 실행시킨다. 

seimin = seimin + 10;
console.log(seimin);
seimin = seimin - 30;
console.log(seimin);


function first() {
  return new Promise(function(resolve,reject){
    setTimeout(() => {
      seimin = seimin + 10;
      console.log(seimin);
      resolve();
    }, 1000);
  });
}

first()
  .then(function(data){

    return new Promise(function(resolve,reject){
      setTimeout(() => {
        seimin = seimin - 30;
        console.log(seimin);
        resolve();
      }, 1000);
    });
  })