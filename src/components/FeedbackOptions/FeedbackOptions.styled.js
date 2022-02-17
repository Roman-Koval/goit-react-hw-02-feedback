import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: inherit;
  padding: 10px;
  border: 2px solid blueviolet;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: dimgray;
    border-color: black;
    color: white;
    transform: scale(1.2);
  }
`;

export const List = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const Li = styled.li`
  margin-right: 20px;
`;

