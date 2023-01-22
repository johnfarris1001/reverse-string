function reverseString(str) {
  // type your code here
  let ans = ''
  for (let i = 0; i < str.length; i++) {
    ans = str[i] + ans
  }
  return ans
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'sllab'");
  console.log("=>", reverseString("balls"));

  console.log("");

  console.log("Expecting: 'allets'");
  console.log("=>", reverseString("stella"));

  console.log("");

  console.log("Expecting: 'lacitpeks'");
  console.log("=>", reverseString("skeptical"));

  console.log("");

  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
