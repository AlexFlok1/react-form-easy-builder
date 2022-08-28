import { FC } from "react";
import styled from "styled-components";

interface ErrorHandlerInterface {
  error: {
    message: string;
    required?: boolean;
    type?: "length" | "format" | "custom";
    customCheck?: Function;
  };
  type: "danger" | "warning" | "notice";
}

interface ErrorStyledComponentInterface {
  type: string;
}

const ErrorWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

const Error = styled.span`
  dispay: flex;
  width: 100%;
  color: ${(props: ErrorStyledComponentInterface) => {
    switch (props.type) {
      case "danger":
        return "red";
      case "warning":
        return "orange";
      case "notice":
        return "lightblue";
      default:
        return "red";
    }
  }};
`;

const ErrorHandlerComponent: FC<ErrorHandlerInterface> = (errorObj) => {
  return (
    <>
      {errorObj.error.message && (
        <ErrorWrapper>
          <Error type={errorObj.type}>{errorObj.error.message}</Error>
        </ErrorWrapper>
      )}
    </>
  );
};

export default ErrorHandlerComponent;
