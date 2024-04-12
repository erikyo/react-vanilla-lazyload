import { jsx as _jsx } from "react/jsx-runtime";
import { lazyClassName } from "../utils";
/**
 * LazyVideo component used to lazy load videos
 * @constructor
 *
 * @param props { src: string, className: string, controls?: boolean, poster?: string }- The props for the component
 * @return {JSX.Element} - The LazyVideo component
 * */
const LazyVideo = ({ src, className, controls, itemType, poster, ...rest }) => {
    return (_jsx("video", { "data-src": src, "data-poster": poster, controls: !!controls, className: lazyClassName(className), ...rest, children: _jsx("source", { type: itemType, "data-src": src }) }));
};
export default LazyVideo;
