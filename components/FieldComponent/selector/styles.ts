import styled from "styled-components";

interface SelectorWrapperInterface {
  maxHeight?: number;
}

const SelectorWrapper = styled.div`
  width: 97%;
  position: absolute;
  top: 53px;
  background: white;
  z-index: 2;
  height: 100%;
  overflow-y: auto;
  max-height: ${(props: SelectorWrapperInterface) =>
    props.maxHeight ? `${props.maxHeight}px` : "120px"};
  padding: 5px 10px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
`;

const SelectorItem = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:hover {
    transition: all 0, 4s ease;
    background: rgba(0, 0, 0, 0.1);
  }
`;

export { SelectorWrapper, SelectorItem };
