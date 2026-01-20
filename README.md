```markdown
# Project Utilities

This repository contains various utility functions.

## Available Functions

### `fetchUserWithRetry(userId, retries = 3, delayMs = 500)`

Fetches a user by their ID, with a configurable number of retries and delay between attempts in case of failure.

-   `userId` (String): The unique identifier for the user.
-   `retries` (Number, optional, default: 3): The maximum number of retry attempts.
-   `delayMs` (Number, optional, default: 500): The delay in milliseconds between retry attempts.

**Returns:** (Promise<Object>) A promise that resolves with the user data or rejects if fetching fails after all retries.

### `createDebouncedSearch(searchFn, delay = 300)`

Creates a debounced version of a given search function. The debounced function will only execute the `searchFn` after a specified `delay` has passed since the last invocation.

-   `searchFn` (Function): The function to be debounced. It will receive any arguments passed to the debounced function.
-   `delay` (Number, optional, default: 300): The time in milliseconds to wait before executing `searchFn`.

**Returns:** (Function) A new debounced function.
```