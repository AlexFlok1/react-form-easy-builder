import { FC, useEffect, useState } from "react";
import ButtonComponent from "../Buttons/Button";
import FieldComponent from "../FieldComponent/FieldComponent";
import FormComponentInterface from "./FormComponentInterface";

const Form: FC<FormComponentInterface> = (props: FormComponentInterface) => {
  const { items, handleChange, handleSubmit } = props;
  const [values, setValues] = useState({});

  const handleValuesChange = (key: string, value: string) => {
    setValues({ ...values, [key]: value });
    handleChange && handleChange({ ...values, [key]: value });
  };

  const handleSubmitForm = () => {
    handleSubmit && handleSubmit(values);
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
            actions={{ handleChange: handleValuesChange }}
            {...el}
          />
        ),
      )}
      {handleSubmit && (
        <ButtonComponent text="Submit" action={handleSubmitForm} />
      )}
    </form>
  );
};
export default Form;
