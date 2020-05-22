/* This function prints the staircase of size n.*/
function staircase(n) {
    let x = new Array(n).fill(' ');
    
    while (x.indexOf(' ') !==-1) {
        x.shift();
        x.push('@');
        console.log(x.join(""));
        n--;
    }
}
result = staircase(5)
console.log('The tree result is',result);