import {
  useRef,
  type ComponentPropsWithoutRef,
  type FormEvent,
  useImperativeHandle,
  forwardRef
} from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

export type FormHandle = {
  clear: () => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps }: FormProps,
  ref
) {
  const formEl = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log("CLEARING");

        formEl.current?.reset();
      }
    };
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    onSave(data);
  }

  return (
    <form {...otherProps} onSubmit={handleSubmit} ref={formEl}>
      {children}
    </form>
  );
});

export default Form;
