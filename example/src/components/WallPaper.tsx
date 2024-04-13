/**
 * The WallPaper component for the demo page
 *
 * @constructor
 */
export default function WallPaper() {
	return (
		<img
			src={"https://source.unsplash.com/random/2000×600"}
			style={{
				width: "100%",
				height: "600px",
				objectFit: "cover",
				margin: "0 0 25px",
			}}
			title="The image SHOULD be loaded without lazy loading in order to avoid CLS issues"
			alt="The image SHOULD be loaded without lazy loading in order to avoid CLS issues"
		/>
	);
}
