function parseQueryString(query, keyMap = {}, inflater = (k, v) => v) {
  const reducer = (accumulator, currentValue) => {
    const [key, value] = currentValue;
    if (Object.keys(keyMap).includes(key)) {
      accumulator[keyMap[key]] = inflater(key, value);
    }
    return accumulator;
  };
  return Object.entries(query).reduce(reducer, {});
}

module.exports = parseQueryString;
