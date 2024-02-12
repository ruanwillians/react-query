import styled from 'styled-components';

type ButtonProps = {
  count?: number;
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ count }) => (count && count < 100 ? 'red' : '#007bff')};
  width: 100%;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  outline: none !important;

  &:hover {
    background-color: ${({ count }) => (count && count < 100 ? 'darkred' : '#0056b3')};
  }
`;

export default Button;
