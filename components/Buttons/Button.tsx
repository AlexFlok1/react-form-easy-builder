import ButtonInterface from "../../interfaces/buttonInterface";
import { FC } from "react";
import { Button } from "./styles";

const ButtonComponent: FC<ButtonInterface> = (props) => {
  const { text, type = "success", action, className = "", style = {} } = props;
  return (
    <>
      <Button
        type="button"
        style={style}
        className={Array.isArray(className) ? className.join(",") : className}
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
