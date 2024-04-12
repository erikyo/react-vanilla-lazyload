import { jsx as _jsx } from "react/jsx-runtime";
import { createRef, useEffect } from "react";
import LazyLoad from "vanilla-lazyload";
/**
 * This is a wrapper around vanilla-lazyload
 * @constructor
 *
 * @param children - React node
 * @param options - Options
 */
const LazyWrapper = ({ children, options = { elements_selector: ".lazy" }, }) => {
    const containerRef = createRef();
    /**
     * Lazy load images
     */
    useEffect(() => {
        options?.container?.classList?.add("lazy-wrapper");
        // these are the mandatory options that will be passed to vanilla-lazyload
        const vllOptions = {
        /*container: containerRef.current as HTMLElement,*/
        };
        options = Object.assign({}, vllOptions, options);
        // initializing vanilla-lazyload
        if (typeof window !== "undefined" && "IntersectionObserver" in window) {
            new LazyLoad(options);
        }
    }, [options]);
    return _jsx("div", { ref: containerRef, children: children });
};
export default LazyWrapper;
