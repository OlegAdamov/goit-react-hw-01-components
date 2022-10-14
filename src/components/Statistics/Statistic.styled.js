import styled from 'styled-components';

export const StatWrapper = styled.div`
  border: 1px solid ${p => p.theme.colors.black};
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 64px;
  background-color: gray;
`;

export const Title = styled.h2`
  margin-bottom: 8px;
  text-align: center;
  background-color: white;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid ${p => p.theme.colors.black};
  background-color: yellow;
  width: 64px;
  align-items: center;
  padding: 4px;
`;
