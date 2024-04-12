import { lazyClassName } from '../utils'
import { type LazyVideoProps } from '../types'
import { type FC } from 'react'

/**
 * LazyVideo component used to lazy load videos
 * @constructor
 *
 * @param props { src: string, className: string, controls?: boolean, poster?: string }- The props for the component
 * @return {JSX.Element} - The LazyVideo component
 * */

const LazyVideo: FC<LazyVideoProps> = ({
  src,
  className,
  controls,
  itemType,
  poster,
  ...rest
}: LazyVideoProps): JSX.Element => {
  return (
    <video
      controls
      data-src={src}
      data-poster={poster}
      className={lazyClassName(className)}
      {...rest}
    >
      <source type={itemType} data-src={src} />
    </video>
  )
}

export default LazyVideo
