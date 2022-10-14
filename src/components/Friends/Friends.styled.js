import styled from 'styled-components';

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${p => p.theme.colors.black};
  padding: 8px;
  border-radius: ${p => p.theme.radii.normal};
  margin-bottom: 64px;
  background-color: ${p => p.theme.colors.white};
`;

export const InfoBlock = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.white};
  height: 64px;
  padding: 4px;
  width: 240px;
  margin-bottom: 8px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;
export const FriendStatus = styled.span`
  margin: 16px;
  width: 16px;
  height: 16px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => {
    return p.isOnline === true ? p.theme.colors.green : p.theme.colors.red;
  }};
`;
export const Name = styled.p`
  font-family: 'Droid Sans', sans-serif;
  text-decoration: none;
  text-align: left;
  color: ${p => p.theme.colors.text};
  text-shadow: 1px 1px 1px #000000;
`;
