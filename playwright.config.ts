import { defineConfig } from "@playwright/test";

// Match the local preview host so dev-server reloads do not interrupt clicks.
const baseURL = "http://127.0.0.1:3000";

export default defineConfig({
  testDir: "./tests",
  webServer: {
    command: "npm run dev",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL,
  },
});
