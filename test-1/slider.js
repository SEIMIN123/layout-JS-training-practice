import * as make from './make.js';
import * as onPager from './onPager.js';
import * as move from './move.js';

/* 01. pager 만들기 */
const sect = document.getElementsByClassName('sect');
for(let section of sect){make.makePager(section);}

/* 02. pager 선택시 동작 */
const pagerArea = document.getElementsByClassName('pagerArea');
for(let pgA of pagerArea){
    pgA.addEventListener('click',onPager.clickPager);
}

/* 03. auto slider 적용 */
const ul_slider = document.getElementsByClassName('slider');

for(let i=0; i<ul_slider.length; i++){
    setTimeout(()=>move.autoSlide(ul_slider[i],i), 3000);
}

/*  */
