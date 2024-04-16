/**
 * The WallPaper component for the demo page
 *
 * @constructor
 */
export default function Component() {
	return (
		<img
			src={"https://source.unsplash.com/random/3000x3000"}
			style={{
				width: "100%",
				height: "600px",
				objectFit: "cover",
				margin: "0 0 25px",
			}}
			height={600}
			width={2000}
			title="The image is loaded without lazy loading in order to avoid LCP issues"
			alt="This one is not lazy loaded"
		/>
	);
}
