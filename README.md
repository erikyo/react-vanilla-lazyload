# Vanilla Lazy Load for React
example project

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
      <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-01.webp"} />
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
		<div>
			<LazyEl
				srcBg={
					"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-01.webp"
				}
			/>
			<VanillaLazyLoad />
		</div>
	);
};

export default App;
```
