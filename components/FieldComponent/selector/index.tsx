import selectItem from "../../../types/selectItem";
import { FC } from "react";
import { SelectorItem, SelectorWrapper } from "./styles";

export interface SelectionComponetInterface {
  items: Array<string | number | selectItem>;
  handleChange: Function;
}

const SelectionComponet: FC<SelectionComponetInterface> = (
  props: SelectionComponetInterface,
) => {
  const { items, handleChange } = props;

  return (
    <>
      <SelectorWrapper>
        {items.map((el) =>
          el instanceof Object ? (
            <SelectorItem
              onClick={() => {
                handleChange(el.value);
              }}
              key={el.value}
            >
              {el.label}
            </SelectorItem>
          ) : (
            <SelectorItem
              key={el}
              onClick={() => {
                handleChange(el);
              }}
            >
              {el}
            </SelectorItem>
          ),
        )}
      </SelectorWrapper>
    </>
  );
};

export default SelectionComponet;
