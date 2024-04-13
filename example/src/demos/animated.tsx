import { LazyImg, VanillaLazyLoad } from "react-vanilla-lazyload";
import "animate.css/animate.min.css";

export default function ImagesLL() {
	return (
		<>
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
			{[...Array(50).keys()].map((index) => (
				<LazyImg
					key={index}
					src={`https://verlok.github.io/vanilla-lazyload/demos/images/440x560-${String(index + 1).padStart(2, "0")}.webp`}
					className={`lazyItem-${index} hidden`}
					alt="random"
					title="random"
					onLoad={(event) => {
						(event.target as HTMLImageElement).classList.add(
							"animate__animated",
							"animate__fadeInUp",
						);
					}}
				/>
			))}
			<VanillaLazyLoad />
		</>
	);
}
