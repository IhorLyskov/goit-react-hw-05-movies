import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: ${p => p.theme.space[5]}px;
`;

export const Input = styled.input`
  width: 300px;
  height: 36px;
  border-radius: ${p => p.theme.radius.normal};
  font-size: ${p => p.theme.fontSizes.m};
  padding-left: 8px;
  padding-right: 8px;
  border-color: ${p => p.theme.colors.blue};
  border-style: solid;
`;

export const Button = styled.button`
  cursor: pointer;
  margin-left: ${p => p.theme.space[3]}px;
  min-width: 100px;
  border-radius: ${p => p.theme.radius.normal};
  border: none;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.blue};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.blue};
    box-shadow: 2px 2px 4px rgba(1, 180, 228, 0.5),
      -2px -2px 4px rgba(1, 180, 228, 0.5);
  }
`;
