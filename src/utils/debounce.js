const debounce = function (callback, delay) {
  let timer = null;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, arguments);
    }, delay);
  };
};

// export default debounce;
