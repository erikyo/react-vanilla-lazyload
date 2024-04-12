import type { ILazyLoadOptions } from "vanilla-lazyload";
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
declare const LazyWrapper: ({ children, options, }: LazyWrapperProps) => import("react/jsx-runtime").JSX.Element;
export default LazyWrapper;
