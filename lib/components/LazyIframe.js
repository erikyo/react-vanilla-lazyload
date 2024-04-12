import { jsx as _jsx } from "react/jsx-runtime";
import { lazyClassName } from "../utils";
/**
 * The LazyIframe component used to lazy load iframes
 * @param props {src: string, className: string} - The props passed to the component
 * @constructor
 *
 * @returns {JSX.Element} - The LazyIframe component
 */
const LazyIframe = ({ src, className, ...rest }) => {
    return (_jsx("iframe", { "data-src": src, className: lazyClassName(className), ...rest }));
};
export default LazyIframe;
