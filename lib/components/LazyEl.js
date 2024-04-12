import { jsx as _jsx } from "react/jsx-runtime";
import { lazyClassName } from "../utils";
/**
 * Lazy Element component used to lazy load elements
 *
 * @param props { as: keyof JSX.IntrinsicElements | ComponentType<any>, src: string, srcBg: string, height: number, width: number, className: string }- The props for the component
 * @constructor
 */
const LazyEl = ({ as, src, srcBg, height, width, className, ...rest }) => {
    const Element = as || "div";
    if (srcBg) {
        // background image case
        let style = rest.style || {};
        // remove the background image if it is already set
        style = { ...style, backgroundImage: `url(${srcBg})` };
        return (_jsx(Element, { width: width, height: height, style: style, className: lazyClassName(className), "data-src": srcBg, ...rest }));
    }
    return (_jsx(Element, { width: width, height: height, className: lazyClassName(className), "data-src": src, ...rest }));
};
export default LazyEl;
