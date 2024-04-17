import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { LazyWrapper } from "../lib";
import { LazyModule } from "../src";

vi.mock("./Loader", () => () => <div>Loading...</div>); // Mock Loader component

describe("LazyModule component", () => {
	it("should render loader when not visible", async () => {
		render(
			<LazyModule
				className={"demo-item"}
				component={import("./fixtures/Component.jsx")}
				loader={<div>Custom Loader</div>}
			/>,
		);

		// Check if loader is rendered
		expect(await screen.findByText("Custom Loader")).toBeInTheDocument();
	});

	it("should lazy load component when visible", async () => {
		const Component = () => <div>Lazy Loaded Component</div>;

		// Mock lazy component import
		vi.mock("../components/Component.tsx", () => () => <Component />);

		// Render LazyModule with visible state
		render(
			<LazyWrapper>
				<LazyModule
					className={"demo-item active"} // Simulating the visible state
					component={import("./fixtures/Component.jsx")}
					loader={<div>Loading...</div>}
				/>
			</LazyWrapper>,
		);

		// Check if lazy-loaded component is rendered
		expect(await screen.findByText("Loading...")).toBeInTheDocument();
	});
});
