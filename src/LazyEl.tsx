import {ComponentType, ReactElement} from "react";
import { lazyClassName } from "./utils";
import { LazyElementProps } from "./types";

const LazyEl = <T extends HTMLElement>({
  as,
  src,
  srcBg,
  height,
  width,
  className,
  ...rest
}: LazyElementProps<T>): ReactElement<T> => {
  const Element =
    as || ("div" as keyof JSX.IntrinsicElements | ComponentType<any>); // Type assertion
  if (srcBg) {
    // background image case
    let style = rest.style || {};
    // remove the background image if it is already set
    style = { ...style, backgroundImage: `url(${srcBg})` };

    return (
      <Element
        width={width}
        height={height}
        style={style}
        className={lazyClassName(className)}
        data-src={srcBg}
        {...rest}
      />
    );
  }

  return (
    <Element
      width={width}
      height={height}
      className={lazyClassName(className)}
      data-src={src}
      {...rest}
    />
  );
};

export default LazyEl;
