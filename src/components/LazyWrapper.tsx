import { createRef, useEffect } from "react";
import type { ILazyLoadOptions } from "vanilla-lazyload";
import LazyLoad from "vanilla-lazyload";
import { LazyWrapperProps } from "../types";

declare global {
	export interface Window {
		lazyLoadOptions: ILazyLoadOptions;
	}
}

/**
 * This is a wrapper around vanilla-lazyload
 * @constructor
 *
 * @param children - React node
 * @param options - Options
 */
const LazyWrapper = ({
	children,
	options = { elements_selector: ".lazy" },
}: LazyWrapperProps) => {
	const containerRef = createRef<HTMLDivElement>();

	/**
	 * Lazy load images
	 */
	useEffect(() => {
		containerRef.current?.classList?.add("lazy-wrapper");

		// Set options for vanilla-lazyload async mode
		window.lazyLoadOptions = { ...options, container: containerRef.current as HTMLDivElement };

		// Initializing vanilla-lazyload
		if (typeof window !== "undefined" && "IntersectionObserver" in window) {
			const vll = new LazyLoad();

			// Destroying vanilla-lazyload when component unmounts
			return () => vll.destroy();
		}
	}, [options]);

	return <div ref={containerRef}>{children}</div>;
};

export default LazyWrapper;
