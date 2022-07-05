import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14vw;
  height: 8vh;

  h1 {
    font-weight: 700;
    font-size: 1.3rem;
    color: #cf5c36;
    cursor: pointer;
  }
`;

export const InputBox = styled.input`
  flex: 1;
`;

export const Button = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 700;
  color: #cf5c36;
  cursor: pointer;
`;

export const SearchBox = styled.div`
  background-color: white;
  height: 50%;
  max-width: 50vw;
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 20px;
  border-radius: 8px;
  border: 1px solid #cf5c36;
  max-height: fit-content;
`;

export const CartItems = styled.div`
  background-color: green;
  width: 30px;
  height: 30px;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 100%;
  color: white;
`;
