function text() {
  return `<div>hello</div>`;
}

function section() {
  return `<section>뭐여</section>`;
}

let timerA = setTimeout(() => {
  console.log(text());
}, 1000);

let timerB = setTimeout(() => {
  console.log(section());
}, 0);