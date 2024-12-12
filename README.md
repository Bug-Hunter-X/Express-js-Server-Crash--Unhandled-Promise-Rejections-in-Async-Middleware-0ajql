# Express.js Server Crash: Unhandled Promise Rejections

This repository demonstrates a common yet subtle bug in Express.js applications involving asynchronous middleware and unhandled promise rejections.  The server, while seemingly functional, crashes silently upon encountering an error during an asynchronous operation.

## Bug Description

The `bug.js` file contains an Express.js server with an asynchronous route handler (`/users`). This handler fetches user data from a (simulated) database.  If the database operation fails, the promise rejects, leading to a server crash because the rejection isn't handled properly.

## Solution

The `bugSolution.js` file presents a corrected version.  It includes a `try...catch` block around the asynchronous operation to handle potential errors gracefully.  This prevents server crashes and provides a more robust user experience.

## How to Reproduce

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` (to reproduce the bug).  Observe the server crash, or lack of a meaningful error message.
4. Run `node bugSolution.js` (to see the fix in action). The server should handle errors properly and respond with an appropriate error message.