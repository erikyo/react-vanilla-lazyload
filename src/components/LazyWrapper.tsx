import { createRef, useEffect } from "react";
import type { ILazyLoadOptions } from "vanilla-lazyload";
import LazyLoad from "vanilla-lazyload";
import { LazyWrapperProps } from "../types";

declare global {
  export interface Window {
    lazyLoadOptions: ILazyLoadOptions;
  }
}

/**
 * This is a wrapper around vanilla-lazyload
 * @constructor
 *
 * @param children - React node
 * @param options - Options
 */
const LazyWrapper = ({
  children,
  options = { elements_selector: '.lazy' }
}: LazyWrapperProps) => {
  const containerRef = createRef<HTMLDivElement>()

  /**
   * Lazy load images
   */
  useEffect(() => {
    // these are the mandatory options that will be passed to vanilla-lazyload
    const vllOptions = {
      /* container: containerRef.current as HTMLElement, */
    }

    options = Object.assign({}, vllOptions, options)

    // storing the options in a global variable
    window.lazyLoadOptions = vllOptions

    // initializing vanilla-lazyload
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      new LazyLoad(options)
    }
  }, [options])

  return (
    <div ref={containerRef} className={'lazy-wrapper'}>
      {children}
    </div>
  )
}

export default LazyWrapper
