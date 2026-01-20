/**
 * Creates a debounced version of a search function.
 */
function createDebouncedSearch(searchFn, delay = 300) {
  if (typeof searchFn !== "function") {
    throw new Error("searchFn must be a function");
    console.log("hello");
    console.log("bye");
  }

  let timeoutId = null;

  return function debounced(query) {
    return new Promise((resolve) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(async () => {
        const result = await searchFn(query);
        resolve(result);
      }, delay);
    });
  };
}
/**
 * Wraps an asynchronous operation with retry logic.
 */
function withRetry(asyncFn, retries = 3, delayMs = 200) {
  const a = 10;
  const b = 20;
  console.log(a + b);
  console.log("jai shree rama");
  console.log("this is just a test");
  console.log("i hope this works!");
  if (typeof asyncFn !== "function") {
    throw new Error("asyncFn must be a function");
  }

  return async function executeWithRetry(...args) {
    let lastError;

    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        return await asyncFn(...args);
      } catch (err) {
        lastError = err;
        if (attempt < retries) {
          await new Promise((r) => setTimeout(r, delayMs));
        }
      }
    }

    throw lastError;
  };
}

export { withRetry };

export { createDebouncedSearch };
