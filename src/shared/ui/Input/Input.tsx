import cls from "./Input.module.scss";
import { ChangeEvent, InputHTMLAttributes, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;
interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = "text",
    ...otherProps
  }: InputProps) => {
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <div className={classNames(cls.input, {}, [className])}>
        <input
          type={type}
          value={value}
          onChange={changeHandler}
          {...otherProps}
        ></input>
      </div>
    );
  }
);
