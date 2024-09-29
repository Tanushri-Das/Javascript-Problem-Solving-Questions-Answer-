// 20. Write a JS function to check if a string of parentheses is balanced. A string is balanced if each opening parenthesis has a corresponding closing parenthesis.
// For example, "((()))" is balanced, while "(()" is not.
// "[{}]" is balanced, while "[{]" is not.

const isBalancedParentheses = (str) => {
  const stack = [];

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If the character is an opening parenthesis, push it onto the stack
    if (char === "(") {
      stack.push(char);
    }
    // If the character is a closing parenthesis
    else if (char === ")") {
      // If the stack is empty, it means there's no matching opening parenthesis
      if (stack.length === 0) {
        return false;
      }
      // Pop the last opening parenthesis from the stack
      stack.pop();
    }
  }

  // If the stack is empty at the end, all parentheses are balanced
  return stack.length === 0;
};

// Example usage:
console.log(isBalancedParentheses("()")); // true
console.log(isBalancedParentheses("(())")); // true
console.log(isBalancedParentheses("(()")); // false
console.log(isBalancedParentheses(")(")); // false
console.log(isBalancedParentheses("()()")); // true
