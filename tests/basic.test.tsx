import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LazyImg } from "..";

describe("LazyImg", () => {
	it("should render the component with the custom props", () => {
		const { container } = render(
			<LazyImg
				src={"https://example.com"}
				srcSet={"https://example2.com"}
				alt={"testAlt"}
				title={"testTitle"}
				aria-label={"test-aria"}
			/>,
		);
		screen.debug();

		const image = container.querySelector<HTMLElement>("img");

		expect(image).toBeTruthy();
		expect(image).toHaveAttribute("alt", "testAlt");
		expect(image).toHaveAttribute("data-src", "https://example.com");
		expect(image).toHaveAttribute("data-srcset", "https://example2.com");
		expect(image).not.toHaveAttribute("data-sizes", null);
		expect(image).toHaveAttribute("aria-label", "test-aria");
		expect(image).not.toHaveAttribute("data-aria-label", "test-aria");
	});
});
