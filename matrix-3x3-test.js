import {Matrix3x3} from './matrix-3x3.js';

describe("Matrix3x3", () => {
  it("should create a valid identity matrix", () => {
    const identity = new Matrix3x3().identity();
    identity.map((v, i) => {
      if (i % 4 == 0) {
        expect(v).toEqual(1.0);
      } else {
        expect(v).toEqual(0.0);
      }
    });
  });
  it("should scale a matrix", () => {
    const identity = new Matrix3x3().identity().scale(2);
    identity.map((v, i) => {
      if (i % 4 == 0) {
        expect(v).toEqual(2.0);
      } else {
        expect(v).toEqual(0.0);
      }
    });
  });
  it("should transpose a matrix", () => {
    const matrix = new Matrix3x3(...[1,2,3,4,5,6,7,8,9]);
    const transpose = matrix.clone().transpose();
    expect(transpose[0]).toEqual(matrix[0]);
    expect(transpose[3]).toEqual(matrix[1]);
    expect(transpose[6]).toEqual(matrix[2]);
    expect(transpose[1]).toEqual(matrix[3]);
    expect(transpose[4]).toEqual(matrix[4]);
    expect(transpose[7]).toEqual(matrix[5]);
    expect(transpose[2]).toEqual(matrix[6]);
    expect(transpose[5]).toEqual(matrix[7]);
    expect(transpose[8]).toEqual(matrix[8]);
  });
});
