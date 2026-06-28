/**
 * Entry point of the backend.
 * Starts the Express server.
 */

import app from "./app.js";

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
