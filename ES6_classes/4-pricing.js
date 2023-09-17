import Currency from './3-currency';

export class default Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof currency !== 'object') {
      throw new TypeError('Currency must be an object');
    }
    this._amount = amount;
    this._currency = currency;
  }
  
  get amount() {
    return this._amount;
  }
  
  get currency() {
    return this._currency;
  }
  
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }
  
  set currency(value) {
    if (typeof value !== 'object') {
      throw new TypeError('Currency must be a number');
    }
    this._currency = value;
  }
  
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`
  }
  
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
  
}
