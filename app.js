//FizzBuzz
function fizzBuzz(n) {
    for(let i = 1; i <= n; i++) {
        let output = "";
        if(i % 3 == 0) output += "Fizz";
        if(i % 5 == 0) output += "Buzz";
        console.log(output || i);
    }
}


// function fizzBuzz(n) {
//     return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i );
// }
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
fizzBuzz(25);

//Delete Node in a Linked List




//Reverse Linked List