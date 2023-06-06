type Mode = Record<string, boolean | string>;
export const classNames = (
  cls: string,
  mods: Mode = {},
  additional: string[] = []
): string => {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([_className, value]) => Boolean(value))
      .map(([className, _value]) => className),
  ].join(" ");
};
