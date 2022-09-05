interface ButtonInterface {
  text: string;
  type?: "success" | "info" | "warning" | "danger";
  action: Function;
}

export default ButtonInterface;
