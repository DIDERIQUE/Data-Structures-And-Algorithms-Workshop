/*
we have to be sure that the string input is either all lowercase or all uppercase letters
using either the .toLowerCase or .toUpperCase
then we divide it into subset arrays using the split method
then use the reverse method to reverse the subset after join all the subset
and check the reverse text with the initial text
*/

function palindrome(text) {

    const reverseText = text.toLowerCase().split('').reverse('').join('');
    return text === reverseText;
}
const value = palindrome('madam');
console.log('The computed input is a palindrome true or false?:', value);