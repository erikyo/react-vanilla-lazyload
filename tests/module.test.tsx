import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { LazyWrapper } from "../lib";
import { LazyModule } from "../src";

function LazyComponent() {
	return (
		<LazyWrapper>
			<LazyModule
				className={"demo-item active"} // Simulating the visible state
				component={import("./fixtures/Component.jsx")}
				loader={<p>Loading...</p>}
			/>
		</LazyWrapper>
	);
}

describe("LazyModule component", () => {
	it("should render loader when not visible", async () => {
		render(
			<LazyModule
				className={"demo-item"}
				component={import("./fixtures/Component.jsx")}
			/>,
		);

		// Check if loader is rendered
		expect(await screen.findByText("loading")).toBeInTheDocument();
	});

	it("should lazy load component when visible", async () => {
		const Component = () => <div>Lazy Loaded Component</div>;

		// Mock lazy component import
		vi.mock("../components/Component.tsx", () => () => <Component />);

		// Render LazyModule with visible state
		const { container } = render(<LazyComponent />);

		// Check if lazy-loaded component is rendered
		expect(await screen.findByText("Loading...")).toBeInTheDocument();

		// Check if lazy-loaded component is not rendered
		expect(screen.queryByText("Lazy Loaded Component")).not.toBeInTheDocument();

		// Change the class and render again the component
		container.querySelector(".demo-item")?.classList.add("active");

		// Check if lazy-loaded component is rendered
		expect(await screen.findByText("p")).toBeInTheDocument();
	});
});
