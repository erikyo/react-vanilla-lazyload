import { type LazyExoticComponent, useCallback } from "react";
import { type ComponentType, Suspense, lazy, useEffect } from "react";
import type { LazyScriptProps } from "../types";
import { lazyClassName } from "../utils";

function onClassChange(element: Node, callback: (arg0: Node) => void) {
	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (
				mutation.type === "attributes" &&
				mutation.attributeName === "class"
			) {
				callback(mutation.target);
			}
		});
	});
	observer.observe(element, { attributes: true });
	return observer.disconnect;
}

/**
 * Lazy Component for React using lazy and Suspense
 *
 * @param component
 * @param className
 * @param loader
 * @param props { as: keyof JSX.IntrinsicElements | ComponentType<any>, src: string, srcBg: string, height: number, width: number, className: string }- The props for the component
 * @constructor
 */
const LazyModule = ({
	src,
	className,
	loader,
	...props
}: LazyScriptProps): LazyExoticComponent<ComponentType<unknown>> => {
	let LazyComponent: LazyExoticComponent<ComponentType<unknown>> | null = null;

	const Proxy = () => {
		return (
			<object
				type={"module"}
				className={lazyClassName(className)}
				data-src={src}
			>
				proxy
			</object>
		);
	};

	useCallback(() => {
		LazyComponent = lazy(src) as LazyExoticComponent<ComponentType<unknown>>;
	}, [src]);

	if (!LazyComponent) {
		return <Proxy onClassChange={onClassChange} />;
	}

	return (
		<Suspense fallback={loader ?? <p> {"loading"} </p>}>
			<LazyComponent {...props} />
		</Suspense>
	);
};

export default LazyModule;
