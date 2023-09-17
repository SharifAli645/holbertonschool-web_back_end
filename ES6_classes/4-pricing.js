/*eslint-disable-next-line*/
import Currency from './3-currency';

export default class Pricing {
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

  set amount(valu) {
    if (typeof valu !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = valu;
  }

  set currency(valu) {
    if (typeof valu !== 'object') {
      throw new TypeError('Currency must be a number');
    }
    this._currency = valu;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
