import { createRef, useEffect } from "react";
import type { ILazyLoadOptions } from "vanilla-lazyload";
import { LazyWrapperProps } from "../types";
import { initLazyLoad } from "../utils";

/**
 * The LazyWrapper component that initializes vanilla-lazyload with the options provided in the props
 * @constructor
 *
 * @param children - React node children that contains the lazy elements
 * @param options - Options for vanilla-lazyload
 */
const LazyWrapper = ({
	children,
	options = { elements_selector: ".lazy" },
}: LazyWrapperProps) => {
	const containerRef = createRef<HTMLDivElement>();

	/**
	 * Initialize vanilla-lazyload with the options provided in the props
	 */
	useEffect(() => {
		initLazyLoad(containerRef.current as HTMLDivElement, options);
	}, [options]);

	return <div ref={containerRef}>{children}</div>;
};

export default LazyWrapper;
