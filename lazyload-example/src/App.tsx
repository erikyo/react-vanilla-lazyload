import './App.css'
import LazyVideo from "../../src/LazyVideo.tsx";
import LazyImg from "../../src/LazyImg.tsx";
import LazyIframe from "../../src/LazyIframe.tsx";
import LazyEl from "../../src/LazyEl.tsx";

function App() {

    return (
        <>
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-01.webp"} className="first" alt="random" srcSet="lazy_400.jpg 400w,lazy_800.jpg 800w" data-sizes="100w" title="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-02.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-03.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-04.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-05.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-06.webp"} alt="random" />
            <LazyVideo src={'https://verlok.github.io/vanilla-lazyload/demos/videos/1920x1080-01.mp4'} width={500} height={500} poster={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-01.webp"} controls={false} />
            <LazyVideo src={'https://verlok.github.io/vanilla-lazyload/demos/videos/1920x1080-0s.mp4'} width={500} height={500} poster={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-02.webp"} controls={false} />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-07.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-08.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-09.webp"} alt="random" />
            <LazyIframe src={"https://verlok.github.io/vanilla-lazyload/demos/iframes/i01.html"} width={500} height={500} />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-10.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-11.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-12.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-13.webp"} alt="random" />
            <LazyEl srcBg={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-01.webp"} title={'asd'} width={500} height={500} style={{width: 500, height: 500, backgroundImage: `url(https://verlok.github.io/vanilla-lazyload/demos/images/440x560-01.webp)`}} />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-14.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-15.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-16.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-17.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-18.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-19.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-20.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-21.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-22.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-23.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-24.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-25.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-26.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-27.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-28.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-29.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-30.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-31.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-32.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-33.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-34.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-35.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-36.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-37.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-38.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-39.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-40.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-41.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-42.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-43.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-44.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-45.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-46.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-47.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-48.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-49.webp"} alt="random" />
            <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-50.webp"} alt="random" />
        </>
    )
}

export default App
