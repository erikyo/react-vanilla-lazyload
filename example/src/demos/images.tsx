import { LazyImg, VanillaLazyLoad } from "react-vanilla-lazyload";
import WallPaper from "../components/WallPaper.tsx";

export default function Images() {
	return (
		<>
			<WallPaper />
			{[...Array(50).keys()].map((index) => (
				<LazyImg
					key={index}
					src={`https://verlok.github.io/vanilla-lazyload/demos/images/440x560-${String(
						index + 1,
					).padStart(2, "0")}.webp`}
					className={`demo-item lazyItem-${index}`}
					alt="random"
					title="random"
					onLoad={() => {
						console.log(
							"Loaded",
							index + 1,
							["😊", "😎", "🚀", "🌟", "🎉"][Math.floor(Math.random() * 5)],
						);
					}}
				/>
			))}
			<VanillaLazyLoad />
		</>
	);
}
