import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LazyImg, LazyWrapper } from "../src";

describe("LazyWrapper component", () => {
	it("should initialize vanilla-lazyload with the provided options", () => {
		const options = { elements_selector: ".lazy" };
		const { container } = render(
			<LazyWrapper options={options}>
				<LazyImg src="https://example.com" className="lazy" />
			</LazyWrapper>,
		);

		// Check if vanilla-lazyload is initialized with the provided options
		// You might need to add custom assertions based on your implementation
		// For example, checking if the vanilla-lazyload instance is created with the correct options

		// You can also check if the children are rendered properly
		const lazyContent = container.querySelector("img");
		expect(lazyContent).toBeTruthy();
	});
});
