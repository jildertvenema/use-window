const { useEffect } = require('react')

const useWindow = (key, initialValue) => {
  if (!window.hookValues) {
    window.hookValues = {}
  }

  useEffect(() => {
    window.hookValues[key] = initialValue
  }, [initialValue])

  const setValue = (newValue) => {
    window.hookValues[key] = newValue
  }
  

  const value = window.hookValues[key]

  return [value, setValue]
}

module.exports = useWindow
