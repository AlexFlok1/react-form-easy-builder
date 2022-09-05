import { FC, useEffect, useState } from "react";
import ButtonComponent from "../Buttons/Button";
import FieldComponent from "../FieldComponent/FieldComponent";
import FormComponentInterface from "./FormComponentInterface";

const Form: FC<FormComponentInterface> = (props: FormComponentInterface) => {
  const { items, handleChange, handleSubmit, handleClear } = props;
  const [reset, setReset] = useState<boolean>(false);
  const [values, setValues] = useState({});

  const handleValuesChange = (key: string, value: string) => {
    if (reset) setReset(false);
    setValues({ ...values, [key]: value });
    handleChange && handleChange({ ...values, [key]: value });
  };

  const handleSubmitForm = () => {
    handleSubmit && handleSubmit(values);
  };

  const handleClearForm = () => {
    setReset(true);
  };

  useEffect(() => {
    if (items)
      setValues(
        Object.assign({}, ...items.map((el: any) => ({ [el?.name]: "" }))),
      );
  }, [items]);

  return (
    <form>
      {items.map((el, indx) =>
        "tab" in el ? (
          <span>Comming Soon</span>
        ) : (
          <FieldComponent
            key={`field-${indx}`}
            actions={{
              handleChange: handleValuesChange,
              handleReset: reset,
            }}
            {...el}
          />
        ),
      )}
      {handleSubmit && (
        <ButtonComponent text="Submit" action={handleSubmitForm} />
      )}
      {handleClear && (
        <ButtonComponent type="danger" text="Clear" action={handleClearForm} />
      )}
    </form>
  );
};
export default Form;
