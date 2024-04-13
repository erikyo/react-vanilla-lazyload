export function Loader() {
	return (
		<div
			className={
				"w-full text-center text-xl py-4 text-gray-600 font-bold flex justify-center items-center"
			}
		>
			<div
				className={
					"w-1/4 mx-auto flex flex-col items-center gap-4 my-16 p-4 border border-gray-300 rounded-lg shadow-2xl shadow-slate-800/10"
				}
			>
				<svg
					width="48"
					height="48"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
						opacity=".25"
					/>
					<path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z">
						<animateTransform
							attributeName="transform"
							type="rotate"
							dur="0.75s"
							values="0 12 12;360 12 12"
							repeatCount="indefinite"
						/>
					</path>
				</svg>
				Loading...
			</div>
		</div>
	);
}
