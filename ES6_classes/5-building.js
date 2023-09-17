<<<<<<< HEAD
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== 'Building') {
      this.evacuationWarningMessage();
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
    }
  }
}
=======
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== 'Building') {
      this.evacuationWarningMessage();
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
    }
  }
>>>>>>> cd71b2823579bf2718a6e97429dda6e290e99243
