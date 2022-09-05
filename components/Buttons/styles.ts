import styled from "styled-components";

interface ButtonProps {
  buttonType?: string;
}

const ButtonTypeHandler = (type: string) => {
  switch (type) {
    case "danger":
      return "red";
    default:
      return "#34a4eb";
  }
};

const Button = styled.button`
  background: ${({ buttonType = "success" }: ButtonProps) =>
    ButtonTypeHandler(buttonType)};
  padding: 8px 12px;
  color: white;
  letter-spacing: 0.1rem;
  width: 97%;
  border-radius: 15px;
  border: none;
  margin: 3px 0px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
`;

export { Button };
