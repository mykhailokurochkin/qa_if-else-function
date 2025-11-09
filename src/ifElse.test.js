'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should not return anything', () => {
    expect(
      ifElse(
        () => true,
        () => {},
        () => {}
      )
    ).toBeUndefined();
  });

  it("should call 'first' if condition returns 'true'", () => {
    const f = jest.fn();

    ifElse(() => true, f, () => {});

    expect(f).toBeCalled();
  });

  it("should call 'second' if condition returns 'false'", () => {
    const f = jest.fn();

    ifElse(() => false, () => {}, f);

    expect(f).toBeCalled();
  });
});
