const isTrue = () => ["true", 1, true].includes(value);
const isFalse = () => ["false", 0, false].includes(value);

module.exports = {
  isTrue,
  isFalse,
};
