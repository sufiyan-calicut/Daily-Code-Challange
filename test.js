function addTwoNumber(l1, l2) {

  let stack1;
  let stack2;
  let globalStack = '';
  let root;

  function rec(node) {
    
    if (node.next) {
      rec(node.next);
    }

     globalStack += node.val;
  }
  globalStack = '';
  rec(l1);
  
  stack1 = globalStack;
  
  globalStack = '';
  rec(l2);
  console.log(globalStack)
  stack2 = globalStack;
    let sum = (BigInt(stack1) + BigInt(stack2)).toString().split('').reverse();
  console.log(sum)
}

  let l1 = {val: 1, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 1, next: null}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
;
let l2 = {val:5,next:{val:6,next:{val:4,next:null}}};

addTwoNumber(l1,l2)