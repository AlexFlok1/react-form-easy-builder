import FieldComponentInterface from "../FieldComponent/FieldComponentInterface";

interface NestedField {
  tab: String;
  items: FieldComponentInterface[];
}

export default interface FormComponentInterface {
  handleSubmit?: Function;
  handleClear?: Function;
  handleChange?: Function;
  items: FieldComponentInterface[] | NestedField[];
}
