import { type ReactElement } from "react";
import { type LazyElementProps } from "../types";
/**
 * Lazy Element component used to lazy load elements
 *
 * @param props { as: keyof JSX.IntrinsicElements | ComponentType<any>, src: string, srcBg: string, height: number, width: number, className: string }- The props for the component
 * @constructor
 */
declare const LazyEl: <T extends HTMLElement>({ as, src, srcBg, height, width, className, ...rest }: LazyElementProps<T>) => ReactElement<T>;
export default LazyEl;
