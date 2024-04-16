import type { FC } from "react";
import type { LazyImgProps } from "../types";
import { lazyClassName } from "../utils";

/**
 * The LazyImg component is used to lazy load images
 * @constructor
 *
 * @param {LazyImgProps} props - The props for the component
 * @returns {JSX.Element}
 */
const LazyImg: FC<LazyImgProps> = ({
	src,
	srcSet,
	dataSizes,
	alt = "",
	className = "lazy",
	...rest
}: LazyImgProps): JSX.Element => {
	return (
		<img
			alt={alt}
			data-src={src}
			data-srcset={srcSet}
			data-sizes={dataSizes}
			className={lazyClassName(className)}
			{...rest}
		/>
	);
};

export default LazyImg;
