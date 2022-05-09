/* 01. pager 만들기 */
export function makePager(section){
    const thisSlider = section.querySelector('.slider')
    const thisSliders = thisSlider.children;
    const pager = section.querySelector('.pager');
    for(let j=0; j<thisSliders.length; j++ ){
        const makeLI = document.createElement('LI');
        makeLI.dataset.order = j;
        if(j == 0){makeLI.classList.add('on');}
        pager.appendChild(makeLI);
    }//for
}//makePager