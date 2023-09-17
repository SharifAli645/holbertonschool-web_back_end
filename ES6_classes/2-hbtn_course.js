export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } 
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number')
    }
    if (typeof students !== 'object') {
      throw new TypeError('Students must be an object')
    }
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

  set name(value) {
    if (typeof n_name === 'string') {
      this._name = n_name;
    }
    else {
      throw new Error("TypeError: Name must be a string");
    }
  }

  set length(value) {
    if (typeof n_length === 'number') {
      this._length = n_length;
    }
    else {
      throw new Error("TypeError: Name must be a number");
    } 
  }

  set students(value) {
    if (typeof n_students === 'object') {
      this._students = n_students;
    }
    else {
      throw new Error("TypeError: Name must be an object");
    }
  }
}
