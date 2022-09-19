import { CSSProperties } from "styled-components";

interface ButtonInterface {
  text: string;
  type?: "success" | "info" | "warning" | "danger";
  action: Function;
  className?: string[] | string;
  style?: CSSProperties;
}

export default ButtonInterface;
