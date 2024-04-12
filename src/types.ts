import {
  HTMLAttributes,
  IframeHTMLAttributes,
  ImgHTMLAttributes,
  MutableRefObject,
  VideoHTMLAttributes,
} from "react";

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
}

export interface LazyVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
}

export interface LazyIframeProps extends IframeHTMLAttributes<HTMLIFrameElement> {
}
