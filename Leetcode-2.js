/**
 Input: l1 = [2,4,3], l2 = [5,6,4]
 Output: [7,0,8]
 Explanation: 342 + 465 = 807.
 Example 2:
 
 Input: l1 = [0], l2 = [0]
 Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*  */

function createNode(val) {
  return {
    val,
    next: null
  };
}
function addTwoNumber(l1, l2) {
  let stack1;
  let stack2;
  let globalStack = '';
  let root;

  function rec(node) {
    if (node.next) {
      rec(node.next);
    }

    return (globalStack += node.val);
  }
  globalStack = '';
  rec(l1);
  stack1 = globalStack;

  globalStack = '';
  rec(l2);
  stack2 = globalStack;

  let sum = (BigInt(stack1) + BigInt(stack2)).toString().split('').reverse();
  for(let element of sum){
    append(element)
  }

  function append(val){
    let newNode = createNode(val);
    
    if(!root){
        root = newNode;
    }else{
        let current = root;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
  }

  console.log(JSON.stringify(root))
  //   l1 = l1.reverse().join('');
  //   l2 = l2.reverse().join('');
  //   let sum = Number(l1) + Number(l2);
  //   return JSON.stringify(sum).split('').reverse();
}

let l1 = {val: 2, next: {val: 4, next: {val: 3, next: null}}};
let l2 = {val: 5, next: {val: 6, next: {val: 4, next: null}}};
addTwoNumber(l1, l2);

// Reason for using BigInt
// let l1 = {val: 1, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 0, next: {val: 1, next: null}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}};
// let l2 = {val:5,next:{val:6,next:{val:4,next:null}}};