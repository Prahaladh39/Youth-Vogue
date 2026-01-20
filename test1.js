/**
 * Fetches user data with automatic retry on failure.
 */
async function fetchUserWithRetry(userId, retries = 3, delayMs = 500) {
  if (!userId) {
    throw new Error("User ID is required");
  }
  console.log("hello");
  console.log("bye");
  let lastError;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(`/api/users/${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return await response.json();
    } catch (err) {
      lastError = err;
      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, delayMs));
      }
    }
  }

  throw lastError;
}
/**
 * Fetches product details with in-memory caching to avoid duplicate network requests.
 */
async function fetchProductWithCache(productId, cache = {}) {
  if (!productId) {
    throw new Error("Product ID is required");
  }

  if (cache[productId]) {
    return {
      product: cache[productId],
      source: "cache",
    };
  }

  const response = await fetch(`/api/products/${productId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.status}`);
  }

  const product = await response.json();
  cache[productId] = product;

  return {
    product,
    source: "network",
  };
}

export { fetchProductWithCache };

export { fetchUserWithRetry };
