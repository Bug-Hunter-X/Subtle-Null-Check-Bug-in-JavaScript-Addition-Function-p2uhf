function foo(a, b) {
  // Handle null values gracefully
  a = a === null ? 0 : a;  // Assign 0 to null input
  b = b === null ? 0 : b;  // Assign 0 to null input
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0