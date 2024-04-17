import type { FC } from "react";
import type { LazyVideoProps } from "../types";
import { lazyClassName } from "../utils";

/**
 * LazyVideo component used to lazy load videos
 * @constructor
 *
 * @param props { src: string, className: string, controls?: boolean, poster?: string }- The props for the component
 * @return {JSX.Element} - The LazyVideo component
 * */

const LazyVideo: FC<LazyVideoProps> = ({
	src,
	poster,
	className = "lazy",
	itemType = "video/mp4",
	...rest
}: LazyVideoProps): JSX.Element => {
	return (
		<video
			data-src={src}
			data-poster={poster}
			className={lazyClassName(className)}
			{...rest}
		>
			<source type={itemType} data-src={src} />
		</video>
	);
};

export default LazyVideo;
