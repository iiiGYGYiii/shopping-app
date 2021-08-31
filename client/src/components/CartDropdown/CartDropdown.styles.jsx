import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 15rem;
  height: 21.25rem;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  border: 1px solid black;
  background-color: white;
  top: 5rem;
  right: 2.5rem;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const CustomMessage = styled.span`
  font-size: 1.125rem;
  margin: auto;
`;
