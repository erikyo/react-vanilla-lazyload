import {FC} from "react";
import { LazyIframeProps } from "./types";
import { lazyClassName } from "./utils";

const LazyIframe: FC<LazyIframeProps> = ({ src, className, ...rest }) => {
  return (
    <iframe data-src={src} className={lazyClassName(className)} {...rest} />
  );
};

export default LazyIframe
