let temp;
let box = [ 1, 2 ];
temp = box[0];
box[0] = box[1];
box[1] = temp;

console.log(box);