import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, SVGProps, VFC } from "react";
import cls from "./Icon.module.scss";

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  Svg: VFC<SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

/**
 * Устарел, использовать компоненты из папки redesigned
 @deprecated
 */
export const Icon = memo((props: IconProps) => {
  const { className, Svg, inverted, ...otherProps } = props;

  return (
    <Svg
      className={classNames(inverted ? cls.inverted : cls.Icon, {}, [
        className,
      ])}
      {...otherProps}
    />
  );
});
