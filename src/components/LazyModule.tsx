import { Suspense, lazy, useEffect, useRef, useState } from "react";
import type { LazyModuleProps } from "../types";
import { lazyClassName } from "../utils";
import { Loader } from "./Loader";
import { mutationObserver } from "./MutationObserver";

/**
 * The enum for the visibility state of an element
 */
enum Visibility {
	hidden = "hidden",
	visible = "visible",
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
	className = "lazy",
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
		const LazyComponent = lazy(() => component);
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
