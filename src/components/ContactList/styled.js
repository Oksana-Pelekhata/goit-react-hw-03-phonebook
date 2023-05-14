import styled from 'styled-components';

export const Section = styled.section
`
padding: 15px 30px;
// margin-top: 40px;
`

export const Title = styled.h2`
font-size: ${({theme}) => theme.fontSizes.large};
margin: 20px;
`;

export const Item = styled.li`
font-size: ${({ theme }) => theme.fontSizes.medium};
margin-bottom: 15px;
`

// export const ContactButton = styled.button`
//   background-color: #00aeef;
// //   color: white;
//   padding: 8px 12px;
// `
export const ContactName = styled.p`
  margin-right: 10px;
`;

export const ContactItem = styled.li`
// display: flex;
font-size: ${({ theme }) => theme.fontSizes.medium};
margin-bottom: 15px;
`
export const ContactButton = styled.button`

  background-color: ${({ theme }) => theme.colors.buttonBackgroundColor};
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  margin-left: auto;`