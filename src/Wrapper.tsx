import React, {useEffect} from 'react';
import LazyLoad from 'vanilla-lazyload';
import type {ILazyLoadOptions} from 'vanilla-lazyload';

declare global {
    interface Window {
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
const LazyWrapper = ({ children, options = {elements_selector: '.lazy'} }: { children: React.ReactNode, options?: ILazyLoadOptions }) => {

    const containerRef = React.createRef<HTMLDivElement>();

    /**
     * Lazy load images
     */
    useEffect(() => {
        // these are the mandatory options that will be passed to vanilla-lazyload
        const vllOptions = {
            /*container: containerRef.current as HTMLElement,*/
        };

        options = Object.assign({}, vllOptions, options);

        // storing the options in a global variable
        window.lazyLoadOptions = vllOptions;

        // initializing vanilla-lazyload
        if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
            new LazyLoad(options)
        }
    }, [options]);

    return <div ref={containerRef} className={'lazy-wrapper'}>{children}</div>;
};

export default LazyWrapper;
