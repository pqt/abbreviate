import abbreviate from "../index";

test("it should abbreviate thousands", () => {
  expect(abbreviate(1234, 0)).toBe("1K");
  expect(abbreviate(1234, 1)).toBe("1.2K");
  expect(abbreviate(1234, 2)).toBe("1.23K");
  expect(abbreviate(1234, 3)).toBe("1.234K");
});

test("it should abbreviate millions", () => {
  expect(abbreviate(1234123, 0)).toBe("1M");
  expect(abbreviate(1234123, 1)).toBe("1.2M");
  expect(abbreviate(1234123, 2)).toBe("1.23M");
  expect(abbreviate(1234123, 3)).toBe("1.234M");
});

test("it should abbreviate billions", () => {
  expect(abbreviate(1234123412, 0)).toBe("1B");
  expect(abbreviate(1234123412, 1)).toBe("1.2B");
  expect(abbreviate(1234123412, 2)).toBe("1.23B");
  expect(abbreviate(1234123412, 3)).toBe("1.234B");
});

test("it should abbreviate trillions", () => {
  expect(abbreviate(1234123412341, 0)).toBe("1T");
  expect(abbreviate(1234123412341, 1)).toBe("1.2T");
  expect(abbreviate(1234123412341, 2)).toBe("1.23T");
  expect(abbreviate(1234123412341, 3)).toBe("1.234T");
});
