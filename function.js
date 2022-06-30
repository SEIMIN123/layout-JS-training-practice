function stringCombine(a, b) {

  return a + b;
}

function consoleLoop(strings, count) {

  for (let i = 0; i < count; i++) {

    console.log(strings);
  }
}

function one(ipgoo, ipgootwo, count) {
  let strings = stringCombine(ipgoo, ipgootwo);
  consoleLoop(strings, count);
  return "병신";
}

one("<div>", "</div>", 5);