Setting variables to the window with a awesome react hook 🎣


Example:
```
const useWindow = require('use-window')

const [count, setCount] = useWindow('countVariableName', 0)


const onIncrementButtonPress = () => {
  setCount(count++)
}

```
