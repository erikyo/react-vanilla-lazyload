import type { ComponentType, ElementType, ReactElement } from "react";
import type { LazyElementProps } from "../types";
import { lazyClassName } from "../utils";

/**
 * Lazy Element component used to lazy load elements
 *
 * @param props { as: keyof JSX.IntrinsicElements | ComponentType<any>, src: string, srcBg: string, height: number, width: number, className: string }- The props for the component
 * @constructor
 */
const LazyEl = <T extends HTMLElement>({
	as,
	src,
	srcBg,
	height,
	width,
	className,
	...rest
}: LazyElementProps<T>): ReactElement<T> => {
	const Element = as || ("div" as keyof JSX.IntrinsicElements | ElementType);
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
