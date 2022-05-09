import * as move from './move.js';

let clickOBJ = {
    slider : "",
    order : "",
    idx : 0
};

let sect = document.getElementsByClassName('sect');
let nowSect;

/* 02. pager 선택시 동작 */
export function clickPager(e){
    e = e || window.event;

    nowSect = e.currentTarget.parentElement;

    clickOBJ.idx = Array.prototype.indexOf.call(sect,nowSect);
    // console.log(clickOBJ.idx);
    
    clickOBJ.order = e.target.dataset.order;
    clickOBJ.slider = e.target.parentElement.parentElement.parentElement.querySelector('.slider');
    
    if(clickOBJ.order == "" ||clickOBJ.order == undefined){return;}
    move.stopSlide(clickOBJ.idx);
    btn_pause(e);


    if(clickOBJ.order == 'prev' || clickOBJ.order == 'next'){
        move.prevNext(clickOBJ.slider,clickOBJ.order,clickOBJ.slider.children.length);    
    }else if(clickOBJ.order == 'pause'){
        if(e.target.dataset.status == "moving"){
            e.target.dataset.status = 'paused';
            return;
        }else{
            e.target.dataset.status = 'moving';
            btn_restart(e);
            move.autoSlide(clickOBJ.slider,clickOBJ.idx);
        }
    }else{
        clickOBJ.slider = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.slider');
        move.click_pager(clickOBJ.slider,clickOBJ.order,e.target);
    }
    
}//clickPager


function btn_pause(e){
    const thisBtn = e.currentTarget.getElementsByClassName('btn_pause')[0];
    thisBtn.innerText = 'RESTART';
}//btn_pause

function btn_restart(e){
    const thisBtn = e.currentTarget.getElementsByClassName('btn_pause')[0];
    thisBtn.innerText = 'PAUSE ME';
}//btn_restart