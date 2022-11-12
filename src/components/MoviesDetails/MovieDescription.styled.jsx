import styled from 'styled-components';

export const MovieImage = styled.img`
  display: block;
  width: 300px;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Wrapper = styled.div`
  padding: ${p => p.theme.space[3]}px;
`;

export const Description = styled.p`
  margin: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const SubTitle = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
