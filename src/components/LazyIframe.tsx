import { type FC } from 'react'
import { type LazyIframeProps } from '../types'
import { lazyClassName } from '../utils'

/**
 * The LazyIframe component used to lazy load iframes
 * @param props {src: string, className: string} - The props passed to the component
 * @constructor
 *
 * @returns {JSX.Element} - The LazyIframe component
 */
const LazyIframe: FC<LazyIframeProps> = ({ src, className, ...rest }: LazyIframeProps): JSX.Element => {
  return (
    <iframe data-src={src} className={lazyClassName(className)} {...rest} />
  )
}

export default LazyIframe
