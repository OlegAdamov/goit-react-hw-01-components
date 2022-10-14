import styled from 'styled-components';

export const StatWrapper = styled.div`
  border: 1px solid ${p => p.theme.colors.black};
  padding: 8px;
  border-radius: ${p => p.theme.radii.normal};
  margin-bottom: 64px;
  background-color: gray;
`;

export const Title = styled.h2`
  margin-bottom: 8px;
  text-align: center;
  background-color: white;
  border-radius: ${p => p.theme.radii.normal};
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.primary};
  width: 64px;
  align-items: center;
  padding: 4px;
`;
export const Label = styled.span`
  font-family: 'Droid Sans', sans-serif;
  text-decoration: none;
  color: ${p => p.theme.colors.muted};
  text-shadow: 1px 1px 1px #000000;
`;
export const Percentage = styled.span`
  font-family: 'Droid Sans', sans-serif;
  text-decoration: none;
  color: ${p => p.theme.colors.muted};
  text-shadow: 1px 1px 1px #000000;
`;
