import styled from 'styled-components';

export const ActorsList = styled.ul`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const CastItem = styled.li`
  text-align: center;
  margin: ${p => p.theme.space[3]}px;
  width: 210px;
`;

export const CastImage = styled.img`
  display: block;
  width: 100%;
  height: 320px;
`;

export const Name = styled.p`
  margin: ${p => p.theme.space[1]}px;
`;

export const Character = styled.p`
  margin: ${p => p.theme.space[1]}px;
`;
