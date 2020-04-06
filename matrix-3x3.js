export class Matrix3x3 extends Array {
  constructor(...matrix) {
    super(...matrix /* array */);
  }

  identity() {
    this[0] = 1.0;
    this[1] = 0.0;
    this[2] = 0.0;
    this[3] = 0.0;
    this[4] = 1.0;
    this[5] = 0.0;
    this[6] = 0.0;
    this[7] = 0.0;
    this[8] = 1.0;
    return this;
  }

  scale(value) {
    this[0] *= value;
    this[4] *= value;
    this[8] *= value;
    return this;
  }

  transpose() {
    let tmp = this[1];
    this[1] = this[3];
    this[3] = tmp;

    tmp = this[2];
    this[2] = this[6];
    this[6] = tmp;

    tmp = this[5];
    this[5] = this[7];
    this[7] = tmp;
    return this;
  }

  clone() {
    return new Matrix3x3(...this);
  }
}
