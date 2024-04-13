import { pages } from "../constants.ts";

declare global {
	interface String {
		ucfirst(): string;
	}
}

String.prototype.ucfirst = function (): string {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

/**
 * The Header component for the demo page
 * @param setIndex - The function to set the index of the demo page displayed in the app
 * @param index - The index of the demo page
 * @param pages - The list of demo pages
 * @constructor
 */
export default function Header({
	setIndex,
	index,
}: {
	setIndex: (index: number) => void;
	index: number;
}) {
	return (
		<div
			className={
				"head bg-white text-gray-900 border-b border-gray-200 py-4 px-8 sticky z-10 top-0 flex justify-between items-center shadow-xl shadow-slate-800/10"
			}
		>
			<h1
				className={
					"md:text-2xl text-1xl font-bold flex flex-col md:flex-row md:gap-2 gap-0"
				}
			>
				React Vanilla LazyLoad
				<span className={"text-gray-500 md:inline block"}>
					{pages[index].ucfirst()}
				</span>
			</h1>
			<div className={"flex md:gap-6 gap-4 items-center w-1/2 justify-end"}>
				<label
					htmlFor={"select-demo-page"}
					className={"text-gray-600  md:block hidden"}
				>
					Select Demo Page:
				</label>
				<select
					value={index}
					id={"select-demo-page"}
					name="select-demo-page"
					className={
						"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					}
					onChange={(e) => {
						const newIndex = e.target.selectedIndex;
						window.location.hash = pages[newIndex];
						setIndex(newIndex);
					}}
				>
					{pages.map((page, index) => (
						<option key={index} value={index}>
							{page}
						</option>
					))}
				</select>
				<a
					className={
						"button bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg flex gap-2 items-center "
					}
					href={"https://github.com/verlok/vanilla-lazyload"}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path
							fill={"#fff"}
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
					<span className={"hidden md:block"}>Fork on GitHub</span>
				</a>
			</div>
		</div>
	);
}
