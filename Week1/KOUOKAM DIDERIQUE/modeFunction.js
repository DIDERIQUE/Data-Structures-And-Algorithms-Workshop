/*This function give the number that repeat the most in an array */
function find_mode(arr) {
    let mode = {};
    let max = 0, count = 0;

    arr.forEach(function(i){
        if (mode[i]) {
            mode[i]++;
        } 
        
        else {
            mode[i] = 1;
        }

        if (count<mode[i]) {
            max = i;
            count = mode[i];
        }
    });

    return max;
}
let arr = [4,4,4,5,5,5,5,6,6,];
value4=find_mode(arr)
console.log('The mode in the given array is',value4);