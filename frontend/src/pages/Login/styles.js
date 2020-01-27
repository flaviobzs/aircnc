import styled from 'styled-components';

export const Description = styled.p`
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 30px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      color: #444;
      font-weight: bold;
      margin-bottom: 8px;
    }

    span {
      font-weight: normal;
      color: #999;
      font-size: 14px;
    }

    input {
      margin-bottom: 20px;
      border: 1px solid #ddd;
      border-radius: 2px;
      height: 45px;
      padding: 0 15px;
      font-size: 16px;
    }
  }
`;

export const Button = styled.button`
  border: 0;
  border-radius: 2px;
  width: 100%;
  height: 42px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  background: #f05a5b;
  color: #fff;
  cursor: pointer;

  :hover {
    background: #e14f50;
  }
`;
