const fibonacci = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 0;
  if (n === 2) return 1;
  return fibonacci(n - 2) + fibonacci(n - 1);
};

// export default fibonacci;
