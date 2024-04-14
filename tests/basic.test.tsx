import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
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
		expect(container).toBeTruthy();

		console.log(container.innerHTML);
	});
});
