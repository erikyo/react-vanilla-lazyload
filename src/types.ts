import type {
	ComponentType,
	HTMLAttributes,
	IframeHTMLAttributes,
	ImgHTMLAttributes,
	ReactNode,
	ScriptHTMLAttributes,
	VideoHTMLAttributes,
} from "react";

import type { ILazyLoadOptions } from "vanilla-lazyload";

/**
 * The props for the `LazyElement` component
 */
export interface LazyElementProps<T extends HTMLElement>
	extends HTMLAttributes<T> {
	/**
	 * The component used to render the element (default: `div`)
	 */
	as?: keyof JSX.IntrinsicElements;
	/**
	 * The src of the image or video or iframe or any other element that can be lazy loaded
	 */
	src?: string;
	/**
	 * Single background image
	 *
	 * @example ```jsx
	 * <LazyEl data-bg="lazy.jpg"></div>
	 * ```
	 */
	srcBg?: string;
	/**
	 * Multiple background image
	 *
	 * @example ```jsx
	 * <LazyEl data-bg-multi="url(lazy-head.jpg), url(lazy-body.jpg), linear-gradient(#fff, #ccc)" />
	 * ```
	 */
	srcBgHDPI?: string;
	/**
	 * Multiple backgrounds:
	 *
	 * @example ```jsx
	 * <LazyEl data-bg-multi="url(lazy-head.jpg),
	 *     url(lazy-body.jpg),
	 *     linear-gradient(#fff, #ccc)" />
	 *     ```
	 */
	dataBgMulti?: string;
	/**
	 * Multiple backgrounds with HiDPI screen support
	 *
	 * @example ````jsx
	 * <LazyEl data-bg-multi="url(lazy-head.jpg),
	 *     url(lazy-body.jpg),
	 *     linear-gradient(#fff, #ccc)" />
	 *     ```
	 */
	dataBgMultiHidpi?: string;
	/**
	 * The height of the element in pixels
	 */
	width?: number;
	/**
	 * The Width of the element in pixels
	 */
	height?: number;
}

/**
 * The props for the `LazyImg` component
 * Use this to lazy load images and svg elements.
 * please remember to add the width and height to the element otherwise when it loads it can lead to layout shifting issues
 *
 * @example ```jsx
 * <LazyImg src="lazy.jpg" width={200} height={200} alt="image" />
 * ```
 */
export interface LazyImgProps extends ImgHTMLAttributes<HTMLImageElement> {
	dataSizes?: string;
}

/**
 * The props for the `LazyScript` component
 */
export interface LazyScriptProps
	extends ScriptHTMLAttributes<HTMLScriptElement> {
	src: () => Promise<{ default: ComponentType<unknown> }>;
	loader?: ReactNode;
}

/**
 * The `LazyVideo` component
 *
 * @example ```jsx
 * <LazyVideo src="lazy.mp4" type="video/mp4" alt="video" poster="lazy.jpg" />
 * ```
 */
export interface LazyVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {}

/**
 * the `LazyIframe` component
 *
 * @example ```jsx
 * <LazyIframe src="https://verlok.github.io/vanilla-lazyload/" />
 * ```
 */
export interface LazyIframeProps
	extends IframeHTMLAttributes<HTMLIFrameElement> {}

/**
 * the `LazyWrapper` component
 *
 * @example ```jsx
 * <LazyWrapper options={{ ... }}>
 *   <App />
 * </LazyWrapper>
 * ```
 */
export interface LazyWrapperProps extends VanillaLazyLoadProps {
	children: ReactNode;
}

/**
 * The props for the `VanillaLazyLoad` component
 *
 * @example ```jsx
 * <VanillaLazyLoad options={{ ... }} />
 * ```
 */
export interface VanillaLazyLoadProps {
	options?: ILazyLoadOptions;
}
