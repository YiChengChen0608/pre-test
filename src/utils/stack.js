class Statck {
  constructor(...args) {
    this.stack = [...args];
  }
  push(params) {
    this.stack = [...this.stack, params];
  }

  pop() {
    return this.stack.shift();
  }

  size() {
    return this.stack.length;
  }
}

// export default Statck;
