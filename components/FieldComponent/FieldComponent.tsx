import { FC, useEffect, useState, useRef } from "react";
import DatePickerComponent from "./datepicker";
import FieldComponentIterface from "./FieldComponentInterface";

//handlers
import formatPhone from "./handlers/formats/formatPhone";
import formatDate from "./handlers/formats/formatDate";
import ErrorHandlerComponent from "./handlers/handleError";

import { Icons } from "./icons";
import {
  ComponentWrapper,
  LabelWrapper,
  Label,
  InputWrapper,
  Field,
  LabelFloating,
  LabelWrapperFloating,
  FiledIncon,
  FieldIconWrapper,
  FieldWrapper,
  Prefix,
  DatePickerWrapper,
} from "./styles";
import SelectionComponet from "./selector";
import Rule from "../../types/rule";

const FieldComponent: FC<FieldComponentIterface> = (props) => {
  //get props
  const { name, input, resetIcon, label, prefix, actions } = props;
  //local variables
  const [value, setValue] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pattern, setPattern] = useState<RegExp>(new RegExp(".*"));
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showSelectPopUp, setShowSelectPopUp] = useState<boolean>(false);
  const componenInputRef = useRef<HTMLDivElement>(null);
  const { CloseIncon } = Icons;

  const handleChange = (value: string, key?: string) => {
    setError(null);
    setTouched((prev) => (prev ? prev : true));

    checkPattern(value);

    if (input.type === "phone")
      setValue((prev: string) =>
        prev.length <= value.length ? formatPhone(value) : value,
      );
    else if (input.type === "date") setValue(formatDate("", value));
    else {
      setValue((prev: string) => (prev !== value ? value : prev));
    }

    if (touched && Array.isArray(input.rules)) handleRules(input.rules, value);
  };

  const handleType = (type: string) => {
    switch (type) {
      case "email":
        handleEmail();
        break;
      case "phone":
        handlePhone();
        break;
      default:
        break;
    }
  };

  const checkPattern = (value: string) => {
    //validate by using pattern based on the field
    if (!pattern.test(value)) {
      setError("Invalid Format");
    }
  };

  const handleReset = () => {
    setValue((prev) => "");
  };

  const handleRules = (rules: Rule[], value: string) => {
    rules.forEach((ruleObj) => {
      if (ruleObj.rule === "required" && value.length === 0)
        setError(ruleObj.msg);

      if (
        ruleObj.rule === "length" &&
        ruleObj.value &&
        value.length + 1 > parseInt(ruleObj.value)
      )
        setError(ruleObj.msg);
    });
  };

  //method to transform phone number
  const handlePhone = () => {
    setPattern(new RegExp("^[0-9\\-\\)\\(]$"));
  };
  const handleEmail = () => {
    setPattern(new RegExp("^[a-z0-9]+@[a-z]+\\.[a-z]{2,3}$"));
  };
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickOutside = (event: any) => {
    setShowSelectPopUp(!!componenInputRef?.current?.contains(event.target));
  };

  useEffect(() => {
    if (actions?.handleReset) handleReset();
  }, [actions]);

  useEffect(() => {
    if (input.type) handleType(input.type);
    if (componenInputRef?.current)
      document.addEventListener("click", handleClickOutside);
    if (actions?.handleChange) actions.handleChange(name, value);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input.type, value]);

  return (
    <>
      <ComponentWrapper
        type={label.type}
        padding={label.type === "floating" ? "10px 4px 4px 4px" : ""}
        errorStyle={!!error}
        ref={componenInputRef}
      >
        {label && label.type !== "floating" && (
          <LabelWrapper type={label.type}>
            <Label justify={label.justify}>{label.text}</Label>
          </LabelWrapper>
        )}

        <FieldWrapper>
          {prefix && (
            <Prefix background={prefix?.background}>{prefix.icon}</Prefix>
          )}
          <InputWrapper hasPrefix={!!prefix}>
            <Field
              onChange={(e) => {
                handleChange(e.target.value);
              }}
              className="form-at-inputfield"
              name={name}
              type={showPassword || input.type === "date" ? "text" : input.type}
              value={value}
              resetButton={!!props.resetIcon}
              placeholder={label.type !== "floating" ? input.placeholder : ""}
            />
            {label.type === "floating" && (
              <LabelWrapperFloating
                type={label.type}
                emptyField={value.length === 0}
              >
                <LabelFloating justify={label.justify}>
                  {label.text}
                </LabelFloating>
              </LabelWrapperFloating>
            )}
            {(resetIcon || input.type === "password") && (
              <FieldIconWrapper>
                <FiledIncon
                  onClick={
                    input.type === "password" ? handleShowPassword : handleReset
                  }
                  background={resetIcon?.background}
                  borderRadius={resetIcon?.borderRadius}
                >
                  {input.type === "password" ? (
                    "o"
                  ) : (
                    <CloseIncon
                      width={15}
                      height={20}
                      fill={!!error ? "red" : "black"}
                    />
                  )}
                </FiledIncon>
              </FieldIconWrapper>
            )}
          </InputWrapper>
          {showSelectPopUp && input.type === "date" && (
            <DatePickerWrapper>
              <DatePickerComponent date={value} handleChange={handleChange} />
            </DatePickerWrapper>
          )}
        </FieldWrapper>
        {input.type === "select" && showSelectPopUp && (
          <SelectionComponet
            handleChange={handleChange}
            items={[1, 2, 3, 4, 5, 6]}
          ></SelectionComponet>
        )}
        {/* Error handler component */}
        {error && (
          <ErrorHandlerComponent type="danger" error={{ message: error }} />
        )}
      </ComponentWrapper>
    </>
  );
};

export default FieldComponent;
