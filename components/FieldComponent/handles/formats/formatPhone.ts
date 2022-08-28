const formatPhone = (value: string) => {
  let newValue: string = value;

  if (value.length > 0 && value[0] !== "(") {
    newValue = `(${value}`;
  }
  if (value.length > 3 && value[4] !== ")")
    newValue = `${value.slice(0, 4)}) - ${value.slice(4, value.length)}`;

  if (value.length > 10 && value[12] !== "-")
    newValue = `${value.slice(0, 11)} - ${value.slice(11, value.length)}`;

  console.log(value[12]);

  return newValue;
};

export default formatPhone;
