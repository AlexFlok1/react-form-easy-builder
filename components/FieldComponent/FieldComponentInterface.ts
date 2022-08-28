import Icon from "../../types/icon";
import InputTypes from "../../types/inputTypes";
import Label from "../../types/label";
import Rule from "../../types/rule";

export default interface FieldComponentIterface {
  label: Label;
  input: {
    placeholder?: string;
    type?: InputTypes;
    rules?: Rule[];
  };
  resetIcon?: {
    background: string;
    borderRadius: number;
  };
  prefix?: {
    icon: string | Icon;
    background?: string;
  };
  form?: any;
  name?: string;
  actions?: {
    handleChange?: any;
  };
}
