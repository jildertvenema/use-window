const { useEffect, useState, useCallback } = require("react");

const useWindow = (key, initialValue) => {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    window[key] = initialValue;
  }, [initialValue, key]);

  const setValue = newValue => {
    window[key] = newValue;
    forceUpdate();
  };

  const value = window[key];

  return [value, setValue];
};

module.exports = useWindow;
