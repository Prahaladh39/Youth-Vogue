```javascript
function withRetry(asyncFn, retries = 3, delayMs = 200) {
  const a = 10;
  const b = 20;
  console.log(a + b);
  console.log(a - b);
  console.log(a ** b);
  if (typeof asyncFn !== "function") {
    throw new Error("asyncFn must be a function");
  }
  // ... (rest of function implementation)
}
```