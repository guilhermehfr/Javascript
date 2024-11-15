let a = 'A';
let b = a;
console.log(a, b);

a = 'outra coisa';
console.log (a, b);

let c = [1, 2, 3]; 
let d = c;

console.log (c, d);

c.push(4);
console.log(c, d); 

d.pop();
console.log(c, d); 