import { jsx as _jsx } from "react/jsx-runtime";
import { lazyClassName } from "../utils";
/**
 * The LazyImg component is used to lazy load images
 * @constructor
 *
 * @param {LazyImgProps} props - The props for the component
 * @returns {JSX.Element}
 */
const LazyImg = ({ src, srcSet, dataSizes, alt, className, ...rest }) => {
    return (_jsx("img", { "data-src": src, "data-srcset": srcSet, "data-sizes": dataSizes, alt: alt, className: lazyClassName(className), ...rest }));
};
export default LazyImg;
