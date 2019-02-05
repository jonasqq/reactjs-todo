import styled from 'styled-components';

const TodoPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 20px auto 0px;
  width: 90%;
  height: 90vh;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  background: #ffffff;
  @media (min-width: 426px) {
    width: 50%;
  }
`;

export default TodoPage;
