import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { VanillaLazyLoad } from "../src";
import { initLazyLoad } from "../src/utils";

vi.mock("../src/utils", () => ({
	initLazyLoad: vi.fn(),
}));

describe("VanillaLazyLoad component", () => {
	beforeEach(() => {
		vi.clearAllMocks(); // Reset mock function calls before each test
	});

	it("should initialize vanilla-lazyload with the provided options", () => {
		const options = { container: document.body, elements_selector: ".lazy" };
		render(<VanillaLazyLoad options={options} />);

		// Check if useEffect hook was called
		expect(initLazyLoad).toHaveBeenCalled();
		expect(initLazyLoad).toHaveBeenCalledWith(options?.container, options);
	});
});
