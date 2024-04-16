import { Suspense, lazy, useEffect, useRef, useState } from "react";
import type { LazyModuleProps } from "../types";
import { lazyClassName } from "../utils";

/**
 * The enum for the visibility state of an element
 */
enum Visibility {
	hidden = "hidden",
	visible = "visible",
}

/**
 * The function to observe changes in the class attribute of an element and trigger a callback
 * In the callback we can replace the element with the lazy-loaded component
 *
 * @param targetNode - The element to observe
 * @param handler - The callback to trigger
 */
function mutationObserver(targetNode: Node, handler: () => void) {
	/**
	 * The callback that is triggered when the class attribute of the object changes
	 * @param mutationList - The list of mutations
	 */
	const callback = (mutationList: MutationRecord[]) => {
		if (mutationList) handler();
	};

	const observer = new MutationObserver(callback);

	observer.observe(targetNode, { attributeFilter: ["class"] });

	return () => observer.disconnect();
}

/**
 * The simple Loader component
 * @constructor
 */
function Loader(): JSX.Element {
	return <p>{"loading"}</p>;
}

/**
 * The LazyModule component is used to lazy load modules and components
 * @constructor
 *
 * @param component - The component to lazy load
 * @param className - The class name of the object
 * @param loader - The loader component
 * @param props - The props for the component
 */
const LazyModule = ({
	component,
	className,
	loader,
	...props
}: LazyModuleProps): JSX.Element => {
	const [visible, setVisible] = useState(Visibility.hidden);
	/** @var myRef - The reference to the object */
	const myRef = useRef<HTMLObjectElement>(null);

	useEffect(() => {
		if (myRef.current) {
			return mutationObserver(myRef.current, handleClassChange);
		}
	}, []);

	/**
	 * handleClassChange is a callback that is triggered when the class attribute of the object changes to active
	 */
	const handleClassChange = () => {
		if (myRef.current) setVisible(Visibility.visible);
	};

	/**
	 * Whenever the element is "visible" we can lazily load the component
	 */
	if (visible === Visibility.visible) {
		const LazyComponent = lazy(component);
		return (
			<Suspense fallback={loader ?? <Loader />}>
				<LazyComponent {...props} />
			</Suspense>
		);
	}

	/**
	 * Otherwise, we render the loader component
	 */
	return (
		<object type="module" ref={myRef} className={lazyClassName(className)}>
			{loader ?? <Loader />}
		</object>
	);
};

export default LazyModule;
