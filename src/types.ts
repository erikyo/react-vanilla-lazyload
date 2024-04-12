import type {
  HTMLAttributes,
  IframeHTMLAttributes,
  ImgHTMLAttributes,
  MutableRefObject,
  ReactNode,
  VideoHTMLAttributes,
} from "react";
import { ILazyLoadOptions } from "vanilla-lazyload";

export interface LazyElementProps<T extends HTMLElement>
  extends HTMLAttributes<T> {
  as?: keyof JSX.IntrinsicElements;
  src?: string;
  srcBg?: string;
  width?: number;
  height?: number;
}

export interface LazyImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  loaded?: MutableRefObject<boolean>;
  dataSizes?: string
}

export interface LazyVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {}

export interface LazyIframeProps
  extends IframeHTMLAttributes<HTMLIFrameElement> {}

export interface LazyWrapperProps {
  children: ReactNode;
  options?: ILazyLoadOptions;
}
