import { lazy, memo, Suspense, useEffect, useState } from "react";
import Header from "./components/Header.tsx";
import { pages } from "./constants.ts";
import { Loader } from "./components/Loader.tsx";

const MemoizedLazyDemo = memo(({ component }: { component: string }) => {
	const LazyComponent = lazy(() => import(`./demos/${component}.tsx`));
	return (
		<Suspense fallback={<Loader />}>
			<LazyComponent />
		</Suspense>
	);
});

function App() {
	const [index, setIndex] = useState(0); // Initialize index state with 0

	function handleHashChange(index?: number) {
		const current =
			window.location.hash[0] === "#"
				? window.location.hash.substring(1)
				: pages[0]; // Remove the '#' character
		return setIndex(index ?? pages.indexOf(current));
	}

	useEffect(() => {
		handleHashChange();
	}, []);

	return (
		<>
			<Header setIndex={setIndex} index={index} />

			<MemoizedLazyDemo component={pages[index]} />
		</>
	);
}

export default App;
