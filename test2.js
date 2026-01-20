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

export { createDebouncedSearch };
