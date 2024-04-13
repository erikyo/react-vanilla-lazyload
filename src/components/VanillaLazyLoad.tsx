import { useEffect } from "react";
import { VanillaLazyLoadProps } from "../types";
import { initLazyLoad } from "../utils";

/**
 * The vanilla lazy load component that applies lazy loading to the entire `document.body`
 *
 * @param options the options for the vanilla lazy load
 * @constructor
 */
const VanillaLazyLoad = ({ options }: VanillaLazyLoadProps): null => {
	useEffect(() => {
		initLazyLoad();
	}, [options]);

	// This component doesn't render anything, it just applies lazy loading to the entire document.body
	return null;
};

export default VanillaLazyLoad;
