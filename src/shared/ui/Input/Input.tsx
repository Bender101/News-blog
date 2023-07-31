import cls from "./Input.module.scss";
import { ChangeEvent, FC, InputHTMLAttributes } from "react";
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

export const Input: FC<InputProps> = ({
  className,
  value,
  onChange,
  type = 'text',
  ...otherProps
}) => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.input, {}, [className])}>
      <input type={type} value={value} onChange={changeHandler} {...otherProps}></input>
    </div>
  );
};
