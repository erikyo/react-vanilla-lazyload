example project

```js
import React from 'react';
import LazyWrapper from './LazyWrapper';

const MyComponent = () => {
  return (
    <LazyWrapper>
      <LazyImg src={"https://verlok.github.io/vanilla-lazyload/demos/images/440x560-02.webp"} alt="random" />
    </LazyWrapper>
  );
};

export default MyComponent;
```
