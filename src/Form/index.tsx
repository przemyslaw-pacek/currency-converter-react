import { FormEvent, ReactNode } from "react";
import { Field } from "./styled";

interface FormProps {
  children: ReactNode;
  onSubmit: () => void;
}

const Form = ({ children, onSubmit }: FormProps) => {
  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Field>{children}</Field>
    </form>
  );
};

export default Form;
