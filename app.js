//FizzBuzz
// function fizzBuzz(n) {
//     for(let i = 1; i <= n; i++) {
//         let output = "";
//         if(i % 3 == 0) output += "Fizz";
//         if(i % 5 == 0) output += "Buzz";
//         console.log(output || i);
//     }
// }


function fizzBuzz(n) {
    return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i );
}
// console.log(fizzBuzz(25));

// function fizzBuzz(n) {
//     const response = new Array(n);
//     for(let i = 1; i <= n; i++) {
//         if(i % 15 === 0) response[i - 1] = 'FizzBuzz';
//         else if(i % 3 === 0) response[i - 1] = 'Fizz';
//         else if(i % 5 === 0) response[i - 1] = 'Buzz';
//         else response[i - 1] = i.toString();
//     }
// }
console.log(fizzBuzz(25));

//Delete Node in a Linked List
function ListNode(val) {
    this.val = val;
    this.next = null
}
let deleteNode = function(node) {
    [node.val, node.next] = [node.next.val, node.next.next];
}



//Reverse Linked List
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
function reverseList(head) {
    let node = head;
    let prev = null;
    let temp = new ListNode();
    while(head) {
        temp = node.next;
        node.next = prev;
        prev = node;
        node = temp;
    }
    return prev;
};
// While traversing the list, the current node's next pointer is changed to its
// previous element. There is no reference to the previous node, so the previous
// element is stored beforehand. Another pointer is needed to store the next node
// before changing the reference.