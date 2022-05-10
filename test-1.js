window.onload = function () {
  
  var seconds = 00; 
  var tens = 00; 
  //변수 선언을 해놨네

  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")

  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  
  var Interval ;
  //강사님 A : 변수 선언만 했다. 나중에 쓸 예정이다. 

  buttonStart.onclick = function() {
    
    clearInterval(Interval);
    //시작하는 것에 종료 인터벌을 왜?
    Interval = setInterval(startTimer, 10);
    //변수만 선언 한것에 시작 초를 0.01초로 하겠다. 
  }
  
  buttonStop.onclick = function() {
    clearInterval(Interval);
    //이거는 멈추는거니까 종료 인터벌
  }

  buttonReset.onclick = function() {
    clearInterval(Interval);
    tens = "00";
    //이건 앞에 초
  	seconds = "00";
    //이건 뒤에 시초
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
    //innerHTML을 왜?
  }
  
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
  
}


{/* 
<div class="wrapper">

<h1>Stopwatch</h1>
<h2>Vanilla JavaScript Stopwatch</h2>

---------------------------------------

<p><span id="seconds">00</span>:<span id="tens">00</span></p>

---------------------------------------

<button id="button-start">Start</button>
<button id="button-stop">Stop</button>
<button id="button-reset">Reset</button>


</div>  */}


//-------------------------------------

/* Variabes */  
// $orange: #ffa600;
// $grey:#f3f3f3;
// $white: #fff;
// $base-color:$orange ;

// /* Mixin's */  
// @mixin transition {
// -webkit-transition: all 0.5s ease-in-out;
// -moz-transition: all 0.5s ease-in-out;
// transition: all 0.5s ease-in-out;
// }

// @mixin corners ($radius) {
// -moz-border-radius: $radius;
// -webkit-border-radius: $radius;
// border-radius: $radius; 
// -khtml-border-radius: $radius; 
// }

// body {
// background:$base-color;
// font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
// height:100%;
// }

// .wrapper {
// width: 800px;
// margin: 30px auto;
// color:$white;
// text-align:center;
// }

// h1, h2, h3 {
//   font-family: 'Roboto', sans-serif;
//   font-weight: 100;
//   font-size: 2.6em;
//   text-transform: uppercase;
// }

// #seconds, #tens{
//   font-size:2em;
// }

// button{

// @include corners (5px);

// background:$base-color;
// color:$white;
// border: solid 1px $white;
// text-decoration:none;
// cursor:pointer;
// font-size:1.2em;
// padding:18px 10px;
// width:180px;
// margin: 10px;
// outline: none;
// 
    
// &:hover{

// @include transition;
// 	background:$white;
// 	border: solid 1px $white;
// 	color:$base-color;
// 	}
// }







