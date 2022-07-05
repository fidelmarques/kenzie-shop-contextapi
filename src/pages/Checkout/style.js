import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 25px;
  border-radius: 8px;
`;

export const CartContainer = styled.div`
  padding: 20px 35px;
  height: 80vh;
  h1 {
    font-weight: 700;
  }
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
`;

export const CheckoutItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #a7a7a7;
  border-radius: 8px;
  padding: 20px 15px;
  gap: 40px;
  font-size: 14px;
  width: 55vw;
  max-width: 800px;
  min-height: 80px;

  h2 {
    font-weight: 700;
  }

  img {
    max-width: 100px;
  }

  button {
    color: red;
    font-weight: 700;
    cursor: pointer;
  }
`;
export const ItemData = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  flex: 1;
`;

export const ItemButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Subtotal = styled.div`
  padding: 20px 35px;
  h2 {
    font-weight: 700;
  }
  p {
    color: #cf5c36;
    font-weight: 700;
  }
`;
