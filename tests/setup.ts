import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

import * as matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

expect.extend(matchers);

afterEach(() => {
	cleanup();
});
