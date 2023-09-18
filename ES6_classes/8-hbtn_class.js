export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  toString() {
    return this._size;
  }
  valueOf() {
    return this._location;
  }
}
