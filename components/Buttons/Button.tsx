import ButtonInterface from "../../interfaces/buttonInterface";
import { FC } from "react";
import { Button } from "./styles";

const ButtonComponent: FC<ButtonInterface> = (props) => {
  const { text, type, action } = props;
  return (
    <>
      <Button
        type="button"
        onClick={() => {
          action();
        }}
        buttonType={type}
      >
        {text}
      </Button>
    </>
  );
};

export default ButtonComponent;
