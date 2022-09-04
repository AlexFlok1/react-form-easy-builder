import selectItem from "lib/types/selectItem";
import { FC, useEffect, useState } from "react";
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
        {items.map((el, indx) =>
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
