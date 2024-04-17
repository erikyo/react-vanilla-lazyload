import type {
	ComponentType,
	HTMLAttributes,
	IframeHTMLAttributes,
	ImgHTMLAttributes,
	ObjectHTMLAttributes,
	ReactNode,
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
	 * Element type
	 * Use this if you want to use another element type like type="module" or type="application/javascript"
	 */
	type?: string;
	/**
	 * The src of the image or video or iframe or any other element that can be lazy loaded
	 */
	src?: string;
	/**
	 * The height of the element in pixels. Lazyloaded elements width and height have to be defined to avoid page content shifting
	 */
	width?: number;
	/**
	 * The Width of the element in pixels. Lazyloaded elements width and height have to be defined to avoid page content shifting
	 */
	height?: number;
	/**
	 * Single background image
	 *
	 * @example ```jsx
	 * <LazyEl bg="lazy.jpg"></div>
	 * ```
	 */
	bg?: string;
	/**
	 * Single background image HiDPI screen support
	 * Must be defined with `srcBg`
	 *
	 * @example ```jsx
	 * <LazyEl bg="lazy.jpg" bgHidpi="lazy@x2.jpg"></div>
	 * ```
	 */
	bgHidpi?: string;
	/**
	 * Multiple backgrounds:
	 *
	 * @example ```jsx
	 * <LazyEl bgMulti="url(lazy-head.jpg),
	 *     url(lazy-body.jpg),
	 *     linear-gradient(#fff, #ccc)" />
	 *     ```
	 */
	bgMulti?: string;
	/**
	 * Multiple backgrounds with HiDPI screen support
	 *
	 * @example ````jsx
	 * <LazyEl bgMulti="url(lazy-head.jpg),
	 *     url(lazy-body.jpg),
	 *     linear-gradient(#fff, #ccc)"
	 *   bgMultiHidpi=="url(lazy-head@2x.jpg),
	 *     url(lazy-body@2x.jpg),
	 *     linear-gradient(#fff, #ccc)" />
	 * ```
	 */
	bgMultiHidpi?: string;
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
 * The props for the `LazyModule` component that will lazily load the component defined in the `component` prop
 */
export interface LazyModuleProps
	extends ObjectHTMLAttributes<HTMLObjectElement> {
	component: Promise<{ default: ComponentType<unknown> }>;
	loader?: JSX.Element;
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
