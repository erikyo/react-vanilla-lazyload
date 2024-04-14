import LazyLoad, { type ILazyLoadOptions } from "vanilla-lazyload";

declare global {
	export interface Window {
		lazyLoadOptions: ILazyLoadOptions;
	}
}

/**
 * The function to initialize vanilla-lazyload
 *
 * @param container - The container element
 * @param options - The options for vanilla-lazyload
 */
export function initLazyLoad(
	container = document.body,
	options: ILazyLoadOptions = {},
) {
	container.classList?.add("vanilla-lazyload-wrapper");

	// Set options for vanilla-lazyload async mode
	window.lazyLoadOptions = {
		...options,
		container,
	};

	// Initializing vanilla-lazyload
	if (typeof window !== "undefined" && "IntersectionObserver" in window) {
		const vll = new LazyLoad();

		// Destroying vanilla-lazyload when component unmounts
		return () => vll.destroy();
	}
}

/**
 * Mixin the lazy class to the element
 * @param className string the class name to add
 * @return string the class name to add to the element
 */
export function lazyClassName(className?: string): string {
	return className ? `${className} lazy` : "lazy";
}
