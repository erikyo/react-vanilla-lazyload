import {
	type ComponentType,
	type Dispatch,
	type LazyExoticComponent,
	type SetStateAction,
	Suspense,
	lazy,
	useEffect,
	useRef,
	useState,
} from "react";
import type { LazyModuleProps } from "../types";
import { lazyClassName } from "../utils";

function mutationObserver(targetNode: Node, handler: () => void) {
	const config = { attributeFilter: ["class"] };

	const callback = (mutationList: MutationRecord[]) => {
		if (mutationList) handler();
	};

	const observer = new MutationObserver(callback);

	observer.observe(targetNode, config);

	return () => observer.disconnect();
}

const LazyModule = ({
	component,
	className,
	loader,
	...props
}: LazyModuleProps): JSX.Element => {
	const [LazyComponent, setLazyComponent] = useState(null) as [
		LazyExoticComponent<ComponentType<HTMLObjectElement>> | null,
		Dispatch<
			SetStateAction<LazyExoticComponent<
				ComponentType<HTMLObjectElement>
			> | null>
		>,
	];

	const myRef = useRef<HTMLObjectElement>(null);

	useEffect(() => {
		if (myRef.current) {
			return mutationObserver(myRef.current, handleClassChange);
		}
	}, [myRef]);

	const handleClassChange = () => {
		const lazyCb = lazy(component);
		setLazyComponent(
			lazyCb as LazyExoticComponent<ComponentType<HTMLObjectElement>>,
		);
	};

	if (LazyComponent) {
		return (
			<Suspense fallback={loader ?? <p>{"loading"}</p>}>
				<LazyComponent {...props} />
			</Suspense>
		);
	}
	return (
		<object type="module" ref={myRef} className={lazyClassName(className)}>
			proxy
		</object>
	);
};

export default LazyModule;
