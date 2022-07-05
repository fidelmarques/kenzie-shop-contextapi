import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 500px;
  max-width: 300px;
  border: 1.5px solid #7c7c7c;
  border-radius: 8px;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-weight: 700;
    font-size: 14px;
  }
`;
