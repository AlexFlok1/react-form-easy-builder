import ButtonInterface from "../../interfaces/buttonInterface";
import { FC } from "react";
import { Button } from "./styles";

const ButtonComponent: FC<ButtonInterface> = (props) => {
  const { text, action } = props;
  return (
    <>
      <Button
        type="button"
        onClick={() => {
          action();
        }}
      >
        {text}
      </Button>
    </>
  );
};

export default ButtonComponent;
