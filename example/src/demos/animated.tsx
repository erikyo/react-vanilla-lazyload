import { LazyImg, VanillaLazyLoad } from "react-vanilla-lazyload";
import "animate.css/animate.min.css";
import WallPaper from "../components/WallPaper.tsx";

const animations = [
	"fadeIn",
	"fadeInDown",
	"fadeInDownBig",
	"fadeInLeft",
	"fadeInLeftBig",
	"fadeInRight",
	"fadeInRightBig",
	"fadeInUp",
	"fadeInUpBig",
	"fadeInTopLeft",
	"fadeInTopRight",
	"fadeInBottomLeft",
	"fadeInBottomRight",

	"rotateIn",
	"rotateInDownLeft",
	"rotateInDownRight",
	"rotateInUpLeft",
	"rotateInUpRight",

	"zoomIn",
	"zoomInDown",
	"zoomInLeft",
	"zoomInRight",
	"zoomInUp",

	"slideInDown",
	"slideInLeft",
	"slideInRight",
	"slideInUp",
];

export default function ImagesLL() {
	return (
		<>
			<WallPaper />
			{[...Array(50).keys()].map((index) => (
				<LazyImg
					key={index}
					src={`https://verlok.github.io/vanilla-lazyload/demos/images/440x560-${String(index + 1).padStart(2, "0")}.webp`}
					className={`demo-item lazyItem-${index} hidden`}
					alt="random"
					title="random"
					onLoad={(event) => {
						(event.target as HTMLImageElement).classList.add(
							"animate__animated",
							"animate__" +
								animations[Math.floor(Math.random() * animations.length)],
						);
					}}
				/>
			))}
			<VanillaLazyLoad />
		</>
	);
}
