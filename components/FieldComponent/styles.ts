import styled from "styled-components";

interface ComponentWrapperPropsInterface {
  theme?: string;
  padding?: string;
  type?: string;
  errorStyle?: boolean;
}

interface LabelWrapperPropsInterface {
  type?: string;
  multiline?: boolean;
  emptyField?: boolean;
}

interface LabelPropsInterface {
  color?: string;
  justify?: string;
}

interface FieldPropsInterface {
  padding?: string;
}

interface InputWraperInterface {
  hasPrefix?: boolean;
  padding?: string;
}

interface PrefixInterface {
  background?: string;
}

interface FieldInputInterface {
  resetButton?: boolean;
}

interface ErrorWarapperPropsInterface {
  show: boolean;
}

interface FiledInconInterface {
  background?: string;
  borderRadius?: number;
}

interface ErrorInterface {
  type?: string;
}

const Field = styled.input`
  display: inline-block;
  border: none;
  width: ${(props: FieldInputInterface) =>
    props.resetButton ? "93%" : "100%"};
  box-shadow: none;
  &:focus-visible {
    outline: none;
  }
`;

const MultiLine = styled.textarea`
  display: inline-block;
  border: none;
  width: 100%;
  box-shadow: none;
  &:focus-visible {
    outline: none;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  border: 0.5px solid #515151;
  border-left: ${(props: InputWraperInterface) => props.hasPrefix && "0px"};
  width: 100%;
  border-radius: ${(props: InputWraperInterface) =>
    props.hasPrefix ? "0px 5px 5px 0px" : "5px"};
  box-sizing: border-box;
  padding: ${(props: InputWraperInterface) =>
    props.padding ? props.padding : "10px 8px"};
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: ${(props: LabelWrapperPropsInterface) =>
    props.type === "floating" ? "auto" : "100%"};
  position: ${(props: LabelWrapperPropsInterface) =>
    props.type === "floating" && "absolute"};

  transition: all 0.4s ease;
  box-sizing: border-box;
`;

const Label = styled.span`
  display: inline-block;
  text-align: ${(props) =>
    props.justify === "right"
      ? "right"
      : props.justify === "center"
      ? "center"
      : "left"};
  color: ${(props: LabelPropsInterface) =>
    props.color ? props.color : "black"};
`;

const LabelWrapperFloating = styled.div`
  display: flex;
  flex-flow: column;
  background: white;
  top: ${(props: LabelWrapperPropsInterface) =>
    props.emptyField ? "30%" : "-30%"};
  left: ${(props: LabelWrapperPropsInterface) =>
    props.emptyField ? "15px" : "5px"};
  width: ${(props: LabelWrapperPropsInterface) =>
    props.type === "floating" ? "auto" : "100%"};
  position: ${(props: LabelWrapperPropsInterface) =>
    props.type === "floating" && "absolute"};

  transition: all 0.4s ease;
  box-sizing: border-box;
  ${(props: LabelWrapperPropsInterface) =>
    !props.multiline ? Field : MultiLine}:focus + & {
    top: -30%;
    left: 5px;
  }
`;

const LabelFloating = styled.span`
  display: inline-block;
  text-align: ${(props) =>
    props.justify === "left"
      ? "left"
      : props.justify === "center"
      ? "center"
      : "right"};
  color: ${(props: LabelPropsInterface) =>
    props.color ? props.color : "black"};
`;

const FieldWrapper = styled.div`
  display: flex;
  position: relative;
  flex-flow: row;
  width: 100%;
`;

const Prefix = styled.span`
  width: 30px;
  height: 47px;
  border: 0.5px solid #515151;
  bprder-right: none;
  border-radius: 5px 0px 0px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props: PrefixInterface) =>
    props.background ? props.background : "rgba(0,0,0,.2)"};
`;

const FieldIconWrapper = styled.span`
  display: flex;
  position: relative;
  height: 100%;
  width: 7%;
  align-items: center;
  justify-content: flex-end;
`;

const FiledIncon = styled.span`
  display: flex;
  position: relative;
  height: 20px;
  width: 25px;
  align-items: center;
  justify-content: center;
  padding: 3px 2px;
  background: ${(props: FiledInconInterface) =>
    props.background && `${props.background}`};
  border-radius: ${(props: FiledInconInterface) =>
    props.borderRadius && `${props.borderRadius}px`};
`;

const ComponentWrapper = styled.div`
  display: flex;
  display: relative;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props: ComponentWrapperPropsInterface) =>
    props.theme === "dark" ? "black" : "transparent"};
  padding: ${(props: FieldPropsInterface) =>
    props.padding || props.padding !== "" ? props.padding : "2px 4px"};
  ${InputWrapper} {
    border-color: ${(props: ComponentWrapperPropsInterface) =>
      props.errorStyle ? "red" : ""};
  }
  ${LabelFloating} {
    color: ${(props: ComponentWrapperPropsInterface) =>
      props.errorStyle ? "red" : ""};
  }
  ${Label} {
    color: ${(props: ComponentWrapperPropsInterface) =>
      props.errorStyle ? "red" : ""};
  }
`;

const ErrorWarapper = styled.div`
  position: relative;
  display:${(props: ErrorWarapperPropsInterface) =>
    props.show ? "flex" : "none"};
  width: 100%;
  min-height:10px
  height: auto;
`;

const Error = styled.span`
  color: ${(props: ErrorInterface) => {
    switch (props.type) {
      case "warning":
        return "gold";
      case "danger":
        return "red";
      default:
        return "red";
    }
  }};
  text-align: left;
  display: inline-block;
  width: 100%;
  padding-left: 10px;
`;

const DatePickerWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: auto;
  max-width: 400px;
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

export {
  ComponentWrapper,
  Field,
  FiledIncon,
  FieldIconWrapper,
  InputWrapper,
  Label,
  LabelWrapper,
  LabelFloating,
  LabelWrapperFloating,
  ErrorWarapper,
  Error,
  MultiLine,
  FieldWrapper,
  Prefix,
  DatePickerWrapper,
};
