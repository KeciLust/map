export default class ErrorRepository {
  constructor() {
    this.error = new Map();
  }

  translate(code) {
    if (!this.error.has(code)) {
      return 'Unknown error';
    }
    return this.error.get(code);
  }
}
