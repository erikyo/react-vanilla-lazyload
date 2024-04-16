/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";

export default defineConfig({
	test: {
		globals: true,
		environment: "jsdom",

		coverage: {
			reporter: ["text", "json", "html"],
			exclude: ["**/node_modules/**", "**/lib/**"],
			include: ["**/src/**"],
		},

		setupFiles: "./tests/setup.ts",
	},
});
