# Vanilla Lazy Load for React

Welcome to the React Vanilla Lazyload repo!
Yes, the name is a bit of a head-scratcher 😅.
But fear not, despite the contradiction, the story behind this oddly fitting name: we're using a fantastic script called [Vanilla LazyLoad](https://github.com/verlok/vanilla-lazyload) to lazily load our images in React.

So, even though React isn't exactly vanilla, this little gem of a module does its job beautifully, and we've decided to embrace the irony.
Get ready to turbocharge your React apps!... with React "Vanilla" LazyLoading.

## Installation

```bash
npm install react-vanilla-lazyload
```

## How To Use
To use, simply import the `VanillaLazyLoad` component to your app or use `LazyWrapper` to wrap your lazy components.

## Script & Wrapper
- `VanillaLazyLoad` - This is the main script that you need to import and add to your app footer to use it.
- `LazyWrapper` - This is a wrapper component that wraps all lazy components. this replaces the VanillaLazyLoad component. This is useful in case you want to use it inside a wrapper

## Lazy Components
- `LazyEl` - This component is used to lazy load any element, has a set of props that can be used to customize the lazy load (i.e. srcBg srcBgHDPI, dataBgMulti, dataBgMultiHidpi) used for backgrounds. typed as html element
- `LazyImg` - This component is used to lazy load images. typed as image
- `LazyVideo` - This component is used to lazy load videos. typed as video
- `LazyIframe` - This component is used to lazy load iframes. typed as iframe


# Getting Started

```jsx
import React from 'react';
import {
	LazyWrapper,
	LazyImg,
	LazyVideo,
	LazyIframe,
	LazyEl,
} from "react-vanilla-lazyload";

const MyComponent = () => {
  return (
    <LazyWrapper>
      // Image
      <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-01.webp"} />
      // Iframe
      <LazyIframe src={"https://verlok.github.io/vanilla-lazyload/demos/iframes/i01.html"}/>
      // Video
      <LazyVideo src={"https://verlok.github.io/vanilla-lazyload/demos/videos/1920x1080-01.mp4"} poster={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-01.webp"}/>
      // HTML Element
      <LazyEl srcBg={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-01.webp"} />
    </LazyWrapper>
  );
};

export default MyComponent;
```


```jsx
import React from "react";
import {VanillaLazyLoad, LazyEl} from "react-vanilla-lazyload";

const App = () => {
	return (
		<body>
      {/* The rest of the app */} 
			<LazyEl srcBg={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-01.webp"}/>
			<VanillaLazyLoad />
		</body>
	);
};

export default App;
```

# Examples

[Examples](https://erikyo.github.io/react-vanilla-lazyload)
