export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(n_name) {
    if (typeof n_name === 'string') {
      this._name = n_name;
    }
    else {
      throw new Error("TypeError: Name must be a string");
    }
  }

  set length(n_length) {
    if (typeof n_length === 'number') {
      this._length = n_length;
    }
    else {
      throw new Error("TypeError: Name must be a number");
    } 
  }

  set students(n_students) {
    if (typeof n_students === 'object') {
      this._students = n_students;
    }
    else {
      throw new Error("TypeError: Name must be an object");
    }
  }
}
