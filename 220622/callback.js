function a() {

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("함수 a()가 실행되었습니다.");
      resolve("실행완료");
    }, 4000);
  });
}

a()
  .then(function (data) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("여기는 지금 then이라는 함수안에서 실행됐음. 1");
        resolve(data);
      }, 1000);
    });
  })
  .then(function (data) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("여기는 지금 then이라는 함수안에서 실행됐음. 2");
        resolve(data);
      }, 1000);
    });
  })
  .then(function (data) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("여기는 지금 then이라는 함수안에서 실행됐음. 3");
        resolve(data);
      }, 1000);
    });
  })
  .then(function (data) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("여기는 지금 then이라는 함수안에서 실행됐음. 4");
        resolve(data);
      }, 1000);
    });
  })