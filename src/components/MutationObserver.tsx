/**
 * The function to observe changes in the class attribute of an element and trigger a callback
 * In the callback we can replace the element with the lazy-loaded component
 *
 * @param targetNode - The element to observe
 * @param handler - The callback to trigger
 */
export function mutationObserver(targetNode: Node, handler: () => void) {
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
