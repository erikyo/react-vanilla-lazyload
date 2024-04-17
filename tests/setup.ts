import { cleanup } from "@testing-library/react";
import { afterEach, expect } from "vitest";

import * as matchers from "@testing-library/jest-dom/matchers";

afterEach(() => {
	cleanup();
});

expect.extend(matchers);
