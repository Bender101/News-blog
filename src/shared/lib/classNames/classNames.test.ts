import {classNames} from "./classNames";

describe("classNames", () => {
  test("with only first params", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with additional params", () => {
    const expected = "someClass one two";
    expect(classNames("someClass", {}, ["one", "two"])).toBe(expected);
  });

  test("with mods", () => {
    const expected = "someClass one two hovered disabled";
    expect(
      classNames("someClass", { hovered: true, disabled: true }, ["one", "two"])
    ).toBe(expected);
  });

  test("with mods false", () => {
    const expected = "someClass one two hovered";
    expect(
      classNames("someClass", { hovered: true, disabled: false }, [
        "one",
        "two",
      ])
    ).toBe(expected);
  });

  test("with mods undefined", () => {
    const expected = "someClass one two hovered";
    expect(
        classNames("someClass", { hovered: true, disabled: undefined }, [
          "one",
          "two",
        ])
    ).toBe(expected);
  });
});
