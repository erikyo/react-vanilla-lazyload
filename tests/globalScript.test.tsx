import { render } from "@testing-library/react";
import * as LazyLoad from "vanilla-lazyload";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { VanillaLazyLoad } from "../src";
import { initLazyLoad } from "../src/utils";

vi.mock("../src/utils", () => ({
	initLazyLoad: vi.fn(),
}));

describe("VanillaLazyLoad component", () => {
	beforeEach(() => {
		class MockIntersectionObserver implements IntersectionObserver {
			root: Document | Element | null = null;
			rootMargin = "";
			thresholds: readonly number[] = [];

			disconnect = vi.fn();
			observe = vi.fn();
			takeRecords = vi.fn();
			unobserve = vi.fn();
		}
		window.IntersectionObserver = MockIntersectionObserver;
	});
	it("should initialize vanilla-lazyload with default options", () => {
		render(<VanillaLazyLoad />);

		// Check if useEffect hook was called
		expect(initLazyLoad).toHaveBeenCalled();
		expect(initLazyLoad).toHaveBeenCalledWith(undefined, undefined);
	});

	it("should initialize vanilla-lazyload with the provided options", () => {
		const options = { container: document.body, elements_selector: ".lazy" };
		render(<VanillaLazyLoad options={options} />);

		// Check if useEffect hook was called
		expect(initLazyLoad).toHaveBeenCalled();
		expect(initLazyLoad).toHaveBeenCalledWith(options?.container, options);
	});

	it("should initialize vanilla-lazyload and load the script", () => {
		const mockLazyLoad = vi.fn();
		vi.mock("vanilla-lazyload", () => ({
			LazyLoad: mockLazyLoad,
		}));

		// Check the vanilla-lazyload library has been fired with the component container
		expect(window.iLazyLoad).toBe(undefined);

		render(<VanillaLazyLoad options={{}} />);

		// Check if useEffect hook was called
		expect(initLazyLoad).toHaveBeenCalled();

		// Check if LazyLoad was initialized
		expect(window.IntersectionObserver).not.toBe(undefined);
	});
});
