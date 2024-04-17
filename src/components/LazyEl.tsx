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
	bg,
	bgHidpi,
	bgMulti,
	bgMultiHidpi,
	height,
	width,
	type,
	className = "lazy",
	...rest
}: LazyElementProps<T>): ReactElement<T> => {
	const Element = as || ("div" as keyof JSX.IntrinsicElements | ElementType);
	if (bg) {
		// background image case
		let style = rest.style || {};
		// remove the background image if it is already set
		style = { ...style, backgroundImage: `url(${bg})` };

		return (
			<Element
				width={width}
				height={height}
				style={style}
				data-src={src}
				data-bg={bg}
				data-bg-hidpi={bgHidpi}
				data-bg-multi={bgMulti}
				data-bg-multi-hidpi={bgMultiHidpi}
				className={lazyClassName(className)}
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
			type={type}
			{...rest}
		/>
	);
};

export default LazyEl;
