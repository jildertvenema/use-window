Setting variables to the window with a awesome react hook 🎣


Example:
```

import React from "react";
import useWindow from "use-window";

export default function App() {
  const [count, setCount] = useWindow("count", 0);
  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{window.count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}

```
