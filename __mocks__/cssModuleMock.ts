export default new Proxy({}, {
  get(target, attr) {
    if (attr === 'default') {
      return target;
    }
    return attr;
  },

  getPrototypeOf() {
    return Object;
  },
});
