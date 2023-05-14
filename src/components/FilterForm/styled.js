import styled from 'styled-components';

export const Section = styled.section`
  padding: 15px 30px;
  margin-top: 20px 40px;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  width: 250px;
  margin-left: 20px;
  gap: 20px;
  padding: 15px;
`;
export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  border: 1px solid black;
  display: block;
  margin-top: 10px;
  color: black;
`;

export const Button = styled.button`
  width: 100px;
  display: block;
  cursor: pointer;
  padding: 5px 10px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin: 20px;
`;