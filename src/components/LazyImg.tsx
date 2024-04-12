import { type FC, createRef, useState } from 'react'
import { type LazyImgProps } from '../types'
import { lazyClassName } from '../utils'

/**
 * The LazyImg component is used to lazy load images
 * @constructor
 *
 * @param {LazyImgProps} { src, srcSet, alt, className, ...rest } - The props for the component
 * @returns {JSX.Element}
 */
const LazyImg: FC<LazyImgProps> = ({
  src,
  srcSet,
  alt,
  className,
  ...rest
}: LazyImgProps): JSX.Element => {
  // The loaded state is set to false initially and will be set to true once the image is loaded
  const [isLoaded, setLoaded] = useState<boolean>(false)
  // create a ref for the img element
  const imgRef = createRef<HTMLImageElement>()
  const handleLoad = () => {
    // add loaded class to img element
    if (!isLoaded && imgRef.current !== null) {
      imgRef.current.classList.add('loaded')
      const naturalHidth = imgRef.current?.naturalWidth
      const naturalHeight = imgRef.current?.naturalHeight

      if (naturalHidth || naturalHeight) {
        imgRef.current.setAttribute('width', String(naturalHidth))
        imgRef.current.setAttribute('height', String(naturalHeight))
      }
      setLoaded(true)
    }
  }
  return (
    <img
      ref={imgRef}
      data-src={src}
      alt={alt}
      className={lazyClassName(className)}
      onLoad={handleLoad}
      {...rest}
    />
  )
}

export default LazyImg
