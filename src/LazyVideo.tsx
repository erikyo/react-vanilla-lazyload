import {lazyClassName} from "./utils";
import {LazyVideoProps} from "./types";
import {FC} from "react";


const LazyVideo: FC<LazyVideoProps> = ({
                                                 src,
                                                 className,
                                                 controls,
                                                 poster,
                                                 ...rest
                                             }) => {
    return (
        <video controls
               data-src={src}
               data-poster={poster}
               className={lazyClassName(className)}
               {...rest}
        >
            <source type="video/mp4" data-src={src}/>
        </video>
    );
};

export default LazyVideo
