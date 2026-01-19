/**
 * Fetches user data with automatic retry on failure.
 */
async function fetchUserWithRetry(userId, retries = 3, delayMs = 500) {
  if (!userId) {
    throw new Error("User ID is required");
  }

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

export { fetchUserWithRetry };
