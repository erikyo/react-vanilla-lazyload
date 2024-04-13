import { it, vi } from "vitest";
import "@testing-library/jest-dom";

import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import LazyImg from "../lib/components/LazyImg";

function mockIsIntersecting(
	element: Element,
	isIntersecting: boolean | number,
) {
	const image = render(<LazyImg src="test" />);

	console.log(image);
}
