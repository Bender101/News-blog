import cls from "./Input.module.scss";
import { ChangeEvent, InputHTMLAttributes, memo } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;
interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number | undefined;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = "text",
    readonly,
    ...otherProps
  }: InputProps) => {
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const mods: Mods = {
      [cls.readonly]: readonly,
    };

    return (
      <div className={classNames(cls.inputWrapper, mods, [className])}>
        <input
          type={type}
          value={value}
          onChange={changeHandler}
          readOnly={readonly}
          className={cls.input}
          {...otherProps}
        ></input>
      </div>
    );
  }
);
