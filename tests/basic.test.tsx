import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import { expect, it, test } from "vitest";
import { LazyImg } from "../src";

test("LazyImg", () => {
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
		expect(container).toBeTruthy();

		console.log(container.innerHTML);
	});
});
