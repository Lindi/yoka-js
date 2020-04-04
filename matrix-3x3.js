class Matrix3x3 extends Array {
  constructor(matrix) {
    if (matrix) {
      this[0] = matrix[0];
      this[1] = matrix[1];
      this[2] = matrix[2];
      this[3] = matrix[3];
      this[4] = matrix[4];
      this[5] = matrix[5];
      this[6] = matrix[6];
      this[7] = matrix[7];
      this[8] = matrix[8];
    }
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
    Matrix3x3 clone = new Matrix3x3();
    clone[0] = this[0];
    clone[1] = this[1];
    clone[2] = this[2];
    clone[3] = this[3];
    clone[4] = this[4];
    clone[5] = this[5];
    clone[6] = this[6];
    clone[7] = this[7];
    clone[8] = this[8];
    return clone;
  }
}
