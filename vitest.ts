import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		root: "src",
		clearMocks: true,
		globals: true,
		include: ["tests/*.test.{tsx,ts}"],
		setupFiles: "tests/setup.ts",
	},
});
