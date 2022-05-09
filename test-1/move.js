let slObj = {
    width : 0,
    now: 0,
    move : 0,
    thisPager : "",
    onNum:0
};

const SLIDE_TIME = 3000;

/*  */
export function get_slider_status(slider){
    slObj.thisPager = slider.parentElement.parentElement.querySelector('.pager');
    slObj.width = slider.offsetWidth;
    slObj.now = window.getComputedStyle(slider).transform;
    slObj.now = slObj.now.match(/matrix.*\((.+)\)/)[1].split(', ')[4];
    slObj.now = Number(slObj.now);
}

/* 좌우 화살표 */
export function prevNext(slider,direc,len){

    get_slider_status(slider);

    switch(direc){
        case "prev" :
            slObj.move = slObj.now + slObj.width;
            if(slObj.move > 0){slObj.move = -(slObj.width * (len-1));}
            break;
        case "next" :
            slObj.move = slObj.now - slObj.width;
            if(slObj.move < -(slObj.width * (len-1))){slObj.move = 0;}
            break;
        default:
            break;
    }//switch

    slider.style.transform = `translateX(${slObj.move}px)`;

    slObj.onNum = Math.floor(slObj.move / slObj.width);
    on_pager(slObj.thisPager, slObj.onNum);


}//prevNext


/* 페이저 클릭시 */
export function click_pager(slider,order,target){
    order = Number(order);
    slObj.width = slider.offsetWidth;
    slider.style.transform = `translateX(${-(slObj.width * order)}px)`;

    const sbl = target.parentElement.children;
    for(let pg of sbl){pg.classList.remove('on');}
    target.classList.add('on');
}//click_pager

function on_pager(pager,num){
    const sbl = pager.children;
    for(let pg of sbl){pg.classList.remove('on');}
    sbl[num * -1].classList.add('on');
}


/* AUTO SLIDER */
// let myVar0,myVar1,myVar2; 
//for문 등으로 "변수"를 생성할 수 있는 방법은 없을까?

export function makeVar(len){
    for(let i=0; i<len; i++){
        window["myVar"+i]="";
    }
}//makeVar
//인데 이거 할 필요도 없었음ㅋㅋ; 전역변수 선언이니까

export function autoSlide(slide,num){
    get_slider_status(slide);
    slObj.move = slObj.now - slObj.width;
    if(slObj.move < -(slObj.width * (slide.children.length-1))){slObj.move = 0;}

    slide.style.transform = `translateX(${slObj.move}px)`;

    slObj.onNum = Math.floor(slObj.move / slObj.width);
    on_pager(slObj.thisPager, slObj.onNum);

    /* switch(num){
        case 0 :
            myVar0 = setTimeout(()=>{autoSlide(slide,num)},SLIDE_TIME);
            break;
        case 1 :
            myVar1 = setTimeout(()=>{autoSlide(slide,num)},SLIDE_TIME);
            break;
        case 2 :
            myVar2 = setTimeout(()=>{autoSlide(slide,num)},SLIDE_TIME);
            break;

        case 3 :
            myVar3 = setTimeout(()=>{autoSlide(slide,num)},SLIDE_TIME);
            break;
    } */
    window["myVar"+num] = setTimeout(()=>{autoSlide(slide,num)},SLIDE_TIME);

}//autoSlide


export function stopSlide(num){
    /* switch(num){
        case 0 :
            clearTimeout(myVar0);
            break;
        case 1 :
            clearTimeout(myVar1);
            break;
        case 2 :
            clearTimeout(myVar2);
            break;
            break;
        case 3 :
            clearTimeout(myVar3);
            break;
    } */
    clearTimeout(window["myVar"+num]);
}
