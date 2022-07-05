function one(element) {

  element.addEventListner('click', function () {

    console.log(this);
  });
}

function two(element) {

  element.addEventListner('click', () => {

    console.log(this);
  });
}

function three(element) {

  let value = element.map((element) => {element});
  
}