interface ButtonInterface {
  text: string;
  type?: "success" | "info" | "warning";
  action: Function;
}

export default ButtonInterface;
