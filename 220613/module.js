const root = document.getElementById('root');
const ul = document.createElement('ul');
root.appendChild(ul);

let li = [];
for(let i = 0; i < 10; i++) {
  li.push (`<li> ${i} </li>`);
  
}
console.log(li.join(""));
ul.innerHTML = li.join("");

//---------------------------------------------------
root.innerHTML = `<ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                  </ul>
                  `;

    const root = document.getElementById('root');

    const items = ['피카츄','라이츄','파이리','꼬부기','버터풀','야도란'];
    const menu = [];
    menu.push(`<ul>`);
      items.forEach((value, index) => {
        menu.push(`<li>${value}-${index}</li>`);
      })
      menu.push(`</ul>`);

      root.innerHTML = menu.join("");

      