import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: 200px;
  height: 300px;
  font-size: 0.8rem;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  padding: 30px;
  text-align: justify;
  border: 2px solid #a7a7a7;

  &:hover {
    border: 2px solid #cf5c36;
    transition: 0.2s;
  }

  button:hover {
    color: green;
    transition: 0.3s;
  }

  h2 {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-height: 35px;
  }

  h3 {
    /* flex: 1; */
  }
`;

export const Line = styled.div`
  background-color: #cf5c36;
  width: 100%;
  min-height: 1px;
`;
