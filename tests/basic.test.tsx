import { render, screen } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import { LazyEl, LazyIframe, LazyImg, LazyVideo } from "../src";

describe("LazyImg", () => {
	it("should render the LazyImg component with the custom props", () => {
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
		expect(image).not.toHaveAttribute("data-sizes", false);
		expect(image).toHaveAttribute("aria-label", "test-aria");
		expect(image).not.toHaveAttribute("data-aria-label", "test-aria");
	});
	it("should render the LazyVideo component with the custom props", () => {
		const { container } = render(
			<LazyVideo
				src={"https://example.com"}
				poster={"https://example2.com"}
				title={"testTitle"}
				aria-label={"test-aria"}
			/>,
		);
		screen.debug();

		const video = container.querySelector<HTMLElement>("video");

		expect(video).toBeTruthy();
		expect(video).toHaveAttribute("data-src", "https://example.com");
		expect(video).toHaveAttribute("data-poster", "https://example2.com");
		expect(video).not.toHaveAttribute("poster", "https://example2.com");
		expect(video).not.toHaveAttribute("data-sizes", false);
		expect(video).toHaveAttribute("aria-label", "test-aria");
		expect(video).not.toHaveAttribute("data-aria-label", "test-aria");
	});
	it("should render the LazyIframe component with the custom props", () => {
		const { container } = render(
			<LazyIframe src={"https://example.html"} className={"iframe"} />,
		);
		screen.debug();

		const iframe = container.querySelector<HTMLElement>("iframe");

		expect(iframe).toBeTruthy();
		expect(iframe).toHaveAttribute("data-src", "https://example.html");
		expect(iframe).not.toHaveAttribute("src", "https://example.html");
		expect(iframe).not.toHaveAttribute("data-sizes", false);
		expect(iframe?.classList.length).toBeGreaterThan(1);
		expect(iframe?.classList.toString().split(" ")).toEqual(["iframe", "lazy"]);
	});
	it("should render the LazyEl component with the script props", async () => {
		const { container } = render(
			<LazyEl
				src={
					"https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"
				}
				as={"script"}
				type={"application/javascript"}
			/>,
		);
		screen.debug();

		const script = container.querySelector<HTMLElement>("script");

		expect(script).toBeTruthy();
		expect(script).toHaveAttribute(
			"data-src",
			"https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js",
		);
		expect(script).not.toHaveAttribute(
			"src",
			"https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js",
		);
		expect(script).toHaveAttribute("type", "application/javascript");
		expect(script).not.toHaveAttribute("type", "text/html");
	});
	it("should render the LazyEl component with the background props", () => {
		const { container } = render(
			<LazyEl
				as={"a"}
				src={"src"}
				className={"element"}
				bg={"bg"}
				bgHidpi={"bgHidpi"}
				bgMulti={"bgMulti"}
				bgMultiHidpi={"bgMultiHidpi"}
				width={100}
				height={100}
			/>,
		);
		screen.debug();

		const a = container.querySelector<HTMLElement>("a");

		expect(a).toBeTruthy();
		expect(a).toHaveAttribute("data-src", "src");
		expect(a).not.toHaveAttribute("src", "src");
		expect(a).toHaveAttribute("data-bg", "bg");
		expect(a).toHaveAttribute("data-bg-hidpi", "bgHidpi");
		expect(a).toHaveAttribute("data-bg-multi", "bgMulti");
		expect(a).toHaveAttribute("data-bg-multi-hidpi", "bgMultiHidpi");
		expect(a).toHaveAttribute("width", "100");
		expect(a).toHaveAttribute("height", "100");
	});
});
