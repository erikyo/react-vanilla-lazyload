import { lazy, memo, Suspense, useEffect, useState } from "react";
import Header from "./components/Header.tsx";
import { pages } from "./constants.ts";

const MemoizedLazyDemo = memo(({ component }: { component: string }) => {
	const LazyComponent = lazy(() => import(`./demos/${component}.tsx`));
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<LazyComponent />
		</Suspense>
	);
});

function App() {
	const [index, setIndex] = useState(0); // Initialize index state with 0

	useEffect(() => {
		console.log("Loading Demo", pages[index]);
		// Update the hash when index changes
		window.location.hash = pages[index];
	}, [index, pages]);

	return (
		<>
			<Header setIndex={setIndex} index={index} />

			<MemoizedLazyDemo component={pages[index]} />
		</>
	);
}

export default App;
